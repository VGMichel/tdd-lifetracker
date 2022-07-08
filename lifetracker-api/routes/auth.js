const express = require("express")
const router = express.Router()

router.post("/login", async (req, res, next) => {
    try {
        // Take user email and password and attempt to authenticate
    } catch(err) {
        next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try {
        // Take user email, first name, last name, username and password
        // and create new user in database
    } catch(err) {
        next(err)
    }
})

module.exports = router