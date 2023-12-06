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
                <div className="flex items-center">
                  <h1 className="text-2xl text-white font-extrabold p-3 bg-gray-600 pr-12">
                    Ciberespionaje
                  </h1>
                  <Link
                    className="text-2xl text-[#8A0026] font-extrabold bg-gray-600"
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

                <div className="flex items-center mt-4">
                  <h1 className=" xs:text-lg text-white font-extrabold p-2 xs:p-3 bg-gray-600  hac2:p-[14px] ">
                    Ataques de denegacion de servicio a aplicaciones web
                  </h1>
                  <Link
                    className="text-xl text-[#8A0026] font-extrabold bg-gray-600 p-[3.7px] xs:p-[.73rem] hac2:p-[0px] 2xl:p-0"
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

                <div className="flex items-center mt-4">
                  <h1 className="text-[1.24rem] text-white font-extrabold p-3 bg-gray-600 hac1:p-[13px] ">
                    Manipulacion de redes sociales y desinformacion
                  </h1>
                  <Link
                    className="text-2xl text-[#8A0026] font-extrabold bg-gray-600 p-[13.3px] hac1:p-0  "
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

                <div className="flex items-center mt-4">
                  <h1 className="text-[1.2rem]  text-white font-extrabold  p-[13.7px] xs:p-[13.3px] bg-gray-600 ">
                    Hacking de aplicaciones web
                  </h1>
                  <Link
                    to="/services/hackingAPW"
                    className="text-2xl text-[#8A0026] font-extrabold bg-gray-600"
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

                <div className="flex items-center mt-4">
                  <h1 className="text-xl xs:text-2xl text-white font-extrabold p-[13.7px] xs:p-3 bg-gray-600 pr-12">
                    Robo de informacion
                  </h1>
                  <Link
                    to="/services/roboInformacion"
                    className="text-2xl text-[#8A0026] font-extrabold bg-gray-600"
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

                <div className="flex items-center mt-4">
                  <h1 className="text-[1.22rem] text-white font-extrabold p-[13px] bg-gray-600 xs:pr-12">
                    Hacking a capaña politica
                  </h1>
                  <Link 
                  to="/services/hackingcampañapolitica"
                  className="text-2xl text-[#8A0026] font-extrabold bg-gray-600">
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
