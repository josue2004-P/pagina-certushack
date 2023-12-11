import { Link } from "react-router-dom";
import NavBarServices from "../componentes/NavBarServices";

export default function Services() {
  return (
    <div className="bg-black ">
      <NavBarServices />

      <div class="p-4 pt-16 sm:ml-64">
        <div className="">
          <div className="mb-10 mt-10 lg:mt-0 flex text-xs text-gray-100 font-medium">
            <Link to="/">Home</Link>
            <p>/</p>
            <Link to="/services">Servicios</Link>
          </div>
          <div>
            <h1 className="text-4xl text-gray-100 font-extrabold">Servicios</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
