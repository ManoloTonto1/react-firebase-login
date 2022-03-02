import React,{useState} from 'react'
import DashboardNav from '../DashboardNav';
import '../../Db/Firebase';
import { doc, onSnapshot, getFirestore } from "firebase/firestore";

const db = getFirestore();



function Dashboard() {
  const [city, setCity] = useState("");

  onSnapshot(doc(db, "cities","LA"), (doc) => {
    console.log(doc.data());

    setCity(doc.data().name);
  });

  return (
    <div>

        <DashboardNav/>
        <div id='dashboard'>
          <p>{city}</p>
          
          </div>

        </div>
  )
}

export default Dashboard