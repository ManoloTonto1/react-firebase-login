import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import {useNavigate} from "react-router-dom";

function DashboardNav() {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    navigate('/login');
    console.log("Sign-out successful.");
  }).catch((error) => {
    // An error happened.
    console.log(error);
  });
}


  return (
    <nav>
        <span> </span>
        <button onClick={handleLogout}>Logout</button>
    </nav>
  )
}

export default DashboardNav