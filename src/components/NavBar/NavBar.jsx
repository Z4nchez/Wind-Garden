
"use client"
import React from 'react'
import styles from "../NavBar/NavBar.module.css"
import Link from "next/link"
import { WGContext } from "../../context/WindGardenContext"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function NavBar() {

  const { scrollH, setScrollH, setMenuH, menuH, setMenuCrop, setMenuMap, setMenuGuide } = WGContext();

  const estilosScroll = {
    isScroll: { height: "5vh", backgroundColor: "rgb(172, 128, 103, 0)" },
    noScroll: { height: "12vh", backgroundColor: "rgba(172, 128, 103, 0)" },
  }

  function actionMenu(){
    if (menuH === false){
      setMenuH(true)
    }
    else{
      setMenuH(false)
    }
  }

  return (
    <motion.div className={styles.NavBar} initial={"noScroll"} animate={ scrollH === true ? "isScroll" : "noScroll"} variants={estilosScroll}>
        <div className={styles.module0}>
          <img src="windG.svg" alt="logo" />
        </div>
        <ul className={styles.module1}>
          <li className={styles.linkCont} onClick={() => {setScrollH(false); setMenuH(false)}}>
            <Link className={styles.link} href="/">Inicio</Link>
          </li>
          <li className={styles.linkCont} onClick={() => {setMenuCrop("0")}}>
            <Link className={styles.link} href="/Crops">Cultivos</Link>
          </li>
          <li className={styles.linkCont} onClick={() => {setMenuGuide(-1)}}>
            <Link className={styles.link} href="/Guides">Guias</Link>
          </li>
          <li className={styles.linkCont} onClick={() => {setMenuMap(-1)}}>
            <Link className={styles.link} href="/Maps">Mapas</Link>
          </li>
          <div className={styles.module2} onClick={actionMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </ul>        
    </motion.div>
  )
}

export default NavBar