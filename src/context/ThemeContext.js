import React, { useState } from "react"

export const ThemeContext = React.createContext({ visible: false, setFlow: () => {}})

export const Provider = (props) => {
  const [visible, setFlow] = useState("")
  const value = { visible, setFlow }

  return (
    <ThemeContext.Provider value={value}>
    {props.children}
    </ThemeContext.Provider>
  )
}

