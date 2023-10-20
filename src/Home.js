import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  // const[name, setName] = useState("");
  // const[email,setEmail] = useState("");
  // const[password,setPassword] = useState("");
  // const[contact,setContactNo] = useState("");
  // const[city,setCity] = useState("");

  const[userData,setUserData] = useState({
    userName : '',
    userEmail : '',
    userContact : '',
    userCity : '',
    userPassword : ''
  })

  const getUserData = () =>{
    // console.log(name,email,city,password,contact);
    console.log(userData);
  }
    return(
        // <div className="main">
      <div class="container">
        <h2>Sign Up</h2>

        <form class="form-inline">
          <div class="form-group">
            <label for="usr">Name:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your name"
              onChange={(e) => setUserData({...userData,userName : e.target.value})}
            />
          </div>
          <div class="form-group">
            <label for="usr">Contact:</label>
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="Enter your Mobile No."
              onChange={(e) => setUserData({...userData,userContact : e.target.value})}
            />
          </div>
          <div class="form-group">
            <label for="usr">City:</label>
            <input
              type="text"
              class="form-control"
              id="usr"
              placeholder="Enter your city"
              onChange={(e) => setUserData({...userData,userCity : e.target.value})}
            />
            <select>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Indore</option>
                <option>Bhopal</option>
            </select>
          </div>
          <div class="form-group">
            <label class="sr-only" for="email">
              Email:
            </label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"
              onChange={(e) => setUserData({...userData,userEmail : e.target.value})}
            />
          </div>
          <div class="form-group">
            <label class="sr-only" for="pwd">
              Password:
              </label>
            <input
              type="password"
              class="form-control"
              placeholder="Enter password"
              onChange={(e) => setUserData({...userData,userPassword : e.target.value})}
            />
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" name="remember" /> Remember me
            </label>
          </div>
          <br />

          <h1>{userData.userName}</h1>
          <h1>{userData.userEmail}</h1>
          <h1>{userData.userPassword}</h1>
          <h1>{userData.userContact}</h1>
          <h1>{userData.userCity}</h1>
          <button onClick={getUserData}>
            Submit 
          </button>
        </form>
      </div>
    // </div>
    )
}

export default Home