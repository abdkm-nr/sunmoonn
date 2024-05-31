import React from 'react';
import MovieCard from './MovieCard'; // Импортируем компонент карточки фильма
import './css/category.css';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};


export default MovieList;
