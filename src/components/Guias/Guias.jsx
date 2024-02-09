"use client"
import React, { useState, useEffect, useRef } from 'react'
import styles from "../Guias/Guias.module.css"
import { motion, useInView } from "framer-motion"
import { WGContext } from '@/context/WindGardenContext'
import PanelGuide from '../PanelGuide/PanelGuide'

function Guias() {

  const { menuGuide, setMenuGuide, setListGuides, listGuides } = WGContext();
  const [actualGuide, setActualGuide] = useState({name: "", title: "", article1:"", img1: ""})

  async function getListGuides () {
    const res = await fetch("/api/Guides");
    const data = await res.json();
    setListGuides(data);
  }

  useEffect(() => {
    getListGuides ();
  }, [])

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const estilosDeCarga1 = {
    isOn: { scale: 1, opacity: 1 },
    isOff: { scale: 0.9, opacity: 0 },
  }
  
  return (
    <div className={styles.Guias} ref={ref}>
        <motion.div className={styles.GuiasCont} initial={"isOff"} animate={isInView === true ? "isOn" : "isOff"} transition={{ duration: 0.8, ease: "easeOut" }} variants={estilosDeCarga1}>
            <div className={styles.menuCont}>
                <div className={styles.menuCont2}>
                  <motion.div className={styles.menuItem} onClick={() => {setMenuGuide(-1)}} initial={"isOff"} animate={isInView === true ? "isOn" : "isOff"} transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }} variants={estilosDeCarga1}>Inicio</motion.div>
                  {listGuides.map((item) => <motion.div key={listGuides.indexOf(item)} className={styles.menuItem} onClick={() => {setMenuGuide(listGuides.indexOf(item)); setActualGuide(item)}} initial={"isOff"} animate={isInView === true ? "isOn" : "isOff"} transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }} variants={estilosDeCarga1}>{item.title}</motion.div>)}
                </div>                
            </div>
            <div className={styles.contArea}>
                    <div className={styles.contenido}>
                        {menuGuide === -1 && <motion.div className={styles.panel0} initial={"isOff"} animate={isInView === true ? "isOn" : "isOff"} transition={{ duration: 0.8, ease: "easeOut" }} variants={estilosDeCarga1}>
                            <div className={styles.titulo0}>Guias para tus cultivos</div>
                            <img src="portada2A.webp" alt="" />
                            <div className={styles.descripcion0}>Hemos seleccionado informacion, asi como algunos tips y consejos utiles que debes conocer para cultivar en suelos áridos.</div>
                        </motion.div>}
                        {menuGuide === 0 &&  <PanelGuide actualGuide={actualGuide}></PanelGuide>}
                        {menuGuide === 1 &&  <PanelGuide actualGuide={actualGuide}></PanelGuide>}
                        {menuGuide === 2 &&  <PanelGuide actualGuide={actualGuide}></PanelGuide>}
                        {menuGuide === 3 &&  <PanelGuide actualGuide={actualGuide}></PanelGuide>}
                        {menuGuide === 4 &&  <PanelGuide actualGuide={actualGuide}></PanelGuide>}
                        {menuGuide === 5 &&  <PanelGuide actualGuide={actualGuide}></PanelGuide>}
                        {menuGuide === 6 &&  <PanelGuide actualGuide={actualGuide}></PanelGuide>}
                        {menuGuide === 7 &&  <PanelGuide actualGuide={actualGuide}></PanelGuide>}
                        {menuGuide === 8 &&  <PanelGuide actualGuide={actualGuide}></PanelGuide>}
                        {menuGuide === 9 &&  <PanelGuide actualGuide={actualGuide}></PanelGuide>}
                    </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Guias