import NavBarServices from "../../../../componentes/NavBarServices";
import { Link } from "react-router-dom";

export default function AtaquesDenegacion() {
  return (
    <>
      <div className="bg-black ">
        <NavBarServices />

        <div class="p-4 pt-16 sm:ml-64">
          <div className="">
            <div className="mb-10 mt-10 lg:mt-0 flex text-xs text-gray-100 font-medium">
              <Link to="/">Home</Link>
              <p className="mx-1">/</p>
              <Link to="/services">Servicios</Link>
              <p className="mx-1">/</p>
              <Link to="/services/ataquesdenagacion">
                {" "}
                Ataques de denegacion de servicios a aplicaciones web
              </Link>
            </div>

            {/* PONER INFORMACION */}

            <div>
              <div>
                <h1 className="text-4xl sm:text-5xl pl-3 text-gray-100 font-extrabold lg:w-8/12 2xl:w-full">
                  Ataques de denegacion de servicios a aplicaciones web
                </h1>
              </div>

              <div className="mt-5">
                <div className=" md:w-9/12 lg:w-1/2">
                  <h1 className="text-gray-500 font-medium px-3 py-3">
                    Los ataques de denegacion de servicios (DDOS, por sus siglas
                    en ingles) buscan sobrecargar una aplicacion web o sitio web
                    con un trafico masivo, lo que provoca su relantizacion o su
                    caida temporal.
                  </h1>
                  <h1 className="text-gray-500 font-medium px-3 py-3">
                    El objetivo de estos ataques es interrumpir los servicios y
                    causar inconvenientes a los usuarios
                  </h1>
                </div>
              </div>

              <div className="absolute bottom-4 right-0 hidden lg:flex">
                <img
                  className=" w-[23rem] h-[28rem]  "
                  src="../img/12.png"
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
