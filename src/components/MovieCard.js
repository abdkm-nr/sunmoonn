import React from 'react';
import { Link } from 'react-router-dom';
import './css/category.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card" style={{ backgroundImage: `url(${movie.image})` }}>
      <h1>{movie.title}</h1>
      <span>{movie.runtime} min</span>
      <span>
        {movie.rating} <i className="fas fa-star"></i>
      </span>
      <p>{movie.description}</p>
      <Link to={`/movies/${movie.id}`} className="watch">
        {!movie.hasWatched ? 'WATCH MOVIE' : 'WATCH AGAIN'}
      </Link>
    </div>
  );
};

export default MovieCard;
