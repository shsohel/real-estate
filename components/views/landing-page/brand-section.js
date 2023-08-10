import React from 'react';
import group01 from '@/images/group-16.png';

import Image from 'next/image';
import partner from '@/images/partner-hover-5.png';
import PartnerSlider from '@/components/customs/partner-slider';
const BrandSection = () => {
  return (
    <div className="py-6 my-6 bg-white ">
      <div className=" container  text-dark ">
        {/* <div className="grid grid-cols-5 gap-6">
          <div className="col-span-1 group">
            <Image
              width={100}
              height={100}
              className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              src={partner}
              alt="Partner O1"
            />
          </div>
        </div> */}
        <div className="grid grid-cols-1  ">
          <div>
            <PartnerSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
