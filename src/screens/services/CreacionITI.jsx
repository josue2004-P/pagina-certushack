import NavBarServices from '../../componentes/NavBarServices'

export default function CreacionITI() {
  return (
    <>
    <NavBarServices/>
    <div class="h-screen w-full bg-black">
      <div class="h-[30%] flex justify-center items-center">
        <div class="text-center text-[#8A0026] font-extrabold mt-10">
          <h1 class="uppercase text-6xl">Creacion de infraestructura T.I.</h1>
        </div>
      </div>
      <div class="h-[50%]">
        <div class="flex justify-center h-full">
          <div class="grid grid-cols-2 gap-x-4">
            <div class="h-full w-[24rem] border-4 border-[#8A0026]">
              <h1 class="text-white text-[1.8rem] font-extrabold p-3">
                Establecer una infraestructura solida y segura que incluya
                servidores, redes y sistemas de almacenamiento para respaldar
                las operaciones de la campaña.
              </h1>
            </div>
            <div class="h-full w-[24rem] border-4 border-[#8A0026]">
              <h1 class="text-white text-[1.8rem] font-extrabold p-3">
                Implementar politicas de seguridad y estandares de configuracion
                para garantizar la proteccion de la infraestructura contra
                amenazas ciberneticas.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="h-[10%] flex justify-center text-[#8A0026] mt-10 gap-8">
        <p>
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
        </p>
        <p>
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
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </p>
      </div>
    </div>
    </>
  )
}
