import React,{ useRef} from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import LoginInput from '../login_input'
import '../../Db/Firebase';
import Header from '../Header'
import { GoogleAuthProvider } from "firebase/auth";





  


  let getWelcome = () => {
    const array = ["Bitch","Nigger","Useless Fuck","Gay-mer","Faggot","Retard"]
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }

const Login = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const provider = new GoogleAuthProvider();

    const handleLogin = (e) => {

        e.preventDefault();
    
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
    
        console.log(email, password);
    
        if(email ==="" || password === "") return
    
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
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
        <Header header={getWelcome()}/>
        <LoginInput label = "Email" type = "text" id ="email" reff = {emailRef}/>
        <LoginInput label = "Password" type = "password" id = "password" reff = {passwordRef}/>
        
        <div className="login-button-div">
            <button className='login-button' onClick={handleLogin}>Login</button>
        </div>
        
    </div>
  )
}


export default Login