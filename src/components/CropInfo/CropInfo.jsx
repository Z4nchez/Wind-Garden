"use client"
import React, { useRef } from 'react'
import styles from "../CropInfo/CropInfo.module.css"
import { WGContext } from "@/context/WindGardenContext"
import { motion, useInView } from "framer-motion"

function CropInfo({ crop }) {

  const { lastMenuCrop, setMenuCrop } = WGContext();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const estilosDeCarga1 = {
    isOn: { scale: 1, opacity: 1 },
    isOff: { scale: 0.9, opacity: 0 },
  }
    
  return (
    <motion.div className={styles.CropInfo} initial={"isOff"} animate={isInView === true ? "isOn" : "isOff"} transition={{ duration: 0.8, ease: "easeOut" }} variants={estilosDeCarga1} ref={ref}>       
        <div className={styles.tittleCont}>
            <div className={styles.tCont}>
                <div className={styles.tittle}>{crop.nombre}</div>
                <img src={crop.imagen} alt="" />
            </div>
        </div>
        <article className={styles.articulo}>{crop.descripcion}</article>
        <div className={styles.pie}>
            <div className={styles.button} onClick={() => setMenuCrop(lastMenuCrop)}>Atrás</div>
        </div>
    </motion.div>
  )
}

export default CropInfo