import React from "react";

interface MobileMenuProps {
  open: boolean;
}

const MobileMenu = ({ open }: MobileMenuProps) => {
  return (
    <div
      className={`${
        open ? "absolute" : "hidden"
      }    mx-6 w-full z-10 overflow-hidden sm:px-14 border-t-2 border-grey-200 bg-white shadow-lg`}
    >
      <ul className="flex flex-col justify-between">
        <li className=" text-grey-700 text-2xl font-heading font-bold border-b-2 border-grey-200">
          <a href="/">Home</a>
          <div className="h-2 w-full bg-grey-200"></div>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
