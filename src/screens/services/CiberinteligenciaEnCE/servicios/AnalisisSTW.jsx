import NavBarServices from '../../../../componentes/NavBarServices'

export default function AnalisisSTW() {
  return (
    <>
    <div className="h-screen w-full ">
    <NavBarServices/>
      <div className="h-[30%] flex justify-center items-center">
        <div className="text-center text-[#8A0026] font-extrabold mt-10">
          <h1 className="uppercase text-6xl">Analisis de sistios web</h1>
        </div>
      </div>

      <section className="h-[70%] grid grid-cols-2 lg:pl-[7rem] xl:pl-[10rem]">
        
        <div className="flex justify-end">
          <div className="">
            <div className=" border-4 border-[#8A0026] mb-6">
              <h1 className="text-white text-[1.9rem] font-extrabold p-3">
                Evaluacion de la efectividad del sitio wed oficial de la campaña
                (diseño, accesibilidad y mensaje).
              </h1>
            </div>
            <div className=" border-4 border-[#8A0026]">
              <h1 className="text-white text-[1.9rem] font-extrabold p-3">
                Auditoria a sistemas web con pruebas de vulnerabilidad
              </h1>
            </div>
          </div>
          <div className="text-[#8A0026] flex items-center h-[60%] mr-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-14 font-extrabold ml-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>

        <div className="h-full">
          <div className="flex justify-end   absolute top-[14rem] right-0 ">
            <img className=" lg:w-[33rem] xl:w-[40rem] lg:h-[38rem] xl:h-[38rem] " src="../img/4.png" alt=""/>
          </div>
        </div>

      </section>
    </div>
    </>
  )
}
