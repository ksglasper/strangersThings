import React from "react";
import { registerPerson} from "../api";
import { storeCurrentUser, storeUserToken} from "../auth";

import { Redirect } from "react-router-dom";


const Register = ({setCurrentUser, setUserToken}) => {
  return (
    <div id="registerForm">
      <form
        id="userRegistration"
        onSubmit={async (event) => {
          event.preventDefault();
            if(event.target.password.value === event.target.passwordConfirmation.value && event.target.password.value.length >= 6 && event.target.username.value.length >= 6){
                const userToken = await registerPerson(event)
                // console.log(userToken)
                setCurrentUser(event.target.username.value)
                setUserToken(userToken)
                storeCurrentUser(event.target.username.value)
                storeUserToken(userToken)


            }else(
                alert('Password did not match or reach the minimum length')
            )
          
            
          console.log(event.target.username.value);
          console.log(event.target.password.value.length);
        }}
      >
        <div id="inputForm">
        <div>
          <label htmlFor="username">Username:</label>
          <input className="inputBox" type="text" name="username" placeholder="Username (must be at least 6 characters)" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input className="inputBox" type="text" name="password" placeholder="Password (must be at least 6 characters)" />
        </div>
        <div>
          <label htmlFor="passwordConfirmation">Confirm Password:</label>
          <input
            className="inputBox" 
            type="text"
            name="passwordConfirmation"
            placeholder="Confirm Password"
          />
        </div>
        <button name="Register" type="submit">
          Register
        </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
