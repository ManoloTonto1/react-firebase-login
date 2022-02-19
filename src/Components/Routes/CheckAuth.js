import React from 'react'
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import "../../Db/Firebase";



function CheckAuth() {
    const auth = getAuth();
    const navigate = useNavigate();
    
  return (
    <div>
            {/*check if user exist, if he/seh exist send them to their dashboard */}
    {onAuthStateChanged(auth, (user) => {
       if (user) {
         navigate('/dashboard');
      }else{
        navigate('/login');
      }
       
    })}
    </div>
  )
}

export default CheckAuth