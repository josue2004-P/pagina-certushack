import NavBarServices from "../../../../componentes/NavBarServices";

export default function WhatsappInit() {
  return (
    <>
      <NavBarServices />
      <div className="h-screen w-full bg-black pt-10 lg:pt-0">
        <div className="lg:h-[30%]  flex justify-center items-center">
          <div className="text-center text-[#8A0026] font-extrabold mt-10">
            <h1 className="uppercase text-4xl sm:text-5xl lg:text-6xl">
              WhatsApp Init
            </h1>
          </div>
        </div>

        <div className="flex justify-center">
        <div className="w-[80%] sm:w-[70%] md:w-[55%] lg:w-full grid grid-cols-1 lg:grid-cols-2 lg:h-[70%] lg:pl-20 xl:pl-[10rem] mt-10 lg:mt-0">
          <div className="lg:h-[70%] w-full flex justify-end ">
            <div className="">
              <div className=" w-full border-4 border-[#8A0026] mb-6">
                <h1 className="text-white  text-[1.3rem] lg:text-[1.9rem] font-extrabold p-3">
                  Monitoriar grupos de WhatsApp para identificar discursos o
                  teas emergentes relevantes para la campaña
                </h1>
              </div>
              <div className=" w-full border-4 border-[#8A0026]">
                <h1 className="text-white text-[1.3rem] lg:text-[1.9rem] font-extrabold p-3">
                  Analisis de mensajes de WhatsApp compartidos en grupos para
                  entender las preocupaciones y preferencias de los volantes.
                </h1>
              </div>
            </div>
          </div>

          <div className="h-full hidden lg:flex">
            <div className="h-full flex justify-end items-end  absolute top-0 right-0">
              <img
                className=" lg:w-[33rem] xl:w-[40rem] lg:h-[45rem] xl:h-[51rem] "
                src="../img/3.png"
                alt=""
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
