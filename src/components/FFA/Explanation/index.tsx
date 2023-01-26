import React from 'react';
import { Image } from '@astrojs/image/components';

const index = () => {
  return (
    <section>
      <div className="lg:max-w-[1400px] mx-auto py-24 grid grid-cols-2 gap-10 px-5 sm:px-10">
        <div className="">
          <h2 className=" text-blue-700 text-3xl sm:text-4xl font-heading font-bold mb-5">
            How it works
          </h2>
          <p className=" text-grey-600 mb-2">
            Fully Furnished or Fully Equipped Apartments, are apartments that
            allow people arriving directly from overseas a very easy transition
            into life here in Japan. Yes of course it is possible to arrive and
            stay in a hotel and start looking around for properties on your own
            when you first arrive, but most likely you may be occupied with the
            starting of a new job, may have little or no Japanese language
            experience and may be generally at a lost as to where to begin your
            search. We recommend that people take a bit of time to get to know
            the city before making any decisions regarding where they plan to
            live long-term.
          </p>
          <p className=" text-grey-600 mb-2">
            After a couple months of commuting to and from your new workplace or
            school etc. and having the time to understand where you will spend
            your free time hours, we believe you will be better able to make a
            well-informed decision of where you would like to live for the
            duration of your stay in Japan should it be long term.
          </p>
          <p className=" text-grey-600 mb-2">
            Thus, this system of arriving, unpacking and starting your new life
            appeals to many newcomers here in Japan. The relatively short
            3-month minimum stay contract allows you the freedom to decide where
            you would ultimately like to live in relation to your work as well
            as your private life. In fact, many Apollo Properties` customers
            stay in the fully-furnished apartment they rent for years on end.{' '}
          </p>
          <p className=" text-grey-600 mb-2">
            Note: Generally speaking, non-furnished apartments offered through
            most local Japanese real estate offices cannot be reserved from
            overseas as you must be here in person in order to complete a
            detailed application process. The application process can take up to
            2 weeks depending on your application details. The management
            company of the apartment you are interested in renting will then
            either accept or deny your application. This process can be time
            consuming thus making it a good decision to rent a fully-furnished
            apartment or a private room in one of our share houses for when you
            first arrive in Osaka.{' '}
          </p>
        </div>
        <div className="">
          <Image
            src="/images/osaka-night.jpg"
            alt=""
            width={250}
            aspectRatio={1 / 1}
            format="webp"
            fit="cover"
            position="center"
            background="transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
