import "./Styles/App.css";
import CheckAuth from './Components/Routes/CheckAuth';
import './Db/Firebase';
import {motion, AnimatePresence} from "framer-motion";

function App() {
  return (
<AnimatePresence

    // Disable any initial animations on children that
    // are present when the component is first rendered
    initial={false}
    // Only render one component at a time.
    // The exiting component will finish its exit
    // animation before entering component is rendered
    exitBeforeEnter={true}
    // Fires when all exiting nodes have completed animating out
    onExitComplete={() => null}>
      
  <CheckAuth/>
</AnimatePresence>


);
}

export default App;
