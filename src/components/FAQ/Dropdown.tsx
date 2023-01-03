import { useState } from "react";

const Dropdown = (props: any) => {
  const { question, answer } = props;

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`${
        open ? " shadow-md" : " shadow-sm"
      } max-w-[800px] w-full rounded-3xl transition-all`}
    >
      <div
        className={`${
          open ? "bg-blue-100 rounded-t-3xl" : "bg-white rounded-3xl"
        } p-5  flex justify-between items-center cursor-pointer transition-all`}
        onClick={toggle}
      >
        <h2 className="text-xl md:text-3xl font-bold font-heading text-grey-600 mr-5">
          {question}
        </h2>
        <div className="relative px-5">
          <div className="w-[35px]  md:w-[40px] h-[5px] bg-grey-600 rounded absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <div
            className={`w-[35px] md:w-[40px] h-[5px] bg-grey-600 rounded absolute  z-10 top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 transition-transform ${
              open ? "rotate-180" : "rotate-90"
            }`}
          />
        </div>
      </div>
      <div
        className={`bg-white p-5 text-grey-600 rounded-b-3xl transition-all ${
          open ? "opacity-100 h-full" : "opacity-0 h-0 hidden"
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Dropdown;
