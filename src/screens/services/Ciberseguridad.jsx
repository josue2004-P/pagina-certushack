import NavBarServices from '../../componentes/NavBarServices'

export default function Ciberseguridad() {
  return (
    <>
      <NavBarServices />
      <div class="h-screen w-full bg-black">
      <div class="h-[40%] flex justify-center items-center">
        <div class="text-center text-[#8A0026] font-extrabold mt-10">
          <h1 class="uppercase text-6xl">Ciberseguridad</h1>
        </div>
      </div>

      <div class="h-[60%] grid-cols-2 grid  pl-[4rem]">

        <div class="h-full w-full flex justify-end ">
          <div>
            <div class="flex items-center">
              <h1
                class="text-2xl text-white font-extrabold p-3 bg-gray-600 pr-12"
              >
                Creacion de infraestructura T.I.
              </h1>
              <a class="text-2xl text-[#8A0026] font-extrabold bg-gray-600" href="servicios8.html">
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

            <div class="flex items-center mt-4">
              <h1
                class="lg:text-xl xl:text-2xl text-white font-extrabold p-3 bg-gray-600 pr-12"
              >
                CCTV (Circuito Cerrado de Television)
              </h1>
              <a class="text-2xl text-[#8A0026] font-extrabold bg-gray-600" href="servicios9.html">
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

        <div class="h-full">
          <div class="h-full flex justify-end items-end  absolute top-0 right-0">
            <img class=" lg:w-[30rem] lg:h-[40rem]  xl:w-[34rem] xl:h-[44rem] " src="../img/6.png" alt=""/>
          </div>
        </div>

      </div>

    </div>
    </>
  )
}
