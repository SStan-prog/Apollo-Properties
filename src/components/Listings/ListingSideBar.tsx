// import React from 'react';
import type ListingType from 'interfaces';
import ListCard from "./ListCard";

interface ListingSideBarProps {
    listings: ListingType[];
  }

const ListingSideBar: React.FC<ListingSideBarProps> = ({ listings }) => {
    console.log('Listings received in ListingSideBar:', listings);
    // take the first 3 listings from the list of listings
    const featuredListings = Array.isArray(listings) ? listings.slice(0, 3) : [];


return (
    <section className="listing-sidebar flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">Other apartments you may like</h2>
        {featuredListings.map((listing) => (
            <div key={listing._id}>
            <ListCard listing={listing} />
            </div>
        ))}
        <p>why is my ListCard not showinggggg??</p>

        <div>
            <a
            href={"/listings"}
            className=" text-blue-400 text-l sm:text-m font-body py-1 px-4 inline-block font-bold rounded-md mt-6"
            >
            View all listings
            </a>
        </div>
    </section>
  );
};

export default ListingSideBar;