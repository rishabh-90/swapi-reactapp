import React from 'react';
import PropTypes from 'prop-types';
import './HeroImage.css';

const HeroImage = (props) => (
  <div className="swapi-heroimage"
    style={{
      background:
        `linear-gradient(to bottom, rgba(0,0,0,0)
        39%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%),
        url('/images/heroimages.jpg'), #1c1c1c`
    }}
  >
    <div className="swapi-heroimage-content">
      <div className="swapi-heroimage-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  </div>
)

HeroImage.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

export default HeroImage;