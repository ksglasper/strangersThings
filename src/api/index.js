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


export const registerPerson = async (event) => {
    fetch(`${BASE_URL + cohortName}/users/register/`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: `${event.target.username.value}`,
      password: `${event.target.password.value}`
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);

}

export const logInPerson = async (event) =>{
    fetch(`${BASE_URL + cohortName}/users/login/`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: `${event.target.username.value}`,
      password: `${event.target.password.value}`
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
  
}