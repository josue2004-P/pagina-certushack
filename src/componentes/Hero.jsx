import React from "react";
import NavBar from "./NavBar";

export default function Hero() {
  return (
    <section className=" h-screen  w-full ">
      <NavBar />
      <div className=" flex justify-center items-center h-full">
        <div
          className="w-full h-full lg:w-[90%] lg:h-[85%] lg:rounded-3xl  "
          id="home1"
        >
          <div className="flex w-full h-full items-center justify-center lg:justify-between">
            <div className="flex justify-center">
              <div className="font-bold 2xl:ml-14">
                <h1 className="text-[2rem]  xs:text-[2.95rem] sm:text-[4rem] md:text-[6rem] lg:text-[2.40rem] xl:lg:text-[3.20rem] 2xl:text-[3.95rem] leading-none text-white">
                  TU
                </h1>
                <h1 className="text-[3.39rem]   xs:text-[4.4rem] sm:text-[6rem] md:text-[8rem] lg:text-[4.76rem] xl:lg:text-[6.35rem] 2xl:text-[7.75rem] leading-none  tracking-wider">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#8A0026] from-[#800020]">
                    CAMPAÑA
                  </span>
                </h1>
                <h1 className=" text-[1.6rem]  xs:text-[2.2rem] sm:text-[3rem] md:text-[4rem] lg:text-[2.40rem] xl:lg:text-[3.20rem] 2xl:text-[3.95rem] leading-none text-white">
                  A UN NIVEL SUPERIOR
                </h1>
                <div className="flex">
                  <h1 className="text-white text-[2rem]  xs:text-[2.50rem] sm:text-[4rem] md:text-[5rem] lg:text-[2.40rem] xl:lg:text-[3.20rem] 2xl:text-[3.95rem] leading-none mr-2">
                    DE
                  </h1>
                  <p className="text-[2.5rem]  xs:text-[3.6rem] sm:text-[4.75rem] md:text-[6.5rem] lg:text-[4rem] xl:lg:text-[5.32rem] 2xl:text-[6.5rem] leading-none">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#8A0026] from-[#800020]">
                      SEGURIDAD
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2  hidden lg:flex">
              <div className=" flex justify-start  items-center">
                <img
                  className="rounded-xl w-[90%]"
                  src="https://cdn.pixabay.com/photo/2023/11/28/08/53/skyscraper-8416953_1280.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
