import {
  HomeModernIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import OptionSelect from '@/components/customs/option';
import RangeSlider from '@/components/customs/range-slider';
const options = [
  { id: 1, label: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb' },
  { id: 4, label: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt' },
];
const homeType = [
  { id: 1, label: 'Condominium' },
  { id: 2, label: 'Single-Family-Home' },
  { id: 3, label: 'Townhouse' },
  { id: 4, label: 'Multi-Family Home' },
];

const CommonFilter = () => {
  const [isOpenSearchBox, setIsOpenSearchBox] = useState(false);

  const handleAdvancedFilterBox = () => {
    setIsOpenSearchBox(!isOpenSearchBox);
  };

  const getRanges = () => {};
  return (
    <div className="text-white mb-6">
     
      <div className="w-full   p-3  bg-secondary">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
          <div className="col-span-2">
            <label className="uppercase text-sm font-medium px-2">
              Home Type
            </label>
            <OptionSelect options={homeType} isDark={true} />
          
          </div>
          <div className="col-span-3">
            <label className="uppercase text-sm font-medium px-2">Search</label>
            <div className="relative w-auto ">
              <input
                type="text"
                placeholder="Find Something..."
                className="w-full  border-0 border-b text-sm font-normal bg-transparent border-gray-200 focus:ring-0 focus:border-b-1 focus:border-gray-200 placeholder-gray-400"
              />
              <div className="absolute inset-y-2 right-2 ">
                <MagnifyingGlassIcon width={24} />
              </div>
            </div>
          </div>
          <div className="col-span-3  grid grid-cols-1 md:grid-cols-2">
            <div className="py-4 group  btn-search  text-center">
              <Button
                className="group-[.btn-search]:bg-secondary   hover:text-gray-200"
                onClick={() => {
                  handleAdvancedFilterBox();
                }}
              >
                Advanced Search
                <PlusCircleIcon width={24} className="ml-2 " />
              </Button>
            </div>
            <div className="p-4  w-full bg-white">
              <Button className="w-full text-white hover:bg-white hover:text-black">
                Search
              </Button>
            </div>
          </div>
        </div>
        {/* Advanced Search Section */}
        {isOpenSearchBox && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 animate__animated animate__slideInDown  ">
            <div>
              <label className="uppercase text-sm font-medium px-2">
                BEDROOMS
              </label>
              <OptionSelect options={homeType} isDark={true}/>
            </div>
            <div>
              <label className="uppercase text-sm font-medium px-2">
                BATHROOMS
              </label>
              <OptionSelect options={homeType} isDark={true} />
            </div>
            <div>
              <label className="uppercase text-sm font-medium px-2">
                ALL CITIES
              </label>
              <OptionSelect options={homeType}  isDark={true}/>
            </div>
            <div>
              <label className="uppercase text-sm font-medium px-2">
                ALL AREAS
              </label>
              <OptionSelect options={homeType} isDark={true} />
            </div>
            <div className="col-span-1">
              <label className="uppercase text-sm font-medium px-2 ">
                Prize Range
              </label>
              <div className="mt-6">
                <RangeSlider
                  initialMin={0}
                  initialMax={1200}
                  min={0}
                  max={10000}
                  step={100}
                  priceCap={400}
                  getRanges={getRanges}
                />
              </div>
            </div>
            <div>
              <label className="uppercase text-sm font-medium px-2">
                Area Size
              </label>
              <div className="mt-6">
                <RangeSlider
                  initialMin={0}
                  initialMax={1000}
                  min={0}
                  max={10000}
                  step={100}
                  priceCap={400}
                  getRanges={getRanges}
                />
              </div>
            </div>
            <div>
              <label className="uppercase text-sm font-medium px-2">
                Property Id
              </label>
              <input
                type="text"
                placeholder="Find Something..."
                className="w-full  border-0 border-b text-sm bg-transparent font-normal border-gray-200 focus:ring-0 focus:border-b-1 focus:border-gray-200 placeholder-gray-400"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonFilter;
