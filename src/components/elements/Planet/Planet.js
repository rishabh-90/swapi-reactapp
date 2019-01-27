import React from 'react';
import './Planet.css';

const PlanetInfo = (props) => {

  return (
    <div className="swapi-actor">
      <img
        src="./images/no_image.jpg"
        alt="actorthumb"
      />
      <span className="swapi-actor-name">Name : {props.planet.name}</span>
      <span className="swapi-actor-name">Climate: {props.planet.climate}</span>
    </div>
  )
}

export default PlanetInfo;