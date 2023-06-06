
import { useParams } from 'react-router-dom';
import React from "react";
import { Link } from 'react-router-dom';




const Description = ({movies}) => {

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


    const {title}=useParams();
    const movie=details.find((movie)=>movie.title===title);
    return (
        <div>
        <h1> {movie.title}</h1>
        <p>{movie.description}</p>
        <iframe src={movie.trailer}> </iframe>
        <Link to="/"><button style={{marginLeft:50,marginBottom:100}}>Go Back</button></Link>
        </div>
    )
}

export default Description;




































































/*const Description = ({ Movies, match }) => {
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
    export default Description;*/
    
