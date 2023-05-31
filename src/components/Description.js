
import { Link } from "react-router-dom";
import React from "react";


const Description = ({ Movies, match }) => {
    const movie = Movies.find((movie) => movie.title === match.params.title);
    console.log(movie);

    return (
        <div>
              
          <Navbar  bg="dark" expand="lg"> 
          <Link to="/">
          <Button className="home" >HOME</Button> 
          
          </Link>
          
          <h1  style={{ color: "white" }} >{movie.title}</h1> 
                  </Navbar>
          
          
          <div className="desc-2">
            <Card.Img src={movie.img} alt="moviePoster" className="poster" />
            <div className="desc-1">
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text style={{ width: "60%" }}> {film.bio}</Card.Text>
    
              <iframe
                width="560"
                height="315"
                src={movie.trailer}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
    
              <Link to="/">
                <Button className="home">HOME</Button>
              </Link>
            </div>
          </div>
        </div>
      );
    };
    export default Description;
    
