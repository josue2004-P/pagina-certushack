import { Link } from "react-router-dom";
import NavBarServices from "../componentes/NavBarServices";

export default function Services() {
  return (
    <div className="bg-black ">
      <div className="xl:h-screen flex justify-center items-center ">
        <div className="w-full h-full ">
          <NavBarServices />

        <section className="lg:h-screen  pt-20 xs:pt-[4rem] pb-10 lg:p-0 ">
        <div className="flex w-full h-full items-center ">
            <div className="flex w-full  h-full justify-center items-center ">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">

                <div className="flex items-center justify-center">
                  <div className=" max-w-xs h-[27rem] shadow-md shadow-[#8A0026] rounded-[1.5rem]">
                    <div className="w-full h-full">
                      <h1 className=" uppercase text-[1.7rem] font-extrabold text-center mb-4 mt-[1.7rem] text-[#8A0026]">
                        Ciberinteligencia en
                        <p className="text-[1.5rem]">campaña electoral</p>
                      </h1>
                      <p className=" px-8  font-medium text-xl text-white">
                        * OSINT <br />
                        * Invesgigacion de personas/ <br />
                        redes sociales. <br />
                        * Identificaciones falsas de perfiles <br />
                        falsos <br />* WhatsApp Init.
                      </p>
                      <div className="flex justify-center">
                        <Link
                          className="bg-[#8A0026] text-white font-semibold text-xl px-4 py-2 rounded-xl my-5"
                          to="/services/ciberinteligencia"
                        >
                          Leer Mas...
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className=" w-[20rem] h-[27rem] shadow-md shadow-[#8A0026] rounded-[1.5rem]">
                    <div className="w-full h-full relative">
                      <h1 className=" uppercase text-[1.75rem] font-extrabold text-center mb-4 mt-[1.7rem] text-[#8A0026]">
                        Hacking
                      </h1>
                      <p className=" px-8  font-medium text-xl text-white">
                        * Ciberespionaje <br />
                        * Hacking de perfiles de <br />
                        FB/IG/X. <br />
                        * Ataques de denegacion <br />
                        de servicio a aplicaciones <br />
                        wed
                      </p>
                      <div className="flex justify-center absolute bottom-[1.8rem] w-full">
                        <Link
                          className="bg-[#8A0026] text-white font-semibold text-xl px-4 py-2 rounded-xl my-5"
                          to="/services/hacking"
                        >
                          Leer Mas...
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className=" w-[20rem] h-[27rem] shadow-md shadow-[#8A0026] rounded-[1.5rem]">
                    <div className="w-full h-full relative">
                      <h1 className=" uppercase text-[1.8rem]  font-extrabold text-center mb-4 mt-[1.7rem] text-[#8A0026]">
                        Ciberseguridad
                      </h1>
                      <p className=" px-8  font-medium text-xl text-white">
                        * Creacion de <br />
                        infraestructura TI <br />
                        * Proteccion de datos <br />
                        * Seguridad de sistemas y <br />
                        redes <br />
                        * Seguridad en redes <br />
                        sociales.
                      </p>
                      <div className="flex justify-center absolute bottom-[1.6rem] w-full">
                        <Link
                          className="bg-[#8A0026] text-white font-semibold text-xl px-4 py-2 rounded-xl my-5"
                          to="/services/ciberseguridad"
                        >
                          Leer Mas...
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="text-[#8A0026] pl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-10 font-extrabold"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div> */}
            </div>
        </div>
          </section>
        </div>
      </div>
    </div>
  );
}
