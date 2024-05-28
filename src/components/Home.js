import React from 'react';
import './home.css'; // Import the CSS file for styling

const Home = () => (
  <div className="carousel">

    <div className="carousel-control-button left"><input type="radio" name="carousel-control-input"/></div>
    <div className="carousel-control-button right"><input type="radio" name="carousel-control-input" checked/></div>

    <div className="carousel-rotation-direction">

      <ul className="carousel-item-wrapper" style={{'--_num-elements': 11}}>

        <li className="carousel-item" style={{'--_index': 1, '--_image-url': "url('https://i.pinimg.com/564x/dc/99/f0/dc99f000c9323d9ffbaae6284decfb53.jpg')"}}><a href="https://i.pinimg.com/564x/dc/99/f0/dc99f000c9323d9ffbaae6284decfb53.jpg" target="_blank">Architecture Example 1</a></li>
				<li className="carousel-item" style={{'--_index': 2, '--_image-url': "url('https://i.pinimg.com/564x/ce/39/50/ce395081a8e65bcabac074b08037cabf.jpg')"}}><a href="https://i.pinimg.com/564x/ce/39/50/ce395081a8e65bcabac074b08037cabf.jpg" target="_blank">Architecture Example 2</a></li>
				<li className="carousel-item" style={{'--_index': 3, '--_image-url': "url('https://i.pinimg.com/564x/40/ae/e0/40aee059154d8b78df0b4ad03e621e31.jpg')"}}><a href="https://i.pinimg.com/564x/40/ae/e0/40aee059154d8b78df0b4ad03e621e31.jpg" target="_blank">Architecture Example 3</a></li>
				<li className="carousel-item" style={{'--_index': 4, '--_image-url': "url('https://i.pinimg.com/564x/da/39/94/da39947e263c4a4dfd585de9d401b97a.jpg')"}}><a href="https://unsplash.com/de/fotos/weiss-graues-gebaudekonzept-8yOPWMS46CQ" target="_blank">Architecture Example 4</a></li>
				<li className="carousel-item" style={{'--_index': 5, '--_image-url': "url('https://i.pinimg.com/564x/f7/9f/17/f79f177873070821184ccada1ae22f28.jpg')"}}><a href="https://i.pinimg.com/564x/f7/9f/17/f79f177873070821184ccada1ae22f28.jpg" target="_blank">Architecture Example 5</a></li>
				<li className="carousel-item" style={{'--_index': 6, '--_image-url': "url('https://i.pinimg.com/564x/08/80/3c/08803c0ecf3729e57f31e92459df0c15.jpg')"}}><a href="https://i.pinimg.com/564x/08/80/3c/08803c0ecf3729e57f31e92459df0c15.jpg" target="_blank">Architecture Example 6</a></li>
				<li className="carousel-item" style={{'--_index': 7, '--_image-url': "url('https://i.pinimg.com/564x/6c/86/24/6c862444c88f2c69312f9cb751c4b74c.jpg')"}}><a href="https://i.pinimg.com/564x/6c/86/24/6c862444c88f2c69312f9cb751c4b74c.jpg" target="_blank">Architecture Example 7</a></li>
				<li className="carousel-item" style={{'--_index': 8, '--_image-url': "url('https://i.pinimg.com/564x/70/1e/77/701e7793c628a2b258725ad50eace6c1.jpg')"}}><a href="https://i.pinimg.com/564x/70/1e/77/701e7793c628a2b258725ad50eace6c1.jpg" target="_blank">Architecture Example 8</a></li>
				<li className="carousel-item" style={{'--_index': 9, '--_image-url': "url('https://i.pinimg.com/736x/cc/0d/3b/cc0d3bbca82d854fcbc5b3938778c401.jpg')"}}><a href="https://i.pinimg.com/736x/cc/0d/3b/cc0d3bbca82d854fcbc5b3938778c401.jpg" target="_blank">Architecture Example 9</a></li>
				<li className="carousel-item" style={{'--_index': 10, '--_image-url': "url('https://i.pinimg.com/564x/4c/bc/74/4cbc74b3cbb6d842f5d68e41cbf94c72.jpg')"}}><a href="https://i.pinimg.com/564x/4c/bc/74/4cbc74b3cbb6d842f5d68e41cbf94c72.jpg" target="_blank">Architecture Example 10</a></li>
				<li className="carousel-item" style={{'--_index': 11, '--_image-url': "url('https://i.pinimg.com/564x/02/c4/43/02c443a0decdd349f3629bbf81808d63.jpg')"}}><a href="https://i.pinimg.com/564x/02/c4/43/02c443a0decdd349f3629bbf81808d63.jpg" target="_blank">Architecture Example 11</a></li>
        <li className="carousel-ground"></li>

      </ul>

    </div>

  </div>
);

export default Home;
