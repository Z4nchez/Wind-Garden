import React from 'react'
import styles from "../Maps/Maps.module.css"
import Regiones from '@/components/Regiones/Regiones'

function Maps() {
  return (
    <div className={styles.Maps}>
      <Regiones></Regiones>
    </div>
  )
}

export default Maps