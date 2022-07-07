import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  Switch,
} from "react-router-dom";
import { fectchAllPosts } from "../api";
import { Posts, Header, Register, LogIn} from "./";
import { getCurrentUser} from "../auth";



const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const [userToken, setUserToken] = useState("");
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
          currentUser={currentUser} setUserToken={setUserToken}/>
        <Routes>
        
        <Route exact path={"/"} element={<Posts allPosts={allPosts} />}></Route>

        <Route path={"/register"} element={<Register setCurrentUser={setCurrentUser} setUserToken={setUserToken}/>}></Route>
        

        
        </Routes>
      </Router>
    </>
  );
};

export default App;
