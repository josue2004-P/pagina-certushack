import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="lg:flex fixed h-12 z-10 bg-black w-full justify-end text-white">
      <div className="flex items-center pl-4 h-full ">
        <button
          onClick={toggleMenu}
          className="text-white lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </div>
      <ul
        className={`lg:flex bg-black pl-4 pb-4 lg:pt-4 justify-end gap-9  lg:pr-[10rem] font-medium text-xl w-full ${
          isMenuOpen ? "hidden" : ""
        }`}
      >
        <li>
          <Link to="/" className="" href="index.html">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/services">Servicios</Link>
        </li>
        <li>
          <a href="">Nosotros</a>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
