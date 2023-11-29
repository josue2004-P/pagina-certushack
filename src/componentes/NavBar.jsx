

export default function NavBar() {
  return (
    <nav className="flex h-[10%] justify-end text-white">
    <ul className="flex gap-9 p-5 lg:pr-[10rem] font-extrabold text-2xl">
      <li>
        <a className="p-2 bg-[#8A0026]" href="index.html">
          INICIO
        </a>
      </li>
      <li>
        <a href="servicios1.html">SERVICIOS</a>
      </li>
      <li>
        <a href="">NOSOTROS</a>
      </li>
      <li>
        <a href="">CONTACTO</a>
      </li>
    </ul>
  </nav>
  )
}
