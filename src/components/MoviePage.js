import React from 'react';
import { useParams } from 'react-router-dom'; 
import { moviedata } from './moviedata';
import './css/moviepage.css';

const MoviePage = () => {
  const { id } = useParams(); 

  const movie = moviedata.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className='movie-page'> 
      <img src={movie.fon} alt={`${movie.title} fon`} className="movie-fon" />
      <div className='movie-poster'>
        <img src={movie.poster} alt={`${movie.title} poster`} className="movie-poster" /> 
      </div>
      <div className='aboutfilm'>
        <h1>{movie.title}</h1>
        <h4>About the film</h4>
        <span>{movie.year}</span>
        <span>
          {movie.rating} <i className="fas fa-star"></i>
        </span>
        <span>{movie.runtime} min</span>
        <span>{movie.genre}</span>
        <span>Starring: {movie.actors}</span>
        <p>{movie.description}</p>
        <div className='movie-trailer'>
          <h2>Watch the Trailer</h2>
          <a href={movie.trailer} target="_blank" rel="noopener noreferrer" className="trailer-link">
            Watch Trailer
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;

