import React, { useEffect, useState, Fragment } from "react";
import { fetchUserData } from "../api";
import Remove from "./Remove";
import Form from "./Form";
import Edit from "./Edit";

const Profile = ({
  userToken,
  currentUser,
  userPosts,
  setUserPosts,
  editPostId,
  setEditPostID,
}) => {
  const [userMessages, setUserMessages] = useState([]);

  useEffect(() => {
    async function getUserData() {
      const userInfo = await fetchUserData(userToken);
      setUserPosts(userInfo.posts);
      setUserMessages(userInfo.messages);
    }
    getUserData();
  }, []);

  return (
    <>
      <h1>Hello {currentUser}!</h1>
      <Form
        userToken={userToken}
        setUserPosts={setUserPosts}
        userPosts={userPosts}
      />
      <div id="profileContainer">
        <div id="allPosts">
          {userPosts && userPosts.length ? (
            userPosts.map((post, idx) => {
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
                      <h3 style={{ paddingBottom: -5 }}>{postTitle}</h3>
                      <h4 style={{ paddingTop: 0 }}>
                        Posted by: {currentUser}
                      </h4>
                      <span>
                        {postLocation === "[On Request]"
                          ? null
                          : `Location: ${postLocation}`}
                      </span>
                      <p>{postDescription}</p>
                      <p>Price: {postPrice}</p>
                      <span>
                        {postDelivery
                          ? `Will deliver?: Yes`
                          : `Will deliver?: No`}
                      </span>
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
                              setUserPosts={setUserPosts}
                              userPosts={userPosts}
                              userToken={userToken}
                              idx={idx}
                            />
                          ) : (
                            <span>
                              <button
                                className="editButton"
                                value={postId}
                                onClick={() => {
                                  setEditPostID(postId);
                                }}
                              >
                                Edit
                              </button>
                              <Remove
                                postId={postId}
                                userToken={userToken}
                                setUserPosts={setUserPosts}
                              />
                            </span>
                          )}
                        </>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </Fragment>
              );
            })
          ) : (
            <>Post Something!</>
          )}
        </div>
        <div id="allMessages">
          {userMessages && userMessages.length ? (
            userMessages.map((post, idx) => {
              let title = post.post.title;
              let messangerName = post.fromUser.username;
              let messageContent = post.content;

              return (
                <Fragment key={`${idx}-${post._id}`}>
                  <div className="message">
                    <h3>Message From: {messangerName}</h3>
                    <h4>{title}</h4>
                    <p>{messageContent}</p>
                  </div>
                </Fragment>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
