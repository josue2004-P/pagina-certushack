import NavBarServices from '../../componentes/NavBarServices'

export default function AtaquesDenegacion() {
  return (
    <>
    <NavBarServices/>
    <div class="h-screen w-full bg-black">
      <div class="h-[30%] flex justify-center items-center">
        <div class="text-center text-[#8A0026] font-extrabold mt-[1.5rem]">
          <h1 class="uppercase text-6xl">
            Ataques de denegacion <br />
            <p class="text-5xl">De servicios a aplicaciones web</p>
          </h1>
        </div>
      </div>

      <section class="h-[60%] grid-cols-2 grid lg:pl-[2rem] xl:pl-[3.5rem]">
        <div class="flex justify-end">
          <div class="">
            <div class="border-4 border-[#8A0026] mb-6">
              <h1 class="text-white text-[1.9rem] font-extrabold p-3">
                Los ataques de denegacion de servicios (DDOS, por sus siglas en
                ingles) buscan sobrecargar una aplicacion web o sitio web con un
                trafico masivo, lo que provoca su relantizacion o su caida
                temporal.
              </h1>
            </div>
            <div class="border-4 border-[#8A0026]">
              <h1 class="text-white text-[1.9rem] font-extrabold p-3">
                El objetivo de estos ataques es interrumpir los servicios y
                causar inconvenientes a los usuarios
              </h1>
            </div>
          </div>
        </div>

        <div class="h-full">
          <div class="h-full flex justify-end items-end absolute top-0 right-0">
            <img
              class="lg:w-[30rem] xl:w-[38rem] lg:h-[40rem] xl:h-[42rem]"
              src="../img/12.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
