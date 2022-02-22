import React,{ useRef, useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import LoginInput from '../login_input'
import '../../Db/Firebase';
import Header from '../Header'
import { GoogleAuthProvider } from "firebase/auth";
import { motion } from "framer-motion";






  


  let getWelcome = () => {
    const array = ["Bitch","Nigger","Useless Fuck","Gay-mer","Faggot","Retard"]
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }

const Login = () => {
    const [isLogged,setLogged] = useState(false);
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
          setLogged(true);
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
            <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
             className='half' 
             onClick={handleLogin}>Login</motion.button>

            <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ delay: 1 }}
            className='half' onClick={()=> {navigate("/Signup")}}>Signup</motion.button>
        </div>
        
    </div>
  )
}


export default Login