import React from 'react';
import MovieCard from './MovieCard';


const MovieList = ({movies}) => {
  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',justifyContent:'space-around',marginTop:50}}>
   { movies.map((movie, index) => (/*The movies.map() function
    is used to iterate over each movie in the movies array and generate a MovieCard component for each item*/
          <MovieCard key={index}  movie={movie} />//The key prop is set to the index of each movie in the array 
        )
   )}
    </div>
  );
};
export default MovieList;
