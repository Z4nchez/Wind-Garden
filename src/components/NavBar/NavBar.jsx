
"use client"
import React from 'react'
import styles from "../NavBar/NavBar.module.css"
import Link from "next/link"
import { WGContext } from "../../context/WindGardenContext"
import { motion } from "framer-motion"

function NavBar() {

  const { scrollH } = WGContext();

  const estilosScroll = {
    isScroll: { height: "5vh", backgroundColor: "rgb(172, 128, 103, 0)" },
    noScroll: { height: "12vh", backgroundColor: "rgba(172, 128, 103, 0)" },
  }

  return (
    <motion.div className={styles.NavBar} initial={"noScroll"} animate={ scrollH === true ? "isScroll" : "noScroll"} variants={estilosScroll}>
        <div className={styles.module0}>
          <img src="windG.svg" alt="logo" />
        </div>
        <div className={styles.module2}></div>
        <ul className={styles.module1}>
          <li className={styles.linkCont}>
            <Link className={styles.link} href="/">Inicio</Link>
          </li>
          <li className={styles.linkCont}>
            <Link className={styles.link} href="/Crops">Cultivos</Link>
          </li>
          <li className={styles.linkCont}>
            <Link className={styles.link} href="/Guides">Guias</Link>
          </li>
          <li className={styles.linkCont}>
            <Link className={styles.link} href="/Maps">Mapas</Link>
          </li>
        </ul>        
    </motion.div>
  )
}

export default NavBar