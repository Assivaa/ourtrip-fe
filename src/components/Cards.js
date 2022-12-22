import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postService from '../services/post';
import CardItem from './CardItem';
import './Cards.css';

const API_URL =  'https://sugary-gifted-enthusiasm.glitch.me/';
function Cards() {
  // const navigate = useNavigate();
  // const toDetailPost = (postId) => {
  //   navigate(`/detail-post/${postId}`)
  // }
  const [allPost, setAllPost] = useState([]);

  const getAllPosts =  async () => {
    postService.getAll()
      .then(response => {
        setAllPost(response.data);
      })
      .catch(err => console.error(err))
  };

  useEffect(() => {
    getAllPosts()
  }, []);
  const posts = allPost.data
  return (
    <div className="cards" id="#content">
       <h1> Check out these EPIC Destinations!</h1>
         <div className="cards_container">
            <div className="cards_wrapper">
              {/* <ul className="cards__items">
              <CardItem 
              src="images/monas.jpg"
              text="Explore the famous icon Indonesia in Jakarta (Monumen Nasional)"
              label="Jakarta"
              path={"/detail-post/"+31}
              />
               <CardItem 
              src="images/tsb.jpg"
              text="Want to experience the thrill of a journey full of mysteries? Trans Studio Bandung is the solution"
              label="Bandung"
              path="/bandung"
              />
              </ul> 

              <ul className="cards__items">
              <CardItem 
              src="images/dairy.jpg"
              text="Cimory Dairyland Puncak is one of the best choices for family tours"
              label="Bogor"
              path="/services"
              />
              <CardItem 
              src="images/moja.jpg"
              text="MoJA is an instagramable place in Jakarta and one of the best places as well as the most popular"
              label="Jakarta"
              path="/services"
              />
              <CardItem 
              src="images/dufan.jpg"
              text="Dufan is the largest outdoor entertainment center in Indonesia that pampers visitors with Fantasi Around the World"
              label="Jakarta"
              path="/services"
              />
              </ul> */}
              <ul className="cards__items">
                {
                  posts?.map((post) => (
                    <CardItem 
                    key={post.id}
                    src={API_URL+post.image}
                    text={post.title}
                    label={post.place}
                    path={"/detail-post/"+post.id}
                    />
                  ))
                }
              </ul> 
             </div>
          </div>
      </div>
  )
}

export default Cards;
