import React,{ useRef, useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import LoginInput from '../login_input'
import '../../Db/Firebase';
import Header from '../Header'
import { GoogleAuthProvider } from "firebase/auth";
import { user } from '../../Db/Firebase';
import {motion} from "framer-motion";
import BackgroundComp from '../BackgroundComp'

const slidein = {
  hidden: {
    x: "100vh",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 20,
      stiffness: 200,
    },
  },
  loggedin:{
    y: "100vh",
    opacity: 0,
    transition: { duration: 0.5 }
  },
  exit: {
    x: "-100vh",
    opacity: 0,
    transition: { duration: 0.5 }
  },
};

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
  <>
    <motion.div
  variants={slidein}
            initial="hidden"
            animate="visible"
            exit="exit"
  className='login-div'>
      <Header header=""/>
      <LoginInput label = "Email" type = "text" id ="email" reff = {emailRef}/>
      <LoginInput label = "Password" type = "password" id = "password" reff = {passwordRef}/>

      
      <div className="login-button-div">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className='full' onClick={handleSignup}>Signup</motion.button>
      </div>
      <div className="login-button-div">
          <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className='full' onClick={()=> {navigate("/Login")}}>Back to Login</motion.button>
      </div>
          
      
  </motion.div>
  <BackgroundComp/>
  </>

)
}




export default SignUp