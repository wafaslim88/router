import './App.css';
import React, {useState} from "react";
import  MovieList  from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/Add';
import { BrowserRouter,Routes,Route, Router,Switch} from 'react-router-dom';
import Description from './components/Description';


const App = () => {
  const details=[
    {
      title: 'Titanic',
      description: 'an epic romance and disaster film set aboard the ill-fated RMS Titanic. It follows the forbidden love story between Jack and Rose as they navigate social barriers and face the devastating sinking of the ship', 
      posterURL:'titanic-min-min.jpg',
      rating:7.9,
      trailer : 'https://www.youtube.com/watch?v=kVrqfYjkTdQ'
    },
    {
      title: 'Harry Poter',
      description: 'Harry Potter" is a beloved fantasy film series following the magical adventures of a young wizard named Harry Potter and his friends as they attend Hogwarts School of Witchcraft and Wizardry and face the ultimate battle against the dark wizard Lord Voldemort.', 
      posterURL:'harry-potter-and-the-philosophers-stone.jpg',
      rating:7.6,
      trailer:'https://www.youtube.com/watch?v=VyHV0BRtdxo'
    },
    {
      title: 'Star Wars',
      description: 'A galaxy-spanning adventure filled with epic battles, iconic characters, and the eternal struggle between the light side and the dark side of the Force', 
      posterURL:'vd-046-star-wars-official-poster-ep7.jpg',
      rating:8.6,
      trailer: 'https://www.youtube.com/watch?v=8Qn_spdM5Zg'
    },
    {
      title: 'Twilight',
      description: 'A captivating supernatural romance between a teenage girl and a vampire, exploring the complexities of their forbidden love amidst a dangerous and mystical world', 
      posterURL:'flat750x075f-pad750x1000f8f8f8-24.jpg',
      rating:5.3,
      trailer:'https://www.youtube.com/watch?v=uxjNDE2fMjI'
    },
    {
      title: 'The Wonder',
      description: 'it follows an English nurse sent to a rural Irish village to observe a young fasting girl, who is seemingly able to miraculously survive without eating', 
      posterURL:'w1500_51166777.jpg',
      rating:6.6,
      trailer : 'https://www.youtube.com/watch?v=htybz7XscIY'
    },
    {
      title: 'Interstellar',
      description: 'A team of explorers travels through a wormhole in space to save humanity from a dying Earth', 
      posterURL:'gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      rating:8.7,
      trailer: 'https://www.youtube.com/watch?v=zSWdZVtXT7E'
    }
  ]
  const [movies, setMovies] = useState(details); 
  const [filterTitle, setFilterTitle] = useState('');// the state variables are used to store the values entered in the filter inputs 
  const [filterRating, setFilterRating] = useState(0);//setFilterTitle and setFilterRating can be used to update the values of these state variables when needed
  
 
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
    movie.rating >= parseFloat(filterRating)
  );
  //the function addMovie takes a parameter newMovie and uses the setMovies method to update the state movies
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  
  return (
    
    <div className="App">
        <Routes>
          <Route path="/" element={<MovieList/>} />
          <Route path="/description/:title" element={<Description/>} />
        </Routes>
      <h1>The best movies of all time</h1>
      <Filter
        filterTitle={filterTitle}
       setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
      />
      <MovieList movies={filteredMovies} />
      <AddMovie addMovie={addMovie} />  
  
    
   </div>
  
  
  );
}

export default App;
