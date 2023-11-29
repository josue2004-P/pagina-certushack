import NavBarServices from "../../componentes/NavBarServices";

export default function RoboInformacion() {
  return (
    <>
      <NavBarServices />
      <div class="h-screen w-full bg-black">
        <div class="h-[40%] flex justify-center items-center">
          <div class="text-center text-[#8A0026] font-extrabold mt-14">
            <h1 class="uppercase text-6xl">
              robo de informacion <br />
            </h1>
          </div>
        </div>

        <section class="h-[60%] w-full grid grid-cols-2 lg:pl-[2rem] xl:pl-[4rem] 2xl:pl-[14rem]">
          <div class="flex justify-end">
            <div class="">
              <div class="border-4 border-[#8A0026] mb-6">
                <h1 class="text-white text-[1.9rem] font-extrabold p-3">
                  El robo de informacion implica el acceso no autorizado y la
                  extraccion de datos sensibles a confidenciales de campaña.Esto
                  puede incluir informacion personal.
                </h1>
              </div>
            </div>
          </div>

          <div class="h-full">
            <div class="h-full flex justify-end items-end absolute top-0 right-0">
              <img
                class="lg:w-[32rem] xl:w-[36rem] lg:h-[37rem] xl:h-[39rem] 2xl:h-[42rem] 2xl:w-[35rem]"
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
