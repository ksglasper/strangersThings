import React, { useEffect } from "react";
import { fetchUserData } from "../api";

const Profile = ({ userToken, currentUser, setUserData, userData }) => {
  // const userData = await fetchUserPosts(userToken)
  // console.log(userData)
  // setUserPosts(userData)
  useEffect(() => {
    fetchUserData(userToken)
      .then((data) => {
        console.log(data, "this is the user data");
        setUserData(data);
      })
      .catch((error) => {
        console.log(error, "Something broke");
      });
  }, []);

  const [userPosts, userMessages] = userData;
  //   console.log(userPosts, 'this is the posts')
  //   console.log(userMessages, 'this is the messages')
  return (
    <>
      <h1>Hello {currentUser}!</h1>
      <div>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            if(event.target.location.value && event.target.willDeliver.value){
                const postObj = {
                    title: event.target.title.value,
                    description: event.target.description.value,
                    price: event.target.price.value,
                    location: event.target.location.value,
                    willDeliver: event.target.willDeliver.value
                }
                console.log(postObj)
            }
            
            
          }}
        >
          <div id="userPostForm">
            <div>
              <label htmlFor="title">Title:</label>
              <input
                className="postBox"
                type="text"
                required
                name="title"
                placeholder="Required"
              />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <input
                className="postBox"
                type="text"
                required
                name="description"
                placeholder="Required"
              />
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <input
                className="postBox"
                type="text"
                required
                name="price"
                placeholder="Required"
              />
            </div>
            <div>
              <label htmlFor="location">Location:</label>
              <input
                className="postBox"
                type="text"
                name="location"
                placeholder="Optional"
              />
            </div>
            <div>
              <label htmlFor="willdeliver">Will you deliver it?</label>
              <input
                className="postBox"
                type="text"
                name="willdeliver"
                placeholder="Optional"
              />
            </div>
            <button name="Post" type="submit">
              Post
            </button>
          </div>
        </form>
      </div>

      {(userPosts && userPosts.length && userPosts == !undefined) ||
      userMessages == !undefined ? (
        userPosts.map((post, idx) => {
          return (
            <div key={`${idx}-${post.author._id}`} className="post">
              <h3>{post.title}</h3>
              <h4>Posted by: {post.author.username}</h4>
              <span>
                {post.location === "[On Request]"
                  ? null
                  : `Location:  ${post.location} `}
              </span>
              <p>{post.description}</p>
            </div>
          );
        })
      ) : (
        <>Post Something!</>
      )}
    </>
  );
};

export default Profile;
