import React from 'react';
import image01 from '@/images/single-image-02.png';
import image02 from '@/images/single-image-03.png';
import image03 from '@/images/single-image-01.jpg';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
const NewsLetterSection = () => {
  return (
    <div
      className="bg-[#1e1d85] min-h-[500px]"
      style={{
        backgroundImage: `url(${image01.src}), url(${image02.src})`,
        backgroundPosition: `left top,right bottom`,
        backgroundRepeat: `no-repeat,no-repeat`,
        backgroundSize: `auto,auto`,
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 py-24">
          <div className="animate__animated animate__fadeInDown">
            <div
              className="hover-shine block"
              //   style={{
              //     backgroundImage: `url(${image03.src})`,
              //     backgroundPosition: `left top`,
              //     backgroundRepeat: `no-repeat`,
              //     backgroundSize: `auto`,
              //   }}
            >
              <Image className="w-full rounded-2xl" src={image03} alt="Image" />
            </div>
          </div>
          <div>
            <div className="py-2">
              <h2 className="text-3xl font-medium mb-4">
                Find your neighborhood
              </h2>
              <div className="border-b-[3px] border-primary border-spacing-1 w-20"></div>
              <p className="text-gray-400 text-sm font-medium my-3">
                Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
                suscipit
              </p>

              <div className="relative flex   py-8">
                {/* <span className="absolute left-4 top-3 text-lg text-gray-400">
                  <MagnifyingGlassIcon />
                </span> */}

                <input
                  type="text"
                  placeholder="Search"
                  className="w-full rounded-s border border-r-0 border-primary py-3 pl-12 pr-3 text-primary focus:border-secondary-light focus:outline-none focus:ring-0"
                />
                <button className=" rounded-e bg-primary px-6 font-roboto text-sm uppercase text-white  transition hover:border  hover:border-primary hover:bg-transparent hover:bg-secondary  hover:text-white dark:hover:bg-white  dark:hover:text-primary">
                  <MagnifyingGlassIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSection;
