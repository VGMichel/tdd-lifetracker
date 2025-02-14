import axios from "axios";
import { API_BASE_URL } from "../constants"

class ApiClient {
    constructor(remoteHostUrl)  {
        this.remoteHostUrl = remoteHostUrl
        this.token = null
        this.tokenName = "lifetracker_token"
    }

    setToken(token) {
        this.token = token
        localStorage.setItem(this.tokenName, token)
    }

    async request({ endpoint, method = `GET`, data = {}}) {
        const url = `${this.remoteHostUrl}/${endpoint}`

        const headers = {
            "Content-Type": "application/json"
        }

        if (this.token) {
            headers["Authorization"] = `Bearer ${this.token}`
        }

        try {
            const res = await axios({ url, method, data, headers })
            return { data: res.data, error: null }
        } catch(error) {
            console.error({ errorResponse: error.response })
            const message = error?.response?.data?.error?.message
            return { data: null, error: message || String(error) }
        }
    }

    async createNutriPost(nutrition) {
        console.log(nutrition)
        return await this.request({ endpoint: `nutrition`, method: `POST`, data: {nutrition} })
    }

    async listNutrition(nutrition) {
        return await this.request({ endpoint: `nutrition`, method: `GET`, data: nutrition })
    }

    async fetchNutrition() {
        return await this.request({ endpoint: `nutrition`, method: `GET` })
    }

    async fetchNutritionById(nutritionId) {
        return await this.request({ endpoint: `nutrition/${nutritionId}`, method: `GET` })
    }

    async loginUser(credentials) {
        return await this.request({ endpoint: `auth/login`, method: `POST`, data: credentials })
    }

    async logoutUser() {
        this.setToken(null)
        localStorage.setItem(this.tokenName, "")
    }

    async signupUser(credentials) {
        return await this.request({ endpoint: `auth/register`, method: `POST`, data: credentials })
    }

    async fetchUserFromToken(credentials) {
        return await this.request({ endpoint: `auth/me`, method: `GET`, data: credentials })
    }

}

export default new ApiClient(API_BASE_URL)