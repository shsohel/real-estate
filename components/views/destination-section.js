import React from 'react';
import { Button } from '../ui/button';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

import Slider from '../customs/slider';
import { properties } from '@/data';

import Image from 'next/image';
import DestinationSlider from '../customs/destination-slider';

const DestinationsSection = () => {
  return (
    <div className="my-32  container">
      <div className="grid grid-cols-1  place-content-between text-dark mb-3">
        <div>
          <h2 className="text-3xl font-medium mb-4">
            Destinations We Love The Most
          </h2>
          <div className="border-b-[3px] border-primary border-spacing-1 w-20"></div>
          <p className="text-gray-400 text-sm font-medium my-3">
            Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
            suscipit
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1  ">
        <div>
          <DestinationSlider products={properties} slidesView={3} />
        </div>
      </div>
    </div>
  );
};

export default DestinationsSection;
