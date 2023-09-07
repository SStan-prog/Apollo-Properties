import React, { useState, useEffect } from 'react';
import type ListingType from 'interfaces';
import ListCard from './ListCard';

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
    slug: '',
  }));

  const [activeListing, setActiveListing] = useState(listingsMeta[0]._id);

  return (
    <section className="bg-grey-100">
      <div className="max-w-[1400px] mx-auto lg:px-10 lg:py-20">
        <div className="flex flex-col items-center lg:items-start lg:flex-row lg:gap-10 xl:gap-32 justify-items-center">
          <div className="grid grid-cols-2 gap-10 w-full">
            {activeListings.map((listing, index) => (
              <div key={listing._id}>
                <ListCard
                  listing={listing}
                  listingsMeta={listingsMeta}
                  setActiveListing={setActiveListing}
                  activeListing={activeListing}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
