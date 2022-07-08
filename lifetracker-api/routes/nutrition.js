const express = require("express")
const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        // List nutrition entries

        return res.status(201).json({ user })
    } catch(err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        // Create nutrition post
        const user = await User.login(req.body)
        return res.status(200).json({ user })
    } catch(err) {
        next(err)
    }
})

router.get("/:nutritionId", async (req, res, next) => {
    try {
        // Fetch single nutrition post
        const user = await User.register(req.body)
        return res.status(201).json({ user })
    } catch(err) {
        next(err)
    }
})

module.exports = router