import React from 'react'
import { registerPerson, logInPerson } from '../api'




const Header = ({currentUser, setCurrentUser}) => {

  

    return (
        <form  return id="search" onSubmit={async (event) => {
            event.preventDefault()
            console.log(event.target.username.value)
            console.log(event.target.password.value)
            console.log(event)
            
          }}>
        <label htmlFor="username">Username:</label>
      <input type="text" name="username" placeholder='Username'/>
      <label htmlFor="password">Password:</label>
      <input type="text" name="password" placeholder='Password'/>
      <button name="logIn" type="submit">Log In</button>
      {currentUser ?<></> :<button type='submit'>Register</button>}
      {currentUser ? <button onClick={handleLogOut()}>Log Out</button>: <></>}

        </form>
    )
}


export default Header