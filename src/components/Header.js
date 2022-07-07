import React from "react";
import { registerPerson, logInPerson } from "../api";
import { NavLink } from "react-router-dom";




const Header = ({ currentUser, setCurrentUser, isLoggingIn, setIsLoggingIn }) => {
  // const handleLogIn = async (event) => {
  //   console.log(event.target.username.value)
  // }
  console.log(isLoggingIn, 'before click')


  return (
    <form
      id="userInput"
      onSubmit={async (event) => {
        event.preventDefault();
        console.log(event.target.username.value);
        console.log(event.target.password.value);
        // console.log(isLoggingIn, 'after a click')
        isLoggingIn ? logInPerson(event) : registerPerson(event)


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
      {/* {currentUser ? <></> : <button name="register" >Register</button>} */}
      {currentUser ? <button onClick={handleLogOut()}>Log Out</button> : <></>}
    </form>
  );
};

export default Header;
