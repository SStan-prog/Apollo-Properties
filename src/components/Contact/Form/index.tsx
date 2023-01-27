import React from 'react';

const index = () => {
  return (
    <div className="bg-white p-5 sm:p-10 rounded-[40px]">
      <h2 className="text-xl md:text-3xl font-heading font-bold text-blue-600 mb-10 md:mb-14 leading-relaxed">
        We would love to hear from you.
        <br /> How can we help?
      </h2>
      <form method="POST" action="/thank-you" data-netlify="true">
        <div className="flex flex-col md:flex-row gap-5 w-full mb-6">
          <div className="flex flex-col w-full">
            <input
              type="text"
              id="first"
              placeholder="First name"
              className="peer bg-grey-100 text-grey-700 p-3 rounded border-2 border-transparent focus:border-blue-200 outline-none placeholder-transparent transition-colors "
            />
            <label
              htmlFor="first"
              className="ml-[13px]  
              -translate-y-[80px] text-blue-600 font-bold
              peer-placeholder-shown:-translate-y-[38px]  peer-placeholder-shown:text-grey-500 peer-placeholder-shown:font-medium 
              peer-focus:-translate-y-[80px] peer-focus:font-bold  peer-focus:text-blue-600  
             transition-all
             "
            >
              First name
            </label>
          </div>
          <div className="flex flex-col w-full">
            <input
              type="text"
              id="last"
              placeholder="Last name"
              className="peer bg-grey-100 text-grey-700 p-3 rounded border-2 border-transparent focus:border-blue-200 outline-none placeholder-transparent transition-colors "
            />
            <label
              htmlFor="last"
              className="ml-[13px]  
              -translate-y-[80px] text-blue-600 font-bold
              peer-placeholder-shown:-translate-y-[38px]  peer-placeholder-shown:text-grey-500 peer-placeholder-shown:font-medium 
              peer-focus:-translate-y-[80px] peer-focus:font-bold  peer-focus:text-blue-600  
             transition-all
             "
            >
              Last name
            </label>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 w-full mb-10">
          <div className="flex flex-col w-full">
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="peer bg-grey-100 text-grey-700 p-3 rounded border-2 border-transparent focus:border-blue-200 outline-none placeholder-transparent transition-colors "
            />
            <label
              htmlFor="email"
              className="ml-[13px]  
              -translate-y-[80px] text-blue-600 font-bold
              peer-placeholder-shown:-translate-y-[38px]  peer-placeholder-shown:text-grey-500 peer-placeholder-shown:font-medium 
              peer-focus:-translate-y-[80px] peer-focus:font-bold  peer-focus:text-blue-600  
             transition-all
             "
            >
              Email address
            </label>
          </div>
          <div className="flex flex-col w-full">
            <input
              type="phone"
              id="Phone"
              placeholder="Phone number"
              className="peer bg-grey-100 text-grey-700 p-3 rounded border-2 border-transparent focus:border-blue-200 outline-none placeholder-transparent transition-colors "
            />
            <label
              htmlFor="Phone"
              className="ml-[13px]  
              -translate-y-[80px] text-blue-600 font-bold
              peer-placeholder-shown:-translate-y-[38px]  peer-placeholder-shown:text-grey-500 peer-placeholder-shown:font-medium 
              peer-focus:-translate-y-[80px] peer-focus:font-bold  peer-focus:text-blue-600  
             transition-all
             "
            >
              Phone number
            </label>
          </div>
        </div>
        <div className="flex gap-5 w-full mb-10">
          <div className="flex flex-col w-full relative">
            <textarea
              id="message"
              rows={5}
              placeholder="message"
              className="peer resize-y bg-grey-100 text-grey-700 p-3 rounded border-2 border-transparent focus:border-blue-200 outline-none placeholder-transparent transition-colors "
            />
            <label
              htmlFor="message"
              className="ml-[13px] absolute
              -top-[30px] text-blue-600 font-bold
              peer-placeholder-shown:top-[10px]  peer-placeholder-shown:text-grey-500 peer-placeholder-shown:font-medium 
              peer-focus:-top-[30px] peer-focus:font-bold  peer-focus:text-blue-600  
             transition-all
             "
            >
              How can we help?
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="mx-auto w-full bg-blue-400 hover:bg-blue-600 text-white text-lg sm:text-2xl font-body py-2 px-4 sm:py-3 sm:px-6 inline-block font-bold rounded-md hover:shadow-none shadow-lg whitespace-nowrap transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default index;
