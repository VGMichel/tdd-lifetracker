const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { PORT } = require("./config")
const security = require("./middleware/security")
const authRoutes = require("./routes/auth")
const nutritionRoutes = require("./routes/nutrition")

const { BadRequestError, NotFoundError } = require('./utils/errors')

const app = express()

//enables cross-origin resource sharing
app.use(cors())
// parse incoming request bodies with JSON
app.use(express.json())
// log request info
app.use(morgan('tiny'))
// For every request, check if token exists in authorization header
// If it does, attach the decoded user to res.locals
app.use(security.extractUserFromJwt)

app.use('/auth', authRoutes)
app.use('/nutrition', nutritionRoutes)

// Not Found middleware
app.use((req, res, next) => {
    return next(new NotFoundError)
})
// Generic error handling
app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message

    return res.status(status).json({
        error: {message, status}
    })
})


app.listen(PORT, () => {
    console.log(`🚀 Server running http://localhost:${PORT}`)
})