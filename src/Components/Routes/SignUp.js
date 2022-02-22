import React,{ useRef, useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import LoginInput from '../login_input'
import '../../Db/Firebase';
import Header from '../Header'
import { GoogleAuthProvider } from "firebase/auth";
import { user } from '../../Db/Firebase';

function SignUp() {
  const auth = getAuth();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const provider = new GoogleAuthProvider();
  const [user,setUser] = useState();

  const handleSignup = (e) => {

      e.preventDefault();
  
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      
  
      console.log(email, password);
  
      if(email ==="" || password === "") return
  
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        setUser(userCredential.user);

        //const user = userCredential.user;
        navigate('/Dashboard',{replace:true});
  
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
      <Header header=""/>
      <LoginInput label = "Email" type = "text" id ="email" reff = {emailRef}/>
      <LoginInput label = "Password" type = "password" id = "password" reff = {passwordRef}/>

      
      <div className="login-button-div">
          <button className='full' onClick={handleSignup}>Signup</button>
      </div>
      <div className="login-button-div">
          <button className='full' onClick={()=> {navigate("/Login")}}>Back to Login</button>
      </div>
          
      
  </div>
)
}




export default SignUp