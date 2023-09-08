// import React from 'react';
import ListCard from './ListCard';
import Slider from './Slider';
import type ListingType from 'interfaces';
import { Image } from '@astrojs/image/components';

interface ListingSideBarProps {
//   listings: ListingType[];
  listing: ListingType; // Make the listing prop mandatory
}

const ListingSideBar: React.FC<ListingSideBarProps> = ({ listing }) => {
  return (
    <section className='w-96'>
      <div className="flex flex-col items-center">
        <h2 className="text-blue-700 text-2xl font-bold mb-4">Other apartments you may like</h2>
        {/* cards container */}
        <div className=" flex flex-col items-center">
          <a 
            href={`/listings/${listing.slug?.current}`}
            className="text-blue-400 text-l sm:text-xs font-body inline-block font-bold rounded-md"
          >
            {/* individual card container */}
            <div className="flex flex-col py-8 px-8 sm:p-4 rounded-lg w-auto duration-500 hover:shadow-lg hover:bg-opacity-80 hover:bg-white">
              {/* card */}
              <div className='flex'>
                <div className="flex justify-center items-center w-full lg:w-1/2 pr-8">
                    <p>image here</p>
                </div>
                <div className="flex flex-col lg:w-full h-full">
                  <h5 className="text-blue-600 font-bold sm:text-xl mb-1">
                    {listing.name}
                  </h5>
                  <p className="text-grey-600 sm:text-l mb-1">
                    {listing.address}
                  </p>
                  <p className="text-blue-700 sm:text-l mb-1">
                    <span className="sm:text-xl font-bold">¥{listing.price}</span>{' '}
                    <span className="whitespace-nowrap">per month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-300 my-2"></div>
            
          </a>
          <div>
            <a
              href={"/listings"}
              className=" text-blue-400 text-l sm:text-m font-body font-bold"
              >
              View all listings
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingSideBar;
