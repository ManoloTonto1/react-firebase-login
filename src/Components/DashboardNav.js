import React from 'react'
import { getAuth, signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import '../Db/Firebase';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';




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
  <Box sx={{ flexGrow: 1 }}>
  <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
      
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Galery
      </Typography>
      <Button color="inherit" onClick={handleLogout}>Logout</Button>
    </Toolbar>
  </AppBar>
</Box>
);
    
}

export default DashboardNav