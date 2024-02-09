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
  const [actualCrop, setActualCrop] = useState({nombre: "", tipo: "", descripcion: "", descripcion2 : "", imagen: ""})
  const [lastMenuCrop, setLastMenuCrop] = useState("0")
  const [menuGuide, setMenuGuide] = useState(-1)
  const [menuMap, setMenuMap] = useState(-1)
  const [scrollH, setScrollH] = useState(false)
  const [listCrops, setListCrops] = useState([])
  const [listGuides, setListGuides] = useState([])

  return (
    <WindGardenContext.Provider value={{ scrollH, menuH, menuCrop, menuGuide, menuMap, listCrops, listGuides, actualCrop, lastMenuCrop, setLastMenuCrop, setActualCrop, setScrollH, setMenuH, setMenuCrop, setMenuMap, setListCrops, setMenuGuide, setListGuides }}>
        {children}
    </WindGardenContext.Provider>
  )
}
