import React from 'react';

const index = () => {
  return (
    <div className="px-3 sm:px-0">
      <h2 className=" text-xl sm:text-3xl font-heading font-bold text-blue-600 mb-6">
        Contact
      </h2>
      <div className="mb-6">
        <p className="text-blue-600 text-lg">E-mail</p>
        <a href="mailto:info@apolloproperties.co.jp">
          info@apolloproperties.co.jp
        </a>
      </div>
      <div className="mb-6 flex flex-col gap-2">
        <p className="text-blue-600 text-lg">From Within Japan</p>
        <a href="tel:0666415301">Office Tel: 06-6641-5301</a>
        <a href="tel:0666415302">Office Fax: 06-6641-5302</a>
        <a href="tel:0120932614">Free Dial: 0120-932-614 (*In Osaka Only)</a>
      </div>
      <div className="mb-6 flex flex-col gap-2">
        <p className="text-blue-600 text-lg">After-hours service</p>
        <a href="tel:09074906251 ">Cell: 090-7490-6251 (Bruce Bennett)</a>
        <a href="tel:09089807535">
          Cell: 090-8980-7535 (In Japanese: Masatoshi Akasaka)
        </a>
      </div>
      <div className="mb-6 flex flex-col gap-2">
        <p className="text-blue-600 text-lg">From outside Japan</p>
        <a href="tel:819074906251 ">81-90-7490-6251</a>
        <a href="tel:819089807535">Cell: 81-90-8980-7535 (In Japanese)</a>
        <a href="tel:81666415301">Office Tel: 81-6-6641-5301</a>
        <a href="tel:81666415302">Office Fax: 81-6-6641-5302</a>
        <p>Skype Name: apollo.properties</p>
      </div>
    </div>
  );
};

export default index;
