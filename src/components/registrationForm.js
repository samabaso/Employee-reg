import React, {useState} from 'react';
import './style.css'
function RegistrationForm() {
    return(
      <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Department </label>
                  <select>  
                    <option value="Course">Frontend</option>  
                    <option value="BCA">Backend</option>  
                    <option value="BBA">Marketing</option>  
                    <option value="B.Tech">Finance</option>  
                    <option value="MBA">Human Resources</option>   
                    </select>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmImage">Image </label>
                  <input className="form__input" type="file" accept="image/png, image/gif, image/jpeg"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn" link="./login.js">Register</button>
          </div>
      </div>      
    )       
}
export default RegistrationForm;