import React, { useState } from "react";
import type ListingType from "interfaces";
import Menu from "./Menu";
import Listing from "./Listing";

interface ListingsProps {
  listings: ListingType[];
}

const index = ({ listings }: ListingsProps) => {
  const listingsMeta = listings.map(({ _id, name }) => ({ _id, name }));

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
            <Listing listings={listings} activeListing={activeListing} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
