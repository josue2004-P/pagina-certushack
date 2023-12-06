import NavBarServices from "../../../../componentes/NavBarServices";
import { Link } from "react-router-dom";

export default function EvaluacionAmenazas() {
  return (
    <>
      <NavBarServices />
      <div className="h-screen w-full bg-black pt-10 lg:pt-0">
        <div className="lg:h-[30%] flex justify-center items-center">
          <div className="text-center text-[#8A0026] font-extrabold mt-10">
            <h1 className="uppercase text-4xl lg:text-6xl">
              Evaluacion de amenazas
            </h1>
          </div>
        </div>
        <div className="lg:h-[50%]  mt-10 lg:mt-0">
          <div className="flex justify-center  h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-0  md:gap-x-4">
              <div className="h-full w-[20rem] xs:w-[24rem] border-4 border-[#8A0026]">
                <h1 className="text-white text-[1.3rem] lg:text-[1.8rem] font-extrabold p-3">
                  Realizacion de analisis de vulneravilidades en los sitemas de
                  informacion de la campaña para identificar posibles puntos
                  debiles y mitigar riesgos.
                </h1>
              </div>
              <div className="h-full w-[20rem] xs:w-[24rem] border-4 border-[#8A0026]">
                <h1 className="text-white text-[1.3rem] lg:text-[1.8rem] font-extrabold p-3">
                  Evaluacion de presencia de actores maliciosos (hackers, grupos
                  de desinformacion) que podrian intentar interferir en la
                  campaña.
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:h-[10%] flex justify-center text-[#8A0026] pb-10 mt-10 gap-8">
              <Link to="/services/analisisSTW">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-12 h-12"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                  />
                </svg>
              </Link>
              <Link to="/services/ciberinteligencia">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>
      </div>
    </>
  );
}
