/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/pages/Home';
import Login from './components/pages/Login'; 
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes> 
    </Router>
    </>
  );
}

export default App;