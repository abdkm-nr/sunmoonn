import React, { useEffect, useRef, useState } from 'react';
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
  const cardContainerRef = useRef(null);

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

  useEffect(() => {
    if (cardContainerRef.current) {
      // Clear any existing children to avoid duplication
      cardContainerRef.current.innerHTML = '';
      movies.forEach(createCard);
    }
  }, [movies]);

  const createCard = (element, i) => {
    const card = document.createElement('div');
    card.setAttribute("class", "movie-card");
    card.style.backgroundImage = element.background;

    const title = document.createElement('h1');
    title.innerText = element.title;
    card.appendChild(title);

    const runtime = document.createElement('span');
    runtime.innerText = element.runtime + " min";
    card.appendChild(runtime);

    const star = document.createElement("i");
    star.setAttribute("class", "fas fa-star");
    const rating = document.createElement('span');
    rating.innerText = element.rating + " ";
    rating.appendChild(star);
    card.appendChild(rating);

    const synopsis = document.createElement('p');
    synopsis.innerText = element.synopsis;
    card.appendChild(synopsis);

    const watch = document.createElement('button');
    watch.setAttribute("class", "watch");
    if (!element.hasWatched)
      watch.innerText = "WATCH MOVIE";
    else
      watch.innerText = "WATCH AGAIN";
    card.appendChild(watch);

    if (cardContainerRef.current) {
      cardContainerRef.current.appendChild(card);
    }
  };

  return (
    <div>
      <Home />
      <h2 className='movie'>TOP Filmx</h2>
      <div className='card' ref={cardContainerRef}>
        {movies.map((element, i) => createCard(element, i))}
      </div>
    </div>
  );
}

function All() {
  return <Anime />;
}

export default All;
