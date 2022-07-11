import React from "react";
import { makeMessage } from "../api";



const Message = ({postId, userToken}) =>{
    const handleSubmit = async(event)=> {
        event.preventDefault()
        let message = event.target.message.value
        message.length<500 ?
        makeMessage(postId, userToken, message) :
        alert('Too Many Characters')
        console.log(message)
    }
    return(
        <form onSubmit={handleSubmit}>
            
         <label htmlFor="Message">Message:</label>
            <input
              className="inputBox"
              type="text"
              required name="message"
              placeholder="Max 500 characters"
            />
            <button name="Submit" type="submit">Submit</button>
        </form>
    )
}



export default Message