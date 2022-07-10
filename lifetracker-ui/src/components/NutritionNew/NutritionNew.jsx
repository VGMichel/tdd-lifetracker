import * as React from "react"
import "./NutritionNew.css"

export default function NutritionNew() {
    return(
        <div className="nutrition-new">
            <NutritionForm />
        </div>
    )
}

export function NutritionForm() {
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
              //value={values.email}
              //onChange={handleChange} 
              />
              {/* {errors.email && <span className="error">{errors.email}</span>} */}
          </div>
          <div className="input-field">
            <label htmlFor="category">Category</label>
            <input 
              className="form-input" 
              type="text" 
              name="category" 
              placeholder="Nutrition category" 
              //value={values.username}
              //onChange={handleChange} 
              />
              {/* {errors.username && <span className="error">{errors.username}</span>} */}
          </div>
          <div className="split-input-field">
            <div className="input-field">
              <label htmlFor="quantity">Quantity</label>
              <input 
                className="form-input" 
                type="number" 
                name="quantity" 
                placeholder="1" 
                //value={values.firstName}
                //onChange={handleChange} 
                />
                {/* {errors.firstName && <span className="error">{errors.firstName}</span>} */}
            </div>
            <div className="input-field">
              <label htmlFor="calories">Calories</label>
              <input 
                className="form-input" 
                type="number" 
                name="calories" 
                placeholder="1" 
                //value={values.lastName}
                //onChange={handleChange} 
                />
                {/* {errors.lastName && <span className="error">{errors.lastName}</span>} */}
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="imageUrl">Image URL</label>
            <input 
              className="form-input" 
              type="text" 
              name="imageUrl" 
              placeholder="http://www.food-image.com/1" 
              //value={values.password}
              //onChange={handleChange} 
              />
              {/* {errors.password && <span className="error">{errors.password}</span>} */}
          </div>
          <button className="submit-nutrition btn">Save</button>
        </div>
        </div>
    )
}