const express = require("express")
const Nutrition = require("../models/nutrition")
const security = require("../middleware/security")
const permissions = require("../middleware/permissions")
const router = express.Router()



router.post("/", async (req, res, next) => {
    try {
        // Create nutrition post
        const { user } = res.locals
        console.log(req.body)
        const nutrition = await Nutrition.createNutrition({ user, nutrition: req.body.nutrition })
        return res.status(201).json({ nutrition })
    } catch(err) {
        next(err)
    }
})

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        // List nutrition entries
        const nutritionPosts = await Nutrition.listNutritionForUser()
        return res.status(200).json({ nutritionPosts })
    } catch(err) {
        next(err)
    }
})

router.get("/:nutritionId", security.requireAuthenticatedUser, permissions.authedUserOwnsNutrition, async (req, res, next) => {
    try {
        // Fetch single nutrition post
        const { nutritionId } = req.params
        const { user } = res.locals
        const nutrition = await Nutrition.fetchNutritionById(nutritionId)
        return res.status(200).json({ nutrition })
    } catch(err) {
        next(err)
    }
})

module.exports = router