import React from 'react';

const index = () => {
  return (
    <section>
      <div className="lg:max-w-[1920px] mx-auto grid grid-col-1 xl:grid-cols-2 relative overflow-hidden">
        <div className="xl:row-[1] row-[2] ">
          <img
            src="/images/ffa/inclusions.jpg"
            alt=""
            className="xl:rounded-tr-[20px]  h-full w-full object-cover "
          />
        </div>
        <div className=" py-20 px-5 sm:px-20 ">
          <h2 className="text-blue-600 text-3xl sm:text-4xl font-heading font-bold mb-10">
            Everything you need to get settled
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 flex-wrap">
            <ul>
              <li className="text-xl font-heading font-bold text-blue-600 mb-2">
                Kitchen & Dining
              </li>
              <li className="grid grid-cols-10 max-w-[300px] mb-2">
                <span className="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1" />{' '}
                <p className="text-grey-600  col-span-9">Fridge</p>
              </li>
              <li className="grid grid-cols-10 max-w-[300px] mb-2">
                <span className="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1 " />{' '}
                <p className="text-grey-600  col-span-9">Stove</p>
              </li>
              <li className="grid grid-cols-10 max-w-[300px] mb-2">
                <span className="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1 " />{' '}
                <p className="text-grey-600  col-span-9">
                  Dining Table / Chairs
                </p>
              </li>
              <li className="grid grid-cols-10 max-w-[300px] mb-2">
                <span className="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1 " />{' '}
                <p className="text-grey-600  col-span-9">Garbage Can </p>
              </li>
              <li className="grid grid-cols-10 max-w-[300px] mb-2">
                <span className="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1 " />{' '}
                <p className="text-grey-600  col-span-9">Micro-Wave Oven </p>
              </li>
              <li className="grid grid-cols-10 max-w-[300px] mb-2">
                <span className="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1 " />{' '}
                <p className="text-grey-600  col-span-9">
                  Assorted Pots, Pans, Cutlery{' '}
                </p>
              </li>
            </ul>
            <ul>
              <li className="text-xl font-heading font-bold text-blue-600 mb-2">
                Bedroom & General living
              </li>
              <li className="grid grid-cols-10 max-w-[300px] mb-2">
                <span className="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1" />{' '}
                <p className="text-grey-600  col-span-9">Bed</p>
              </li>
              <li className="grid grid-cols-10 max-w-[300px] mb-2">
                <span className="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1 " />{' '}
                <p className="text-grey-600  col-span-9">
                  Air Conditioner / Heater{' '}
                </p>
              </li>
              <li className="grid grid-cols-10 max-w-[300px] mb-2">
                <span className="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1 " />{' '}
                <p className="text-grey-600  col-span-9">Curtains</p>
              </li>
              <li className="grid grid-cols-10 max-w-[300px] mb-2">
                <span className="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1 " />{' '}
                <p className="text-grey-600  col-span-9">Vacuum Cleaner </p>
              </li>
              <li className="grid grid-cols-10 max-w-[300px] mb-2">
                <span className="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1 " />{' '}
                <p className="text-grey-600  col-span-9">
                  Wardrobe (Where No Closet Is Available)
                </p>
              </li>
              <li className="grid grid-cols-10 max-w-[300px] mb-2">
                <span className="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1 " />{' '}
                <p className="text-grey-600  col-span-9">
                  1 Roll Of Toilet Paper
                </p>
              </li>
              <li className="grid grid-cols-10 max-w-[300px] mb-2">
                <span className="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1 " />{' '}
                <p className="text-grey-600  col-span-9">Clothes Hangers</p>
              </li>
            </ul>
            <ul>
              <li className="text-xl font-heading font-bold text-blue-600 mb-2">
                Living Room
              </li>
              <li className="grid grid-cols-10 max-w-[300px]  justify-between  mb-2">
                <span className="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1 " />{' '}
                <p className="text-grey-600  w-full col-span-9 ">
                  Sofa (Space Permitting But Many Places Have One)
                </p>
              </li>
              <li className="grid grid-cols-10 max-w-[300px] mb-2">
                <span className="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1 " />{' '}
                <p className="text-grey-600  col-span-9">
                  Coffee Table ( In Apartments That Have A Sofa){' '}
                </p>
              </li>
              <li className="grid grid-cols-10 max-w-[300px] mb-2">
                <span className="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1 " />{' '}
                <p className="text-grey-600  col-span-9">
                  Wi-fi is generally set up in 95% of the furnished units{' '}
                </p>
              </li>
            </ul>
          </div>
          <div className="flex gap-10   mt-20">
            <a
              href="/contact"
              className="bg-blue-400 hover:bg-blue-600 text-white text-lg sm:text-2xl font-body py-2 px-4 sm:py-3 sm:px-6 inline-block font-bold rounded-md hover:shadow-none shadow-lg whitespace-nowrap transition-all"
            >
              Contact
            </a>
            <a
              href="/lisitngs"
              className="font-bold text-lg sm:text-2xl text-blue-400 hover:text-blue-600  underline transition-colors"
            >
              See Listings
            </a>
          </div>
        </div>
        <img
          src="/images/ffa/japan.svg"
          alt=""
          className="xl:w-[40%] h-auto absolute sm:block hidden right-0 top-40 -z-10"
        />
      </div>
    </section>
  );
};

export default index;
