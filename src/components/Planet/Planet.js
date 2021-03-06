import React, { Component } from 'react';
import { SWAPI_URL } from '../../config';
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import PlanetInfo from '../elements/Planet/Planet';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../elements/Spinner/Spinner';
import './Planet.css';

class Planet extends Component {
  state = {
    planets: [],
    heroImage: null,
    loading: false,
    currentPage: false,
    totalPages: 0,
    searchTerm: ''
  }

  componentDidMount() {
    this.setState({ loading: true });
    const endpoint = `${SWAPI_URL}planets/`;
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
      endpoint = `${SWAPI_URL}planets/`;
    } else {
      endpoint = `${SWAPI_URL}planets/?search=${searchTerm}`;
    }
    this.fetchItems(endpoint);

  }

  loadMoreItems = () => {
    let endpoint = '';
    this.setState({ loading: true });

    if (this.state.searchTerm === '') {
      endpoint = this.state.currentPage.replace(/^http:\/\//i, 'https://');
    }
    this.fetchItems(endpoint);
  }

  fetchItems = (endpoint) => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        this.setState({
          planets: [...this.state.planets, ...result.results],
          heroImage: this.state.heroImage || result.results[0],
          loading: false,
          currentPage: result.next || false,
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
            header={this.state.searchTerm ? 'Search Result' : 'Star War Planets'}
            loading={this.state.loading}
          >
            {this.state.planets.map((element, i) => {
              return <PlanetInfo key={i} planet={element} />
            })}
          </FourColGrid>
          {this.state.loading ? <Spinner /> : null}
          {(this.state.currentPage && !this.state.loading) ?
            <LoadMoreBtn text="Load More" onClick={this.loadMoreItems} />
            : null}
        </div>
      </div>
    )
  }
}

export default Planet;