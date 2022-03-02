import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { doc, setDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore"

import "../Db/Firebase";

const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  

  const db = getFirestore();
  // Add a new document in collection "cities"
  const sendDoc = () =>{
    setDoc(doc(db, "cities", "California"), {
      name: "Californication",
      state: "CA",
      country: "USa"
    });
  }


const Modal = ({ handleClose, text }) => {
  

    return (
      <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}  
            className="modal "
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <p>{text}</p>
            <i className="fa-solid fa-circle-xmark" onClick={handleClose}></i>
            <input type="text"/> 
            <input type="submit" value="Submit" onClick={sendDoc} />
          </motion.div>
      </Backdrop>
    );
  };

  
  export default 

Modal;