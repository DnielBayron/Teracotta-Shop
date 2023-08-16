import React, { createContext, useState } from 'react'


export const AboutContext = createContext(null);

export const AboutContextProvider = (props) => {

const [menuOpen , setMenuOpen] = useState(false);



const contextValue = {menuOpen, setMenuOpen}
  return (
<AboutContext.Provider value= {contextValue}>
      {props.children}
    </AboutContext.Provider>
  )
}
