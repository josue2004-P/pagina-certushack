import NavBarServices from "../../../../componentes/NavBarServices";
import { Link } from "react-router-dom";

export default function RoboInformacion() {
  return (
    <>
      <NavBarServices />
      <div className="h-screen w-full bg-black">
        <div className="h-[40%] flex justify-center items-center">
          <div className="text-center text-[#8A0026] font-extrabold mt-14">
            <h1 className="uppercase text-4xl lg:text-6xl">
              robo de informacion <br />
            </h1>
          </div>
        </div>

        <section className="h-[60%] w-full grid lg:grid-cols-2 lg:pl-[2rem] xl:pl-[4rem] 2xl:pl-[14rem]">
          <div className="flex justify-center lg:justify-end">
            <div className="w-[20rem] lg:w-full">
              <div className="border-4 border-[#8A0026] mb-6">
                <h1 className="text-white lg:text-[1.9rem] font-extrabold p-3">
                  El robo de informacion implica el acceso no autorizado y la
                  extraccion de datos sensibles a confidenciales de campaña.Esto
                  puede incluir informacion personal.
                </h1>
              </div>
            </div>
          </div>

          <div className="h-full hidden lg:flex">
            <div className="h-full flex justify-end items-end absolute top-0 right-0">
              <img
                className="lg:w-[32rem] xl:w-[36rem] lg:h-[37rem] xl:h-[39rem] 2xl:h-[42rem] 2xl:w-[35rem]"
                src="../img/15.png"
                alt=""
              />
            </div>
          </div>

          <div className="lg:h-[10%] flex justify-center text-[#8A0026] pb-10 mt-10 gap-8">
            <Link to="/services/hackingAPW">
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
            <Link to="/services/hackingcampañapolitica">
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
  );
}
