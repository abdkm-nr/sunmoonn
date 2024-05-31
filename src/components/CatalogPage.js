import React from "react";
import { Link } from "react-router-dom";
import moviedata from "./moviedata";
import MovieCard from "./MovieCard";

const CatalogPage = () => {
  return (
    <div className="catalog-page">
      <h1>Movie Catalog</h1>
      <div className="movie-list">
        {moviedata.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`} className="movie-link">
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
