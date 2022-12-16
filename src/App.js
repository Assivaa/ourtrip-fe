/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/pages/Home';
import Login from './components/pages/Login'; 
import SignUp from './components/pages/SignUp';
import CreatePost from './components/pages/CreatePost';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
          <Route exact path='/create-post' element={<CreatePost/>}/>
      </Routes> 
    </Router>
    </>
  );
}

export default App;