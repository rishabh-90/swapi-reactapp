import React from 'react';
import FontAwesome from 'react-fontawesome';
import MovieThumb from '../MovieThumb/MovieThumb';
import './MovieInfo.css';

const MovieInfo = (props) => {
  return (
    <div className="swapi-movieinfo"
      style={{
        background: `url('/images/heroimages.jpg'), #1c1c1c`
      }}
    >
      <div className="swapi-movieinfo-content">
        <div className="swapi-movieinfo-thumb">
          <MovieThumb
            image="./images/no_image.jpg"
            clickable={false}
          />
        </div>
        <div className="swapi-movieinfo-text">
          <h1>{props.movie.title}</h1>
          <h3>PLOT</h3>
          <p>{props.movie.opening_crawl}</p>
          <h3>DIRECTORS</h3>
          <p className="swapi-director">{props.movie.director}</p>
          <h3>Producer</h3>
          <p className="swapi-director">{props.movie.producer}</p>
        </div>
        <FontAwesome className="fa-film" name="film" size="5x" />
      </div>
    </div>
  )
}

export default MovieInfo;