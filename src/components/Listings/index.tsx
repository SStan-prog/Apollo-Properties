import React, { useState, useEffect } from 'react';
import type ListingType from 'interfaces';
import Menu from './Menu';
import Listing from './Listing';

interface ListingsProps {
  listings: ListingType[];
}

const index = ({ listings }: ListingsProps) => {
  const activeListings = listings.filter((listing) => {
    if (!listing.hideListing) return listing;
  });

  const listingsMeta = activeListings.map(({ _id, name, hideListing }) => ({
    _id,
    name,
    hideListing,
  }));

  const [activeListing, setActiveListing] = useState(listingsMeta[0]._id);

  return (
    <section className="bg-grey-100">
      <div className=" max-w-[1400px] mx-auto lg:px-10 lg:py-20">
        <div className="flex flex-col items-center lg:items-start lg:flex-row lg:gap-10 xl:gap-32 justify-items-center">
          <div className=" col-span-3">
            <Menu
              listingsMeta={listingsMeta}
              setActiveListing={setActiveListing}
              activeListing={activeListing}
            />
          </div>
          <div className="w-full">
            <Listing listings={activeListings} activeListing={activeListing} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
