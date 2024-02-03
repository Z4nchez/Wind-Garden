import React from 'react'
import styles from "../Backscreen/Backscreen.module.css"

function Backscreen() {
  return (
    <div className={styles.Backscreen}>
        <video className={styles.video} src="Fondito.mp4" autoPlay muted loop></video>  
        <div className={styles.lumin}></div>
    </div>
  )
}

export default Backscreen