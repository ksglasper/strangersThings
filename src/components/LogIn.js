import React from "react";
import { NavLink } from "react-router-dom";



const LogIn = ({ currentUser, setCurrentUser, isLoggingIn, setIsLoggingIn }) =>{
    return(
        <>
        <form
          id="userInput"
          onSubmit={async (event) => {
            event.preventDefault();
            console.log(event.target.username.value);
            console.log(event.target.password.value);
            
    
    
          }}
        >
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="password">Password:</label>
          <input type="text" name="password" placeholder="Password" />
          <button name="logIn" onClick={() => setIsLoggingIn(true)}>
            Log In
          </button>
          <NavLink to={'/register'} >Don't have a log in? Register here!</NavLink>
          
        </form>
        {currentUser ? <button onClick={handleLogOut()}>Log Out</button> : <></>}

        </>
    )
}

export default LogIn