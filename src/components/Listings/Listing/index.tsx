import React from 'react';
import { PortableText } from '@portabletext/react';
import type ListingType from 'interfaces';
import Slider from '../Slider';

interface ListingProps {
  listings: ListingType[];
  activeListing: string;
}

const index = ({ listings, activeListing }: ListingProps) => {
  return (
    <div className="bg-white lg:shadow py-10 px-8 sm:p-10  rounded-none lg:rounded-2xl w-full">
      {listings.map((listing) => {
        return (
          <div
            key={listing._id}
            className={`${
              listing._id === activeListing ? 'block' : 'hidden'
            } w-full`}
          >
            <div className="flex flex-col items-center w-full">
              <div className=" flex flex-col md:flex-row justify-between w-full">
                <div className=" mb-4 md:mb-0">
                  <h2 className="text-blue-700 font-bold text-3xl mb-1">
                    {listing.name}
                  </h2>
                  <p className=" text-grey-600 text-xl mb-5">
                    {listing.address}
                  </p>
                </div>

                <p className=" text-blue-600 text-lg mb-2 ">
                  <span className="text-2xl md:text-3xl font-bold">
                    {' '}
                    ¥{listing.price}
                  </span>{' '}
                  <span className=" whitespace-nowrap">per month</span>
                </p>
              </div>

              <div className="flex flex-col w-full gap-2">
                <p className=" text-grey-600 text-xl">
                  <strong className="text-blue-600">Available from:</strong>{' '}
                  {listing.availability}
                </p>
                <p className=" text-grey-600 text-xl">
                  <strong className="text-blue-600">Size:</strong>{' '}
                  {listing.size} m<sup>2</sup>
                </p>
              </div>
              <a
                href="/contact"
                className="bg-blue-400 hover:bg-blue-600 text-white text-lg sm:text-2xl font-body py-2 px-4 inline-block font-bold rounded-md hover:shadow-none shadow-lg whitespace-nowrap transition-all mt-10"
              >
                Contact Us About This Listing
              </a>
              <div className="w-full my-10">
                <Slider images={listing.images} />
              </div>
              <div className="">
                <p className="text-blue-600 font-bold text-xl">
                  About the property
                </p>
                <div className="text-grey-600 text-lg">
                  <PortableText value={listing.description} />
                </div>
                <a
                  href="/contact"
                  className="bg-blue-400 hover:bg-blue-600 text-white text-lg sm:text-2xl font-body py-2 px-4 inline-block font-bold rounded-md hover:shadow-none shadow-lg whitespace-nowrap transition-all mt-10"
                >
                  Contact Us About This Listing
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default index;
