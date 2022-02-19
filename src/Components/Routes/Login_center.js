import React,{useState, useRef} from 'react'
import LoginInput from '../login_input'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Firebase from '../../Db/Firebase'

const auth = getAuth();


const Login_center = () => {
  const emailRef = useRef();
  const passwordRef = useRef();


  function handleLogin (e) {
    
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, password);

    if(email ==="" || password === "") return

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });

  }


  return (
    <div className='login-div'>
        <LoginInput label = "Email" type = "text" id ="email" reff = {emailRef}/>
        <LoginInput label = "Password" type = "password" id = "password" reff = {passwordRef}/>
        
        <div className="login-button-div">
            <button className='login-button' onClick={handleLogin}>Login</button>
        </div>
        
    </div>
  )
}


export default Login_center