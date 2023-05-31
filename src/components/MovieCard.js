import React from 'react';
import ReactStars from "react-stars";
import Button from 'react-bootstrap/Button';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie;

  return (
    <div className="screen-2">
      <div className="top-image" >
        <img src={movie.posterURL} alt="" style={{width:280, height:200,borderRadius:17}} />
      </div>

      <div className="main-heading">
        <h1 className="title">{movie.title}</h1>

        <div >
          <div style={{marginLeft:100,marginBottom:20}}>
          {
            <ReactStars 
              count={5}
              value={movie.rating}
              size={24}
              color2={"#ffd700"}
              edit={false}
            />
          }
        </div>
          <span>{movie.date}</span>
          <span className="r">R</span>

          <span className="hd">HD</span>
        </div>
      </div>
      <br></br>

      <div className="categories">
        <a href="#" className="active">
          Description
        </a>
        <a href="#">Episodes</a>
        <a href="#">Reviews</a>
      </div>

      <p className="description">{movie.description}</p>
      
          <Button variant="primary" className='btn'>Watch</Button>
        </div>
  
  
  );
};
export default MovieCard;