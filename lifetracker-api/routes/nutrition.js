const express = require("express")
const Nutrition = require("../models/nutrition")
const security = require("../middleware/security")
const router = express.Router()



router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        // Create nutrition post
        const { user } = res.locals
        const nutrition = await Nutrition.createNutrition({ user, nutrition: req.body })
        return res.status(201).json({ nutrition })
    } catch(err) {
        next(err)
    }
})

router.get("/", async (req, res, next) => {
    try {
        // List nutrition entries

        return res.status(201).json({ user })
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