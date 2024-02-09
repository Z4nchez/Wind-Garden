"use client"
import React, { useRef, useState, useEffect } from 'react'
import styles from "../PanelGuide/PanelGuide.module.css"
import { motion, useInView } from "framer-motion"

function PanelGuide({ actualGuide }) {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [articles, setArticles] = useState([]);
  const [images, setImages] = useState([])

  const estilosDeCarga1 = {
    isOn: { scale: 1, opacity: 1 },
    isOff: { scale: 0.9, opacity: 0 },
  }

  useEffect(() => {
    setArticles(actualGuide.article1.split("//"))
    setImages(actualGuide.img1.split("||"))
  }, [actualGuide])
  

  return (
    <motion.div className={styles.PanelGuide} initial={"isOff"} animate={isInView === true ? "isOn" : "isOff"} transition={{ duration: 0.8, ease: "easeOut" }} variants={estilosDeCarga1} ref={ref}>
        <div className={styles.tituloGuia}>{actualGuide.title}</div>
        <div className={styles.contenidoGuia}>
            <div className={styles.articulos}>
              {articles.map((art) => <div key={articles.indexOf(art)} className={styles.articuloGuia}>{art}</div>)}
            </div>
            <div className={styles.imagenes}>
              {images.map((imgn) => <img key={images.indexOf(imgn)} src={imgn} alt="" className={styles.imagenP}/>)}
            </div>          
        </div>
    </motion.div>
  )
}

export default PanelGuide