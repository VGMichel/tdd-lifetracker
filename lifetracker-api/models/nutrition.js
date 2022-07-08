const db = require("../db")

class Nutrition {
    static async createNutrition({ user, nutrition }) {
        // Insert new nutrition instance/submission in db
    }

    static async fetchNutritionById({ nutritionId }) {
        // Fetch single nutrition submission
    }

    static async listNutritionForUser() {
        // List nutrition submissions in db in desc order
    }
}

module.exports = Nutrition