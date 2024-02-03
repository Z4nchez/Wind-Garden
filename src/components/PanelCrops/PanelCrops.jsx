import React, { useRef } from 'react'
import ItemCrop from '../ItemCrop/ItemCrop'
import styles from "../PanelCrops/PanelCrops.module.css"
import { WGContext } from "@/context/WindGardenContext"
import { motion, useInView } from "framer-motion"

function PanelCrops() {

  const { listCrops } = WGContext();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const estilosDeCarga = {
    isOn: { scale: 1, opacity: 1 },
    isOff: { scale: 0.95, opacity: 0 },
  }

  return (
    <motion.div className={styles.PanelCrops} ref={ref} initial={"isOff"} animate={isInView === true ? "isOn" : "isOff"} transition={{ duration: 0.8, ease: "easeOut" }} variants={estilosDeCarga}>
        {listCrops.map((item) => <ItemCrop key={listCrops.indexOf(item)} dato={item}></ItemCrop>)}
    </motion.div>
  )
}

export default PanelCrops