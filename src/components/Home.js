import React, { useEffect, useRef } from 'react';
import './css/home.css';





function Home() {
  return (
    <div>
      <div className="carousel">

        <div className="carousel-rotation-direction">

          <ul className="carousel-item-wrapper" style={{'--_num-elements': 11}}>

            <li className="carousel-item" style={{'--_index': 1, '--_image-url': "url('https://i.pinimg.com/564x/dc/99/f0/dc99f000c9323d9ffbaae6284decfb53.jpg')"}}><a href="https://i.pinimg.com/564x/dc/99/f0/dc99f000c9323d9ffbaae6284decfb53.jpg" target="_blank" rel="noreferrer">Film Example 1</a></li>
            <li className="carousel-item" style={{'--_index': 2, '--_image-url': "url('https://i.pinimg.com/564x/ce/39/50/ce395081a8e65bcabac074b08037cabf.jpg')"}}><a href="https://i.pinimg.com/564x/ce/39/50/ce395081a8e65bcabac074b08037cabf.jpg" target="_blank" rel="noreferrer">Film Example 2</a></li>
            <li className="carousel-item" style={{'--_index': 3, '--_image-url': "url('https://i.pinimg.com/564x/40/ae/e0/40aee059154d8b78df0b4ad03e621e31.jpg')"}}><a href="https://i.pinimg.com/564x/40/ae/e0/40aee059154d8b78df0b4ad03e621e31.jpg" target="_blank" rel="noreferrer">Film Example 3</a></li>
            <li className="carousel-item" style={{'--_index': 4, '--_image-url': "url('https://i.pinimg.com/564x/da/39/94/da39947e263c4a4dfd585de9d401b97a.jpg')"}}><a href="https://unsplash.com/de/fotos/weiss-graues-gebaudekonzept-8yOPWMS46CQ" target="_blank" rel="noreferrer">Film Example 4</a></li>
            <li className="carousel-item" style={{'--_index': 5, '--_image-url': "url('https://i.pinimg.com/564x/f7/9f/17/f79f177873070821184ccada1ae22f28.jpg')"}}><a href="https://i.pinimg.com/564x/f7/9f/17/f79f177873070821184ccada1ae22f28.jpg" target="_blank" rel="noreferrer">Film Example 5</a></li>
            <li className="carousel-item" style={{'--_index': 6, '--_image-url': "url('https://i.pinimg.com/564x/08/80/3c/08803c0ecf3729e57f31e92459df0c15.jpg')"}}><a href="https://i.pinimg.com/564x/08/80/3c/08803c0ecf3729e57f31e92459df0c15.jpg" target="_blank" rel="noreferrer">Film Example 6</a></li>
            <li className="carousel-item" style={{'--_index': 7, '--_image-url': "url('https://i.pinimg.com/564x/6c/86/24/6c862444c88f2c69312f9cb751c4b74c.jpg')"}}><a href="https://i.pinimg.com/564x/6c/86/24/6c862444c88f2c69312f9cb751c4b74c.jpg" target="_blank" rel="noreferrer">Film Example 7</a></li>
            <li className="carousel-item" style={{'--_index': 8, '--_image-url': "url('https://i.pinimg.com/564x/70/1e/77/701e7793c628a2b258725ad50eace6c1.jpg')"}}><a href="https://i.pinimg.com/564x/70/1e/77/701e7793c628a2b258725ad50eace6c1.jpg" target="_blank" rel="noreferrer">Film Example 8</a></li>
            <li className="carousel-item" style={{'--_index': 9, '--_image-url': "url('https://i.pinimg.com/736x/cc/0d/3b/cc0d3bbca82d854fcbc5b3938778c401.jpg')"}}><a href="https://i.pinimg.com/736x/cc/0d/3b/cc0d3bbca82d854fcbc5b3938778c401.jpg" target="_blank" rel="noreferrer">Film Example 9</a></li>
            <li className="carousel-item" style={{'--_index': 10, '--_image-url': "url('https://i.pinimg.com/564x/4c/bc/74/4cbc74b3cbb6d842f5d68e41cbf94c72.jpg')"}}><a href="https://i.pinimg.com/564x/4c/bc/74/4cbc74b3cbb6d842f5d68e41cbf94c72.jpg" target="_blank" rel="noreferrer">Film Example 10</a></li>
            <li className="carousel-item" style={{'--_index': 11, '--_image-url': "url('https://i.pinimg.com/564x/02/c4/43/02c443a0decdd349f3629bbf81808d63.jpg')"}}><a href="https://i.pinimg.com/564x/02/c4/43/02c443a0decdd349f3629bbf81808d63.jpg" target="_blank" rel="noreferrer">Film Example 11</a></li>
            <li className="carousel-ground"></li>

          </ul>
        </div>
      </div>
    </div>
  );
}


function Anime() {
  const movieDB = [
    {
      title: "AVATAR",
      rating: 8,
      hasWatched: true,
      runtime: 162,
      synopsis: "Jake Sully is a wheelchair-bound former Marine. Despite his weak body, Jake is still a warrior at heart. He receives the task of traveling several light years to the base of earthlings on the planet Pandora, where corporations are mining a rare mineral that is of great importance for the Earth's recovery from the energy crisis.",
      background: "url('https://p4.wallpaperbetter.com/wallpaper/980/175/721/official-avatar-movie-poster-avatar-movie-poster-wallpaper-preview.jpg')"
    },
    {
      title: "Interstellar",
      rating: 8.6,
      hasWatched: false,
      runtime: 169,
      synopsis: "When drought, dust storms and plant die-offs lead humanity to a food crisis, a team of explorers and scientists travel through a wormhole (which supposedly connects regions of space-time across great distances) on a journey to surpass previous limitations on human space travel and find a planet with suitable human conditions.",
      background: "url('https://i.pinimg.com/564x/c4/bb/01/c4bb013436458ae33c8b4586892d8e09.jpg')"
    },
    {
      title: "Spider-Man: Across the Spider-Verse",
      rating: 8.2,
      hasWatched: true,
      runtime: 140,
      synopsis: "Miles and Gwen travel across dimensions in search of the villain Stain. Continuation of the dizzying cartoon.",
      background: "url('https://i.pinimg.com/564x/43/1b/18/431b185e0cb6d350a6a5b14dcfb6b330.jpg')"
    },
    {
      title: "Sweet home",
      rating: 7.2,
      hasWatched: false,
      runtime: 1029,
      synopsis: "After the death of his parents and sister, withdrawn high school student Cha Hyun-soo is left all alone and has to move to a small apartment in a dingy Green Home residential complex. Seeing no reason to continue living, the guy decides to commit suicide, but suddenly some people begin to turn into aggressive monsters. Hyun-soo will have to overcome himself and get to know his new neighbors better in order to jointly resist the unexpected threat.",
      background: "url('https://i.pinimg.com/736x/8e/d9/8e/8ed98e94fbcb9e745b463eb31cd7ab9d.jpg')"
    }
  ];

  const cardContainerRef = useRef(null);

  const printMovieInfo = (element) => {
    if (element.hasWatched)
      console.log("You have watched " + element.title + " - " + element.rating + " stars");
    else
      console.log("You have not seen " + element.title + " - " + element.rating + " stars");
  };

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

  useEffect(() => {
    movieDB.forEach(printMovieInfo);
    if (cardContainerRef.current) {
      // Clear any existing children to avoid duplication
      cardContainerRef.current.innerHTML = '';
      movieDB.forEach(createCard);
    }
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div>
      <Home />
      <h2 className='movie'>TOP Filmx</h2>
      <div className='card' ref={cardContainerRef}>
        
      </div>
    </div>
  );
}

function All() {
  return (
    <Anime />
  );
}

export default All;