import React, { Component } from 'react';
import HoverableImage from './HoverableImage';
import './about.scss';

class ImageGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredIndex: null,
    };
  }

  handleImageHover = (index) => {
    this.setState({ hoveredIndex: index });
  };

  render() {
    const { hoveredIndex } = this.state;
    const images = [
      {
        src: "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/96d93e3a-fdbf-4b6f-b02d-2fc9c2648a18/600x900",
        alt: "Titanic",
        title: "Titanic",
      },
      {
        src: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/82f8a2dc-a439-4832-9f0f-dc599e6e78d2/600x900",
        alt: "Hatiko",
        title: "Hatiko",
      },
      {
        src: "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
        alt: "Spider-man",
        title: "Spider-man",
      },
    ];

    return (
      <div className="about-page">
        <div className="grid">
          <div>
            <h1>About our Filmx</h1>
            <p>
              Hello everyone! If you don't know what to watch, want to find out which movies are trending, or are interested in any genre, you've come to the right place. Our site is clear, easy to navigate, and comprehensive. We provide detailed movie reviews, ratings, and recommendations to help you decide what to watch tonight. Enjoy your movie time with us!
            </p>
          </div>
          {images.map((image, index) => (
            <HoverableImage
              key={index}
              index={index}
              src={image.src}
              alt={image.alt}
              title={image.title}
              hoveredIndex={hoveredIndex}
              handleHover={this.handleImageHover}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ImageGrid;
