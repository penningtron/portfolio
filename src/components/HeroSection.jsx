export default function HeroSection() {
    return (
      <div className="pt-4 bg-white">
        <div className="max-w-full lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-6 lg:px-0 lg:pb-48 lg:pt-40 xl:col-span-6">
            <div className="mx-auto max-w-lg lg:mx-0 lg:grid-cols-2">
              <h1 className="mt-24 text-left text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:mt-10 sm:text-7xl">
                Howdy! I'm Nate.
              </h1>
              <p className="mt-8 text-left text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat.
              </p>
            </div>
          </div>
          <div className="relative lg:col-span-6 ">
            <img
              alt=""
              src="https://via.placeholder.com/600"
              className=" w-full bg-gray-50 object-cover lg:inset-0 lg:aspect-auto lg:h-full"
            />
          </div>
        </div>
      </div>
    )
  }