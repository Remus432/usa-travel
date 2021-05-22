import React from "react"
import { AnimatePresence } from "framer-motion"

const AnimatedHeadline = ({ currState }) => {
  console.log(currState)

  return (
    <AnimatePresence>
      {
        currState.val && (
          <h2 className="state__cities-city-info-subheadline">{currState.text}</h2>
        )
      }
    </AnimatePresence>
  )
}

export default AnimatedHeadline