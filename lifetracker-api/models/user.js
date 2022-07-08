const db = require("../db")
const bcrypt = require("bcrypt")
const { BCRYPT_WORK_FACTOR } =require("../config")
const { BadRequestError, UanuthorizedError } = require("../utils/errors")

class User {
    static async login(credentials) {
        // User should submit email and password
        // If fields are missing, throw error
        //
        // look up user in db

        throw new UanuthorizedError("Invald username/email")
    }

    static async register(credentials) {
        const requiredFields = ["email", "username", "firstName", "lastName", "password"]
        requiredFields.forEach(field => {
            if(!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body`)
            }
        })


        if(credentials.email.indexOf("@") <= 0){
            throw new BadRequestError(`Invalid email`)
        }


        const exisitingUser = await User.fetchUserByEmail(credentials.email)
        if (exisitingUser) {
            throw new BadRequestError(`Duplicate email: ${credentials.email}`)
        }
        // Take password and hash it
        const hashedPassword = await bcrypt.hash(credentials.password, BCRYPT_WORK_FACTOR)
        // Take user email and lowercase it
        const lowercasedEmail = credentials.email.toLowerCase()

        const result = await db.query(
            `
                INSERT INTO users (
                    email,
                    username,
                    password,
                    first_name,
                    last_name
                )
                VALUES ($1, $2, $3, $4, $5)
                RETURNING id, email, username, first_name, last_name, created_at;
        
            `, [lowercasedEmail, credentials.username, hashedPassword, credentials.firstName, credentials.lastName])

        const user = result.rows[0]

        return user
    }

    static async fetchUserByEmail(email) {
        if(!email) {
            throw new BadRequestError("No email provided")
        }

        const query = `SELECT * FROM users WHERE email = $1`
        const result = await db.query(query, [email.toLowerCase()])
        const user = result.rows[0]

        return user
    }
}

module.exports = User