const Nutrition = require("../models/nutrition")
const { BadRequestError, ForbiddenError } = require("../utils/errors")

// ensure authenticated user is owner of post
// if they're not, throw error

const authedUserOwnsNutrition = async (req, res, next) => {
    try {
        const { user } = res.locals
        const { nutritionId } = req.params
        const nutrition = await Nutrition.fetchNutritionById(nutritionId)

        if  (nutrition.userEmail !== user.email) {
            throw new ForbiddenError(`You can't do that`)
        }
        console.log(nutritionId)

        res.locals.nutrition = nutrition
        return next()

    } catch(err) {
        console.log(err)
        return next(err)
    }
}

module.exports = {
    authedUserOwnsNutrition
}