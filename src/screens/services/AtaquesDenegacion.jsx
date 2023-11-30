import NavBarServices from '../../componentes/NavBarServices'

export default function AtaquesDenegacion() {
  return (
    <>
    <NavBarServices/>
    <div className="h-screen w-full bg-black">
      <div className="h-[30%] flex justify-center items-center">
        <div className="text-center text-[#8A0026] font-extrabold mt-[1.5rem]">
          <h1 className="uppercase text-6xl">
            Ataques de denegacion <br />
            <p className="text-5xl">De servicios a aplicaciones web</p>
          </h1>
        </div>
      </div>

      <section className="h-[60%] grid-cols-2 grid lg:pl-[2rem] xl:pl-[3.5rem] lg:mt-10 xl:mt-0 ">
        <div className="flex justify-end">
          <div className="">
            <div className="border-4 border-[#8A0026] mb-6">
              <h1 className="text-white lg:text-[1.7rem] xl:text-[1.9rem] font-extrabold p-3">
                Los ataques de denegacion de servicios (DDOS, por sus siglas en
                ingles) buscan sobrecargar una aplicacion web o sitio web con un
                trafico masivo, lo que provoca su relantizacion o su caida
                temporal.
              </h1>
            </div>
            <div className="border-4 border-[#8A0026]">
              <h1 className="text-white lg:text-[1.7rem] xl:text-[1.9rem] font-extrabold p-3">
                El objetivo de estos ataques es interrumpir los servicios y
                causar inconvenientes a los usuarios
              </h1>
            </div>
          </div>
        </div>

        <div className="h-full">
          <div className="h-full flex justify-end items-end absolute top-0 right-0">
            <img
              className="lg:w-[30rem] xl:w-[38rem] lg:h-[40rem] xl:h-[42rem]"
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
