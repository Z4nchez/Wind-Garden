"use client"
import React from 'react'
import styles from "../ItemCrop/ItemCrop.module.css"
import { WGContext } from '@/context/WindGardenContext'

function ItemCrop({dato}) {

  const { setActualCrop, setMenuCrop } = WGContext();

  return (
    <div className={styles.ItemCrop} onClick={() => {setActualCrop(dato); setMenuCrop("4")}}>
      <img src={dato.imagen} alt="" />
      <div className={styles.titulo}>{dato.nombre}</div>      
    </div>
  )
}

export default ItemCrop