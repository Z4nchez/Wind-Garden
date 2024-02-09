"use client"
import React, { useRef } from 'react'
import styles from "../MenuH/MenuH.module.css"
import Link from "next/link"
import { WGContext } from "../../context/WindGardenContext"
import { motion, useInView } from "framer-motion"

function MenuH() {

  const { setMenuH, setScrollH, menuH } = WGContext();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const estilosDeCarga1 = {
    isOn: { scale: 1, opacity: 1 },
    isOff: { scale: 0.9, opacity: 0 },
  }

  return (
    <motion.div className={menuH === true ? styles.MenuH : styles.MenuH2} initial={"isOff"} animate={isInView === true ? "isOn" : "isOff"} transition={{ duration: 0.8, ease: "easeOut" }} variants={estilosDeCarga1}>
        <div className={styles.menuHCont}>
            <div className={styles.itemCont} onClick={() => {setScrollH(false); setMenuH(false)}} ref={ref}>
                <Link className={styles.link} href="/">Inicio</Link>
            </div>
            <div className={styles.itemCont} onClick={() => {setScrollH(false); setMenuH(false)}}>
                <Link className={styles.link} href="/Crops">Cultivos</Link>
            </div>
            <div className={styles.itemCont} onClick={() => {setScrollH(false); setMenuH(false)}}>
                <Link className={styles.link} href="/Guides">Guias</Link>
            </div>
            <div className={styles.itemCont} onClick={() => {setScrollH(false); setMenuH(false)}}>
                <Link className={styles.link} href="/Maps">Mapas</Link>
            </div>
        </div>
    </motion.div>
  )
}

export default MenuH