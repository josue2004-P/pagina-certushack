import React from "react";

export default function ServicioDos() {
  return (
    <section class="">
      <div class="grid max-w-screen-lg px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
        <div class="lg:ml-4 place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl text-transparent bg-clip-text bg-gradient-to-r to-[#8A0026] from-[#800020] font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-100 ">
            CIBERESPIONAJE
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
            El Ciberespionaje es la practica de obtener informacion confidencial
            sin consentimiento alguno. Puede incluir acceso no autorizado a
            sistemas o redes para recopilar informacion valiosa.
          </p>
        </div>
      </div>
    </section>
  );
}
