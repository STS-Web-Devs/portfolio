import React from 'react'

function Services() {
  return (
    <div className="container py-16 md:py-20" id="services">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here's what I'm good at
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          These are the services Ioffer
        </h3>

        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
          <div className="group rounded cursor-pointer px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-development-white.svg" alt="development icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-development-black.svg" alt="development icon" />
              </div>
            </div>
            <div className="text-center cursor-pointer">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary-main group-hover:text-white lg:text-xl">
                WEB DEVELOPMENT
              </h3>
            </div>
          </div>
          
          <div className="group rounded cursor-pointer px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-design-white.svg" alt="Theme Design icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-design-black.svg" alt="Theme Design icon" />
              </div>
            </div>
            <div className="text-center cursor-pointer">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary-main group-hover:text-white lg:text-xl">
                Graphic Design
              </h3>
            </div>
          </div>
          <div className="group rounded cursor-pointer px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-graphics-white.svg" alt="Graphic Design icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-graphics-black.svg" alt="Graphic Design icon" />
              </div>
            </div>
            <div className="text-center cursor-pointer">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary-main group-hover:text-white lg:text-xl">
                Web Design
              </h3>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Services