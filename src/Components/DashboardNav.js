import React from 'react'
import { getAuth, signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import '../Db/Firebase';
import SearchBar from './SearchBar';





function DashboardNav() {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    navigate('/login');

  }).catch((error) => {
    // An error happened.
    console.log(error);
  });
}

 const addpics = () => {
 }



return (
<nav className="navbar">

  <div className='container'>
  <SearchBar/>
  </div>
  <div className='container'>
    
  </div>
  <div className='container'>
  <button className='item' onClick={handleLogout}>Logout</button>
  </div>

  </nav>
  );
    
}

export default DashboardNav