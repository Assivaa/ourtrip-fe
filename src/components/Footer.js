import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

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
          <h2 className='sosmed'> Social Media </h2>
           <div class="footer-link-items">
              <Link 
                     className="social-icon-link Instagram"
                     to= "//instagram.com/assiva._"
                     target="_blank"
                     style={{marginRight:'20px', marginLeft:'40px'}}
                     >
                     <FaInstagram/>
              </Link>
              <Link 
                     className="social-icon-link WhatsApp"
                     to="//api.whatsapp.com/send?phone=6285899116057&text=Hi!%0ACan%20i%20recommended%20this%20place%20to%20be%20uploaded%20in%20OurTrip?%20"
                     target="_blank"
                     aria-label="WhatsApp"
                     >
                     <FaWhatsapp/>                     
              </Link>
                    
           </div>
         </div>
       <section className="social-media">
            <small className='website-rights'>OurTrip © 2022</small>
              <div className="social-media-wrap">                                 
              </div>
              </section>
    </>
  )
}

export default Footer;
