// import React from 'react';
import moment from 'moment';
import { PortableText } from '@portabletext/react';
import type ListingType from 'interfaces';
import Slider from './Slider';

interface ListCardProps {
  listing: ListingType;
  slug?: string;
}

const ListCard: React.FC<ListCardProps> = ({ listing }) => {
  return (
    <div className="bg-white lg:shadow py-8 px-8 sm:p-4 rounded-lg w-auto">
      <div className="flex flex-wrap">
        <div className="flex justify-center items-start">
          <div className="flex w-full lg:w-1/2 pr-8">
            <Slider images={listing.images} />
          </div>
          <div className="flex flex-col w-full lg:w-1/2 h-full">
            <h2 className="text-blue-700 font-bold sm:text-xl">
              {listing.name}
            </h2>
            <p className="text-grey-600 sm:text-l mb-1">{listing.address}</p>
            <p className="text-blue-600 sm:text-l mb-1">
              <span className="sm:text-xl font-bold"> ¥{listing.price}</span>{' '}
              <span className="whitespace-nowrap">per month</span>
            </p>
            <p className="text-grey-600 sm:text-m">
              <strong className="text-blue-600">Available from:</strong>{' '}
              {moment(listing.availability).format('MMMM Do, YYYY')}
            </p>
            <p className="text-grey-600 sm:text-m">
              <strong className="text-blue-600">Size:</strong> {listing.size} m
              <sup>2</sup>
            </p>

            <div>
              <a
                href={`/listings/${listing.slug?.current}`}
                className="bg-blue-400 hover:bg-blue-600 text-white text-l sm:text-m font-body py-1 px-4 inline-block font-bold rounded-md hover:shadow-none shadow-lg whitespace-nowrap transition-all mt-6"
              >
                View Listing
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
