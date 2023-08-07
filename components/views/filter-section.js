import {
  HomeIcon,
  HomeModernIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Home } from 'lucide-react';
import ComboBox from '../customs/combo-box';
import OptionSelect from '../customs/option';
import Select from 'react-select';
import RangeSlider from '../customs/range-slider';
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

const FilterSection = () => {
  const [isOpenSearchBox, setIsOpenSearchBox] = useState(false);

  const handleAdvancedFilterBox = () => {
    setIsOpenSearchBox(!isOpenSearchBox);
  };

  const getRanges = () => {};
  return (
    <div className="text-gray-500">
      <div>
        <Button className="bg-secondary py-6 rounded uppercase">
          <Home className="mr-2 h-4 w-4" /> For Sale
        </Button>
        <Button className="bg-white text-secondary py-6 rounded">
          <HomeModernIcon className="mr-2 h-4 w-4" /> For Rent
        </Button>
      </div>
      <div className="w-full bg-white rounded p-3">
        <div className="grid grid-cols-8 gap-6">
          <div className="col-span-2">
            <label className="uppercase text-sm font-medium px-2">
              Home Type
            </label>
            <OptionSelect options={homeType} />
            {/* <Select
              styles={{
                input: (styles) => ({
                  ...styles,

                  '[type="text"]': {
                    fontFamily: 'Helvetica, sans-serif !important',
                    fontSize: 13,
                    fontWeight: 900,
                    border: 'none !important',
                    color: 'green !important',
                    outline: '0 !important',
                  },
                }),
              }}
            /> */}
          </div>
          <div className="col-span-3">
            <label className="uppercase text-sm font-medium px-2">Search</label>
            <div className="relative w-auto">
              <input
                type="text"
                placeholder="Find Something..."
                className="w-full  border-0 border-b text-sm font-normal border-gray-200 focus:ring-0 focus:border-b-1 focus:border-gray-200"
              />
              <div className="absolute inset-y-1 right-0">
                <MagnifyingGlassIcon width={24} />
              </div>
            </div>
          </div>
          <div className="col-span-3  grid grid-cols-2">
            <div className="py-4 group bg-gray-100 btn-search text-gray-600">
              <Button
                className="group-[.btn-search]:bg-gray-100 hover:bg-white  hover:text-black"
                onClick={() => {
                  handleAdvancedFilterBox();
                }}
              >
                Advanced Search
                <PlusCircleIcon width={24} className="ml-2 " />
              </Button>
            </div>
            <div className="p-4  w-full">
              <Button className="w-full text-white hover:bg-white hover:text-black">
                Search
              </Button>
            </div>
          </div>
        </div>
        {/* Advanced Search Section */}
        {isOpenSearchBox && (
          <div className="grid grid-cols-4 gap-4 mt-10 animate__animated animate__slideInDown  bg-white">
            <div>
              <label className="uppercase text-sm font-medium px-2">
                BEDROOMS
              </label>
              <OptionSelect options={homeType} />
            </div>
            <div>
              <label className="uppercase text-sm font-medium px-2">
                BATHROOMS
              </label>
              <OptionSelect options={homeType} />
            </div>
            <div>
              <label className="uppercase text-sm font-medium px-2">
                ALL CITIES
              </label>
              <OptionSelect options={homeType} />
            </div>
            <div>
              <label className="uppercase text-sm font-medium px-2">
                ALL AREAS
              </label>
              <OptionSelect options={homeType} />
            </div>
            <div className="col-span-1">
              <label className="uppercase text-sm font-medium px-2 ">
                Prize Range
              </label>
              <div className="mt-6">
                <RangeSlider
                  initialMin={0}
                  initialMax={100}
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
                  initialMax={100}
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
                className="w-full  border-0 border-b text-sm font-normal border-gray-200 focus:ring-0 focus:border-b-1 focus:border-gray-200"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSection;
