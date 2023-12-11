import NavBarServices from "../../../../componentes/NavBarServices";
import { Link } from "react-router-dom";

export default function EvaluacionAmenazas() {
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
              <Link to="/services/evalucionAmenazas">
                Evalucion de amenzazas
              </Link>
            </div>

            {/* PONER INFORMACION */}

            <div>
              <div>
                <h1 className="text-4xl sm:text-5xl  pl-3 text-gray-100 font-extrabold">
                  Evaluacion de amenazas
                </h1>
              </div>

              <div className="mt-5">
                <div className=" md:w-9/12 lg:w-1/2">
                  <div className="">
                    <h1 className="text-gray-500 font-medium px-3 py-3">
                      Realizacion de analisis de vulneravilidades en los sitemas
                      de informacion de la campaña para identificar posibles
                      puntos debiles y mitigar riesgos.
                    </h1>
                  </div>
                  <div className="">
                    <h1 className="text-gray-500 font-medium px-3">
                      Evaluacion de presencia de actores maliciosos (hackers,
                      grupos de desinformacion) que podrian intentar interferir
                      en la campaña.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
