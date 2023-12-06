import { Link } from "react-router-dom";
import NavBarServices from "../../../componentes/NavBarServices";

export default function Hacking() {
  return (
    <>
      <NavBarServices />
      <div className="h-screen w-full bg-black">
        <div className="h-[30%] flex justify-center items-center">
          <div className="text-center text-[#8A0026] font-extrabold mt-20">
            <h1 className="uppercase text-6xl">Hacking</h1>
          </div>
        </div>
        <section className="h-[70%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full lg:pl-[5rem] ">
            <div className="flex justify-end ">
              <div>
                <div className="flex items-center justify-between bg-gray-600 pl-4 w-[90%] sm:w-[70%] lg:w-fit">
                  <h1 className="text-2xl text-white font-extrabold">
                    Ciberespionaje
                  </h1>
                  <Link
                    className="text-2xl text-[#8A0026] font-extrabold lg:pl-4"
                    to="/services/ciberespionaje"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-14 h-14"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                      />
                    </svg>
                  </Link>
                </div>

                <div className="flex items-center mt-4 justify-between bg-gray-600 pl-4 w-[90%]  sm:w-[80%] lg:w-fit">
                  <h1 className=" xs:text-lg text-white font-extrabold">
                    Ataques de denegacion de servicio a aplicaciones web
                  </h1>
                  <Link
                    className="text-xl text-[#8A0026] font-extrabold lg:pl-4"
                    to="/services/ataquesdenagacion"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-14 h-14 "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                      />
                    </svg>
                  </Link>
                </div>

                <div className="flex items-center mt-4 bg-gray-600 justify-between pl-4 w-[90%]  sm:w-[80%] lg:w-fit">
                  <h1 className="text-[1.24rem] text-white font-extrabold">
                    Manipulacion de redes sociales y desinformacion
                  </h1>
                  <Link
                    className="text-2xl text-[#8A0026] font-extrabold lg:pl-4"
                    to="/services/manipulacionRedes"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none" 
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-14 h-14"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                      />
                    </svg>
                  </Link>
                </div>

                <div className="flex items-center mt-4 justify-between bg-gray-600 pl-4 w-[90%]  sm:w-[70%]">
                  <h1 className="text-xl  text-white font-extrabold  ">
                    Hacking de aplicaciones web
                  </h1>
                  <Link
                    to="/services/hackingAPW"
                    className="text-2xl text-[#8A0026] font-extrabold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-14 h-14"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                      />
                    </svg>
                  </Link>
                </div>

                <div className="flex items-center w-[90%] justify-between mt-4 pl-4 bg-gray-600  sm:w-[60%] lg:w-fit ">
                  <h1 className="text-xl xs:text-2xl text-white font-extrabold">
                    Robo de informacion
                  </h1>
                  <Link
                    to="/services/roboInformacion"
                    className="text-2xl text-[#8A0026] font-extrabold lg:pl-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-14 h-14"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                      />
                    </svg>
                  </Link>
                </div>

                <div className="flex items-center justify-between w-[90%] pl-4 py-1 mt-4 bg-gray-600  sm:w-[70%] lg:w-fit">
                  <h1 className="text-xl mr-4 text-white font-extrabold ">
                    Hacking a capaña politica
                  </h1>
                  <Link 
                  to="/services/hackingcampañapolitica"
                  className="text-2xl text-[#8A0026] font-extrabold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-14 h-14"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="h-full hidden lg:flex">
              <div className="h-full flex justify-end items-end absolute top-0 right-0">
                <img
                  className="lg:w-[30rem] lg:h-[43rem] xl:w-[40rem] "
                  src="../img/9.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
