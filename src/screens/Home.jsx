import NavBar from "../componentes/NavBar";
import Footer from "../componentes/Footer";
import "../css/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-black">
      <section className=" h-screen  w-full ">
        <NavBar />
        <div className=" flex justify-center items-center h-full">
          <div
            className="w-full h-full lg:w-[90%] lg:h-[85%] lg:rounded-3xl  "
            id="home1"
          >
            <div className="flex w-full h-full items-center justify-center lg:justify-between">
              <div className="flex justify-center">
                <div className="font-bold 2xl:ml-14">
                  <h1 className="text-[2rem]  xs:text-[2.95rem] sm:text-[4rem] md:text-[6rem] lg:text-[2.40rem] xl:lg:text-[3.20rem] 2xl:text-[3.95rem] leading-none text-white">
                    TU
                  </h1>
                  <h1 className="text-[3.39rem]   xs:text-[4.4rem] sm:text-[6rem] md:text-[8rem] lg:text-[4.76rem] xl:lg:text-[6.35rem] 2xl:text-[7.75rem] leading-none  tracking-wider">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#8A0026] from-[#800020]">
                      CAMPAÑA
                    </span>
                  </h1>
                  <h1 className=" text-[1.6rem]  xs:text-[2.2rem] sm:text-[3rem] md:text-[4rem] lg:text-[2.40rem] xl:lg:text-[3.20rem] 2xl:text-[3.95rem] leading-none text-white">
                    A UN NIVEL SUPERIOR
                  </h1>
                  <div className="flex">
                    <h1 className="text-white text-[2rem]  xs:text-[2.50rem] sm:text-[4rem] md:text-[5rem] lg:text-[2.40rem] xl:lg:text-[3.20rem] 2xl:text-[3.95rem] leading-none mr-2">
                      DE
                    </h1>
                    <p className="text-[2.5rem]  xs:text-[3.6rem] sm:text-[4.75rem] md:text-[6.5rem] lg:text-[4rem] xl:lg:text-[5.32rem] 2xl:text-[6.5rem] leading-none">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#8A0026] from-[#800020]">
                        SEGURIDAD
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/2  hidden lg:flex">
                <div className=" flex justify-start  items-center">
                  <img
                    className="rounded-xl w-[90%]"
                    src="https://cdn.pixabay.com/photo/2023/11/28/08/53/skyscraper-8416953_1280.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full flex justify-center my-[3rem] lg:my-[10rem] lg:p-10"
        id="home2"
      >
        <div className="">
          <div className="flex justify-center ">
            <p className="text-gray-300 text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold  mt-4 w-11/12  2xl:w-8/12">
              Somos tu socio confiable en el viaje hacia la ciberseguridad,
              ofreciendo soluciones avanzadas para proteger la esencia misma de
              la democracia.
            </p>
          </div>
          <div className="mt-5 lg:mt-10 flex justify-center">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-100   bg-gradient-to-br from-[#8A0026] to-[#000000]">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-85 bg-black  hover:bg-black">
                Conoce Mas...
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex justify-center py-10 mb-10">
          <div className="text-center">
            <div className="flex justify-center">
              <h1 className="text-5xl font-extrabold text-gray-100">
                Servicios
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-gray-400 mt-5 w-10/12 lg:w-8/12 text-xl">
                Nuestra experiencia abarca la identificación y mitigación de
                amenazas de hacking, garantizando la integridad de la
                información crítica y la protección de la privacidad en el
                contexto electoral.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full h-full items-center ">
          <div className="flex w-full  h-full justify-center items-center ">
            <div className="grid md:grid-cols-2 min-[1121px]:grid-cols-3 gap-y-6 w-full xl:w-[90%] 2xl:w-[90%] ">

              <div className="flex justify-center">
                <div
                  id="card1"
                  className="bg-black w-[90%] relative md:w-[22rem] md:h-[25rem] 2xl:w-[27rem] 2xl:h-[21rem] pr-2"
                >
                  <div className="text-white pt-6 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                      />
                    </svg>
                  </div>
                  <div className="pl-4 pt-4 ">
                    <span className="text-gray-100 text-2xl font-extrabold">
                      Ciberinteligencia en <br />
                      campaña electoral
                    </span>
                  </div>
                  <div className="flex items-center text-gray-400 mt-4 ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 mr-2 "
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-gray-400 text-lg font-medium">Osint</p>
                  </div>
                  <div className="flex  text-gray-400  ml-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 mr-2 "
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-lg font-medium">
                        Investigacion de personas/ redes sociales.
                      </p>
                    </div>
                  </div>
                  <div className="flex  text-gray-400  ml-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 mr-2 "
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-lg font-medium">
                        Identificaciones falsas de perfiles falsos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 mr-2 "
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-gray-400 text-lg font-medium">
                      WhatsApp Init.
                    </p>
                  </div>

                  <div className="w-full  md:absolute lg:static bottom-0 right-0 flex justify-end items-end mb-4 lg:mb-0 mt-4 pr-4">
                    <div className="mr-1">
                      <p className="text-lg text-white font-medium">
                        Learn more
                      </p>
                    </div>
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-[#8A0026]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div
                  id="card1"
                  className="bg-black relative w-[90%] md:w-[22rem] 2xl:w-[27rem]  md:h-[25rem]  2xl:h-[21rem] pr-2"

                >
                  <div className="text-white pt-6 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="pl-4 pt-4 ">
                    <span className="text-gray-100 text-2xl font-extrabold">
                      Hacking
                    </span>
                  </div>
                  <div className="flex items-center text-gray-400 mt-4 ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 mr-2 "
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-gray-400 text-lg font-medium">
                      Ciberespionaje
                    </p>
                  </div>
                  <div className="flex  text-gray-400  ml-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 mr-2 "
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-lg font-medium">
                        Hacking de perfiles de FB/IG/X.
                      </p>
                    </div>
                  </div>
                  <div className="flex  text-gray-400  ml-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 mr-2 "
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-lg font-medium">
                        Ataques de denegacion de servicio a aplicaciones wed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 mr-2 "
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-gray-400 text-lg font-medium">
                      WhatsApp Init.
                    </p>
                  </div>
                  <div className="w-full md:absolute lg:static bottom-0 right-0  flex justify-end items-end mb-4 lg:mb-0  mt-4 pr-4">
                    <div className="mr-1">
                      <p className="text-lg text-white font-medium">
                        Learn more
                      </p>
                    </div>
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-[#8A0026]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div
                  id="card1"
                  className="bg-black relative w-[90%]  md:w-[22rem] 2xl:w-[27rem]  md:h-[25rem]  2xl:h-[21rem] h-[21rem] pr-2"
                >
                  <div className="text-white pt-6 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="pl-4 pt-4 ">
                    <span className="text-gray-100 text-2xl font-extrabold">
                      Ciberseguridad
                    </span>
                  </div>
                  <div className="flex items-center text-gray-400 mt-4 ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 mr-2 "
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-gray-400 text-lg font-medium">
                      Creacion de infraestructura TI
                    </p>
                  </div>
                  <div className="flex  text-gray-400  ml-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 mr-2 "
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-lg font-medium">
                        Proteccion de datos
                      </p>
                    </div>
                  </div>
                  <div className="flex  text-gray-400  ml-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 mr-2 "
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-lg font-medium">
                        Seguridad de sistemas y redesio a aplicaciones wed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 mr-2 "
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-gray-400 text-lg font-medium">
                      Seguridad en redes sociales.
                    </p>
                  </div>
                  <div className="w-full md:absolute lg:static bottom-0 right-0 flex justify-end items-end mb-4 lg:mb-0 mt-4 pr-4">
                    <div className="mr-1">
                      <p className="text-lg text-white font-medium">
                        Learn more
                      </p>
                    </div>
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-[#8A0026]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
