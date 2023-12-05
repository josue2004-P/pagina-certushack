import NavBarServices from "../../../../componentes/NavBarServices";

export default function WhatsappInit() {
  return (
    <>
      <NavBarServices />
      <div class="h-screen w-full bg-black">
        <div class="h-[30%] flex justify-center items-center">
          <div class="text-center text-[#8A0026] font-extrabold mt-10">
            <h1 class="uppercase text-6xl">WhatsApp Init</h1>
          </div>
        </div>

        <div class="grid grid-cols-2 h-[70%] lg:pl-20 xl:pl-[10rem]">
          <div class="h-[70%] w-full flex justify-end ">
            <div class="">
              <div class=" w-full border-4 border-[#8A0026] mb-6">
                <h1 class="text-white text-[1.9rem] font-extrabold p-3">
                  Monitoriar grupos de WhatsApp para identificar discursos o
                  teas emergentes relevantes para la campaña
                </h1>
              </div>
              <div class=" w-full border-4 border-[#8A0026]">
                <h1 class="text-white text-[1.9rem] font-extrabold p-3">
                  Analisis de mensajes de WhatsApp compartidos en grupos para
                  entender las preocupaciones y preferencias de los volantes.
                </h1>
              </div>
            </div>
          </div>

          <div class="h-full">
            <div class="h-full flex justify-end items-end  absolute top-0 right-0">
              <img
                class=" lg:w-[33rem] xl:w-[40rem] lg:h-[45rem] xl:h-[51rem] "
                src="../img/3.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
