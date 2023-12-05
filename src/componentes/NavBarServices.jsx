import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBarServices() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="lg:flex fixed lg:h-[10%] w-full justify-end bg-black z-10 text-white">
      <div className="bg-black lg:hidden  ">
        <button
          onClick={toggleMenu}
          className="text-white px-10 py-5  "
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
        className={`bg-black lg:flex justify-end gap-9 p-5 lg:pr-[10rem] font-extrabold text-2xl w-full ${
          isMenuOpen ? "hidden" : ""
        }`}
      >
        <li>
          <Link to="/" className="" href="index.html">
            INICIO
          </Link>
        </li>
        <li>
          <Link to="/services">SERVICIOS</Link>
        </li>
        <li>
          <a href="">NOSOTROS</a>
        </li>
        <li>
          <Link to="/contacto">CONTACTO</Link>
        </li>
      </ul>
    </nav>
  );
}
