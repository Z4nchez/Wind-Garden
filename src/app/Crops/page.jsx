import React from 'react'
import Biblioteca from '@/components/Biblioteca/Biblioteca'
import styles from "../Crops/Crops.module.css"

function Crops() {
  return (
    <div className={styles.Crops}>
      <Biblioteca></Biblioteca>
    </div>
  )
}

export default Crops