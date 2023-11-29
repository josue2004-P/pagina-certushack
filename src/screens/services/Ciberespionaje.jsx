import NavBarServices from '../../componentes/NavBarServices'

export default function Ciberespionaje() {
  return (
    <>
    <NavBarServices/>
    <div class="h-screen w-full bg-black">
      <div class="h-[40%] flex justify-center items-center">
        <div class="text-center text-[#8A0026] font-extrabold mt-14">
          <h1 class="uppercase text-6xl">Ciberespionaje</h1>
        </div>
      </div>

      <section class="h-[60%] w-full grid grid-cols-2 lg:pl-[5rem]">

        <div class=" flex justify-end">
          <div class="">
            <div class=" border-4 border-[#8A0026] mb-6">
              <h1 class="text-white text-[1.9rem] font-extrabold p-3">
                El Ciberespionaje es la practica de obtener informacion
                confidencial sin consentimiento alguno. Puede incluir acceso no
                autorizado a sistemas o redes para recopilar informacion valiosa.
              </h1>
            </div>
            <div class="text-[#8A0026] flex items-center justify-center pt-10">
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
          <div
            class="h-full flex justify-end items-center absolute lg:top-[10rem] xl:top-[7rem] right-0"
          >
            <img
              class="lg:w-[35rem] lg:h-[30rem] xl:w-[43rem] xl:h-[36rem] 2xl:w-[49rem]"
              src="../img/10.png"
              alt=""
            />
          </div>
        </div>

      </section>
    </div>
    </>
  )
}
