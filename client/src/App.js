import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Auth/Signup';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';    
import { useEffect, useState } from 'react';
import authService from './services/authService';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState('');
  const checkAuthStatus = async () => {
    try {
      const response = await authService.checkAuthStatus();
      console.log(response.data.logged_in);
      setIsLoggedIn(response.data.logged_in);
    } catch (err) {
      // console.log(err);
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkAuthStatus(); // Check auth status on component mount
  }, []);
 
  return <>
  <Router>
    <Routes>  
      <Route path="/" element={<Home  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/signup" element={<Signup isLoggedIn={isLoggedIn} />} />
    </Routes>
  </Router>
  <ToastContainer />
  </>;
}

export default App;
