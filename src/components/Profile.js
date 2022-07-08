import React, { useEffect } from "react";
import { fetchUserData, makePost } from "../api";

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
    console.log(userPosts, 'this is the posts')
    console.log(userMessages, 'this is the messages')
  return (
    <>
      <h1>Hello {currentUser}!</h1>
      <div>
        <form
          onSubmit={ async (event) => {
            event.preventDefault();

            console.log(event.target.willDeliver.value, 'targeting willdeliver')
            console.log(event.target.location, 'targeting location')
            console.log(event.target.description, 'targeting description')
            console.log(event)

            if(event.target.location.value){
                if(event.target.willDeliver.value === 'optional'){
                    const postObj = {
                        title: event.target.title.value,
                        description: event.target.description.value,
                        price: event.target.price.value,
                        location: event.target.location.value
                    
                } 
                console.log(postObj, '1')
                const newPost = await makePost(postObj, userToken)
            }else{
                    const postObj = {
                        title: event.target.title.value,
                        description: event.target.description.value,
                        price: event.target.price.value,
                        location: event.target.location.value,
                        willDeliver: Boolean(event.target.willDeliver.value)
                    }
                console.log(postObj, '2')
                const newPost = await makePost(postObj, userToken)

                    
                }
            }else if(event.target.willDeliver.value === 'optional'){
                const postObj = {
                    title: event.target.title.value,
                    description: event.target.description.value,
                    price: event.target.price.value
                }
                console.log(postObj, '3')
                const newPost = await makePost(postObj, userToken)


            }else{
                const postObj = {
                    title: event.target.title.value,
                    description: event.target.description.value,
                    price: event.target.price.value,
                    willDeliver: Boolean(event.target.willDeliver.value)
                }
                console.log(postObj, '4')
                const newPost = await makePost(postObj, userToken)


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
              <label htmlFor="willDeliver">Will you deliver it?</label>
              <select className="postBox" name="willDeliver">
                <option value="optional"></option>
                <option value={true}>Yes</option>
                <option value=''>No</option>
                </select>
            </div>
            <button name="Post" type="submit">
              Post
            </button>
          </div>
        </form>
      </div>

      {(userPosts && userPosts.length) ?  (
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
              <span><button>Edit</button><button>Delete</button></span>

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
