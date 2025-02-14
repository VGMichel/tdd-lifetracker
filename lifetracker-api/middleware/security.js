const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require("../config")
const { UnauthorizedError } = require("../utils/errors")

// Create Funtion to extract JWT from request header
const jwtFrom = ({ headers }) => {
    if(headers?.authorization) {
        const [ scheme, token ] = headers.authorization.split(" ")
        if (scheme.trim() === "Bearer") {
            return token
        }
    }

    return undefined
}

// Create function to attach user to res object
const extractUserFromJwt = (req, res, next) => {
    try {
        const token = jwtFrom(req)
        if (token) {
            res.locals.user = jwt.verify(token, SECRET_KEY)
        }
        return next()
    } catch(err) {
        return next()
    }

}

// create a function to verify an authroized user exists

const requireAuthenticatedUser = (req, res, next) => {
    try {
        const { user } = res.locals
        if(!user?.email){
            throw new UnauthorizedError
        }
        return next()
    } catch(error) {
        return next(error)
    }
}

module.exports = {
    jwtFrom,
    extractUserFromJwt,
    requireAuthenticatedUser
}