// import React from 'react';
import moment from 'moment';
import { PortableText } from '@portabletext/react';
import type ListingType from 'interfaces';
import Slider from './Slider';

interface ListCardProps {
  listingsMeta: ListingType[];
  activeListing: string;
  setActiveListing: Function;
  listing: ListingType;
  slug?: string;
}

const ListCard: React.FC<ListCardProps> = ({
  listing,
  listingsMeta,
  activeListing,
  setActiveListing,
}) => {
  console.log(listing.slug, listing.name);
  return (
    <div className="bg-white lg:shadow py-10 px-8 sm:p-4 rounded-lg w-300 h-150">
      <div className="flex flex-wrap ">
        <div className="flex items-center">
          <div className="w-full lg:w-1/2">
            <Slider images={listing.images} />
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <h2 className="text-blue-700 font-bold text-3xl mb-1">
              {listing.name}
            </h2>
            <p className="text-grey-600 text-xl mb-5">{listing.address}</p>
            <p className="text-blue-600 text-lg mb-2">
              <span className="text-2xl md:text-3xl font-bold">
                {' '}
                ¥{listing.price}
              </span>{' '}
              <span className="whitespace-nowrap">per month</span>
            </p>
            <p className="text-grey-600 text-xl">
              <strong className="text-blue-600">Available from:</strong>{' '}
              {moment(listing.availability).format('MMMM Do, YYYY')}
            </p>
            <p className="text-grey-600 text-xl">
              <strong className="text-blue-600">Size:</strong> {listing.size} m
              <sup>2</sup>
            </p>

            <a
              href={`/listings/${listing?.slug?.current}`}
              className="bg-blue-400 hover:bg-blue-600 text-white text-lg sm:text-2xl font-body py-2 px-4 inline-block font-bold rounded-md hover:shadow-none shadow-lg whitespace-nowrap transition-all mt-10"
            >
              View Listing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
