import React from "react";

export default function Introduccion() {
  return (
    <section
      className="w-full flex justify-center my-[3rem] lg:my-[10rem] lg:p-10"
      id="home2"
    >
      <div className="">
        <div className="flex justify-center ">
          <p className="text-gray-100 text-center text-xl sm:text-2xl pt-5  lg:text-2xl font-bold  mt-4 w-11/12  2xl:w-8/12">
            En un mundo cada vez más conectado y dependiente de la tecnología,
            la integridad de las elecciones y la confianza en los procesos
            democráticos se han vuelto fundamentales. Es en este contexto que
            nace CertusHack, una empresa comprometida con la salvaguarda de la
            democracia y la transparencia en los procesos electorales a través
            de servicios especializados en ciberseguridad.
          </p>
        </div>
        <div className="mt-5 lg:mt-10 flex justify-center">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-100   bg-gradient-to-br from-[#8A0026] to-[#000000]">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-85 bg-black  hover:bg-black">
              Conoce Mas...
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
