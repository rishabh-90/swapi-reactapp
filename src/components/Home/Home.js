import React, { Component } from 'react';
import { SWAPI_URL } from '../../config';
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import Spinner from '../elements/Spinner/Spinner';
import './Home.css';

class Home extends Component {
  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    searchTerm: ''
  }

  componentDidMount() {
    this.setState({ loading: true });
    const endpoint = `${SWAPI_URL}films/`;
    this.fetchItems(endpoint);
  }

  searchItems = (searchTerm) => {
    console.log(searchTerm);
    let endpoint = '';
    this.setState({
      movies: [],
      loading: true,
      searchTerm
    })

    if (searchTerm === '') {
      endpoint = `${SWAPI_URL}films/`;
    } else {
      endpoint = `${SWAPI_URL}films/?search=${searchTerm}`;
    }
    this.fetchItems(endpoint);

  }

  fetchItems = (endpoint) => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        this.setState({
          movies: [...this.state.movies, ...result.results],
          heroImage: this.state.heroImage || result.results[0],
          loading: false,
          currentPage: result.page,
          totalPages: result.total_pages
        })
      })
      .catch(error => console.error('Error:', error))
  }

  render() {
    return (
      <div className="swapi-home">
        {this.state.heroImage ?
          <div>
            <HeroImage
              title={this.state.heroImage.title}
              text={this.state.heroImage.opening_crawl}
            />
            <SearchBar callback={this.searchItems} />
          </div> : null}
        <div className="swapi-home-grid">
          <FourColGrid
            header={this.state.searchTerm ? 'Search Result' : 'Star War Movies'}
            loading={this.state.loading}
          >
            {this.state.movies.map((element, i) => {
              return <MovieThumb
                key={i}
                clickable={true}
                image="./images/no_image.jpg"
                movieId={element.url.match('[\\d]+')[0]}
                movieName={element.title}
              />
            })}
          </FourColGrid>
          {this.state.loading ? <Spinner /> : null}
        </div>
      </div>
    )
  }
}

export default Home;
