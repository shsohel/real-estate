import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

import { properties } from '@/data';
import { Button } from '@/components/ui/button';
import Slider from '@/components/customs/slider';
const BestPropertiesForSale = () => {
  return (
    <div className="my-32  container">
      <div className="grid grid-cols-1 md:grid-cols-2 place-content-between text-dark mb-3">
        <div>
          <h2 className="text-3xl font-medium mb-4">
            Best Properties For Sale
          </h2>
          <div className="border-b-[3px] border-primary border-spacing-1 w-20"></div>
          <p className="text-gray-400 text-sm font-medium my-3">
            Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
            suscipit
          </p>
        </div>
        <div className="md:text-right ">
          <Button className=" whitespace-nowrap rounded bg-gray-200">
            See All Properties
            <ArrowLongRightIcon className="ml-3" width={25} />
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        <div>
          <Slider products={properties} slidesView={3} />
        </div>
      </div>
    </div>
  );
};

export default BestPropertiesForSale;
