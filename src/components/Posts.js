import { fectchAllPosts } from "../api";
import React, { useEffect, useState, Fragment } from "react";

const Posts = ({allPosts}) => {

//   console.log(allPosts, "after useEffect");
  return (
    <>
      {allPosts && allPosts.length
        ? allPosts.map((post ,idx) => {
            return (
                
                <div key={`${idx}-${post.author._id}`} className="post">
                  <h3>{post.title}</h3>
                  <p>Hellooooooo</p>
                  <p>{post.description}</p>
                </div>
              
            );
          })
        : <></>}
    </>
  );
};

export default Posts;
