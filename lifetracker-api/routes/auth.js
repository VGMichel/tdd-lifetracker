const express = require("express")
const User = require("../models/user")
const router = express.Router()

router.get("/me", async (req, res, next) => {
    try {
        // Take user email and password and attempt to authenticate
        const user = await User.login(req.body)
        return res.status(200).json({ user })
    } catch(err) {
        next(err)
    }
})

router.post("/login", async (req, res, next) => {
    try {
        // Take user email and password and attempt to authenticate
        const user = await User.login(req.body)
        return res.status(200).json({ user })
    } catch(err) {
        next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try {
        // Take user email, first name, last name, username and password
        // and create new user in database
        const user = await User.register(req.body)
        return res.status(201).json({ user })
    } catch(err) {
        next(err)
    }
})

module.exports = router