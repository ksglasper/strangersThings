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
import { Posts, Header, Register } from "./";

const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
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
        <Header
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
          isLoggingIn={isLoggingIn}
          setIsLoggingIn={setIsLoggingIn}
        />
        <Routes>


        <Route path={"/register"} element={<Register />}>
          
        </Route>
        </Routes>

        <div>Hello, World!</div>
        <Posts allPosts={allPosts} />
        
      </Router>
    </>
  );
};

export default App;
