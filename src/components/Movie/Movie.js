import React, { Component } from 'react';
import { SWAPI_URL } from '../../config';
import Navigation from '../elements/Navigation/Navigation';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import Actor from '../elements/Actor/Actor';
import Spinner from '../elements/Spinner/Spinner';
import './Movie.css';

class Movie extends Component {
  state = {
    movie: null,
    actors: null,
    loading: false
  }

  componentDidMount() {
    this.setState({ loading: true })
    // First fetch the movie ...
    const endpoint = `${SWAPI_URL}films/${this.props.match.params.movieId}/`;
    this.fetchItems(endpoint);
  }

  fetchItems = (endpoint) => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {

        if (result.status_code) {
          this.setState({ loading: false });
        } else {
          this.setState({ movie: result }, () => {
            let actor = []
            result.characters.forEach(element => {
              fetch(element)
                .then(result => result.json())
                .then(result => {
                  actor.push(result)
                  this.setState({ actors: actor })
                })
                .then(this.setState({ loading: false }))
            })
          })
        }
      })
      .catch(error => console.error('Error:', error))
  }

  render() {
    return (
      <div className="swapi-movie">
        {this.state.movie ?
          <div>
            <Navigation movie={this.state.movie.title} />
            <MovieInfo movie={this.state.movie} />
            <MovieInfoBar planets={this.state.movie.planets.length} species={this.state.movie.species.length} vehicles={this.state.movie.vehicles.length} />
          </div>
          : null}
        {this.state.actors ?
          <div className="swapi-movie-grid">
            <FourColGrid header={'Actors'}>
              {this.state.actors.map((element, i) => {
                return <Actor key={i} actor={element} />
              })}
            </FourColGrid >
          </div>
          : null}
        {!this.state.actors && !this.state.loading ? <h1>No Movie Found!</h1> : null}
        {this.state.loading ? <Spinner /> : null}
      </div>
    )
  }
}

export default Movie;