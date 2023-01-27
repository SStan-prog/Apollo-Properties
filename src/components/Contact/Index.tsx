import React from 'react';

import Form from './Form';
import Info from './Info';

const Index = () => {
  return (
    <section className=" bg-grey-100 py-10">
      <div className="max-w-[1000px] mx-auto py-10 px-2 sm:px-10 md:px-20 lg:px-5 grid grid-cols-1 lg:grid-cols-10 gap-20 lg:gap-10">
        <div className="lg:col-span-3 row-[2] lg:row-[1]">
          <Info />
        </div>
        <div className="lg:col-span-7 row-[1]">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Index;
