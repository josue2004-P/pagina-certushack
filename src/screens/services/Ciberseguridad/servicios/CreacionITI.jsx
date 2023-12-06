import NavBarServices from "../../../../componentes/NavBarServices";
import { Link } from "react-router-dom";

export default function CreacionITI() {
  return (
    <>
      <NavBarServices />
      <div className="h-screen w-full bg-black">
        <div className="h-[30%] flex justify-center items-center">
          <div className="text-center text-[#8A0026] font-extrabold mt-10">
            <h1 className="uppercase text-3xl lg:text-6xl">
              Creacion de infraestructura T.I.
            </h1>
          </div>
        </div>
        <div className="h-[50%]">
          <div className="flex justify-center h-full ">
            <div className="grid lg:grid-cols-2 gap-x-4 gap-5  ">
              <div className="h-full w-[20rem] lg:w-[24rem] border-4 border-[#8A0026]">
                <h1 className="text-white lg:text-[1.8rem] font-extrabold p-3">
                  Establecer una infraestructura solida y segura que incluya
                  servidores, redes y sistemas de almacenamiento para respaldar
                  las operaciones de la campaña.
                </h1>
              </div>
              <div className="h-full w-[20rem] lg:w-[24rem] border-4 border-[#8A0026]">
                <h1 className="text-white lg:text-[1.8rem] font-extrabold p-3">
                  Implementar politicas de seguridad y estandares de
                  configuracion para garantizar la proteccion de la
                  infraestructura contra amenazas ciberneticas.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:h-[10%] flex justify-center text-[#8A0026] pb-10 mt-10 gap-8">
          <Link to="/services/ciberseguridad">
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
          <Link to="/services/cctv">
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
