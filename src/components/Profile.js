import React, { useEffect, useState } from "react";
import { fetchUserData, makePost, fectchAllPosts } from "../api";

const Profile = ({ userToken, currentUser, setAllPosts }) => {
  const [userData, setUserData] = useState([]);
  const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    async function getUserData(){

    const userInfo = await fetchUserData(userToken)
        setUserPosts(userInfo.posts)
    } 
    getUserData()
}, []);

function resetForm() {
    document.getElementById("newPost").reset();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const willDeliver = event.target.willDeliver.value;
    const postObj = {
      title: event.target.title.value,
      description: event.target.description.value,
      price: event.target.price.value,
      location: location,
      willDeliver: willDeliver
    };

    console.log(postObj, "1");
    const newPost = await makePost(postObj, userToken);
    setUserPosts([...userPosts,newPost])

    resetForm();
  };

  return (
    <>
      <h1>Hello {currentUser}!</h1>
      <div>
        <form id="newPost" onSubmit={handleSubmit}>
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
              <label htmlFor="willDeliver">Will you deliver it?</label>
              <select className="postBox" name="willDeliver">
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </select>
            </div>
            <button name="Post" type="submit">
              Post
            </button>
          </div>
        </form>
      </div>

      {userPosts && userPosts.length ? (
        userPosts.map((post, idx) => {
          return (
            <div key={`${idx}-${post.author}`} className="userPosts">
              <h3>{post.title}</h3>
              <h4>Posted by: {currentUser}</h4>
              <span>
                {post.location === "[On Request]"
                  ? null
                  : `Location:  ${post.location} `}
              </span>
              <p>{post.description}</p>
              <p>Price: {post.price}</p>
              <span>
                <button>Edit</button>
                <button>Delete</button>
              </span>
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

// const allposts = await fectchAllPosts()
// setAllPosts(allposts)
// const [userPosts, userMessages] = await fetchUserData(userToken)
// console.log(userPosts, 'what we want to map over')
// setUserData(userPosts)
