import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/components/ui/button';
import CSlider from '@/components/customs/property-types-slider';

const ExplorePropertyTypes = () => {
  return (
    <div className="py-32 bg-[#FAFAFA] ">
      <div className=" container  text-dark ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="col-span-1 ">
            <h2 className="text-[2rem] font-medium mb-4">
              Explore by Property Type
            </h2>
            <div className="border-b-[3px] border-primary border-spacing-1 w-20"></div>
            <p className="text-gray-400 text-sm font-medium my-3">
              Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
              suscipit
            </p>
            <div className="w-full ">
              <Button className=" whitespace-nowrap rounded bg-gray-200">
                +23000 Available Properties
                <ArrowLongRightIcon className="ml-3" width={25} />
              </Button>
            </div>
          </div>
          <div className="md:col-span-4">
            <CSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePropertyTypes;
