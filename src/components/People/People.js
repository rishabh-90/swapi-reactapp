import React, { Component } from 'react';
import { SWAPI_URL } from '../../config';
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import Actor from '../elements/Actor/Actor';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../elements/Spinner/Spinner';
import './People.css';

class People extends Component {
  state = {
    peoples: [],
    heroImage: null,
    loading: false,
    currentPage: false,
    searchTerm: ''
  }

  componentDidMount() {
    this.setState({ loading: true });
    const endpoint = `${SWAPI_URL}people/`;
    this.fetchItems(endpoint);
  }

  searchItems = (searchTerm) => {
    console.log(searchTerm);
    let endpoint = '';
    this.setState({
      peoples: [],
      loading: true,
      searchTerm
    })

    if (searchTerm === '') {
      endpoint = `${SWAPI_URL}people/`;
    } else {
      endpoint = `${SWAPI_URL}people/?search=${searchTerm}`;
    }
    this.fetchItems(endpoint);

  }

  loadMoreItems = () => {
    let endpoint = ''
    this.setState({ loading: true });

    if (this.state.searchTerm === '') {
      endpoint = this.state.currentPage.replace(/^http:\/\//i, 'https://');
    } else {
      endpoint = this.state.currentPage.replace(/^http:\/\//i, 'https://');
    }
    this.fetchItems(endpoint);
  }

  fetchItems = (endpoint) => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        this.setState({
          peoples: [...this.state.peoples, ...result.results],
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
            header={this.state.searchTerm ? 'Search Result' : 'Star War Characters'}
            loading={this.state.loading}
          >
            {this.state.peoples.map((element, i) => {
              return <Actor key={i} actor={element} />
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

export default People;