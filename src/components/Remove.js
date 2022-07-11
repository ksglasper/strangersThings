import React from "react";
import {deletePost, fetchUserData} from "../api"

const Remove = ({postId, userToken, userPosts, setUserPosts, allPosts, setAllPosts, idx}) =>{
    async function handleOnClick2(event){
        console.log(typeof setAllPosts, 'this is all posts')
        console.log(typeof setUserPosts, 'this is user posts')

    }
    
    async function handleOnClick(event){
        event.preventDefault()
        console.log(userPosts, 'before delete')
        let emptyObj = await deletePost(postId, userToken)

        if(allPosts){
            console.log(allPosts, 'before splice')

            await allPosts.splice(idx, 1, emptyObj)
            allPosts.splice(idx, 1)

            console.log(allPosts, 'after splice')
          
            await setAllPosts(allPosts);
            
          }else{

            // console.log(userPosts[idx], ' individual post before splice')
            console.log(userPosts, 'after delete before splice')

            // userPosts[idx].active = false
            await userPosts.splice(idx, 1)

            console.log(userPosts, 'after splice')
          
             await setUserPosts(userPosts);
          }

    }
    return(
        <>
        <button onClick={handleOnClick}>Remove</button>
        </>
    )
}



export default Remove