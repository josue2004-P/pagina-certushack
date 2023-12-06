import NavBarServices from "../../../../componentes/NavBarServices";

export default function RoboInformacion() {
  return (
    <>
      <NavBarServices />
      <div className="h-screen w-full bg-black">
        <div className="h-[40%] flex justify-center items-center">
          <div className="text-center text-[#8A0026] font-extrabold mt-14">
            <h1 className="uppercase text-4xl lg:text-6xl">
              robo de informacion <br />
            </h1>
          </div>
        </div>

        <section className="h-[60%] w-full grid lg:grid-cols-2 lg:pl-[2rem] xl:pl-[4rem] 2xl:pl-[14rem]">
          <div className="flex justify-center lg:justify-end">
            <div className="w-[20rem] lg:w-full">
              <div className="border-4 border-[#8A0026] mb-6">
                <h1 className="text-white lg:text-[1.9rem] font-extrabold p-3">
                  El robo de informacion implica el acceso no autorizado y la
                  extraccion de datos sensibles a confidenciales de campaña.Esto
                  puede incluir informacion personal.
                </h1>
              </div>
            </div>
          </div>

          <div className="h-full hidden lg:flex">
            <div className="h-full flex justify-end items-end absolute top-0 right-0">
              <img
                className="lg:w-[32rem] xl:w-[36rem] lg:h-[37rem] xl:h-[39rem] 2xl:h-[42rem] 2xl:w-[35rem]"
                src="../img/15.png"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
