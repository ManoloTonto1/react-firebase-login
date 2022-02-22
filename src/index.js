import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
//routes
import Dashboard from './Components/Routes/Dashboard';
import Invoices from './Components/Routes/invoices';
import App from './App';
import ErrorPage from './Components/Routes/ErrorPage';
import Login from './Components/Routes/Login';
import SignUp from './Components/Routes/SignUp';

//everything else
import './Styles/index.css';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
    <Routes>
      {/* add all routes here*/}
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<SignUp />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
