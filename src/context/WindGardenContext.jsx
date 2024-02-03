"use client"
import { useContext, createContext, useState } from 'react'

export const WindGardenContext = createContext();

export function WGContext(){
    const contexto1 = useContext(WindGardenContext);
    return contexto1;
}

export function WindGardenContextProvider({children}) {

  const [menuH, setMenuH] = useState(false)
  const [menuCrop, setMenuCrop] = useState("0")
  const [menuGuide, setMenuGuide] = useState(-1)
  const [scrollH, setScrollH] = useState(false)
  const [listCrops, setListCrops] = useState([])
  const [listGuides, setListGuides] = useState([])

  return (
    <WindGardenContext.Provider value={{ scrollH, menuH, menuCrop, menuGuide, listCrops, listGuides, setScrollH, setMenuH, setMenuCrop, setListCrops, setMenuGuide, setListGuides }}>
        {children}
    </WindGardenContext.Provider>
  )
}
