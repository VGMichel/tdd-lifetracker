const Nutrition = require("../models/nutrition")
const { BadRequestError, ForbiddenError } = require("../utils/errors")

// ensure authenticated user is owner of post
// if they're not, throw error

const authedUserOwnsNutrition = async (req, res, next) => {
    try {
        const { user } = res.locals
        const { nutritionId } = req.params
        const nutritionPost = await Nutrition.fetchNutritionById(nutritionId)

        if  (nutritionPost.userEmail !== user.email) {
            throw new ForbiddenError(`You can't do that`)
        }

        res.locals.nutritionPost = nutritionPost

        return next()

    } catch(err) {
        return next(err)
    }
}

module.exports = {
    authedUserOwnsNutrition
}