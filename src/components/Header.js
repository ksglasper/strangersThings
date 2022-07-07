import React from "react";
import { clearCurrentUserAndToken } from "../auth";
import { NavLink } from "react-router-dom";
import LogIn from "./LogIn";


const Header = ({
  currentUser,
  setCurrentUser,
  isLoggingIn,
  setIsLoggingIn,
}) => {
  return (
    <>
    <div id="navBar">
      <NavLink className={'navBar'} to={"/"}>Home</NavLink>
      <NavLink className={'navBar'} to={"/Profile"}>Profile</NavLink>
      <NavLink className={'navBar'} to={"/Posts"}>Posts</NavLink>
      {currentUser ? <NavLink className={'navBar'} to={"/"} onClick={()=>{
        clearCurrentUserAndToken()
        setCurrentUser('')
        setUserToken('')
      }}>Logout</NavLink> : <></>}
      </div>
      {currentUser ? <></> : <LogIn
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        isLoggingIn={isLoggingIn}
        setIsLoggingIn={setIsLoggingIn}
      /> }
      
    
    </>
  );
};

export default Header;
