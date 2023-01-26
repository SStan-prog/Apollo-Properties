const index = () => {
  return (
    <header className="relative bg-bottom bg-cover  bg-[url('/images/apartment-header-mobile.jpg')] sm:bg-[url('/images/apartment-header.jpg')]">
      <div className="">
        <div className="absolute bg-[rgba(0,0,0,.4)] h-full w-full z-10"></div>
        <div className=" max-w-[1520px] mx-auto">
          <div className="relative z-20 px-2 sm:px-20 pt-20 pb-10 sm:py-40">
            <h1 className="text-4xl sm:text-6xl text-white drop-shadow-bmxl font-bold font-heading max-w-[1000px] leading-snug sm:leading-snug mb-5 sm:mb-14">
              About our fully furnished apartments
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
