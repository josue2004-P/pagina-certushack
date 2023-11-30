import NavBar from "../componentes/NavBar";
import Footer from "../componentes/Footer";

export default function Home() {
  return (
    <div className="w-full h-screen ">



        <NavBar/>

        <section className="h-[80%] w-full pt-12">
          <div className="flex w-full h-full">
            <div className="w-1/2 flex justify-end">
              <div className="fondo bg-no-repeat bg-center bg-cover flex justify-end lg:mr-2 xl:mr-10 items-center">
                <img
                  className="lg:w-[30rem] xl:w-[35rem] 2xl:w-[44rem] lg:h-[25rem] xl:h-[25rem] 2xl:h-[32rem]"
                  src="./img/1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 flex lg:pl-10 xl:pl-0 lg:pt-16 xl:pt-10 2xl:pt-5 justify-start lg:mt-[3rem] xl:mt-[3rem]">
              <div className="font-bold">
                <h1 className="text-[2.95rem] lg:text-[2.40rem] xl:lg:text-[3.20rem] 2xl:text-[3.95rem] leading-none text-white">
                  TU
                </h1>
                <h1 className="text-[6.25rem] lg:text-[4.76rem] xl:lg:text-[6.35rem] 2xl:text-[7.75rem] leading-none text-[#8A0026] tracking-wider">
                  CAMPAÑA
                </h1>
                <h1 className="text-[2.95rem] lg:text-[2.40rem] xl:lg:text-[3.20rem] 2xl:text-[3.95rem] leading-none text-white">
                  A UN NIVEL SUPERIOR
                </h1>
                <div className="flex">
                  <h1 className="text-white text-[2.95rem] lg:text-[2.40rem] xl:lg:text-[3.20rem] 2xl:text-[3.95rem] leading-none mr-2">
                    DE
                  </h1>
                  <p className="text-[#8A0026] text-[5rem] lg:text-[4rem] xl:lg:text-[5.32rem] 2xl:text-[6.5rem] leading-none">
                    SEGURIDAD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer/>


    </div>
  );
}