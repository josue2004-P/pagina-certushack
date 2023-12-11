import React from "react";

export default function Contactanos() {
  return (
    <>
      <div class="skill_title text-center text-gray-100 mb-20" id="contact">
        <h1 class="text-4xl font-bold">Contactanos</h1>
      </div>

      <section class="contact mb-20  ">
        <div class="lg:flex justify-center">
          <div class="flex justify-center ">

            <form class=" min-[400px]:w-[20rem] ">
              <div class="mb-6">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  class=" bg-black border border-[#8a0026] text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="name@email.com"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-100"
                >
                  Name
                </label>
                <input
                  type="password"
                  placeholder="name"
                  id="password"
                  class=" bg-black border border-[#8a0026] text-gray-500 text-sm rounded-lg block w-full p-2.5 "
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-100"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  class=" bg-black border border-[#8a0026] text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Leave a comment..."
                ></textarea>
              </div>

              <div className="mt-5 lg:mt-10 flex justify-center">
                <button className="relative inline-flex items-center rounded-lg justify-center p-0.5 mb-1 me-1 overflow-hidden text-sm font-medium text-gray-100   bg-gradient-to-br from-[#8A0026] to-[#000000]">
                  <span className="relative px-4 py-1 rounded-md transition-all ease-in duration-85 bg-black  hover:bg-black">
                    Enviar
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div class="lg:ml-16 mt-10 lg:mt-0">
            <div class="text-center mb-10">
              <div class="flex justify-center">
                <p class="rounded p-2 border border-[#8a0026] mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 text-gray-100"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
              </div>
              <div>
                <p class="mb-1 text-xl font-bold text-gray-100 tracking-tight">
                  Celular:
                </p>
                <p class="text-sm tracking-tight text-gray-500"></p>
              </div>
            </div>

            <div class="text-center mb-10">
              <div class="flex justify-center">
                <p class="rounded rounded p-2 border border-[#8a0026] rounded-md mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 text-white"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </p>
              </div>
              <div>
                <p class="mb-1 text-xl text-gray-100 font-bold tracking-tight">
                  Correo:
                </p>
                <p class="text-sm tracking-tight text-gray-500"></p>
              </div>
            </div>
            <div class="text-center mb-10">
              <div class="flex justify-center">
                <p class="border border-[#8a0026] p-2 rounded-md mb-4 ">  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24px"
                    height="24px"
                    className=""
                  >
                    <path fill="#ffffff" d="M17,3H7C4.791,3,3,4.791,3,7v10c0,2.209,1.791,4,4,4h5.621v-6.961h-2.343v-2.725h2.343V9.309 c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7 l-0.351,2.725h-2.365V21H17c2.209,0,4-1.791,4-4V7C21,4.791,19.209,3,17,3z" />
                  </svg>
                </p>
              </div>
              <div>
                <p class="mb-1 text-xl font-bold text-gray-100  tracking-tight">
                  Facebook:
                </p>
                <p class="text-sm tracking-tight text-gray-500"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
