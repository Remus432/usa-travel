import React from "react"

const Card = ({ state, bg, flag, map, area, motto, capital, population }) => {
  return (
    <div className="main__states-card">
      <img className="main__states-card-flag" src={flag} alt="Flag" />
      <div className="main__states-card-thumbnail">
        <img className="main__states-card-thumbnail-bg" src={bg}  alt="State Background Thumbnail" />
        <img className="main__states-card-thumbnail-map" src={map} alt="State Map " />
        <h2 className="main__states-card-thumbnail-caption">{state}</h2>
      </div>
      <div className="main__states-card-info">
        <p className="main__states-card-info-motto">{motto}</p>
        <ul className="main__states-card-info-list">
          <li className="main__states-card-info-list-item">Area: {area} km<sup>2</sup></li>
          <li className="main__states-card-info-list-item">Capital: {capital}</li>
          <li className="main__states-card-info-list-item">Population: {population}</li>
        </ul>
        <button className="main__states-card-btn">Explore</button>
      </div>
    </div>
  )
}

export default Card