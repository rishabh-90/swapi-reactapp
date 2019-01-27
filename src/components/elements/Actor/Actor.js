import React from 'react';
import './Actor.css';

const Actor = (props) => {

  return (
    <div className="swapi-actor">
      <img
        src="./images/no_image.jpg"
        alt="actorthumb"
      />
      <span className="swapi-actor-name">Name : {props.actor.name}</span>
      <span className="swapi-actor-name">Gender : {props.actor.gender}</span>
    </div>
  )
}

export default Actor;