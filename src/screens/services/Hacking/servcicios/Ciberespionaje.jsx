import NavBarServices from "../../../../componentes/NavBarServices";
import { Link } from "react-router-dom";

export default function Ciberespionaje() {
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
              <Link to="/services/ciberespionaje">Ciberespionaje</Link>
            </div>

            {/* PONER INFORMACION */}

            <div>
              <div>
                <h1 className="text-4xl sm:text-5xl pl-3 text-gray-100 font-extrabold">
                  Ciberespionaje
                </h1>
              </div>

              <div className="mt-5">
                <div className=" md:w-9/12 lg:w-1/2">
                  <h1 className="text-gray-500 font-medium px-3 py-3">
                    El Ciberespionaje es la practica de obtener informacion
                    confidencial sin consentimiento alguno. Puede incluir acceso
                    no autorizado a sistemas o redes para recopilar informacion
                    valiosa.
                  </h1>
                </div>
              </div>

              <div className="absolute bottom-4 right-0 hidden lg:flex">
                <img
                  className=" w-[32rem] h-[28rem]  "
                  src="../img/10.png"
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
