import React,{ useRef, useState} from 'react'
import { getAuth, signInWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import LoginInput from '../login_input'
import '../../Db/Firebase';
import Header from '../Header'
import { GoogleAuthProvider } from "firebase/auth";
import { motion} from "framer-motion";
import BackgroundComp from '../Background_comp';


const slidein = {
  hidden: {
    x: "-100vh",
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
    y: "-100vh",
    opacity: 0,
    
  },
  exit: {
    x: "100vh",
    opacity: 0,
  },
};



  let getWelcome = () => {
    const array = ["Bitch","Nigger","Useless Fuck","Gay-mer","Faggot","Retard"]
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }

const Login = () => {
    const [isLogged,setLogged] = useState(false);
    const [[error,errorCode,errorMessage],setError] = useState([false,null,null]);

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
          setError([true,error.code,error.message]);
        });
    
      }

      const signInWithGoogle = () => {
          signInWithPopup(auth, provider)
            .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // The signed-in user info.
              setLogged(true);
          //const user = userCredential.user;
              navigate('/Dashboard',{replace:true});
              // ...
            }).catch((error) => {
              // Handle Errors here.
            
              // The AuthCredential type that was used.
              setError([true,error.code,error.message]);
              const credential = GoogleAuthProvider.credentialFromError(error);
              // ...
            });
      }






  return (
    <>
    
    <motion.div
            drag
            variants={slidein}
            initial="hidden"
            animate="visible"
            exit={isLogged ? "loggedin" : "exit"}
            className='login-div'>

        <Header header={getWelcome()}/>
        {error ? <div className='error'>{errorCode && errorMessage}</div> : null}
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
            
            className='half' onClick={()=> {navigate("/Signup")}}>Signup</motion.button>

            
        </div>
        <div className='login-button-div'>
        <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
            className='full'
            onClick={signInWithGoogle}>
              Sign in with Google
            </motion.button>
        </div>

    </motion.div>
    <BackgroundComp/>
        </>

  )
}


export default Login