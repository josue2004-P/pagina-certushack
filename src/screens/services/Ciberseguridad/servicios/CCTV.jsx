import NavBarServices from "../../../../componentes/NavBarServices";
import { Link } from "react-router-dom";

export default function CCTV() {
  return (
    <>
      <NavBarServices />
      <div className="h-screen w-full bg-black">
        <div className="h-[40%] flex justify-center items-center">
          <div className="text-center text-[#8A0026] font-extrabold mt-14">
            <h1 className="uppercase text-5xl lg:text-6xl">
              CCTV (Circuito CERRADO DE <br />
              TELEVISION)
            </h1>
          </div>
        </div>

        <div className="h-[60%] grid lg:grid-cols-2 lg:ml-[4rem] xl:pl-[5rem]">
          <div className=" w-full flex justify-center lg:justify-end ">
            <div className="w-[20rem] lg:w-full">
              <div className="w-full border-4 border-[#8A0026] mb-6">
                <h1 className="text-white lg:text-[1.5rem] xl:text-[1.9rem] font-extrabold p-3">
                  Sistema de videovigilancia en las instalaciones fisicas de la
                  campaña, para garantizar la seguridad y detectar actividades
                  sospechosas.
                </h1>
              </div>
              <div className="w-full border-4 border-[#8A0026]">
                <h1 className="text-white lg:text-[1.5rem] xl:text-[1.9rem] font-extrabold p-3">
                  Sistemas CCTV de manera segura, con contraseñas fuertes y
                  acceso restringido.
                </h1>
              </div>
              <div className="lg:h-[10%] flex justify-center text-[#8A0026] pb-10 mt-10 gap-8">
                <Link to="/services/creacionITI">
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
                <Link to="/services/ciberseguridad">
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
          </div>

          <div className="h-full hidden lg:flex">
            <div className="h-full flex justify-center items-start  px-[1.5rem]">
              <img
                className=" lg:w-[30rem] lg:h-[25rem]  xl:w-[30rem] xl:h-[25rem] 2xl:w-[39rem] 2xl:h-[20rem] "
                src="../img/7.png"
                alt=""
              />

              <img
                className=" absolute lg:w-[14rem] lg:h-[14rem]   mt-[5rem] 2xl:mt-[4rem] "
                src="../img/7.1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
