import { useState } from 'react';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <nav className=" mx-auto max-w-[1600px] relative">
      <div className=" px-5 sm:px-10   ">
        <div className="relative flex justify-between lg:grid lg:grid-cols-10 items-center">
          <div className=" col-span-3">
            <a href="/" className="">
              <img
                src={'/images/logo.png'}
                alt="Apollo Properties"
                className="h-auto w-full max-w-[107px]"
              />
            </a>
          </div>
          <div className=" col-span-7 hidden lg:block">
            <ul className=" justify-between items-center flex ">
              <li>
                <a href="/fully-furnished-apartments" className=" text-lg">
                  Fully Furnished Apartments
                </a>
              </li>
              <li>
                <a href="/listings" className=" text-lg">
                  Listings
                </a>
              </li>
              <li>
                <a href="/blog" className=" text-lg">
                  Blog
                </a>
              </li>
              <li>
                <a href="/faq" className=" text-lg">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/testimonials" className=" text-lg">
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="bg-blue-400 hover:bg-blue-600 text-white text-lg font-body py-2 px-4 font-bold rounded-md shadow-lg hover:shadow-none inline-block max-w-[min-content] whitespace-nowrap transition-all"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-1.5 block lg:hidden px-2 " onClick={toggle}>
            <div className="w-8 h-1 bg-blue-400 rounded"></div>
            <div className="w-8 h-1 bg-blue-400 rounded"></div>
            <div className="w-8 h-1 bg-blue-400 rounded"></div>
          </div>
        </div>
      </div>
      <MobileMenu open={open} />
    </nav>
  );
};

export default Navbar;
