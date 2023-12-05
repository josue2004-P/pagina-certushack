import NavBar from "../componentes/NavBar";
import Footer from "../componentes/Footer";

export default function Home() {
  return (
    <div className="w-full h-screen ">
      <NavBar />

      <section className="mb-10 lg:mb-0 lg:h-[80%] h-screen  w-full pt-12">
        <div className="flex w-full h-full items-center justify-center">
          <div className="w-1/2  justify-end hidden lg:flex">
            <div className="fondo bg-no-repeat bg-center bg-cover flex justify-end lg:mr-2 xl:mr-10 items-center">
              <img
                className="lg:w-[30rem] xl:w-[35rem] 2xl:w-[44rem] lg:h-[25rem] xl:h-[25rem] 2xl:h-[32rem]"
                src="./img/1.png"
                alt=""
              />
            </div>
          </div>

          <div className="  lg:w-1/2    flex lg:pl-10 xl:pl-0 lg:pt-16 xl:pt-10 2xl:pt-5 justify-start lg:mt-[3rem] xl:mt-[3rem]">
            <div className="font-bold w-">
              <h1 className="text-[2rem]  xs:text-[2.95rem] sm:text-[4rem] md:text-[6rem] lg:text-[2.40rem] xl:lg:text-[3.20rem] 2xl:text-[3.95rem] leading-none text-white">
                TU
              </h1>
              <h1 className="text-[3.39rem]   xs:text-[4.4rem] sm:text-[6rem] md:text-[8rem] lg:text-[4.76rem] xl:lg:text-[6.35rem] 2xl:text-[7.75rem] leading-none text-[#8A0026] tracking-wider">
                CAMPAÑA
              </h1>
              <h1 className=" text-[1.6rem]  xs:text-[2.2rem] sm:text-[3rem] md:text-[4rem] lg:text-[2.40rem] xl:lg:text-[3.20rem] 2xl:text-[3.95rem] leading-none text-white">
                A UN NIVEL SUPERIOR
              </h1>
              <div className="flex">
                <h1 className="text-white text-[2rem]  xs:text-[2.50rem] sm:text-[4rem] md:text-[5rem] lg:text-[2.40rem] xl:lg:text-[3.20rem] 2xl:text-[3.95rem] leading-none mr-2">
                  DE
                </h1>
                <p className="text-[#8A0026] text-[2.5rem]  xs:text-[3.6rem] sm:text-[4.75rem] md:text-[6.5rem] lg:text-[4rem] xl:lg:text-[5.32rem] 2xl:text-[6.5rem] leading-none">
                  SEGURIDAD
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
