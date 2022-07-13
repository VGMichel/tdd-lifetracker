import * as React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useNutritionContext } from "components/contexts/nutrition"
import { useAuthContext } from "components/contexts/auth"
import apiClient from "components/services/apiClient"
import validation from "components/validate-nutrition"
import "./NutritionNew.css"
import AccessForbidden from "components/AccessForbidden/AccessForbidden"

export default function NutritionNew() {
    return(
        <div className="nutrition-new">
            <NutritionForm />
        </div>
    )
}

export function NutritionForm() {
  const { user } = useAuthContext()
    let navigate = useNavigate()
    const { setNutritions } = useNutritionContext()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
      name:  "",
      category: "",
      calories: "",
      imageUrl: "",
      quantity: "",
    });

    const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })}

    const submitNutrition = async () => {
      setIsLoading(true)
      setErrors(validation(values)) 

      const { data, error } = await apiClient.createNutriPost(values)
      if (error) setErrors((e) => ({ ...e, values: error}))
      if (data?.nutrition) {
        setNutritions((e) => [data.nutrition, ...e])
        setIsLoading(false)

        navigate("/nutrition")
        console.log("test")
      } else {
        setIsLoading(false)
      }
    }

    return(
        <div className="nutrition-form">
          <h2>Record Nutrition</h2>
          <div className="form">
            <div className="input-field">
              <label htmlFor="name">Name</label>
              <input 
                className="form-input" 
                type="text" 
                name="name" 
                placeholder="Nutrition entry name" 
                value={values.name}
                onChange={handleChange} 
                />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="input-field">
              <label htmlFor="category">Category</label>
              <input 
                className="form-input" 
                type="text" 
                name="category" 
                placeholder="Nutrition category" 
                value={values.category}
                onChange={handleChange} 
                />
                {errors.category && <span className="error">{errors.category}</span>}
            </div>
            <div className="split-input-field">
              <div className="input-field">
                <label htmlFor="calories">Calories</label>
                <input 
                  className="form-input" 
                  type="number" 
                  name="calories" 
                  placeholder="1" 
                  value={values.calories}
                  onChange={handleChange} 
                  />
              </div>
              <div className="input-field">
                <label htmlFor="quantity">Quantity</label>
                <input 
                  className="form-input" 
                  type="number" 
                  name="quantity" 
                  placeholder="1" 
                  value={values.quantity}
                  onChange={handleChange} 
                  />
                  {errors.quantity && <span className="error">{errors.quantity}</span>}
              </div>
            </div>
            <div className="input-field">
              <label htmlFor="imageUrl">Image URL</label>
              <input 
                className="form-input" 
                type="text" 
                name="imageUrl" 
                placeholder="http://www.food-image.com/1" 
                value={values.imageUrl}
                onChange={handleChange} 
                />
                {errors.imageUrl && <span className="error">{errors.imageUrl}</span>}
            </div>
            <button className="submit-nutrition btn" disabled={isLoading} onClick={submitNutrition}>
              { isLoading ? "Loading..." : "Save" }
            </button>
          </div>
        </div>
    )
}