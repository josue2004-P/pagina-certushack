import NavBarServices from '../../componentes/NavBarServices'

export default function ManipulacionRedes() {
  return (
    <>
    <NavBarServices/>
    <div class="h-screen w-full bg-black">
      <div class="h-[40%] flex justify-center items-center">
        <div class="text-center text-[#8A0026] font-extrabold mt-14">
          <h1 class="uppercase text-6xl">
            Manipulacion de redes <br />
            <p class="text-5xl">sociales y desinformacion</p>
          </h1>
        </div>
      </div>

      <section class="h-[60%] w-full grid grid-cols-2 lg:pl-[2rem] xl:pl-[4rem]">

        <div class="flex justify-end">
          <div class="">
            <div class=" border-4 border-[#8A0026] mb-6">
              <h1 class="text-white text-[1.9rem] font-extrabold p-3">
                Implica una estrategia de informacion erronea o engañosa en las
                plataformas de redes sociales con el fin de influir en la opinion
                publica, distorcionar la informacion o socavar la confianza en
                ciertos casos.
              </h1>
            </div>
          </div>
        </div>

        <div class="h-full">
          <div class="h-full flex justify-end items-end absolute top-0 right-0">
            <img
              class="lg:w-[29rem] xl:w-[36rem] lg:h-[37rem] xl:h-[39rem] 2xl:h-[47rem] 2xl:w-[39rem]"
              src="../img/13.png"
              alt=""
            />
          </div>
        </div>

      </section>
    </div>
    </>
  )
}
