import { Link } from 'react-router-dom';
import Header from './Components/Header';
import LoginCenter from './Components/Login_center';
import React, { useState } from 'react';
import Firebase from './DB/Firebase'

import "./App.css";

let getWelcome = () => {
  const array = ["Bitch","Nigger","Useless Fuck","Gay-mer","Faggot","Retard"]
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

function App() {


  return (

  <div className='background'>

    <Header header={getWelcome()}/>
    <p>{console.log("")}</p>
      <LoginCenter/>
    

  </div>
);
}

export default App;
