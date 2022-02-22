import React,{useState} from 'react'
import { getAuth, signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import '../Db/Firebase';
import SearchBar from './SearchBar';
import {motion, AnimatePresence} from 'framer-motion';
import Modal from './Modal';





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
 const [modalOpen, setModalOpen] = useState(false);

 const close = () => setModalOpen(false);
 const open = () => setModalOpen(true);


return (
<>
<nav className="navbar">

  <div className='container'>
  <SearchBar/>
  </div>
  <div className='container'>
  <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="item"
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch modal
    </motion.button>

    
  </div>
  <div className='container'>

  <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="item"
        onClick={handleLogout}
      >
        Logout
    </motion.button>
  </div>

  </nav>

  <AnimatePresence
    // Disable any initial animations on children that
    // are present when the component is first rendered
    initial={false}
    // Only render one component at a time.
    // The exiting component will finish its exit
    // animation before entering component is rendered
    exitBeforeEnter={true}
    // Fires when all exiting nodes have completed animating out
    onExitComplete={() => null}
>
    {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
</AnimatePresence>

</>
  );
    
}

export default DashboardNav