import NavBarServices from '../../../../componentes/NavBarServices'

export default function EvaluacionAmenazas() {
  return (
    <>
      <NavBarServices />
      <div className="h-screen w-full bg-black pt-10 lg:pt-0">
        <div className="lg:h-[30%] flex justify-center items-center">
          <div className="text-center text-[#8A0026] font-extrabold mt-10">
            <h1 className="uppercase text-4xl lg:text-6xl">Evaluacion de amenazas</h1>
          </div>
        </div>
        <div className="lg:h-[70%] lg:w-1/2 flex justify-center lg:ml-10  mt-10 lg:mt-0 lg:justify-end">
          <div className="w-[85%] lg:w-full">
            <div className="lg:w-[26rem] border-4 border-[#8A0026] mb-2 lg:mb-6">
              <h1 className="text-white text-[1.5rem] lg:text-[1.9rem] font-extrabold p-3">
                Resolucion de dudas sobre el area.
              </h1>
            </div>
            <div className="lg:w-[26rem] border-4 border-[#8A0026]">
              <h1 className="text-white text-[1.5rem] lg:text-[1.9rem] font-extrabold p-3">
                Capacitacion continua sobre el area
              </h1>
            </div>
            <div className="text-[#8A0026] flex items-center justify-end pt-10 pr-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-14 h-14 font-extrabold"
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
