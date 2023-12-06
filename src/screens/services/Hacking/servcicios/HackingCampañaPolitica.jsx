import NavBarServices from '../../../../componentes/NavBarServices'
import { Link } from 'react-router-dom'

export default function HackingCampañaPolitica() {
  return (
    <>
    <NavBarServices/>
    <div className="h-screen w-full bg-black">
      <div className="lg:h-[30%] xl:h-[40%] flex justify-center items-center">
        <div className="text-center text-[#8A0026] font-extrabold mt-20 mb-14 lg:mb-0 lg:mt-14">
          <h1 className="uppercase text-5xl lg:text-6xl">
            Hacking a campaña<br />
            <p className="text-4xl lg:text-5xl">politica</p>
          </h1>
        </div>
      </div>

      <section
        className="lg:h-[70%] xl:h-[60%] w-full grid lg:grid-cols-2 lg:pl-[2rem] xl:pl-[4rem] 2xl:pl-[14rem]"
      >
        <div className="flex justify-center lg:justify-end">
          <div className="w-[20rem] lg:w-full">
            <div className="border-4 border-[#8A0026]">
              <h1 className="text-white lg:text-[1.6rem] xl:text-[1.9rem] font-extrabold p-3">
                Intento de comprometer la seguridad de una campaña electoral o
                partido politico. Esto puede implicar la obtencion no autorizada
                de informacion estrategica, manipulacion de datos, difusion de
                informacion falsa o cualquier actividad que pueda afectar el
                proceso democratico.
              </h1>
            </div>
            <div className="lg:h-[10%] flex justify-center text-[#8A0026] pb-10 mt-10 gap-8">
            <Link to="/services/roboInformacion">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                />
              </svg>
            </Link>
            <Link to="/services/hacking">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>
          </div>
        </div>

        <div className="h-full hidden lg:flex">
          <div className="h-full flex justify-end items-end absolute top-0 right-0">
            <img
              className="lg:w-[29rem] xl:w-[36rem] lg:h-[39rem] xl:h-[44rem] 2xl:h-[48rem] 2xl:w-[39rem]"
              src="../img/16.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
