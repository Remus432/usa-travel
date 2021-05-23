import React from "react"
import { motion } from "framer-motion"
import { useRouteMatch, Link } from "react-router-dom"
import galleryData from "../data/gallery.json"
import Arrow from "../img/left-arrow.svg"

const Gallery = () => {
  const { path } = useRouteMatch()
  const state = path.split("/")[1]
  const currGallery = galleryData[state]

  function changeFlow() {
    document.querySelector("body").classList.remove("no-scroll")
  }
  
  return (
    <div className="gallery">
      <motion.h1 className="gallery__headline">{state}</motion.h1>
      <Link to={`/${state}`}>
        <div onClick={changeFlow} className="gallery__back">
          <img className="gallery__back-icon" src={Arrow} />
          <motion.h2 className="gallery__back-text">Back</motion.h2>
        </div>
      </Link>
      <div className="gallery__grid">
        {
          currGallery.map((image, i) => {
            return (
              <motion.div animate={{ opacity: [0, 1], y: [80, 0] }} transition={{ delay: `${i/2.25}`, duration: 1 }} >
                <motion.img whileHover={{ 
                  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)", 
                  y: -25,
                  transition: { duration: .5 } 
                }} 
                
                className="gallery__grid-img" src={image}/>
              </motion.div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Gallery