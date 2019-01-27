import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchBar.css'

class SearchBar extends Component {
  state = {
    value: ''
  }

  timeout = null;

  doSearch = (event) => {
    this.setState({ value: event.target.value })
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.props.callback(this.state.value);
    }, 500);
  }

  render() {
    return (
      <div className="swapi-searchbar">
        <div className="swapi-searchbar-content">
          <FontAwesome className="swapi-fa-search" name="search" size="2x" />
          <input
            type="text"
            className="swapi-searchbar-input"
            placeholder="Search"
            onChange={this.doSearch}
            value={this.state.value}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar;