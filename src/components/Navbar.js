import React, {useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

import { logout } from '../redux/actions/auth';
import { clearMessage } from '../redux/actions/message';

function Navbar() {

       const { user: currentUser } = useSelector((state) => state.auth);
       const dispatch = useDispatch();

       const location = useLocation();

       useEffect(() => {
              if(['/login', '/register'].includes(location.pathname)) {
                     dispatch(clearMessage());
              }
       }, [dispatch, location]);

       const handleLogout = useCallback(() => {
              dispatch(logout());
       }, [dispatch]);


       const [click, setClick] = useState(false);
       const [button, setButton] = useState(true);

       const handleClick = () => setClick(!click);
       const closeMobileMenu = () => setClick(false);

       const showButton = () => {
              if(window.innerWidth <= 960) {
                     setButton(false);
              } else {
                     setButton(true);
              }
       };
       
       useEffect(() => {
              showButton()
       }, []);

       window.addEventListener('resize', showButton);

  return (
    <>
       <nav className='navbars'>
              <div className='navbar-container'>
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu} style={{textDecoration: 'none', color: "white"}}>
                     OurTrip <i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                     <i className={click ? 'fas fa-times' : 'fas fa-bars'} />              
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                   <li className='nav-item'>
                     <Link to='/' className='nav-links' onClick={closeMobileMenu} style={{textDecoration: 'none', color: "white"}}>
                            Home
                     </Link>
                   </li>
                   {currentUser ? (
                     <li className='nav-item'>
                            <Link to='/login' className='nav-links' onClick={handleLogout} style={{textDecoration: 'none', color: "white"}}>
                                   Logout
                            </Link>
                     </li>
                         ) : (
                     <li className='nav-item'>
                            <Link to='/login' className='nav-links' onClick={closeMobileMenu} style={{textDecoration: 'none', color: "white"}}>
                                   Login
                            </Link>
                     </li>
                         )}
                </ul>
                     {/* {button && <Button buttonStyle='btn--outline'>LOG IN</Button>} */}
              </div>
       </nav>
    </>
  )
}

export default Navbar;
