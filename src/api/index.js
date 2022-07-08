const BASE_URL = "https://strangers-things.herokuapp.com/api/";
const cohortName = "2206-FTB-ET-WEB-FT/";



export const fectchAllPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL + cohortName}posts/`);
    const result = await response.json();
    const postsData = result.data.posts
    // console.log(postsData, 'GET DATA')
    
    return postsData;
  } catch (error) {
    console.error(error, "something broke");
  }
  
};


export const fetchUserData = async (userToken) =>{
  try {
    const response = await fetch(`${BASE_URL + cohortName}users/me/`, {
      
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userToken}`
        }
    })
    const result = await response.json();
    console.log(result)

    const userData = [result.data.posts,result.data.messages]
    
    return userData;
  } catch (error) {
    console.error(error, "something broke");
  }
}


export const registerPerson = async (event) => {
try {
  const response = await fetch(`${BASE_URL + cohortName}/users/register/`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: `${event.target.username.value}`,
      password: `${event.target.password.value}`
    }
  })})
  
  const result = await response.json();
  console.log(result);
   return result

} catch (error) {
  console.error(error)
}
}


export const logInPerson = async (event) =>{
  try {
    const response = await fetch(`${BASE_URL + cohortName}/users/login/`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: `${event.target.username.value}`,
        password: `${event.target.password.value}`
      }
    })})
    
    const result = await response.json();
    console.log(result);
     return result
  
  } catch (error) {
    console.error(error)
  }
  
}

export const makePost = async (post, userToken) =>{
  try {
    const response = await fetch(`${BASE_URL + cohortName}/posts/`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    },
    body: JSON.stringify({
      post
    })})
    
    const result = await response.json();
    console.log(result);
     return result
  
  } catch (error) {
    console.error(error)
  }
  
}

