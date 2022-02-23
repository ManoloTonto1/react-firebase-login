import React,{useState} from 'react'
import { getAuth, signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import '../Db/Firebase';
import SearchBar from './SearchBar';
import {motion, AnimatePresence} from 'framer-motion';
import Modal from './Modal';




const slidein = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 25,
      stiffness: 180,
    },
    
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition:{duration: 1},
  },
};

const slidein_search = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 22,
      stiffness: 180,
      delay: 0.2,
    },
    
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

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
<motion.nav 
variants={slidein}
initial="hidden"
animate="visible"
exit="exit"
className="navbar">

  <motion.div
  variants={slidein_search}
  initial="hidden"
  animate="visible"
  exit="exit" 
  
  className='container'>
  <SearchBar/>
  </motion.div>
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

  </motion.nav>

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