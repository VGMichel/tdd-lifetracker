const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")

class Nutrition {
    static async createNutrition({ nutrition, user }) {
        // Insert new nutrition instance/submission in db
        const requiredFields = [ "name", "category", "calories", "image_url", "quantity" ]
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
                image_url,
                quantity
            )
            VALUES ((SELECT id FROM users WHERE email = $1), $2, $3, $4, $5, $6)
            RETURNING id,
                      user_id,
                      name,
                      quantity,
                      category,
                      calories,
                      image_url,
                      created_at;

            `, [ user.email, nutrition.name, nutrition.category, nutrition.calories, nutrition.image_url, nutrition.quantity ]
        )

        return result.rows[0]
    }

    static async fetchNutritionById(nutritionId) {
        // Fetch single nutrition submission
        const results = await db.query(
            `
                SELECT n.id,
                       n.name,
                       n.category,
                       n.calories,
                       n.image_url,
                       n.user_id,
                       u.email AS "userEmail",
                       n.created_at,
                       n.quantity
                FROM nutrition AS n
                    JOIN users AS u ON u.id = n.user_id
                WHERE n.id = $1
            `, [nutritionId]
        )

        const nutritionPost = results.rows[0]

        if(!nutritionPost) {
            throw new NotFoundError('Hmm?')
        }

        return nutritionPost
    }

    static async listNutritionForUser() {
        // List nutrition submissions in db in desc order
        const results = await db.query(
            `
                SELECT n.id,
                       n.name,
                       n.category,
                       n.calories,
                       n.image_url,
                       n.user_id,
                       u.email,
                       n.created_at,
                       n.quantity
                FROM nutrition AS n
                    JOIN users AS u ON u.id = n.user_id
                ORDER BY n.created_at DESC
            `
        )

        return results.rows
    }
}

module.exports = Nutrition