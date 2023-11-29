import NavBarServices from '../../componentes/NavBarServices'

export default function AnalisisSTW() {
  return (
    <>
    <NavBarServices/>
    <div class="h-screen w-full bg-black">
      <div class="h-[30%] flex justify-center items-center">
        <div class="text-center text-[#8A0026] font-extrabold mt-10">
          <h1 class="uppercase text-6xl">Analisis de sistios web</h1>
        </div>
      </div>

      <section class="h-[70%] grid grid-cols-2 lg:pl-[7rem] xl:pl-[10rem]">
        
        <div class="flex justify-end">
          <div class="">
            <div class=" border-4 border-[#8A0026] mb-6">
              <h1 class="text-white text-[1.9rem] font-extrabold p-3">
                Evaluacion de la efectividad del sitio wed oficial de la campaña
                (diseño, accesibilidad y mensaje).
              </h1>
            </div>
            <div class=" border-4 border-[#8A0026]">
              <h1 class="text-white text-[1.9rem] font-extrabold p-3">
                Auditoria a sistemas web con pruebas de vulnerabilidad
              </h1>
            </div>
          </div>
          <div class="text-[#8A0026] flex items-center h-[60%]">
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

        <div class="h-full">
          <div class="h-full flex justify-end   absolute top-[14rem] right-0 ">
            <img class=" lg:w-[33rem] xl:w-[40rem] lg:h-[38rem] xl:h-[38rem] " src="../img/4.png" alt=""/>
          </div>
        </div>

      </section>
    </div>
    </>
  )
}
