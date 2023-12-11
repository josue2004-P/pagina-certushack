import NavBarServices from "../../../../componentes/NavBarServices";
import { Link } from "react-router-dom";

export default function CCTV() {
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
              <Link to="/services/cctv">CCTV</Link>
            </div>

            {/* PONER INFORMACION */}

            <div>
              <div>
                <h1 className="text-4xl sm:text-5xl  pl-3 text-gray-100 font-extrabold">
                  CCTV (Circuito CERRADO DE <br />
                  TELEVISION)
                </h1>
              </div>

              <div className="mt-5 flex">
                <div className=" md:w-9/12 lg:w-1/2 w-full">
                  <h1 className="text-gray-500 font-medium px-3 py-3">
                    Sistema de videovigilancia en las instalaciones fisicas de
                    la campaña, para garantizar la seguridad y detectar
                    actividades sospechosas.
                  </h1>
                  <h1 className="text-gray-500 font-medium px-3 py-3">
                    Sistemas CCTV de manera segura, con contraseñas fuertes y
                    acceso restringido.
                  </h1>
                </div>

                <div className=" w-1/2 flex items-end  relative hidden lg:flex">
                  <div className="absolute top-0 bottom-4 right-0 ">
                    <img
                      className=" w-[28rem] h-[18rem] "
                      src="../img/7.png"
                      alt=""
                    />
                  </div>
                  <div className="absolute top-16 right-32 hidden lg:flex">
                    <img
                      className=" w-[10rem] h-[10rem]  "
                      src="../img/7.1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
