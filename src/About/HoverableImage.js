import React from 'react';
import PropTypes from 'prop-types';

const HoverableImage = ({ src, alt, title, index, hoveredIndex, handleHover }) => (
  <figure className={hoveredIndex === index ? "hovered" : ""}>
    <img
      src={src}
      alt={alt}
      title={title}
      onMouseEnter={() => handleHover(index)}
      onFocus={() => handleHover(index)}
    />
  </figure>
);

HoverableImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  hoveredIndex: PropTypes.number,
  handleHover: PropTypes.func.isRequired,
};

export default HoverableImage;
