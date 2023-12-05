import NavBarServices from '../../../../componentes/NavBarServices'

export default function EvaluacionAmenazas() {
  return (
    <>
      <NavBarServices />
      <div class="h-screen w-full bg-black">
        <div class="h-[30%] flex justify-center items-center">
          <div class="text-center text-[#8A0026] font-extrabold mt-10">
            <h1 class="uppercase text-6xl">Evaluacion de amenazas</h1>
          </div>
        </div>
        <div class="h-[70%] w-1/2 flex justify-end">
          <div class="">
            <div class="w-[26rem] border-4 border-[#8A0026] mb-6">
              <h1 class="text-white text-[1.9rem] font-extrabold p-3">
                Resolucion de dudas sobre el area.
              </h1>
            </div>
            <div class="w-[26rem] border-4 border-[#8A0026]">
              <h1 class="text-white text-[1.9rem] font-extrabold p-3">
                Capacitacion continua sobre el area
              </h1>
            </div>
            <div class="text-[#8A0026] flex items-center justify-end pt-10 pr-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-14 h-14 font-extrabold"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
