import { Link } from "react-router-dom";

export default function NavBarServices() {
  return (
    <nav className="flex w-full h-[10%] bg-black fixed z-10 justify-end text-white">
      <ul className="flex gap-9 p-5 lg:pr-[10rem] font-extrabold text-2xl">
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/services" className="p-2 bg-[#8A0026]" href="">
            SERVICIOS
          </Link>
        </li>
        <li>
          <Link to="">NOSOTROS</Link>
        </li>
        <li>
          <a to="/contacto">CONTACTO</a>
        </li>
      </ul>
    </nav>
  );
}
