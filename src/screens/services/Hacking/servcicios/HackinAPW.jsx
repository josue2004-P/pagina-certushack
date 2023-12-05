import NavBarServices from '../../../../componentes/NavBarServices'

export default function HackinAPW() {
  return (
    <>
    <NavBarServices/>
    <div className="h-screen w-full bg-black">
      <div className="h-[40%] flex justify-center items-center">
        <div className="text-center text-[#8A0026] font-extrabold mt-14 mr-14">
          <h1 className="uppercase text-6xl">
            Hacking a <br />
            <p className="text-5xl">Aplicaciones web</p>
          </h1>
        </div>
      </div>

      <section
        className="h-[60%] w-full grid grid-cols-2 lg:pl-[2rem] xl:pl-[4rem]"
      >
        <div className="flex justify-end">
          <div className="">
            <div className="border-4 border-[#8A0026] mb-6">
              <h1 className="text-white  lg:text-[1.6rem] xl:text-[1.9rem] font-extrabold p-3">
                Intento de encontrar vulnerabilidades en aplicaciones web con el
                fin de explotarlas y obtener acceso no autorizado a sistemas de
                datos. Puede incluir tecnicas como inyeccion de codigo, manipulacion de parametros o constraseñas debiles..
              </h1>
            </div>
          </div>
        </div>

        <div className="h-full">
          <div className="h-full flex justify-end items-end absolute top-0 right-0">
            <img
              className="lg:w-[32rem] xl:w-[38rem] lg:h-[40rem] xl:h-[45rem] 2xl:h-[47rem] 2xl:w-[39rem]"
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
