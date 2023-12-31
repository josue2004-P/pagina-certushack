import { Link } from "react-router-dom";
import NavBarServices from "../../../componentes/NavBarServices";

export default function Ciberinteligencia() {
  return (
    <>
      <NavBarServices />

      <div className="h-screen w-full bg-black">
        <div className="h-[40%] flex justify-center items-center">
          <div className="text-center text-[#8A0026] font-extrabold mt-10">
            <h1 className="uppercase text-3xl xs:text-4xl sm:text-5xl md:text-6xl">
              Ciberinteligencia EN
            </h1>
            <h1 className="uppercase text-2xl xs:text-3xl  sm:text-4xl">
              Campaña electoral
            </h1>
          </div>
        </div>

        <div className="h-[60%] w-full lg:flex">
          <div className="grid w-full h-full grid-cols-1 lg:grid-cols-2">
            <div className="h-full flex justify-start lg:justify-end">
              <div>
                <div className="flex items-center w-[90%] bg-gray-600 pl-4 justify-between py-1 lg:w-fit">
                  <h1 className=" text-xl sm:text-[19px] xl:text-2xl text-white font-extrabold ">
                    OSINT (OPEN SOURCE INTELLIGENCE)
                  </h1>
                  <Link
                    className="text-2xl text-[#8A0026] font-extrabold lg:pl-2"
                    to="/services/osint"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-14 sm:m-[0.09rem] lg-0 xl:h-14 lg:h-[3.25rem]"
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

                <div className="flex items-center mt-4 w-[90%] bg-gray-600 pl-4 justify-between lg:w-fit">
                  <h1 className="text-xl text-white font-extrabold ">
                    WhatsApp Init
                  </h1>
                  <Link
                    className="text-2xl text-[#8A0026] font-extrabold lg:pl-2"
                    to="/services/whatsappInit"
                  >
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

                <div className="flex items-center mt-4 w-[90%] bg-gray-600 pl-4 justify-between lg:w-fit">
                  <h1 className="text-xl text-white font-extrabold">
                    Analisis de sitios web
                  </h1>
                  <Link
                    className="text-2xl text-[#8A0026] font-extrabold lg:pl-2"
                    to="/services/analisisSTW"
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

                <div className="flex items-center mt-4 w-[90%] bg-gray-600 pl-4 justify-between py-1 lg:w-fit ">
                  <h1 className="text-xl xs:text-2xl text-white font-extrabold ">
                    Evaluacion de amenazas
                  </h1>
                  <Link
                    className="text-2xl text-[#8A0026] font-extrabold lg:pl-2"
                    to="/services/evalucionAmenazas"
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
              </div>
            </div>

            <div className="h-full hidden lg:flex">
              <div className="h-full flex justify-end items-end absolute top-0 right-0">
                <img
                  className="lg:w-[32rem] xl:w-[36rem]"
                  src="../img/2.png"
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
