import "./Styles/App.css";
import CheckAuth from './Components/Routes/CheckAuth';
import './Db/Firebase';
import {motion, AnimatePresence} from "framer-motion";
import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
//routes
import Dashboard from './Components/Routes/Dashboard';
import Invoices from './Components/Routes/invoices';
import ErrorPage from './Components/Routes/ErrorPage';
import Login from './Components/Routes/Login';
import SignUp from './Components/Routes/SignUp';

function App() {
  const location = useLocation();

  return (
<AnimatePresence exitBeforeEnter={true}>

    <Routes location={location} key={location.pathname}>
      {/* add all routes here*/}
      <Route path="/" element={<CheckAuth />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<SignUp />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
 


      
</AnimatePresence>


);
}

export default App;
