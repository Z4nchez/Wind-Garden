"use client"
import React from 'react'
import styles from "../ItemCrop/ItemCrop.module.css"

function ItemCrop({dato}) {

  return (
    <div className={styles.ItemCrop}>
      <img src={dato.imagen} alt="" />
      <div className={styles.titulo}>{dato.nombre}</div>      
    </div>
  )
}

export default ItemCrop