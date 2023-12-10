import Footer from "../componentes/Footer";
import "../css/home.css";
import { Link } from "react-router-dom";

import Services from "../componentes/Services";
import Introduccion from "../componentes/Introduccion";
import Hero from "../componentes/Hero";
import Testimonios from "../componentes/Testimonios"
import Hero2 from "../componentes/Hero2";
import ServicioUno from "../componentes/servicios/ServicioUno";
import ServicioDos from "../componentes/servicios/ServicioDos";
import ServicioTres from "../componentes/servicios/ServicioTres";
import About from "../componentes/About";
import Contactanos from "../componentes/Contactanos";
import SectionDos from "../componentes/SectionDos";

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />

      <Introduccion />

      <Services />

      <Testimonios/>

      <Hero2/>

      <ServicioUno/>
      <ServicioDos/>
      <ServicioTres/>

      <About/>

      <SectionDos/>

      <Contactanos/>

      <Footer/>

    </div>
  );
}
