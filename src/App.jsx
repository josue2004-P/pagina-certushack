import { Route, Routes, HashRouter } from "react-router-dom";

import Home from "./screens/Home";

import Services from "./screens/Services";
import Ciberinteligencia from "./screens/services/Ciberinteligencia";
import Osint from "./screens/services/Osint";
import WhatsappInit from "./screens/services/WhatsappInit";
import Contacto from "./screens/services/Contacto";
import AnalisisSTW from "./screens/services/AnalisisSTW";
import AtaquesDenegacion from "./screens/services/AtaquesDenegacion";
import CCTV from "./screens/services/CCTV";
import Ciberespionaje from "./screens/services/Ciberespionaje";
import Ciberseguridad from "./screens/services/Ciberseguridad";
import ConsultorioCTI from "./screens/services/ConsutorioCIT";
import CreacionITI from "./screens/services/CreacionITI";
import HackingAPW from "./screens/services/HackinAPW";
import Hacking from "./screens/services/Hacking";
import HackingCampañaPolitica from "./screens/services/HackingCampañaPolitica";
import ManipulacionRedes from "./screens/services/ManipulacionRedes";
import RoboInformacion from "./screens/services/RoboInformacion";
import Tecnologia from "./screens/services/Tecnologia";
import CerTusHack from "./screens/services/CerTusHack";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* servicios */}

        <Route path="/services" element={<Services />} />
        <Route
          path="/services/ciberinteligencia"
          element={<Ciberinteligencia />}
        />
        <Route path="/services/osint" element={<Osint />} />
        <Route path="/services/whatsappInit" element={<WhatsappInit />} />
        <Route path="/services/analisisSTW" element={<AnalisisSTW />} />
        <Route
          path="/services/ataquesdenagacion"
          element={<AtaquesDenegacion />}
        />
        <Route path="/services/cctv" element={<CCTV />} />
        <Route path="/services/ciberespionaje" element={<Ciberespionaje />} />
        <Route path="/services/ciberseguridad" element={<Ciberseguridad />} />
        <Route path="/services/consultorioCTI" element={<ConsultorioCTI />} />
        <Route path="/services/creacionITI" element={<CreacionITI />} />
        <Route path="/services/hackingAPW" element={<HackingAPW />} />
        <Route path="/services/hacking" element={<Hacking />} />
        <Route
          path="/services/hackingcampañapolitica"
          element={<HackingCampañaPolitica />}
        />
        <Route
          path="/services/manipulacionRedes"
          element={<ManipulacionRedes />}
        />
        <Route path="/services/roboInformacion" element={<RoboInformacion />} />
        <Route path="/services/tecnologia" element={<Tecnologia />} />
        <Route path="/services/CerTusHack" element={<CerTusHack />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </HashRouter>
  );
}
