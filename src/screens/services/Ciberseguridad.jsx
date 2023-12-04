import NavBarServices from '../../componentes/NavBarServices'

export default function Ciberseguridad() {
  return (
    <>
      <NavBarServices />
      <div className="h-screen w-full bg-black">
      <div className="h-[40%] flex justify-center items-center">
        <div className="text-center text-[#8A0026] font-extrabold mt-10">
          <h1 className="uppercase text-6xl">Ciberseguridad</h1>
        </div>
      </div>

      <div className="h-[60%] grid-cols-2 grid  pl-[4rem]">

        <div className="h-full w-full flex justify-end ">
          <div>
            <div className="flex items-center">
              <h1
                className="text-2xl text-white font-extrabold p-3 bg-gray-600 pr-12"
              >
                Creacion de infraestructura T.I.
              </h1>
              <a className="text-2xl text-[#8A0026] font-extrabold bg-gray-600" href="servicios8.html">
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
              </a>
            </div>

            <div className="flex items-center mt-4">
              <h1
                className="lg:text-xl xl:text-2xl text-white font-extrabold p-3 bg-gray-600 pr-12"
              >
                CCTV (Circuito Cerrado de Television)
              </h1>
              <a className="text-2xl text-[#8A0026] font-extrabold bg-gray-600" href="servicios9.html">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-14 xl:h-14 lg:h-[3.25rem]"
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
              </a>
            </div>
          </div>
        </div>

        <div className="h-full">
          <div className="h-full flex justify-end items-end  absolute top-0 right-0">
            <img className=" lg:w-[29rem] lg:h-[38rem]  xl:w-[34rem] xl:h-[44rem] " src="../img/6.png" alt=""/>
          </div>
        </div>

      </div>

    </div>
    </>
  )
}