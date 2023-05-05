import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { useDispatch } from "react-redux";
import './Login.css'
async function loginUser(credentials) {

   return fetch('https://dummyjson.com/auth/login', {
  
     method: 'POST',
  
     headers: {
  
       'Content-Type': 'application/json'
  
     },
  
     body: JSON.stringify(credentials)
  
   })
  
     .then(data => data.json())
     .then(res=>{
      // console.log(res);
    //   localStorage.setItem("loginUser" , res.id);

      return res;
     
   }
      )
      .catch(()=>{
        // console.log("hii")
      // alert(e);
      return 0;
  })  
  }
  
  export default function Login() {
  
    const [username, setUserName] = useState();
  
    const [password, setPassword] = useState();
    let Navigate = useNavigate();
    let dispatch = useDispatch();

    const HandleSubmit = async e => {
  
      e.preventDefault();
  
      const token = await loginUser({
  
        username,
  
        password
  
      });
      console.log(token)
      
    //   setToken(token);
    //   console.log(token)
    
      if(token.message==="Invalid credentials"){
      
        alert("No username is found ,username and password is invalid")
      }else{
        console.log("hello")
        dispatch({
            type:"LOGIN",
            payload:token 
         })
              Navigate('/profile')

      }

  
    }
   
  
    return(
  
      <div className="">
  
       <h3 className="">
        Enter the user from userlist
       </h3>
        <form className="container" onSubmit={HandleSubmit}>
  
          <label htmlFor="">Username</label>
  
            <input type="text" placeholder="USERNAME" onChange={e => setUserName(e.target.value)} />
  
      <label htmlFor="">Password</label>
  
            <input type="password" placeholder="PASSWORD" onChange={e => setPassword(e.target.value)} />
  
  
          <div>
  
            <button type="submit">Submit</button>
  
          </div>
  
        </form>
  
      </div>
  
    )
  
  }
  