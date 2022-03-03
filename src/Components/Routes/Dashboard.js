import React,{useState, useEffect} from 'react'
import DashboardNav from '../DashboardNav';
import '../../Db/Firebase';
import { query,where,doc, onSnapshot, getFirestore, collection } from "firebase/firestore";

const db = getFirestore();



function Dashboard() {
  const [cities, setCity] = useState([]);
  useEffect(() => {
    const getNames = async () => {
      const q = query(collection(db, "cities"), where("state", "==", "CA"));
      onSnapshot(q, (querySnapshot) => {
        const cities = [];
        querySnapshot.forEach((doc) => {
            cities.push(doc.data().name);
        });
        setCity([cities]);
      });
  };
  getNames();

  }, []);
  

  return (
    <div>

        <DashboardNav/>
        <div id='dashboard'>
          
        {cities.map((city) => {
          return <div> {city}</div>
        })}
        </div>

    </div>
  )
}

export default Dashboard