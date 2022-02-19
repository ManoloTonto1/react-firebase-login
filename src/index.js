import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
//routes
import Invoices from './Components/public/invoices';
import App from './App';

//everything else
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
    <Routes>
      {/* add all routes here*/}
      <Route path="/" element={<App />} />
      <Route path="invoices" element={<Invoices />} />
    </Routes>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
