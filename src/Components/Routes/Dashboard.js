import React from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";


function Dashboard() {
    const auth = getAuth();
    const user = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const user_identity = user.uid;
        }
    });
  return (
      
    <div>
        welcome {auth.currentUser.email}
        </div>
  )
}

export default Dashboard