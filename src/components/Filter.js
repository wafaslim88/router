import React, { useState } from 'react';
import ReactStars from "react-stars";
import MovieCard from './MovieCard';
import './Filter.css';

const Filter = ({ setFilterTitle, filterTitle, setFilterRating }) => {
  console.log(filterTitle, "xxx");
  const handleRatingChange = (newRating) => {/* the function is defined with a parameter newRating.
   It logs the value of newRating to the console and then calls setFilterRating with the newRating value*/
    console.log(newRating, "yyy");
    setFilterRating(newRating);
  };
  return (
    <div className="search-container">
      <input type="text" onChange={(event) => setFilterTitle(event.target.value)} />
      <ReactStars
        count={10}
        size={24}
        color2={"#ffd700"}
        edit={true}
        onChange={handleRatingChange}
      />
    </div>
  )};
  
export default Filter;
