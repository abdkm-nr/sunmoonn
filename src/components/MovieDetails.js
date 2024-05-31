import React from 'react';
import { useParams } from 'react-router-dom';
import { useRequest } from './useRequest';
import './css/category.css';

const MovieDetails = () => {
  const { id } = useParams();
  const { data, error } = useRequest(id);

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="movie-details">
      <img src={data.Poster} alt={data.Title} />
      <h1>{data.Title}</h1>
      <p>{data.Plot}</p>
      <p>Duration: {data.Runtime}</p>
      <p>Actors: {data.Actors}</p>
      <p>Rating: {data.imdbRating}</p>
    </div>
  );
};

export default MovieDetails;
