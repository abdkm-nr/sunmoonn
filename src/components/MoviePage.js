import React from 'react';
import { useParams } from 'react-router-dom'; 
import moviedata from './moviedata';
import './css/category.css';

const MoviePage = () => {
  const { id } = useParams(); 

  const movie = moviedata.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
    </div>
  );
};

export default MoviePage;
