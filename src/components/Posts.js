import { fectchAllPosts } from "../api";
import React, { useEffect, useState, Fragment } from "react";

const Posts = ({allPosts, currentUser}) => {

  return (
    <>
      {currentUser ? <h1 id="welcomeHeadline">Welcome back, {currentUser}!</h1> :<></>}
      {allPosts && allPosts.length
        ? allPosts.map((post ,idx) => {
            return (
                
                <div key={`${idx}-${post.author._id}`} className="allposts">
                  <h3>{post.title}</h3>
                  <h4>Posted by: {post.author.username}</h4>
                  <span>{post.location === '[On Request]' ? null: `Location:  ${post.location} `}</span>
                  <p>{post.description}</p>
                  <p>Price: {post.price}</p>
                  { post.author.username === currentUser ? <button>Delete</button> : <></>} 
                </div>
              
            );
          })
        : <></>}
    </>
  );
};

export default Posts;
