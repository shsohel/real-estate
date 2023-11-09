import React from 'react';

const SmallLoader = () => {
  return (
    <>
      <div className=" relative h-64 animate-pulse border border-primary p-4  text-center  dark:border-none dark:bg-secondary-light">
        <h2 className="h-5 bg-loader pb-1  text-lg  font-bold italic antialiased line-clamp-1"></h2>
        <div className="flex  justify-center pb-7">
          <div className="mt-1 h-[198px] w-[198px] bg-loader "></div>
        </div>
        <button className="absolute left-0  bottom-0 mt-2 h-8 w-full border  bg-loader  py-2 font-semibold text-white hover:skew-x-0 hover:bg-secondary  dark:border-secondary-light dark:bg-secondary dark:hover:bg-primary"></button>
      </div>
    </>
  );
};
const BigLoader = () => {
  return (
    <>
      <div className="">
        <div className="flex h-64 animate-pulse  items-center  gap-4 border border-primary  p-6 dark:border-none dark:bg-secondary-light">
          <div className=" w-2/4 py-6 ">
            <h2 className="mb-1 h-5 bg-loader  text-xl font-bold italic line-clamp-1 hover:text-primary"></h2>
            <p className="mt-2 h-3 bg-loader font-serif text-sm text-gray-500 line-clamp-3 dark:text-gray-300"></p>
            <p className="mt-2 h-3 bg-loader font-serif text-sm text-gray-500 line-clamp-3 dark:text-gray-300"></p>
            <p className="mt-2 h-3 bg-loader font-serif text-sm text-gray-500 line-clamp-3 dark:text-gray-300"></p>
            <div className="mt-2  h-8 w-24 -skew-x-12 bg-loader p-1 font-semibold text-white hover:skew-x-0  hover:bg-secondary dark:bg-secondary dark:hover:bg-primary"></div>
          </div>
          <div className="flex w-2/4 justify-center">
            <div className="h-[200px] w-[200px] bg-loader"></div>
          </div>
        </div>
      </div>
    </>
  );
};

const CoverProductLoader = (props) => {
  const { isDetails } = props;

  return <>{isDetails ? <BigLoader /> : <SmallLoader />}</>;
};

export default CoverProductLoader;
