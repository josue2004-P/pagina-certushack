import NavBarServices from "../../../../componentes/NavBarServices";
import { Link } from "react-router-dom";

export default function CreacionITI() {
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
              <Link to="/services/creacionITI">
                {" "}
                Creacion de infraestructura T.I.
              </Link>
            </div>

            {/* PONER INFORMACION */}

            <div>
              <div>
                <h1 className="text-4xl sm:text-5xl  pl-3 text-gray-100 font-extrabold">
                  Creacion de infraestructura T.I.
                </h1>
              </div>

              <div className="mt-5">
                <div className=" md:w-9/12 lg:w-1/2">
                  <h1 className="text-gray-500 font-medium px-3 py-3">
                    Establecer una infraestructura solida y segura que incluya
                    servidores, redes y sistemas de almacenamiento para
                    respaldar las operaciones de la campaña.
                  </h1>
                  <h1 className="text-gray-500 font-medium px-3 py-3">
                    Implementar politicas de seguridad y estandares de
                    configuracion para garantizar la proteccion de la
                    infraestructura contra amenazas ciberneticas.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
