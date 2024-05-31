import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

//Nurai posmotri

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;800&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #171717;
    min-height: 100vh;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ul {
    list-style-type: none;

    i {
      color: #fff;
      font-size: clamp(0.9rem, 0.825rem + 0.3vw, 1.2rem);

      &:hover {
        color: #f2709c;
      }
    }
  }
`;

const Section = styled.section`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  padding-block: min(20vh, 6rem);
  text-align: center;
  width: calc(min(90rem, 90%));
  margin-inline: auto;

  span,
  p,
  h2,
  h3 {
    letter-spacing: 0.035rem;
  }

  p {
    line-height: 1.6;
    color: #a3a3a3;
    max-width: 50rem;
    margin: 0 auto;
    font-size: clamp(0.9rem, 0.825rem + 0.3vw, 1.2rem);
  }

  .bg-watermark {
    color: #1f1f1f;
    font-size: clamp(6rem, 1.3333rem + 14.9333vw, 20rem);
    font-weight: 800;
    position: absolute;
    z-index: -1;
    left: 50%;
    transform: translateX(-50%) translateY(-15%);
    user-select: none;
    letter-spacing: 0.5rem;
  }

  span {
    text-transform: uppercase;
    display: block;
    font-size: 1.2rem;
    color: #a3a3a3;
  }

  h2 {
    font-size: clamp(3.5rem, 3rem + 1.6vw, 5rem);
    margin-top: -0.625rem;
    color: #fff;
  }
`;

const Cards = styled.div`
  margin-top: 7rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(12rem, 100%), 1fr));
  gap: 2rem;

  @media screen and (min-width: 51rem) {
    gap: 0;
    padding-bottom: 2.5rem;
  }
`;

const CardContainer = styled.div`
  position: relative;
  cursor: pointer;

  h3,
  p {
    text-transform: capitalize;
  }

  h3 {
    font-size: clamp(1rem, 0.9167rem + 0.2667vw, 1.25rem);
    font-weight: 400;
    color: #f6f6f6;
  }

  p {
    font-size: clamp(0.85rem, 0.75rem + 0.32vw, 1.15rem);
    letter-spacing: 0.12rem;
    font-weight: 300;
    max-width: 100%;
  }

  &::before {
    position: absolute;
    content: "";
    width: 5rem;
    height: 6.25rem;
    z-index: 0;
    transition: 0.3s ease-in-out;
    background: #f2709c;
    background: linear-gradient(to left, #ff9472, #f2709c);
  }

  &::after {
    position: absolute;
    inset: 0;
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      hsl(210deg 2.99% 26.27% / 20%),
      hsl(0deg 0% 3.14% / 90%)
    );
  }

  img {
    filter: grayscale(100%);
    transition: 0.5s ease;
  }

  .card-content {
    position: absolute;
    bottom: 0;
    z-index: 99;
    left: 0;
    color: #fff;
    width: 100%;
    padding: 1.875rem 1.25rem;
    text-align: center;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.625rem;
      margin-top: 1.25rem;
    }
  }

  &:hover img {
    filter: grayscale(0%);
  }

  &:hover::before {
    transform: scale(1.03);
  }
`;

class Card extends Component {
  render() {
    const { imgSrc, title, description } = this.props;
    return (
      <CardContainer>
        <img src={imgSrc} alt={title} />
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <ul>
            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </CardContainer>
    );
  }
}

const About = () => {
  const cardData = [
    {
      imgSrc: "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/96d93e3a-fdbf-4b6f-b02d-2fc9c2648a18/600x900",
      title: "Titanic",
      description: "James Cameron",
    },
    {
      imgSrc: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/82f8a2dc-a439-4832-9f0f-dc599e6e78d2/600x900",
      title: "Antonia Moore",
      description: "Product Designer",
    },
    {
      imgSrc: "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
      title: "Travis Lynch",
      description: "Web Developer",
    },
  ];

  return (
    <>
      <GlobalStyle />
      <Section>
        <span>About our</span>
        <h2>Filmx</h2>
        <p>Hello everyone! If you don't know what to watch, want to find out which movies are trending, or are interested in any genre, you've come to the right place. Our site is clear, easy to navigate, and comprehensive. We provide detailed movie reviews, ratings, and recommendations to help you decide what to watch tonight. Enjoy your movie time with us!</p>
        <span className="bg-watermark">FILMX</span>
        <Cards>
          {cardData.map((card, index) => (
            <Card 
              key={index} 
              imgSrc={card.imgSrc} 
              title={card.title} 
              description={card.description} 
            />
          ))}
        </Cards>
      </Section>
    </>
  );
};

export default About;
