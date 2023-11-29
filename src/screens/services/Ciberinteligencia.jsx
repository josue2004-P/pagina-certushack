import NavBarServices from "../../componentes/NavBarServices";

export default function Ciberinteligencia() {
  return (
    <>
      <NavBarServices />

      <div class="h-screen w-full bg-black">
      <div class="h-[40%] flex justify-center items-center">
        <div class="text-center text-[#8A0026] font-extrabold mt-10">
          <h1 class="uppercase text-6xl">Ciberinteligencia EN</h1>
          <h1 class="uppercase text-4xl">Campaña electoral</h1>
        </div>
      </div>

      <div class="h-[60%] w-full lg:flex">
        <div class="grid w-full h-full grid-cols-2">
          <div class="h-full flex justify-end">
            <div>
              <div class="flex items-center">
                <h1
                  class="lg:text-xl xl:text-2xl text-white font-extrabold p-3 bg-gray-600 pr-12"
                >
                  OSINT (OPEN SOURCE INTELLIGENCE)
                </h1>
                <a
                  class="text-2xl text-[#8A0026] font-extrabold bg-gray-600"
                  href="servicios3.html"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-14 xl:h-14 lg:h-[3.25rem]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                </a>
              </div>

              <div class="flex items-center mt-4">
                <h1
                  class="text-2xl text-white font-extrabold p-3 bg-gray-600 pr-12"
                >
                  WhatsApp Init
                </h1>
                <a
                  class="text-2xl text-[#8A0026] font-extrabold bg-gray-600"
                  href="servicios4.html"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-14 h-14"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                </a>
              </div>

              <div class="flex items-center mt-4">
                <h1
                  class="text-2xl text-white font-extrabold p-3 bg-gray-600 pr-12"
                >
                  Analisis de sitios web
                </h1>
                <a
                  class="text-2xl text-[#8A0026] font-extrabold bg-gray-600"
                  href="servicios5.html"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-14 h-14"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                </a>
              </div>

              <div class="flex items-center mt-4">
                <h1
                  class="text-2xl text-white font-extrabold p-3 bg-gray-600 pr-12"
                >
                  Evaluacion de amenazas
                </h1>
                <a
                  class="text-2xl text-[#8A0026] font-extrabold bg-gray-600"
                  href="servicios6.html"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-14 h-14"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="h-full">
            <div
              class="h-full flex justify-end items-end absolute top-0 right-0"
            >
              <img
                class="lg:w-[35rem] xl:w-[40rem]"
                src="../img/2.png"
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
