"use client"
import styles from "./page.module.css";
import { useState, useRef } from "react"
import { WGContext } from "@/context/WindGardenContext"
import { motion, useInView } from "framer-motion"
import Link from "next/link"

export default function Home() {

  const { setScrollH, setMenuH, setMenuCrop, setMenuMap, setMenuGuide } = WGContext();
  const [scrollTop, setScrollTop] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: false });
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: false });
  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { once: false });

  const estilosDeCarga1 = {
    isOn: { height: "70%", opacity: 1 },
    isOff: { height: "10%", opacity: 0 },
  }
  const estilosDeCarga2 = {
    isOn: { scale: 1, opacity: 1 },
    isOff: { scale: 0.9, opacity: 0 },
  }
  const estilosDeCarga3 = {
    isOn: { marginTop: "0", opacity: 1 },
    isOff: { marginTop: "50px", opacity: 0 },
  }
  const estilosDeCarga4 = {
    isOn: { marginLeft: "0", opacity: 1 },
    isOff: { marginLeft: "50px", opacity: 0 },
  }
  

  function handleScroll(scrollY) {
    setScrollTop(scrollY);

    if (scrollTop > 50){
      setScrollH(true)
    }
    else{
      setScrollH(false)
    }
  }

  return (
    <main className={styles.main} onScroll={(e) => handleScroll(e.currentTarget.scrollTop)}>
      <section className={styles.section0} >
        <div className={styles.module00}>
          <motion.div className={styles.module0A} initial={"isOff"} animate={isInView === true ? "isOn" : "isOff"} transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }} variants={estilosDeCarga1}>
            <p className={styles.presentation}>¡Bienvenidos a Wind Garden! Exploramos el fascinante mundo de la agricultura en suelos áridos y semiáridos. Descubre técnicas innovadoras, consejos prácticos y experiencias inspiradoras para cultivar con éxito en condiciones desafiantes. Únete a nuestra comunidad apasionada y cultiva la tierra con conocimiento. ¡Sembremos juntos el futuro!</p>
          </motion.div>
          <motion.div className={styles.module0B} initial={"isOff"} animate={isInView === true ? "isOn" : "isOff"} transition={{ duration: 0.6, ease: "easeOut" }} variants={estilosDeCarga2}>
            <div className={styles.tittle0Cont}>
              <div className={styles.tCont} ref={ref}>
                <div className={styles.tittle0}>Wind Garden</div>
              </div>              
              <div className={styles.icon0}>
                <img src="logom.png" alt="" />
              </div>
              <div className={styles.button0Cont}>
                <Link className={styles.button0} href="#footer">Contáctanos</Link>
              </div>
              <div className={styles.desc2Cont}>
                <p className={styles.presentation2}>¡Bienvenidos a Wind Garden! Exploramos el fascinante mundo de la agricultura en suelos áridos y semiáridos. Descubre técnicas innovadoras, consejos prácticos y experiencias inspiradoras para cultivar con éxito en condiciones desafiantes. Únete a nuestra comunidad apasionada y cultiva la tierra con conocimiento. ¡Sembremos juntos el futuro!</p>
              </div>
            </div>          
          </motion.div>
        </div>       
      </section>
      <section className={styles.section1}>
        <div className={styles.section1Cont}>
          <div className={styles.topBar}></div>
          <div className={styles.tittle1Cont} ref={ref2}>
            <div className={styles.tittle1}>Biblioteca</div>
            <Link href="/Crops" className={styles.button1} onClick={() => {setMenuCrop("0"); setMenuH(false); setScrollH(false)}}>Ver Mas</Link>
          </div>
          <motion.div className={styles.panel1} initial={"isOff"} animate={isInView2 === true ? "isOn" : "isOff"} transition={{ duration: 0.8, ease: "easeOut"}} variants={estilosDeCarga2}>
            <div className={styles.module1A} >
              <div className={styles.tittle1A} >Arboles</div>
              <img src="imgArt1a.webp" alt="" />
              <p>Descubre técnicas avanzadas y estrategias efectivas para el cultivo de árboles en entornos desafiantes. Desde la elección de especies resistentes hasta métodos de riego eficientes, aquí encontrarás todo lo necesario para transformar suelos áridos en oasis frondosos.</p>
            </div>
            <div className={styles.module1A} >
              <div className={styles.tittle1A}>Frutales</div>
              <img src="imgArt1b.webp" alt="" />
              <p>Sumérgete en la riqueza de la sección dedicada a la siembra de plantas y árboles frutales. Explora consejos especializados sobre la selección de variedades, cuidados específicos y técnicas de poda para cultivar frutas deliciosas en condiciones semiáridas con éxito garantizado.</p>
            </div>
            <div className={styles.module1A} >
              <div className={styles.tittle1A}>Hortalizas</div>
              <img src="imgArt1c.webp" alt="" />
              <p>Nuestra sección sobre el cultivo de hortalizas te guiará desde la siembra hasta la cosecha, ofreciendo nuestra perspectiva sobre la elección de cultivos ideales, sistemas de riego adaptados y prácticas sostenibles para maximizar la productividad en suelos áridos y semiáridos.</p>
            </div>
          </motion.div>
          <div className={styles.bottomBar}></div>
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.section2Cont}>
          <div className={styles.topBar}></div>
          <div className={styles.tittle2} ref={ref3}>Guias</div>
          <motion.div className={styles.panel2} initial={"isOff"} animate={isInView3 === true ? "isOn" : "isOff"} transition={{ duration: 0.8, ease: "easeOut"}} variants={estilosDeCarga3}>
            <article className={styles.article2}>
              <img src="imgAbono.png" alt="" />
              <p>En la sección "Selección de Especies Resistentes", explorarás las mejores opciones vegetales adaptadas a condiciones desafiantes, asegurando un crecimiento robusto, asi como saber cual es la epoca mas optima para cada proceso de cultivo.</p>
            </article>
            <article className={styles.article2}>
              <img src="imgEstaciones.png" alt="" />
              <p>Sumérgete en "Riego Eficiente" para aprender estrategias que maximizan la hidratación de tus cultivos. Además, nuestra guía sobre "Técnicas de Conservación de Agua" ofrece prácticos consejos para preservar este recurso vital y promover la sostenibilidad en tu agricultura.</p>
            </article>
            <article className={styles.article2}>
              <img src="imgPala.png" alt="" />
              <p>Avanza hacia la sección "Nutrientes Esenciales" para comprender la fertilización precisa que revitalizará suelos áridos, garantizando cosechas saludables y sostenibles. Con estas guías, cultivar en entornos desafiantes se convierte en una experiencia guiada y exitosa.</p>
            </article>
          </motion.div>
          <div className={styles.button2Cont}>
            <Link className={styles.button2} href="/Guides" onClick={() => {setMenuGuide(-1); setMenuH(false); setScrollH(false)}}>Ver mas</Link>
          </div>
          <div className={styles.bottomBar}></div>
        </div>
      </section>
      <section className={styles.section3}>
        <div className={styles.section3Cont}>
          <div className={styles.topBar}></div>
          <div className={styles.tittle3} ref={ref4}>Regiones Aridas en el mundo</div>
          <motion.div className={styles.panel3} initial={"isOff"} animate={isInView4 === true ? "isOn" : "isOff"} transition={{ duration: 0.8, ease: "easeOut"}} variants={estilosDeCarga4}>
            <div className={styles.module3A}>
              <div className={styles.fondo3Cont}>
                <div className={styles.carrucel}>
                  <div className={styles.img3ContA}>
                    <img src="imgArt3a.jpg" alt="" className={styles.img3A}/>
                  </div>
                  <div className={styles.img3ContB}>
                    <img src="imgArt3b.jpg" alt="" className={styles.img3B}/>                 
                  </div>
                  <div className={styles.img3ContC}>
                    <img src="imgArt3c.jpg" alt="" className={styles.img3C}/>                  
                  </div>
                  <div className={styles.img3ContD}>
                    <img src="imgArt3d.jpg" alt="" className={styles.img3D}/>                 
                  </div>
                  <div className={styles.img3ContE}>
                    <img src="imgArt3a.jpg" alt="" className={styles.img3E}/>
                  </div>
                </div>               
              </div>
              <div className={styles.button3Cont}>
                <Link className={styles.button3} href="/Maps" onClick={() => {setMenuMap(-1); setMenuH(false); setScrollH(false)}}>Ver mas</Link>
              </div>
            </div>
            <div className={styles.module3B}>
              <p>En esta sección, exploraremos las diversas regiones áridas del planeta y cómo se están buscando métodos innovadores para promover la agricultura en estos desafiantes entornos. Descubriremos soluciones actuales y futuras para superar las condiciones adversas del clima y construir un futuro agrícola más resiliente en estas áreas.</p>
            </div>            
          </motion.div>
          <div className={styles.bottomBar}></div>
        </div>
      </section>
      <div className={styles.footer} id="footer">
        <div className={styles.footerCont}>
          <img src="windG.svg" alt="logo" className={styles.logoF}/>
          <a className={styles.wLink} href='https://z4nchez.github.io/portfolio'>By Walter Sanchez</a>
          <img src="logom.png" alt="" className={styles.logomF}/>
        </div>
      </div>
    </main>
  );
}
