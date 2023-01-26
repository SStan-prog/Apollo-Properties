import React from 'react';

import Form from './Form';
import Info from './Info';

const Index = () => {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto py-10 px-5 grid grid-cols-10 gap-10">
        <div className="col-span-4 ">
          <Info />
        </div>
        <div className="col-span-6">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Index;
