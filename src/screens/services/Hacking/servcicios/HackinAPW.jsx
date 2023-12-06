import NavBarServices from '../../../../componentes/NavBarServices'
import { Link } from 'react-router-dom'

export default function HackinAPW() {
  return (
    <>
    <NavBarServices/>
    <div className="h-screen w-full bg-black">
      <div className="h-[40%] flex justify-center items-center">
        <div className="text-center text-[#8A0026] font-extrabold mt-14 lg:mr-14">
          <h1 className="uppercase text-4xl lg:text-6xl">
            Hacking a <br />
            <p className=" text-3xl lg:text-5xl">Aplicaciones web</p>
          </h1>
        </div>
      </div>

      <section
        className="h-[60%] w-full lg:grid grid-cols-2 lg:pl-[2rem] xl:pl-[4rem]"
      >
        <div className="flex justify-center lg:justify-end">
          <div className="w-[20rem] lg:w-full ">
            <div className="border-4 border-[#8A0026] mb-6">
              <h1 className="text-white  lg:text-[1.6rem] xl:text-[1.9rem] font-extrabold p-3">
                Intento de encontrar vulnerabilidades en aplicaciones web con el
                fin de explotarlas y obtener acceso no autorizado a sistemas de
                datos. Puede incluir tecnicas como inyeccion de codigo, manipulacion de parametros o constraseñas debiles..
              </h1>
            </div>
          </div>
        </div>

        <div className="h-full hidden lg:flex">
          <div className="h-full flex justify-end items-end absolute top-0 right-0">
            <img
              className="lg:w-[32rem] xl:w-[38rem] lg:h-[40rem] xl:h-[45rem] 2xl:h-[47rem] 2xl:w-[39rem]"
              src="../img/14.png"
              alt=""
            />
          </div>
        </div>

        <div className="lg:h-[10%] flex justify-center text-[#8A0026] pb-10 mt-10 gap-8">
            <Link to="/services/manipulacionRedes">
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
            <Link to="/services/roboInformacion">
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
      </section>
    </div>
    </>
  )
}
