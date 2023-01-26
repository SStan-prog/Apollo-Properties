const index = () => {
  return (
    <header className="relative bg-bottom bg-cover  bg-[url('/images/home-header-mobile.jpg')] sm:bg-[url('/images/home-header.jpg')]">
      <div className="">
        <div className="absolute bg-[rgba(0,0,0,.4)] h-full w-full z-10"></div>
        <div className="relative z-20 px-2 sm:px-20 pt-20 pb-10 sm:py-40">
          <div className="gap-10 items-center mb-5 hidden sm:flex">
            <span className="font-bold text-blue-700 bg-blue-100 rounded-full px-4 py-2">
              Services in English
            </span>
            <span className="font-bold text-blue-700 bg-blue-100 rounded-full px-4 py-2">
              No key or guarantor fees
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl text-white drop-shadow-xl font-bold font-heading max-w-[1000px] leading-snug sm:leading-snug mb-5 sm:mb-14">
            Fully furnished apartments in Osaka for short & long term stays
          </h1>
          <div className="flex gap-10 items-center mb-14 sm:mb-0">
            <a
              href="/contact"
              className="bg-blue-400 hover:bg-blue-600 text-white text-xl sm:text-3xl font-body py-2 px-4 sm:py-3 sm:px-6 inline-block font-bold rounded-md hover:shadow-none shadow-lg whitespace-nowrap transition-all"
            >
              Contact
            </a>
            <a
              href="/lisitngs"
              className="font-bold text-xl sm:text-3xl text-white hover:text-grey-200 underline transition-colors"
            >
              See Listings
            </a>
          </div>
          <div className="flex flex-col gap-4  sm:hidden">
            <span className="font-bold text-blue-700 bg-blue-100 rounded-full px-2 py-1 text-sm whitespace-nowrap max-w-min">
              Services in English
            </span>
            <span className="font-bold text-blue-700 bg-blue-100 rounded-full px-2 py-1 text-sm whitespace-nowrap max-w-min">
              No key or guarantor fees
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
