import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
       <>
    <div className="footer-container">
       <section className="footer-subscription">
       
              <p className="footer-subscription-logo">
              </p> 

       </section>
       <div className="footer-links">
         <div className="footer-link-wrapper">
           <div class="footer-link-items">
           </div>
         </div>
       </div>
           <div class="footer-link-items">
              <h2> Social Media </h2>
              <Link to='/'>instagram</Link>
              <Link to='/'>Whatsapp</Link>
           </div>
         </div>
       <section className="social-media">
              <div className="social-media-wrap">
                 <div className="footer-logo">
                     <Link to='/' className="social-logo">
                            OurTrip
                     </Link>
                     
                 </div>
                 
                 <small className="website-rights">OurTrip © 2022</small>
                 <div className="social-icons">
                     <Link 
                     className="social-icon-link Instagram"
                     to='/'
                     target="_blank"
                     aria-label="Instagram"
                     >
                     <i className='fab fa-instagram' />
                     </Link>
                     <Link 
                     className="social-icon-link WhatsApp"
                     to='/'
                     target="_blank"
                     aria-label="WhatsApp"
                     >
                     <i className='fab fa-whatsapp' />
                     </Link>
                     </div>
              </div>
              </section>
    </>
  )
}

export default Footer
