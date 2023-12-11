import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBarServices() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div>
      <nav class=" border-gray-200">
        <div class="z-20 fixed w-full  flex lg:flex-wrap items-center  justify-between mx-auto p-4">
          <button
            onClick={(event) => {
              event.preventDefault();
              setIsMenuOpen(!isMenuOpen);
            }}
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <div className="">
            <a
              href="https://flowbite.com/"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-8"
                alt="Flowbite Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-gray-100">
                CerTusHack
              </span>
            </a>
          </div>

          <div className=" flex items-center gap-x-4">
            <ul class="font-medium  md:flex ">
              <li>
                <Link
                  href="#"
                  class="block py-2 px-3 text-white rounded md:text-gary-100 md:p-0 "
                  aria-current="page"
                >
                  <Link to="/" className="hidden lg:flex">
                    Home
                  </Link>
                  <Link className="lg:hidden" to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                  </Link>
                </Link>
              </li>
            </ul>
            <div class="relative hidden sm:flex ">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-100 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block w-full p-2 ps-10 text-sm text-gray-100 border bg-black border-[#8a0026] rounded-lg focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="default-sidebar"
        className={`fixed mt-16 top-0 left-0 z-10 w-64 h-screen transition-transform sm:translate-x-0  bg-black border-r border-[#8a0026] ${
          isMenuOpen ? "-translate-x-full" : "translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto ">
          <ul class="space-y-2 font-medium">
            <li>
              <Link
                class="flex items-center p-2 text-gray-100   group border-b border-[#8a0026]"
                to="/services"
              >
                <span className="ms-3">Introduccion</span>
              </Link>
            </li>

            <li>
              <a class="flex items-center p-2 text-gray-100   group">
                <span class="ms-3">Ciberinteligencia en campaña electoral</span>
              </a>

              <Link
                to="/services/osint"
                class="flex items-center pl-2 text-xs text-gray-100 rounded-lg  group"
              >
                <span class="ms-3">Osint</span>
              </Link>
              <Link
                to="/services/evalucionAmenazas"
                class="flex items-center pl-2 text-xs text-gray-100 rounded-lg  group"
              >
                <span class="my-1 ms-3">Evalucion de amenazas</span>
              </Link>
              <Link
                to="/services/analisisSTW"
                class="flex items-center pl-2 text-xs text-gray-100 rounded-lg  group"
              >
                <span class="ms-3">Analisis de sitios web</span>
              </Link>
              <Link
                to="/services/whatsappInit"
                class="flex items-center pl-2 text-xs text-gray-100 rounded-lg  group"
              >
                <span class="mt-1 ms-3">WhatsApp Init</span>
              </Link>
            </li>

            <li>
              <a
            
                class="flex items-center p-2 text-gray-100 border-t border-[#8a0026] group"
              >
                <span class="ms-3">Hacking</span>
              </a>

              <Link
                to="/services/ciberespionaje"
                class="flex items-center pl-2 text-xs text-gray-100 rounded-lg  group"
              >
                <span class="ms-3">Ciberespionaje</span>
              </Link>
              <Link
                to="/services/ataquesdenagacion"
                class="flex items-center pl-2 text-xs text-gray-100 rounded-lg  group"
              >
                <span class="my-1 ms-3">Ataques de denegacion de servicio a aplicaciones web</span>
              </Link>
              <Link
                to="/services/manipulacionRedes"
                class="flex items-center pl-2 text-xs text-gray-100 rounded-lg  group"
              >
                <span class="ms-3">
                Manipulacion de redes sociales y desinformacion
                </span>
              </Link>
              <Link
                to="/services/hackingAPW"
                class="flex items-center pl-2 text-xs text-gray-100 rounded-lg  group"
              >
                <span class="my-1 ms-3">
                Hacking de aplicaciones web
                </span>
              </Link>
              <Link
                to="/services/roboInformacion"
                class="flex items-center pl-2 text-xs text-gray-100 rounded-lg  group"
              >
                <span class="ms-3">
                Robo de informacion
                
                </span>
              </Link>
              <Link
                to="/services/hackingcampañapolitica"
                class="flex items-center pl-2 text-xs text-gray-100 rounded-lg  group"
              >
                <span class="my-1 ms-3">
                Hacking a capaña politica
                
                </span>
              </Link>
            </li>

            <li>
              <a
                
                class="flex items-center p-2 text-gray-100 border-t border-[#8a0026] group"
              >
                <span class="ms-3">Ciberseguridad</span>
              </a>

              <Link
                to="/services/creacionITI"
                class="flex items-center pl-2 text-xs text-gray-100 rounded-lg  group"
              >
                <span class="ms-3">Creacion de infraestructura TI</span>
              </Link>
              <Link
                to="/services/cctv"
                class="flex items-center pl-2 text-xs text-gray-100 rounded-lg  group"
              >
                <span class="ms-3 my-1">CCTV (Circuito Cerrado de Television)</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

    </div>
  );
}
