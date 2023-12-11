import { Link } from "react-router-dom";
import NavBarServices from "../../../../componentes/NavBarServices";

export default function Osint() {
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
              <Link to="/services/osint">OSINT</Link>
            </div>

            {/* PONER INFORMACION */}

            <div>
              <div>
                <h1 className="text-4xl sm  :text-5xl pl-3 text-gray-100 font-extrabold">
                  OSINT (OPEN SOURCE INTELLIGENCE)
                </h1>
              </div>

              <div className="mt-5">
                <div className=" md:w-9/12 lg:w-1/2">
                  <h1 className="text-gray-500 font-medium px-3 py-3">
                    Recopilacion de informacion sobre el perfil democratico de
                    los votantes en una region determinada utilizando datos
                    publicos, encuestas y registros electorales.
                  </h1>

                  <h1 className="text-gray-500 font-medium px-3">
                    Analisis de noticias y articulos relacionados con temas
                    politicos clave para comprender las preocupaciones y
                    preferencias de los votantes.
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
