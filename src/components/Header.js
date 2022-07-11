import React, {useEffect} from "react";
import { clearCurrentUserAndToken } from "../auth";
import { NavLink } from "react-router-dom";
import LogIn from "./LogIn";


const Header = ({
  currentUser,
  setCurrentUser,
  isLoggingIn,
  setIsLoggingIn,
  setUserToken,
  setAllPosts,
  setMessagePostId,
}) => {
  return (
    <>
    <div id="navBar">
      <NavLink className={'navBar'} to={"/"}>Home</NavLink>
      {currentUser ? <NavLink className={'navBar'} to={"/Profile"} >Profile</NavLink> : <NavLink className={'navBar'} to={"/"} onClick={()=>{alert('Please log in to view')}} >Profile</NavLink> }
      {currentUser ? <NavLink className={'navBar'} to={"/"} onClick={()=>{
        clearCurrentUserAndToken()
        setCurrentUser('')
        setUserToken('')
        setMessagePostId(null)
      }}>Logout</NavLink> : <></>}
      </div>
      {currentUser ? <></> : <LogIn
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setUserToken={setUserToken}
      /> }
      
    
    </>
  );
};

export default Header;
