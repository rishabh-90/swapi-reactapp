import React from 'react';

import './MovieInfoBar.css';

const MovieInfoBar = (props) => {
  return (
    <div className="swapi-movieinfobar">
      <div className="swapi-movieinfobar-content">
        <div className="swapi-movieinfobar-content-col">
          <span className="swapi-movieinfobar-info">Species: {props.species}</span>
        </div>
        <div className="swapi-movieinfobar-content-col">
          <span className="swapi-movieinfobar-info">Planets: {props.planets}</span>
        </div>
        <div className="swapi-movieinfobar-content-col">
          <span className="swapi-movieinfobar-info">Vehicles: {props.vehicles}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieInfoBar;