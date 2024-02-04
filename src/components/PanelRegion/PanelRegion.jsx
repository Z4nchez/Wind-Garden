"use client"
import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion"
import styles from "../PanelRegion/PanelRegion.module.css"
import { WGContext } from "@/context/WindGardenContext"

function PanelRegion({ region }) {

  const { setMenuMap } = WGContext();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const estilosDeCarga1 = {
    isOn: { scale: 1, opacity: 1 },
    isOff: { scale: 0.9, opacity: 0 },
  }

  return (
    <motion.div className={styles.PanelRegion} initial={"isOff"} animate={isInView === true ? "isOn" : "isOff"} transition={{ duration: 0.8, ease: "easeOut" }} variants={estilosDeCarga1} ref={ref}>
        <div className={styles.titulo}>{region.titulo}</div>
        <section className={styles.articulos}>
            <article className={styles.articulo}>
                <p className={styles.art1}>{region.articulo1}</p>
                <img src={region.imagen1} alt="" />
            </article>
            <article className={styles.articulo}>
                <p className={styles.art1}>{region.articulo2}</p>
                <img src={region.imagen2} alt="" />
            </article>
            <article className={styles.articulo}>
                <p className={styles.art1}>{region.articulo3}</p>
                <img src={region.imagen3} alt="" />
            </article>
        </section>       
        <div className={styles.pie}>
            <div className={styles.button} onClick={() => setMenuMap(-1)}>Atrás</div>
        </div>
    </motion.div>
  )
}

export default PanelRegion