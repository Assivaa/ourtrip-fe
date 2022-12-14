import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
       <h1> Check out these EPIC Destinations!</h1>
         <div className="cards_container">
            <div className="cards_wrapper">
              <ul className="cards__items">
              <CardItem 
              src="images/monas.jpg"
              text="Explore the famous icon Indonesia in Jakarta (MONAS)"
              label="Jakarta"
              path="/services"
              />
               <CardItem 
              src="images/monas.jpg"
              text="Explore the famous icon Indonesia in Jakarta (MONAS)"
              label="Bandung"
              path="/services"
              />
              </ul> 

              <ul className="cards__items">
              <CardItem 
              src="images/monas.jpg"
              text="Explore the famous icon Indonesia in Jakarta (MONAS)"
              label="Jakarta"
              path="/services"
              />
              <CardItem 
              src="images/monas.jpg"
              text="Explore the famous icon Indonesia in Jakarta (MONAS)"
              label="Bandung"
              path="/services"
              />
              <CardItem 
              src="images/monas.jpg"
              text="Explore the famous icon Indonesia in Jakarta (MONAS)"
              label="Bandung"
              path="/services"
              />
              </ul>
             </div>
          </div>
      </div>
  )
}

export default Cards;
