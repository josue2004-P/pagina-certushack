export default function NavBarServices() {
  return (
    <nav className="flex w-full h-[10%] bg-black fixed z-10 justify-end text-white">
      <ul className="flex gap-9 p-5 lg:pr-[10rem] font-extrabold text-2xl">
        <li>
          <a href="home.html">INICIO</a>
        </li>
        <li>
          <a className="p-2 bg-[#8A0026]" href="">
            SERVICIOS
          </a>
        </li>
        <li>
          <a href="">NOSOTROS</a>
        </li>
        <li>
          <a href="">CONTACTO</a>
        </li>
      </ul>
    </nav>
  );
}
