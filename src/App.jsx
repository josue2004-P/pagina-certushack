import { Route, Routes, HashRouter } from "react-router-dom";

import Home from "./screens/Home";

import Services from "./screens/Services";
import Ciberinteligencia from "./screens/services/CiberinteligenciaEnCE/Ciberinteligencia";
import Osint from "./screens/services/CiberinteligenciaEnCE/servicios/Osint";
import WhatsappInit from "./screens/services/CiberinteligenciaEnCE/servicios/WhatsappInit";
import Contacto from "./screens/Contacto";
import AnalisisSTW from "./screens/services/CiberinteligenciaEnCE/servicios/AnalisisSTW";
import AtaquesDenegacion from "./screens/services/Hacking/servcicios/AtaquesDenegacion";
import CCTV from "./screens/services/Ciberseguridad/servicios/CCTV"
import Ciberespionaje from "./screens/services/Hacking/servcicios/Ciberespionaje";
import Ciberseguridad from "./screens/services/Ciberseguridad/Ciberseguridad";
import CreacionITI from "./screens/services/Ciberseguridad/servicios/CreacionITI";
import HackingAPW from "./screens/services/Hacking/servcicios/HackinAPW";
import Hacking from "./screens/services/Hacking/Hacking";
import HackingCampañaPolitica from "./screens/services/Hacking/servcicios/HackingCampañaPolitica";
import ManipulacionRedes from "./screens/services/Hacking/servcicios/ManipulacionRedes";
import RoboInformacion from "./screens/services/Hacking/servcicios/RoboInformacion";
import Tecnologia from "./screens/services/Tecnologia/Tecnologia";
import CerTusHack from "./screens/services/CerTusHack";
import EvaluacionAmenazas from "./screens/services/CiberinteligenciaEnCE/servicios/EvaluacionAmenazas";

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
        <Route path="/services/evalucionAmenazas" element={<EvaluacionAmenazas />} />
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
