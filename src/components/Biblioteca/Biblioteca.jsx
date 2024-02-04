"use client"
import React, { useRef } from 'react'
import styles from "../Biblioteca/Biblioteca.module.css"
import { motion, useInView } from "framer-motion"
import { WGContext } from "@/context/WindGardenContext"
import PanelCrops from '../PanelCrops/PanelCrops'
import CropInfo from '../CropInfo/CropInfo'

function Biblioteca() {

  const { menuCrop, setMenuCrop, setListCrops, actualCrop, setLastMenuCrop } = WGContext();

  async function getCrops (cultivo) {
    const res = await fetch("/api/Crops", {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(cultivo)
    })
    const data = await res.json();
    setListCrops(data)
  }

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const estilosDeCarga1 = {
    isOn: { scale: 1, opacity: 1 },
    isOff: { scale: 0.9, opacity: 0 },
  }

  return (
    <div className={styles.Biblioteca} ref={ref}>
      <motion.div className={styles.BibliotecaCont} initial={"isOff"} animate={isInView === true ? "isOn" : "isOff"} transition={{ duration: 0.8, ease: "easeOut" }} variants={estilosDeCarga1}>
        <div className={styles.menuCont}>
            <div className={styles.menuItem} onClick={() => setMenuCrop("0")}>Inicio</div>
            <div className={styles.menuItem} onClick={() => {getCrops({tipo: "arbol"}); setMenuCrop("1"); setLastMenuCrop("1")}}>Arboles</div>
            <div className={styles.menuItem} onClick={() => {getCrops({tipo: "frutal"}); setMenuCrop("2"); setLastMenuCrop("2")}}>Frutales</div>
            <div className={styles.menuItem} onClick={() => {getCrops({tipo: "hortaliza"}); setMenuCrop("3"); setLastMenuCrop("3")}}>Hortalizas</div>
        </div>
        <div className={styles.contArea}>
          <div className={styles.contenido}>
            {menuCrop === "0" && <motion.div className={styles.panel0} initial={"isOff"} animate={isInView === true ? "isOn" : "isOff"} transition={{ duration: 0.8, ease: "easeOut" }} variants={estilosDeCarga1}>
              <div className={styles.titulo0}>Biblioteca de Cultivos</div>
              <img src="portadaCrop.webp" alt="" />
              <div className={styles.descripcion0}>Selecciona una categoria y encuentra toda la información que necesites sobre el cultivo que estás buscando, desde arboles hasta frutales y hortalizas.</div>
            </motion.div>}
            {menuCrop === "1" && <PanelCrops></PanelCrops>}
            {menuCrop === "2" && <PanelCrops></PanelCrops>}
            {menuCrop === "3" && <PanelCrops></PanelCrops>}
            {menuCrop === "4" && <CropInfo crop={actualCrop}></CropInfo>}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Biblioteca