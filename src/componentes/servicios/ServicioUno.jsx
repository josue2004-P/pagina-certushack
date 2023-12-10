import React from "react";

export default function ServicioUno() {
  return (
    <section class="mt-20">
      <div class="grid max-w-screen-lg px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl text-transparent bg-clip-text bg-gradient-to-r to-[#8A0026] from-[#800020] font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-100 ">
            OSINT (OPEN SOURCE INTELLIGENCE)
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
            Recopilacion de informacion sobre el perfil democratico de los
            votantes en una region determinada utilizando datos publicos,
            encuestas y registros electorales.
          </p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
}
