const index = () => {
  return (
    <section className=" bg-gradient-main">
      <div className="lg:max-w-[1300px] mx-auto py-24 flex flex-col items-center px-5 sm:px-10">
        <div className="flex flex-col items-center max-w-[830px] text-center mb-20">
          <h2 className="text-blue-600 text-3xl sm:text-4xl font-heading font-bold mb-5">
            We remove the hassle of getting settled in Japan
          </h2>
          <p className="text-grey-700 mx-0 sm:mx-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:flex-row justify-between text-grey-700 w-full gap-10 ">
          <div className="flex flex-col items-center text-center max-w-[350px]">
            <img
              src="/icons/contracts.svg"
              alt="Short-term minimum contracts"
              className="mb-5"
            />
            <p className="font-bold text-lg">Short-term minimum contracts</p>
            <p>
              We only require a minimum 3 month contract while other realtors
              typically require 2 years.
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-[350px] ">
            <img src="/icons/save.svg" alt="No hidden costs" className="mb-5" />
            <p className="font-bold text-lg">No hidden costs</p>
            <p>
              Save big on your move in. We don’t require a key or guarantor fee
              like other realtors.
            </p>
          </div>
          <div className="flex flex-col items-center text-center  max-w-[350px]">
            <img
              src="/icons/foreigners.svg"
              alt="Foreigner friendly"
              className="mb-5"
            />
            <p className="font-bold text-lg">Foreigner friendly</p>
            <p>
              Our tenants come frome around the world. Our staff are English
              speaking and highly professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
