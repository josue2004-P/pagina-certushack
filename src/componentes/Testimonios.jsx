import React from "react";

export default function Testimonios() {
  return (
    <section class="">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm">
          <h2 class="mb-4 text-4xl  font-extrabold text-gray-100">
            Testimonials
          </h2>
          <p class="mb-8 font-medium text-gray-400 lg:mb-16 sm:text-xl">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div class="grid mb-8 lg:mb-12 lg:grid-cols-2 ">
          <figure class="flex flex-col justify-center items-center p-8 text-center  border-b border-[#8a0026] md:p-12 lg:border-r ">
            <blockquote class="mx-auto mb-8 max-w-2xl text-gray-400 ">
              <h3 class="text-lg font-semibold text-gray-100 dark:text-white">
                Speechless with how easy this was to integrate
              </h3>
              <p class="my-4">
                "I recently got my hands on Flowbite Pro, and holy crap, I'm
                speechless with how easy this was to integrate within my
                application. Most templates are a pain, code is scattered, and
                near impossible to theme.
              </p>
              <p class="my-4">
                Flowbite has code in one place and I'm not joking when I say it
                took me a matter of minutes to copy the code, customise it and
                integrate within a Laravel + Vue application.
              </p>
              <p class="my-4">
                If you care for your time, I hands down would go with this."
              </p>
            </blockquote>
            <figcaption class="flex justify-center items-center space-x-3">
              <img
                class="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div class="space-y-0.5 font-medium text-gray-100 text-left">
                <div>Bonnie Green</div>
                <div class="text-sm font-medium text-gray-500 ">
                  Developer at Open AI
                </div>
              </div>
            </figcaption>
          </figure>

          <figure class="flex flex-col justify-center items-center p-8 text-center  border-b border-[#8a0026] md:p-12 ">
            <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500">
              <h3 class="text-lg font-semibold text-gray-100 ">
                Solid foundation for any project
              </h3>
              <p class="my-4">
                "FlowBite provides a robust set of design tokens and components
                based on the popular Tailwind CSS framework. From the most used
                UI components like forms and navigation bars to the whole app
                screens designed both for desktop and mobile, this UI kit
                provides a solid foundation for any project.
              </p>
              <p class="my-4">
                Designing with Figma components that can be easily translated to
                the utility classes of Tailwind CSS is a huge timesaver!"
              </p>
            </blockquote>
            <figcaption class="flex justify-center items-center space-x-3">
              <img
                class="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                alt="profile picture"
              />
              <div class="space-y-0.5 font-medium text-gray-100 text-left">
                <div>Roberta Casas</div>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Lead designer at Dropbox
                </div>
              </div>
            </figcaption>
          </figure>

          <figure class="flex flex-col justify-center items-center p-8 text-center  border-b border-[#8a0026] lg:border-b-0 md:p-12 lg:border-r ">
            <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 ">
              <h3 class="text-lg font-semibold text-gray-100">
                Mindblowing workflow and variants
              </h3>
              <p class="my-4">
                "As someone who mainly designs in the browser, I've been a
                casual user of Figma, but as soon as I saw and started playing
                with FlowBite my mind was 🤯.
              </p>
              <p class="my-4">
                Everything is so well structured and simple to use (I've learnt
                so much about Figma by just using the toolkit).
              </p>
              <p class="my-4">
                Aesthetically, the well designed components are beautiful and
                will undoubtedly level up your next application."
              </p>
            </blockquote>
            <figcaption class="flex justify-center items-center space-x-3">
              <img
                class="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="profile picture"
              />
              <div class="space-y-0.5 font-medium text-gray-100 text-left">
                <div>Jese Leos</div>
                <div class="text-sm font-medium text-gray-500 ">
                  Software Engineer at Facebook
                </div>
              </div>
            </figcaption>
          </figure>
          <figure class="flex flex-col justify-center items-center p-8 text-center border-[#8a0026] md:p-12 ">
            <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500">
              <h3 class="text-lg font-semibold text-gray-100 ">
                Efficient Collaborating
              </h3>
              <p class="my-4">
                "This is a very complex and beautiful set of elements. Under the
                hood it comes with the best things from 2 different worlds:
                Figma and Tailwind.
              </p>
              <p class="my-4">
                You have many examples that can be used to create a fast
                prototype for your team."
              </p>
            </blockquote>
            <figcaption class="flex justify-center items-center space-x-3">
              <img
                class="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                alt="profile picture"
              />
              <div class="space-y-0.5 font-medium text-gray-100 text-left">
                <div>Joseph McFall</div>
                <div class="text-sm font-medium text-gray-500 ">
                  CTO at Google
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="mt-5 lg:mt-10 flex justify-center">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-100   bg-gradient-to-br from-[#8A0026] to-[#000000]">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-85 bg-black  hover:bg-black">
              Show More...
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
