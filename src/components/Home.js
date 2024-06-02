import React, { useEffect, useState } from 'react';
import './css/home.css';
import { movieDB, carouselItems } from './moviedata';

function Home() {
  return (
    <div className="carousel">
      <div className="carousel-rotation-direction">
        <ul className="carousel-item-wrapper" style={{ '--_num-elements': carouselItems.length }}>
          {carouselItems.map((item, index) => (
            <li key={index} className="carousel-item" style={{ '--_index': index + 1, '--_image-url': `${item.image}` }}>
              <a href={item.link} target="_blank" rel="noreferrer">{item.title}</a>
            </li>
          ))}
          <li className="carousel-ground"></li>
        </ul>
      </div>
    </div>
  );
}

function Anime() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieDB.forEach((element) => {
      if (element.hasWatched) {
        console.log(`You have watched ${element.title} - ${element.rating} stars`);
      } else {
        console.log(`You have not seen ${element.title} - ${element.rating} stars`);
      }
    });

    setMovies(movieDB);
  }, []);

  
  

  return (
    <div>
      <Home />
      <h2 className="movie">TOP Filmx</h2>
      <div className="card">
        {movies.map((element) => (
          <div className="movie-card" style={{ backgroundImage: `${element.background}` }} key={element.title}>
            <h1>{element.title}</h1>
            <span>{element.runtime} min</span>
            <div>
              <span>{element.rating} </span>
              <i className="fas fa-star"></i>
            </div>
            <p>{element.synopsis}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function All() {
  return <Anime />;
}

export default All;