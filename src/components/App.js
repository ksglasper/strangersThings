import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { fectchAllPosts , fetchUserPosts } from "../api";
import { Posts, Header, Register, Profile} from "./";
import { getCurrentUser, getCurrentToken} from "../auth";



const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const [userToken, setUserToken] = useState(getCurrentToken());

  useEffect(() => {
    fectchAllPosts()
      .then((posts) => {
        console.log(posts, "here in before");
        setAllPosts(posts);
      })
      .catch((error) => {
        console.log(error, "Something broke");
      });
  }, []);

  

  return (
    <>
      <Router>
      <Header setCurrentUser={setCurrentUser}
          currentUser={currentUser} setUserToken={setUserToken} setAllPosts={setAllPosts}/>
        <Routes>
        
        <Route exact path={"/"} element={<Posts allPosts={allPosts} currentUser={currentUser}/>}></Route>

        <Route path={"/register"} element={<Register setCurrentUser={setCurrentUser} setUserToken={setUserToken}/>}></Route>

        <Route path={"/profile"} element={<Profile userToken={userToken} currentUser={currentUser} setAllPosts={setAllPosts}/>}></Route>

        

        
        </Routes>
      </Router>
    </>
  );
};

export default App;
