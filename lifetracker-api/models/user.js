const { UanuthorizedError } = require("../utils/errors")

class User {
    static async login(credentials) {
        // User should submit email and password
        // If fields are missing, throw error
        //
        // look up user in db

        throw new UanuthorizedError("Invald username/email")
    }

    static async register(credentials) {
        
    }
}

module.exports = User