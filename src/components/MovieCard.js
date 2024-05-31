import React from 'react';
import { Link } from 'react-router-dom';
import './css/category.css';

const MovieCard = ({ movie }) => {
	return (
	  <div className="movie-card">
		<Link to={`/movie/${movie.imdbID}`}>
		  <img src={movie.Poster} alt={movie.Title} />
		  <h3>{movie.Title}</h3>
		  <p>Rating: {movie.imdbRating}</p>
		</Link>
	  </div>
	);
  };

export default MovieCard;
