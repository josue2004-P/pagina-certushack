import NavBarServices from '../../componentes/NavBarServices'

export default function HackinAPW() {
  return (
    <>
    <NavBarServices/>
    <div class="h-screen w-full bg-black">
      <div class="h-[40%] flex justify-center items-center">
        <div class="text-center text-[#8A0026] font-extrabold mt-14">
          <h1 class="uppercase text-6xl">
            Hacking a <br />
            <p class="text-5xl">Aplicaciones web</p>
          </h1>
        </div>
      </div>

      <section
        class="h-[60%] w-full grid grid-cols-2 lg:pl-[2rem] xl:pl-[4rem]"
      >
        <div class="flex justify-end">
          <div class="">
            <div class="border-4 border-[#8A0026] mb-6">
              <h1 class="text-white text-[1.9rem] font-extrabold p-3">
                Intento de encontrar vulnerabilidades en aplicaciones web con el
                fin de explotarlas y obtener acceso no autorizado a sistemas de
                datos. Puede incluir tecnicas como inyeccion de codigo, manipulacion de parametros o constraseñas debiles..
              </h1>
            </div>
          </div>
        </div>

        <div class="h-full">
          <div class="h-full flex justify-end items-end absolute top-0 right-0">
            <img
              class="lg:w-[32rem] xl:w-[38rem] lg:h-[37rem] xl:h-[45rem] 2xl:h-[47rem] 2xl:w-[39rem]"
              src="../img/14.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
