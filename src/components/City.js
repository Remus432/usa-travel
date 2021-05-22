import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedHeadline from "./AnimatedHeadline"

const City = ({ name, area, founded, population, image, history, geography, culture }) => {
  const [historyState, setHistory] = useState(true)
  const [geographyState, setGeography] = useState(false)
  const [cultureState, setCulture] = useState(false)

  function activateHistory() {
    setHistory(true)
    setGeography(false)
    setCulture(false)
  }

  function activateCulture() {
    setHistory(false)
    setGeography(false)
    setCulture(true)
  }

  function activateGeography() {
    setHistory(false)
    setGeography(true)
    setCulture(false)
  }

  return (
    <div className="state__cities-city">
      <div className="state__cities-city-general">
        <img className="state__cities-city-img" src={image} />
        <div className="state__cities-city-data">
          <div className="state__cities-city-data-item">Area <span className="state__cities-city-data-item-span">{area}</span></div>
          <div className="state__cities-city-data-item">Founded <span className="state__cities-city-data-item-span">{founded}</span></div>
          <div className="state__cities-city-data-item">Population <span className="state__cities-city-data-item-span">{population}</span></div>
        </div>
      </div>
      <div className="state__cities-city-overview">
        <h1 className="state__cities-city-name">{name}</h1>
        <div className="state__cities-city-info">
          <AnimatedHeadline currState={historyState && { val: historyState, text: "History" } || cultureState && { val: cultureState, text: "Culture" } || geographyState && { val: geographyState, text: "Geography" }}/>
          <p className="state__cities-city-info-p">{historyState && history || cultureState && culture || geographyState && geography}</p>
        </div>
        <div className="state__cities-city-controls">
          <div className="state__cities-city-switch">
            <div onClick={activateHistory} className={`state__cities-city-switch-btn${historyState ? " active" : ""}`}></div>
            <p className="state__cities-city-switch-section">History</p>
          </div>
          <div className="state__cities-city-switch">
            <div onClick={activateCulture} className={`state__cities-city-switch-btn${cultureState ? " active" : ""}`}></div>
            <p className="state__cities-city-switch-section">Culture</p>
          </div>
          <div className="state__cities-city-switch">
            <div onClick={activateGeography} className={`state__cities-city-switch-btn${geographyState ? " active" : ""}`}></div>
            <p className="state__cities-city-switch-section">Geography</p>
          </div>
        </div>
      </div>  
      
    </div>
  )
}

export default City