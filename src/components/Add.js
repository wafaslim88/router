import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Add.css';

const AddMovie = ({addMovie}) => {
 
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [director, setDirector] = useState('');
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');

  const handleTitleChange = (event) => {/*, it updates the title state by calling
  the setTitle method and passing the new value from the event target (event.target.value)*/
   setTitle(event.target.value);
 };

 const handleGenreChange = (event) => {
   setGenre(event.target.value);
 };

 const handleDirectorChange = (event) => {
   setDirector(event.target.value);
 };

 const handleRatingChange = (event) => {
   setRating(parseFloat(event.target.value));
 };
 const handleDescriptionChange = (event) => {
  setDescription(event.target.value);
};
/*The handleSubmit function is used to handle form submission events.
It takes an event object as a parameter, which represents the form submission event*/
 const handleSubmit = (event) => {
 event.preventDefault();// used to control over how the form submission event is handled
 
  // Create a new movie object
  const newMovie = {
    title,
    genre,
    director,
    rating,
    description
  };

  // Call the addMovie function passed as a prop to add the new movie
    addMovie(newMovie);


// Reset the input fields
setTitle('');
setGenre('');
setDirector('');
setRating(0);
setDescription('');
};

  return (
    <div className="add-movie-container">
      <h2 className="add-movie-heading">Add Movie</h2>
      <Form onSubmit={handleSubmit} className="add-movie-form">
        <Form.Group controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange}
            required
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="genre">
          <Form.Label>Genre:</Form.Label>
          <Form.Control
            type="text"
            name="genre"
            value={genre}
            onChange={handleGenreChange}
            required
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="director">
          <Form.Label>Director:</Form.Label>
          <Form.Control
            type="text"
            name="director"
            value={director}
            onChange={handleDirectorChange}
            required
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="releaseYear">
          <Form.Label>Rating:</Form.Label>
          <Form.Control
            type="number"
            name="rating"
            value={rating}
            onChange={handleRatingChange}
            required
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            required
            className="form-input"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="form-submit">
          Add Movie
        </Button>
      </Form>
    </div>
  );
};

export default AddMovie;
