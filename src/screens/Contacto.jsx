import NavBarServices from "../componentes/NavBarServices";

export default function Contacto() {
  return (
    <>
      <NavBarServices />
      <div className="h-screen w-full bg-black">
        <div className="h-[30%] flex justify-center items-center">
          <div className="text-center text-[#8A0026] font-extrabold mt-10">
            <h1 className="uppercase text-5xl lg:text-6xl">Contacto</h1>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex justify-center h-full ">
            <div className="w-[20rem] sm:w-[36rem] rounded-xl grid sm:grid-cols-2 bg-gray-700 gap-y-8 sm:gap-0">
              <div className="flex justify-center pt-10">
                <div>
                  <div>
                    <button className="text-white flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                      </svg>
                      <p className="ml-2">jasjasjasjasja@gnail.com</p>
                    </button>
                  </div>
                  <div>
                    <button className="text-white flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <p className="ml-2">jasjasjasj.asjajsa.jas</p>
                    </button>
                  </div>
                  <div>
                    <button className="text-white flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                        <path
                          fill-rule="evenodd"
                          d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <p className="ml-2">xxxx-xx-xx-xx</p>
                    </button>
                  </div>
                  <div className="flex  mt-16 justify-between">
                    <div className="  rounded-2xl ">
                      <p className="mt-2 px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="26"
                          width="16"
                          viewBox="0 0 320 512"
                          className="text-white"
                        >
                          <path
                            fill="#f9fafa"
                            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                          />
                        </svg>
                      </p>
                    </div>

                    <div className="  rounded-2xl bg-red-900">
                      <p className="my-2 px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="26"
                          width="26"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="#ffffff"
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                          />
                        </svg>
                      </p>
                    </div>
                    <div className="  rounded-2xl bg-red-900">
                      <p className="mt-2 px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="26"
                          width="16"
                          viewBox="0 0 320 512"
                          className="text-white"
                        >
                          <path
                            fill="#f9fafa"
                            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                          />
                        </svg>
                      </p>
                    </div>
                    <div className="  rounded-2xl bg-red-900">
                      <p className="mt-2 px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="26"
                          width="16"
                          viewBox="0 0 320 512"
                          className="text-white"
                        >
                          <path
                            fill="#f9fafa"
                            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                          />
                        </svg>
                      </p>
                    </div>
                    <div className="  rounded-2xl bg-red-900">
                      <p className="mt-2 px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="26"
                          width="16"
                          viewBox="0 0 320 512"
                          className="text-white"
                        >
                          <path
                            fill="#f9fafa"
                            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full pb-4 sm:pt-4 ">
                <div className=" flex justify-center">
                  <input
                    className="w-[90%] text-white bg-red-900 p-2 rounded-lg text-xl font-medium"
                    type="text"
                    placeholder="Nombre"
                    name=""
                    id=""
                  />
                </div>
                <div className="mt-[1rem] flex justify-center">
                  <input
                    className="w-[90%] text-white bg-red-900 p-2 rounded-lg text-xl font-medium"
                    type="text"
                    placeholder="Correo"
                    name=""
                    id=""
                  />
                </div>
                <div className="mt-[1rem] flex justify-center">
                  <input
                    className="w-[90%] text-white bg-red-900 p-2 rounded-lg text-xl font-medium"
                    type="text"
                    placeholder="Celular"
                    name=""
                    id=""
                  />
                </div>
                <div className="mt-[1rem] flex justify-center">
                  <textarea
                    className="w-[90%] text-white bg-red-900 p-2 rounded-lg text-xl font-medium"
                    placeholder="Comentario"
                    name=""
                    id=""
                    cols="1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    className="rounded-lg mt-[1rem] bg-red-900 text-white px-3 text-basic font-medium py-1 uppercase"
                    type="button"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
