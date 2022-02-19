import { Link,  } from 'react-router-dom';
import Header from './Components/Header';
import LoginCenter from './Components/Routes/Login_center';
import Dashboard from './Components/Routes/Dashboard';
import React, { useState } from 'react';
import Firebase from './Db/Firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./Styles/App.css";


const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;

  }
});



let getWelcome = () => {
  const array = ["Bitch","Nigger","Useless Fuck","Gay-mer","Faggot","Retard"]
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

function App() {

if(auth.currentUser !== null){
  return(
    <Dashboard/>
    
  )
}
  return (

  <div className='background'>

    <Header header={getWelcome()}/>
    <p>{console.log()}</p>
      <LoginCenter/>


  </div>
);
}

export default App;
