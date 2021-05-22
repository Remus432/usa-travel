import React from "react"
import { Link } from "react-router-dom"
import City from "./City"
import { useRouteMatch } from "react-router-dom"
import { motion } from "framer-motion"

const State = ({ data }) => {
  const { path } = useRouteMatch()
  
  const routes = ["/tennessee", "/mississippi", "/louisiana", "/texas"].filter(route => route != [path])
  const { state, cities } = data
  const { flag, nickname, map } = state

  function extractPath(data) {
    return data.slice(1, data.length)
  }

  return (
    <div className="state">
      <ul className="state__nav">
        {
          routes.map(route => <Link to={route}><li className="state__nav-item">{extractPath(route)}</li></Link>)
        }
      </ul>
      <div className="state__info">
        <div className="state__visuals">
          <motion.img animate={{ x: [-150, 0] }} transition={{ duration: .7 }} className="state__visuals-flag" src={flag} />
          <motion.img animate={{ scale: [.2, 1] }} transition={{ duration: .8 }} className="state__visuals-map" src={map} />
        </div>
        <motion.div animate={{ x: [-300, 0] }} transition={{ duration: .5 }} className="state__text">
          <h1 className="state__text-headline">{extractPath(path)}</h1>
          <h2 className="state__text-subheadline">"{nickname}"</h2>
        </motion.div>
      </div>
      
      <div className="state__cities">
        { cities.map(city => <City name={city.name} image={city.image} area={city.area} founded={city.founded} population={city.population} history={city.history} geography={city.geography} culture={city.culture} />) }
      </div>
    </div>
  )
}

export default State