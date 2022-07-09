const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")

class Nutrition {
    static async createNutrition({ nutrition, user }) {
        // Insert new nutrition instance/submission in db
        const requiredFields = [ "name", "category", "calories", "image_url" ]
        requiredFields.forEach(field => {
            if(!nutrition.hasOwnProperty(field)) {
                throw new BadRequestError(`Require field - ${field} - missing from request body.`)
            }
        })

        const result = await db.query (
            `INSERT INTO nutrition (
                user_id,
                name,
                category,
                calories,
                image_url
            )
            VALUES ((SELECT id FROM users WHERE email = $1), $2, $3, $4, $5)
            RETURNING id,
                      user_id,
                      name,
                      category,
                      calories,
                      image_url,
                      created_at;

            `, [ user.email, nutrition.name, nutrition.category, nutrition.calories, nutrition.image_url ]
        )

        return result.rows[0]
    }

    static async fetchNutritionById({ nutritionId }) {
        // Fetch single nutrition submission
    }

    static async listNutritionForUser() {
        // List nutrition submissions in db in desc order
    }
}

module.exports = Nutrition