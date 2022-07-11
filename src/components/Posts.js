import { fectchAllPosts } from "../api";
import React, { useEffect, useState, Fragment } from "react";
import Remove from "./Remove";
import Edit from "./Edit";
import Message from "./Message";

const Posts = ({
  allPosts,
  setAllPosts,
  currentUser,
  userToken,
  setUserPosts,
  editPostId,
  setEditPostID,
}) => {
  const [messagePostId, setMessagePostId] = useState(null);

  return (
    <>
      {currentUser ? (
        <h1 id="welcomeHeadline">Welcome back, {currentUser}!</h1>
      ) : (
        <></>
      )}
      {allPosts && allPosts.length ? (
        allPosts.map((post, idx) => {
          let postId = post._id;
          let postTitle = post.title;
          let postDescription = post.description;
          let postPrice = post.price;
          let postLocation = post.location;
          let postDelivery = post.willDeliver;

          return (
            <Fragment key={`${idx}-${post.author}`}>
              {post.active ? (
                <div className="userPosts">
                  <h3>{postTitle}</h3>
                  <h4>Posted by: {post.author.username}</h4>
                  <span>
                    {postLocation === "[On Request]"
                      ? null
                      : `Location: ${postLocation}`}
                  </span>
                  <p>{postDescription}</p>
                  <p>Price: {postPrice}</p>
                  <span>
                    {postDelivery ? `Will deliver?: Yes` : `Will deliver?: No`}
                  </span>
                  <>
                    {post.author.username === currentUser ? (
                      <div>
                        <>
                          {editPostId === postId ? (
                            <Edit
                              setEditPostID={setEditPostID}
                              postId={postId}
                              postTitle={postTitle}
                              postDescription={postDescription}
                              postPrice={postPrice}
                              postLocation={postLocation}
                              postDelivery={postDelivery}
                              setAllPosts={setAllPosts}
                              allPosts={allPosts}
                              userToken={userToken}
                              idx={idx}
                            />
                          ) : (
                            <span>
                              <button
                                className="editButton"
                                value={postId}
                                onClick={(event) => {
                                  setEditPostID(postId);
                                  console.log(event.target.value);
                                  console.log(idx);
                                }}
                              >
                                Edit
                              </button>
                              <Remove
                                postId={postId}
                                userToken={userToken}
                                idx={idx}
                                setAllPosts={setAllPosts}
                                allPosts={allPosts}
                              />
                            </span>
                          )}
                        </>
                      </div>
                    ) : messagePostId === postId ? (
                      <Message 
                      postId={postId}
                      userToken={userToken}
                    
                      />
                    ) : (
                      <div>
                        <button
                          className="messageButton"
                          value={postId}
                          onClick={(event) => {
                            setMessagePostId(postId);
                          }}
                        >
                          Message
                        </button>
                      </div>
                    )}
                  </>
                </div>
              ) : (
                <></>
              )}
            </Fragment>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default Posts;
