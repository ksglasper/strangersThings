import React from "react";
import {deletePost, fetchUserData} from "../api"

const Remove = ({postId, userToken, setUserPosts}) =>{
    
    async function handleOnClick(event){
        event.preventDefault()
        deletePost(postId, userToken)
        const updatePosts = await fetchUserData(userToken)
        setUserPosts(updatePosts.posts)


    }
    return(
        <>
        <button onClick={handleOnClick}>Remove</button>
        </>
    )
}



export default Remove