import React, { useRef } from 'react'
import styles from "../PanelGuide/PanelGuide.module.css"
import { motion, useInView } from "framer-motion"

function PanelGuide({ actualGuide }) {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const estilosDeCarga1 = {
    isOn: { scale: 1, opacity: 1 },
    isOff: { scale: 0.9, opacity: 0 },
  }

  return (
    <motion.div className={styles.PanelGuide} initial={"isOff"} animate={isInView === true ? "isOn" : "isOff"} transition={{ duration: 0.8, ease: "easeOut" }} variants={estilosDeCarga1} ref={ref}>
        <div className={styles.tituloGuia}>{actualGuide.title}</div>
        <div className={styles.contenidoGuia}>
            <div className={styles.articuloGuia}>{actualGuide.article1}</div>
            <img src={actualGuide.img1} alt="" />
        </div>
    </motion.div>
  )
}

export default PanelGuide