import NavBarServices from '../../componentes/NavBarServices'

export default function HackingCampañaPolitica() {
  return (
    <>
    <NavBarServices/>
    <div class="h-screen w-full bg-black">
      <div class="lg:h-[30%] xl:h-[40%] flex justify-center items-center">
        <div class="text-center text-[#8A0026] font-extrabold mt-14">
          <h1 class="uppercase text-6xl">
            Hacking a campaña<br />
            <p class="text-5xl">politica</p>
          </h1>
        </div>
      </div>

      <section
        class="lg:h-[70%] xl:h-[60%] w-full grid grid-cols-2 lg:pl-[2rem] xl:pl-[4rem] 2xl:pl-[14rem]"
      >
        <div class="flex justify-end">
          <div class="">
            <div class="border-4 border-[#8A0026]">
              <h1 class="text-white text-[1.9rem] font-extrabold p-3">
                Intento de comprometer la seguridad de una campaña electoral o
                partido politico. Esto puede implicar la obtencion no autorizada
                de informacion estrategica, manipulacion de datos, difusion de
                informacion falsa o cualquier actividad que pueda afectar el
                proceso democratico.
              </h1>
            </div>
            <div
              class="text-[#8A0026] flex items-center justify-end pt-[1rem] pr-10"
            >
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
        </div>

        <div class="h-full">
          <div class="h-full flex justify-end items-end absolute top-0 right-0">
            <img
              class="lg:w-[29rem] xl:w-[36rem] lg:h-[39rem] xl:h-[44rem] 2xl:h-[48rem] 2xl:w-[39rem]"
              src="../img/16.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
