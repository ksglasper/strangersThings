import React from 'react'


const Header = () => {


    return (
        <form  return id="search" onSubmit={async (event) => {
            event.preventDefault()
            
          }}>
        <label for="username">Username:</label>
      <input type="text" name="username" />
      <label for="password">Password:</label>
      <input type="text" name="password" />
      <button type="submit">LogIn</button>
      <button type='submit'>Register</button>
        </form>
    )
}


export default Header