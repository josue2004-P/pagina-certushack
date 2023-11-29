import NavBarServices from '../../componentes/NavBarServices'

export default function Contacto() {
  return (
    <>
    <NavBarServices/>
    <div class="h-screen w-full bg-black">
      <div class="h-[30%] flex justify-center items-center">
        <div class="text-center text-[#8A0026] font-extrabold mt-10">
          <h1 class="uppercase text-6xl">Contacto</h1>
        </div>
      </div>
      <div class="">
        <div class="flex justify-center h-full">
          <div
            class="w-full rounded-xl grid grid-cols-2 bg-gray-700 p-10 gap-x-4 lg:mx-[8rem] xl:mx-[13rem] 2xl:mx-[25rem]"
          >
            <div class="flex justify-center">
              <div>
                <div>
                  <button class="text-white flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
                      />
                      <path
                        d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
                      />
                    </svg>
                    <p class="ml-2">jasjasjasjasja@gnail.com</p>
                  </button>
                </div>
                <div>
                  <button class="text-white flex mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p class="ml-2">jasjasjasj.asjajsa.jas</p>
                  </button>
                </div>
                <div>
                  <button class="text-white flex mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <p class="ml-2">xxxx-xx-xx-xx</p>
                  </button>
                </div>
                <div class="flex mt-[10rem]">
                  <div>iconoc</div>
                  <div>iconoc</div>
                  <div>iconoc</div>
                  <div>iconoc</div>
                  <div>iconoc</div>
                </div>
              </div>
            </div>

            <div class="w-full">
              <div class="">
                <input
                  class="w-full text-white bg-red-900 p-2 rounded-lg text-xl font-semibold"
                  type="text"
                  placeholder="Nombre"
                  name=""
                  id=""
                />
              </div>
              <div class="mt-[1rem]">
                <input
                  class="w-full text-white bg-red-900 p-2 rounded-lg text-xl font-semibold"
                  type="text"
                  placeholder="Correo"
                  name=""
                  id=""
                />
              </div>
              <div class="mt-[1rem]">
                <input
                  class="w-full text-white bg-red-900 p-2 rounded-lg text-xl font-semibold"
                  type="text"
                  placeholder="Celular"
                  name=""
                  id=""
                />
              </div>
              <div class="mt-[1rem]">
                <textarea
                  class="w-full text-white bg-red-900 p-2 rounded-lg text-xl font-semibold"
                  placeholder="Comentario"
                  name=""
                  id=""
                  cols="1"
                  rows="3"
                ></textarea>
              </div>
              <button
                class="rounded-lg mt-[1rem] bg-red-900 text-white px-3 text-xl font-semibold py-1 uppercase"
                type="button"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
