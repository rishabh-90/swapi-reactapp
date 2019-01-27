import React from 'react';
import './FourColGrid.css';

const FourColGrid = (props) => {

  const renderElements = () => {
    const gridElements = props.children.map( (element, i) => {
      return (
        <div key={i} className="swapi-grid-element">
          {element}
        </div>
      )
    })
    return gridElements;
  }

  return (
    <div className="swapi-grid">
      {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div className="swapi-grid-content">
        {renderElements()}
      </div>
    </div>
  )
}

export default FourColGrid;