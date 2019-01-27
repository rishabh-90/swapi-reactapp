import React from 'react';
import { Link } from 'react-router-dom';
import './MovieThumb.css';

const MovieThumb = (props) => {
  return (
    <div className="swapi-moviethumb">
      {props.clickable ?
        <Link to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}` }}>
          <p className="swapi-movie-name">{props.movieName}</p>
          <img src={props.image} alt="moviethumb" />
        </Link>
        :
        <div>
          <p className="swapi-movie-name">{props.movieName}</p>
          <img src={props.image} alt="moviethumb" />
        </div>

      }
    </div>
  )
}

export default MovieThumb;