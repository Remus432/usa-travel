import React from "react"
import City from "./City"
import { useRouteMatch } from "react-router-dom"

const State = ({ data }) => {
  const { path } = useRouteMatch()
  
  const { state, cities } = data
  const { flag, nickname, map } = state

  return (
    <div className="state">
      <div className="state__info">
        <div className="state__visuals">
          <img className="state__visuals-flag" src={flag} />
          <img className="state__visuals-map" src={map} />
        </div>
        <div className="state__text">
          <h1 className="state__text-headline">{path.slice(1, path.length).toUpperCase()}</h1>
          <h2 className="state__text-subheadline">"{nickname}"</h2>
        </div>
      </div>
      
      <div className="state__cities">
        { cities.map(city => <City name={city.name} image={city.image} area={city.area} founded={city.founded} population={city.population} history={city.history} geography={city.geography} culture={city.culture} />) }
      </div>
    </div>
  )
}

export default State