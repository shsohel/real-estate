import React from 'react';
import homepageImage from '../../images/bg-home-01.jpg';
import FilterSection from './filter-section';

const BannerSection = () => {
  return (
    <div
      className="min-h-screen  text-white grid grid-flow-col justify-stretch items-center"
      style={{
        backgroundImage: `url(${homepageImage?.src})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <div className="animate__animated animate__zoomIn animate-delay-2s">
        <div>
          <p className="text-[22px] font-medium text-center mb-8 tracking-widest">
            LET US GUIDE YOUR HOME
          </p>
          <h2 className=" text-7xl font-medium text-center mb-sm-13 mb-8 tracking-widest">
            Find Your Dream Home
          </h2>
        </div>
        <div className="container ">
          <FilterSection />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
