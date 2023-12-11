import NavBarServices from "../../../../componentes/NavBarServices";
import { Link } from "react-router-dom";

export default function HackingCampañaPolitica() {
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
              <Link to="/services/hackingcampañapolitica">
                {" "}
                Hacking a campaña politica
              </Link>
            </div>

            {/* PONER INFORMACION */}

            <div>
              <div>
                <h1 className="text-4xl sm:text-5xl pl-3 text-gray-100 font-extrabold lg:w-9/12 2xl:w-full">
                  Hacking a campaña politica
                </h1>
              </div>

              <div className="mt-5">
                <div className=" md:w-9/12 lg:w-1/2">
                  <h1 className="text-gray-500  font-medium px-3 py-3">
                    Intento de comprometer la seguridad de una campaña electoral
                    o partido politico. Esto puede implicar la obtencion no
                    autorizada de informacion estrategica, manipulacion de
                    datos, difusion de informacion falsa o cualquier actividad
                    que pueda afectar el proceso democratico.
                  </h1>
                </div>
              </div>

              <div className="absolute bottom-4 right-0 hidden lg:flex">
                <img
                  className=" w-[22rem] h-[30rem]"
                  src="../img/16.png"
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
