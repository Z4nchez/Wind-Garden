"use client"
import React, { useRef, useState } from 'react'
import styles from "../Regiones/Regiones.module.css"
import { WGContext } from "@/context/WindGardenContext"
import { motion, useInView } from "framer-motion"
import PanelRegion from '../PanelRegion/PanelRegion'

function Regiones() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const { menuMap, setMenuMap } = WGContext();
    const [actualRegion, setActualRegion] = useState({nombre: ""})
  
    const estilosDeCarga1 = {
      isOn: { scale: 1, opacity: 1 },
      isOff: { scale: 0.9, opacity: 0 },
    }

    async function getRegion (region) {
      const res = await fetch("/api/Maps", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(region)
      })
      const data = await res.json();
      setActualRegion(data[0])
    }

  return (
    <div className={styles.Regiones} ref={ref}>
        <motion.div className={styles.RegionesCont} initial={"isOff"} animate={isInView === true ? "isOn" : "isOff"} transition={{ duration: 0.8, ease: "easeOut" }} variants={estilosDeCarga1}>
            <section className={styles.tittlePanel}>
                <div className={styles.tittle}>Regiones Áridas del mundo</div>
                <div className={styles.subtittle}>Las regiones áridas suelen presentar escasa precipitación, temperaturas extremas y adaptaciones únicas en flora/fauna.</div>
            </section>
            <section className={styles.mapaCont}>
                {menuMap === -1 && <motion.div className={styles.mapa_c} initial={"isOff"} animate={isInView === true ? "isOn" : "isOff"} transition={{ duration: 0.8, ease: "easeOut" }} variants={estilosDeCarga1}>
                    <img src='mapaAndino.png' className={styles.mAndino} alt="" onClick={() => {getRegion({nombre: "Andino"}); setMenuMap(0)}}/>
                    <img src='mapaArabia.png' className={styles.mArabia} alt="" onClick={() => {getRegion({nombre: "Arabia"}); setMenuMap(1)}}/>
                    <img src='mapaAustralia.png' className={styles.mAustralia} alt="" onClick={() => {getRegion({nombre: "Australiano"}); setMenuMap(2)}}/>
                    <img src='mapaGobi.png' className={styles.mGobi} alt="" onClick={() => {getRegion({nombre: "Gobi"}); setMenuMap(3)}}/>
                    <img src='mapaTurkstan.png' className={styles.mTurk} alt="" onClick={() => {getRegion({nombre: "Karakum"}); setMenuMap(4)}}/>
                    <img src='mapaIran.png' className={styles.mIran} alt="" onClick={() => {getRegion({nombre: "Iran"}); setMenuMap(5)}}/>
                    <img src='mapaIndia.png' className={styles.mIndia} alt="" onClick={() => {getRegion({nombre: "Thar"}); setMenuMap(6)}}/>
                    <img src='mapaSahara.png' className={styles.mSahara} alt="" onClick={() => {getRegion({nombre: "Sahara"}); setMenuMap(7)}}/>
                    <img src='mapaSonora.png' className={styles.mSonora} alt="" onClick={() => {getRegion({nombre: "Sonora"}); setMenuMap(8)}}/>
                    <img src='mapaSudafrica.png' className={styles.mSudafrica} alt="" onClick={() => {getRegion({nombre: "Kalahari"}); setMenuMap(9)}}/>
                </motion.div>}
                {menuMap === 0 && <PanelRegion region={actualRegion}></PanelRegion>}
                {menuMap === 1 && <PanelRegion region={actualRegion}></PanelRegion>}
                {menuMap === 2 && <PanelRegion region={actualRegion}></PanelRegion>}
                {menuMap === 3 && <PanelRegion region={actualRegion}></PanelRegion>}
                {menuMap === 4 && <PanelRegion region={actualRegion}></PanelRegion>}
                {menuMap === 5 && <PanelRegion region={actualRegion}></PanelRegion>}
                {menuMap === 6 && <PanelRegion region={actualRegion}></PanelRegion>}
                {menuMap === 7 && <PanelRegion region={actualRegion}></PanelRegion>}
                {menuMap === 8 && <PanelRegion region={actualRegion}></PanelRegion>}
                {menuMap === 9 && <PanelRegion region={actualRegion}></PanelRegion>}
            </section>
        </motion.div>
    </div>
  )
}

export default Regiones