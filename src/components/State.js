import React from "react"
import { Link, Route, useRouteMatch } from "react-router-dom"
import City from "./City"
import Gallery from "./Gallery"
import { motion } from "framer-motion"
import { extractPath } from "../utils/utils"

const State = ({ data }) => {
  const { path } = useRouteMatch()
 
  const routes = ["/tennessee", "/mississippi", "/louisiana", "/texas"].filter(route => route != [path])
  const { state, cities } = data
  const { flag, nickname, map } = state

  function changeFlow() {
    window.scroll(0, 0)
    document.querySelector("body").classList.add("no-scroll")
  }

  
  return (
    <div className="state">
      <ul className="state__nav">
        <Link to="/"><li className="state__nav-item">Home</li></Link>
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
          <Link to={`${path}/gallery`}>
            <motion.button onClick={changeFlow} whileHover={{ backgroundColor: "#201F1F", color: "#fff" }} transition={{ duration: .7 }} className="state__btn">View Gallery</motion.button>
          </Link>
        </motion.div>
      </div>
      
      <div className="state__cities">
        { cities.map(city => <City name={city.name} image={city.image} area={city.area} founded={city.founded} population={city.population} history={city.history} geography={city.geography} culture={city.culture} />) }
      </div>
      <Route path={`${path}/:name`} component={Gallery} />
        
    </div>
  )
}

export default State