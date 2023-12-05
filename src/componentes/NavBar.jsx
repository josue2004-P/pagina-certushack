import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <nav className="flex  h-[10%] w-full justify-end text-white">
    <ul className="flex gap-9 p-5 lg:pr-[10rem] font-extrabold text-2xl">
      <li>
        <Link  to="/" className="p-2 bg-[#8A0026]" href="index.html">
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
  )
}
