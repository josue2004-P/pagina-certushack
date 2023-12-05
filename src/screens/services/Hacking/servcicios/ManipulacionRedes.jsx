import NavBarServices from '../../../../componentes/NavBarServices'

export default function ManipulacionRedes() {
  return (
    <>
    <NavBarServices/>
    <div className="h-screen w-full bg-black">
      <div className="h-[40%] flex justify-center items-center">
        <div className="text-center text-[#8A0026] font-extrabold mt-14 ">
          <h1 className="uppercase text-6xl">
            Manipulacion de redes <br />
            <p className="text-5xl">sociales y desinformacion</p>
          </h1>
        </div>
      </div>

      <section className="h-[60%] w-full grid grid-cols-2 lg:pl-[2rem] xl:pl-[4rem]">

        <div className="flex justify-end">
          <div className="">
            <div className=" border-4 border-[#8A0026] mb-6">
              <h1 className="text-white lg:text-[1.5rem] xl:text-[1.9rem] font-extrabold p-3">
                Implica una estrategia de informacion erronea o engañosa en las
                plataformas de redes sociales con el fin de influir en la opinion
                publica, distorcionar la informacion o socavar la confianza en
                ciertos casos.
              </h1>
            </div>
          </div>
        </div>

        <div className="h-full">
          <div className="h-full flex justify-end items-end absolute top-0 right-0">
            <img
              className="lg:w-[26rem] xl:w-[36rem] lg:h-[34rem] xl:h-[39rem] 2xl:h-[47rem] 2xl:w-[39rem]"
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
