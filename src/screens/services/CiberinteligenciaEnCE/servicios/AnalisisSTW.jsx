import NavBarServices from "../../../../componentes/NavBarServices";
import { Link } from "react-router-dom";

export default function AnalisisSTW() {
  return (
    <>
      <div className="bg-black ">
        <NavBarServices />

        <div class="p-4 pt-16 sm:ml-64">
          <div className="">
            <div className="mb-10 mt-10 lg:mt-0 flex text-xs text-gray-100 font-medium">
              <Link to="/">Home</Link>
              <p className="mx-1">/</p>
              <Link to="/services">Servicios</Link>
              <p className="mx-1">/</p>
              <Link to="/services/analisisSTW">Analisis de sitios web</Link>
            </div>

            {/* PONER INFORMACION */}

            <div>
              <div>
                <h1 className="text-4xl sm:text-5xl  sm:text-5xl  pl-3 text-gray-100 font-extrabold">
                  Analisis de sitios web
                </h1>
              </div>

              <div className="mt-5">
                <div className=" md:w-9/12 lg:w-1/2">
                  <h1 className="text-gray-500 font-medium px-3 py-3">
                    Evaluacion de la efectividad del sitio wed oficial de la
                    campaña (diseño, accesibilidad y mensaje).
                  </h1>

                  <h1 className="text-gray-500 font-medium px-3">
                    Auditoria a sistemas web con pruebas de vulnerabilidad
                  </h1>
                </div>
              </div>

              <div className="absolute bottom-4 right-0 hidden lg:flex">
                <img
                  className=" w-[28rem] h-[28rem]  "
                  src="../img/4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
