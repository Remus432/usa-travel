import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Card = ({ path, state, bg, flag, map, area, motto, capital, population }) => {
  return (
    <motion.div whileHover={{ y: -50, boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)"  }} className="main__states-card">
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
        <Link to={path}>
          <button className="main__states-card-btn">Explore</button>
        </Link>
        
      </div>
    </motion.div>
  )
}

export default Card