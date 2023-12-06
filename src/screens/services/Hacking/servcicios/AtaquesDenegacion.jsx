import NavBarServices from "../../../../componentes/NavBarServices";
import { Link } from "react-router-dom";

export default function AtaquesDenegacion() {
  return (
    <>
      <NavBarServices />
      <div className="h-screen w-full bg-black">
        <div className="h-[30%] flex justify-center items-center">
          <div className="text-center text-[#8A0026] font-extrabold mt-[1.5rem]">
            <h1 className="uppercase text-3xl  lg:text-6xl">
              Ataques de denegacion <br />
              <p className="text-3xl lg:text-5xl">
                De servicios a aplicaciones web
              </p>
            </h1>
          </div>
        </div>

        <section className="h-[60%] lg:grid-cols-2 grid lg:pl-[2rem] xl:pl-[3.5rem] lg:mt-10 xl:mt-0 ">
          <div className="flex justify-center lg:justify-end">
            <div className=" w-[20rem] lg:w-full">
              <div className="border-4 border-[#8A0026] mb-6">
                <h1 className="text-white lg:text-[1.7rem] xl:text-[1.9rem] font-extrabold p-3">
                  Los ataques de denegacion de servicios (DDOS, por sus siglas
                  en ingles) buscan sobrecargar una aplicacion web o sitio web
                  con un trafico masivo, lo que provoca su relantizacion o su
                  caida temporal.
                </h1>
              </div>
              <div className="border-4 border-[#8A0026]">
                <h1 className="text-white lg:text-[1.7rem] xl:text-[1.9rem] font-extrabold p-3">
                  El objetivo de estos ataques es interrumpir los servicios y
                  causar inconvenientes a los usuarios
                </h1>
              </div>
            </div>
          </div>

          <div className="h-full hidden xl:flex">
            <div className="h-full flex justify-end items-end absolute top-0 right-0">
              <img
                className="lg:w-[30rem] xl:w-[38rem] lg:h-[40rem] xl:h-[42rem]"
                src="../img/12.png"
                alt=""
              />
            </div>
          </div>

          <div className="lg:h-[10%] flex justify-center text-[#8A0026] pb-10 mt-10 gap-8">
            <Link to="/services/ciberespionaje">
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
            <Link to="/services/manipulacionRedes">
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
    </>
  );
}
