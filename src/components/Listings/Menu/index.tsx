import React, { useEffect } from 'react';
import type ListingType from 'interfaces';

interface MenuProps {
  listingsMeta: ListingType[];
  activeListing: string;
  setActiveListing: Function;
}

const Menu = ({ listingsMeta, activeListing, setActiveListing }: MenuProps) => {
  const handleClick = (id: string) => {
    setActiveListing(id);
  };

  return (
    <ul className="w-full lg:w-[230px] xl:w-[320px] sm:py-5">
      {listingsMeta.map((listing) => {
        return (
          <li
            key={listing._id}
            onClick={() => handleClick(listing._id)}
            className={`${
              listing._id === activeListing ? 'font-bold' : ''
            } text-blue-600 text-2xl xl:text-3xl p-5 border-b border-grey-300 last:border-b-0 text-center lg:text-left cursor-pointer`}
          >
            {listing.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
