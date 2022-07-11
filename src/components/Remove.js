import React from "react";
import {deletePost, fetchUserData, fectchAllPosts} from "../api"

const Remove = ({postId, userToken, userPosts, setUserPosts, allPosts, setAllPosts, idx}) =>{
    async function handleOnClick2(event){
        console.log(typeof setAllPosts, 'this is all posts')
        console.log(typeof setUserPosts, 'this is user posts')

    }
    
    async function handleOnClick(event){
        event.preventDefault()
        console.log(userPosts, 'before delete')
        await deletePost(postId, userToken)

        if(allPosts){
            const updatedPosts = await fectchAllPosts()
          
            setAllPosts(updatedPosts);
            
          }else{
            const updatedPosts = await fetchUserData(userToken)
          
            setUserPosts(updatedPosts.posts);
          }

    }
    return(
        <>
        <button onClick={handleOnClick}>Remove</button>
        </>
    )
}



export default Remove