const express = require("express")
const Nutrition = require("../models/nutrition")
const User = require("../models/user")
const security = require("../middleware/security")
const router = express.Router()



router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
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
        const { email } = res.locals.user
        console.log(email)
        const user = await User.fetchUserByEmail(email)
        const nutritionPosts = await Nutrition.listNutritionForUser(user)
        return res.status(200).json({ nutritionPosts })
    } catch(err) {
        next(err)
    }
})

router.get("/:nutritionId", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        // Fetch single nutrition post
        const { nutritionId } = req.params
        //const { user } = res.locals
        const nutrition = await Nutrition.fetchNutritionById(nutritionId)
        return res.status(200).json({ nutrition })
    } catch(err) {
        next(err)
    }
})

module.exports = router