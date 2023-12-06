import NavBarServices from "../../../../componentes/NavBarServices";
import { Link } from "react-router-dom";

export default function AnalisisSTW() {
  return (
    <>
      <div className="h-screen w-full ">
        <NavBarServices />
        <div className="lg:h-[30%] flex justify-center items-center pt-10 lg:pt-0">
          <div className="text-center text-[#8A0026] font-extrabold mt-10">
            <h1 className="uppercase text-4xl lg:text-6xl">
              Analisis de sistios web
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <section className="w-full sm:w-[80%] md:w-[70%] lg:w-full lg:h-[70%] mt-10 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 lg:pl-[7rem] xl:pl-[10rem]">
            <div className="flex justify-end ml-5 lg:ml-0">
              <div className="">
                <div className=" border-4 border-[#8A0026] mb-2 lg:mb-6">
                  <h1 className="text-white text-[1.4rem] lg:text-[1.9rem] font-extrabold p-3">
                    Evaluacion de la efectividad del sitio wed oficial de la
                    campaña (diseño, accesibilidad y mensaje).
                  </h1>
                </div>
                <div className=" border-4 border-[#8A0026]">
                  <h1 className="text-white text-[1.4rem] lg:text-[1.9rem] font-extrabold p-3">
                    Auditoria a sistemas web con pruebas de vulnerabilidad
                  </h1>
                </div>
              </div>
            </div>

            <div className="h-full lg:flex hidden">
              <div className="flex justify-end   absolute top-[14rem] right-0 ">
                <img
                  className=" lg:w-[30rem] xl:w-[40rem] lg:h-[33rem] xl:h-[38rem] "
                  src="../img/4.png"
                  alt=""
                />
              </div>
            </div>

            <div className="lg:h-[10%] flex justify-center text-[#8A0026] pb-10 mt-10 gap-8">
              <Link to="/services/whatsappInit">
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
              <Link to="/services/evalucionAmenazas">
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
          </section>
        </div>
      </div>
    </>
  );
}
