const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")


class Activity {
    static async calculateDailyCaloriesSummaryStats({ nutrition, user }) {
        // Insert new nutrition instance/submission in db
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

            `, [ user.email, nutrition.name, nutrition.category, nutrition.calories, nutrition.imageUrl, nutrition.quantity ]
        )

        return result.rows[0]
    }

}

module.exports = Activity