import NavBarServices from "../../../../componentes/NavBarServices";
import { Link } from "react-router-dom";

export default function ManipulacionRedes() {
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
              <Link to="/services/manipulacionRedes">
                {" "}
                Manipulacion de redes sociales y desinformacion
              </Link>
            </div>

            {/* PONER INFORMACION */}

            <div>
              <div>
                <h1 className="text-4xl sm:text-5xl pl-3 text-gray-100 font-extrabold lg:w-9/12 2xl:w-full">
                  Manipulacion de redes sociales y desinformacion
                </h1>
              </div>

              <div className="mt-5">
                <div className=" md:w-9/12 lg:w-1/2">
                  <h1 className="text-gray-500 font-medium px-3 py-3">
                    Implica una estrategia de informacion erronea o engañosa en
                    las plataformas de redes sociales con el fin de influir en
                    la opinion publica, distorcionar la informacion o socavar la
                    confianza en ciertos casos.
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
                  src="../img/13.png"
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
