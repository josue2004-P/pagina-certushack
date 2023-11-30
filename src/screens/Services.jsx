import NavBarServices from "../componentes/NavBar";

export default function Services() {
  return (
    <div className="bg-black ">
      <div className="xl:h-screen flex justify-center items-center ">
        <div className="w-full h-full ">
          <NavBarServices />

          <section className="h-[90%] lg:mt-[8rem] xl:pt-10">
            <div className="flex w-full h-full justify-center items-center ">
              <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-6 h-full">
                <div className="flex items-center">
                  <div className="lg:h-full xl:h-[70%] w-[23.9rem] bg-[#242924] rounded-[3rem]">
                    <div className="w-full h-full">
                      <h1 className="h-[10%] uppercase text-[2rem] font-extrabold text-center my-[1.7rem] text-[#8A0026]">
                        Ciberinteligencia en
                        <p className="text-[1.9rem]">campaña electoral</p>
                      </h1>
                      <p className="h-[60%] px-8 pt-6 font-extrabold text-2xl text-white">
                        * OSINT <br />
                        * Invesgigacion de personas/ <br />
                        redes sociales. <br />
                        * Identificaciones falsas de perfiles <br />
                        falsos <br />* WhatsApp Init.
                      </p>
                      <div className="flex justify-center">
                        <a
                          className="bg-[#8A0026] text-white font-extrabold text-2xl px-4 py-2 rounded-xl mt-2"
                          href="servicios2.html"
                        >
                          Leer Mas...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="lg:h-full xl:h-[70%] bg-[#242924] rounded-[3rem]">
                    <div className="w-full h-full">
                      <h1 className="h-[10%] uppercase text-[2.5rem] font-bold text-center my-[1.7rem] text-[#8A0026]">
                        Ciberseguridad <br />
                      </h1>
                      <p className="h-[60%] pt-6 px-8 font-extrabold text-2xl text-white">
                        * Creacion de <br />
                        infraestructura TI <br />
                        * Proteccion de datos <br />
                        * Seguridad de sistemas y <br />
                        redes <br />
                        * Seguridad en redes <br />
                        sociales.
                      </p>
                      <div className="flex justify-center">
                        <a
                          className="bg-[#8A0026] text-white font-extrabold text-2xl px-4 py-2 rounded-xl mt-2"
                          href="servicios7.html"
                        >
                          Leer Mas...
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="lg:h-full xl:h-[70%] bg-[#242924] rounded-[3rem]">
                    <div className="h-full w-full">
                      <h1 className="h-[10%] uppercase text-[2.5rem] font-bold text-center my-[1.7rem] text-[#8A0026]">
                        Haking <br />
                      </h1>
                      <p className="h-[60%] pt-6 px-8 font-extrabold text-2xl text-white">
                        * Ciberespionaje <br />
                        * Hacking de perfiles de <br />
                        FB/IG/X. <br />
                        * Ataques de denegacion <br />
                        de servicio a aplicaciones <br />
                        wed
                      </p>
                      <div className="flex justify-center">
                      <a
                          className="bg-[#8A0026] text-white font-extrabold text-2xl px-4 py-2 rounded-xl mt-2 mb-[4rem]"
                          href="servicios7.html"
                        >
                          Leer Mas...
                        </a>
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
          </section>
        </div>
      </div>
    </div>
  );
}
