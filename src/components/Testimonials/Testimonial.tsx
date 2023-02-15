import { useState } from 'react';
export interface Props {
  name: string;
  country: string;
  image: any;
  children: any;
  excerpt: string;
}

const Testimonial = ({ name, country, image, children, excerpt }: Props) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`relative bg-white shadow-sm text-grey-600 max-w-[600px]  w-full rounded-3xl flex flex-col items-center 
    ${image ? 'mt-16 ' : ''}
    `}
    >
      <div className="absolute -top-[75px]">
        {image && (
          <img
            src={image}
            className=" object-cover h-[150px] w-[150px] rounded-full border-blue-200 border-4 "
          />
        )}
      </div>
      <div
        className={`px-5 md:px-10 py-5 md:py-10 ${image ? 'mt-[60px]' : ''}`}
      >
        <div className="text-center mb-4 mt-2">
          <h2 className="text-3xl font-heading font-bold">{name}</h2>
          <p className="text-xl">{country}</p>
        </div>
        <div className="">
          <p className="text-lg">{excerpt}</p>
          {open && <p className="text-lg mt-2">{children}</p>}
          <span
            onClick={toggle}
            className="block mt-2 text-lg text-blue-500 font-bold cursor-pointer"
          >
            {open ? 'Read Less' : 'Read More'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
