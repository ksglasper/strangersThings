import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { fectchAllPosts } from "../api";
import { Posts } from "./";

const App = () => {
  const [allPosts, setAllPosts] = useState([]);
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
      <div>Hello, World!</div>
      <Posts allPosts={allPosts} />
    </>
  );
};

export default App;
