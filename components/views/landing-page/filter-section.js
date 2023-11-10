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
import SelectBox from '@/utils/custom/SelectBox';
import { propertyTypes } from '@/utils/enum';
import Input from '@/components/customs/input';
import {
  arrayTypeQuery,
  convertQueryString,
  removeFalsyProperties,
} from '@/utils/utolity';
import { useRouter } from 'next/router';
const options = [
  { id: 1, label: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb' },
  { id: 4, label: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt' },
];
const homeType = [
  { value: 1, label: 'Condominium' },
  { value: 2, label: 'Single-Family-Home' },
  { value: 3, label: 'Townhouse' },
  { value: 4, label: 'Multi-Family Home' },
];

const FilterSection = () => {
  const [isOpenSearchBox, setIsOpenSearchBox] = useState(false);
  const router = useRouter();
  const [filter, setFilter] = useState({
    title: '',
    address: '',
    bedRoom: 0,
    bathrooms: 0,
    minPrice: 1,
    maxPrice: 16600,
    minSize: 1,
    maxSize: 50000,
    customID: '',
    propertyType: null,
    category: null,
    page: 1,
    limit: 10,
    sort: 'category',
  });

  const handleAdvancedFilterBox = () => {
    setIsOpenSearchBox(!isOpenSearchBox);
  };
  const handleSearch = () => {
    const {
      title,
      address,
      bedRoom,
      bathrooms,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      propertyType,
      category,
      page,
      limit,
      sort,
    } = filter;
    const queryObj = {
      title,
      address,
      bedRoom,
      bathrooms,
      propertyType: propertyType?.label ?? '',
      category: category?.label ?? '',
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      page,
      limit,
      sort,
    };
    console.log(queryObj);

    const finalObject = removeFalsyProperties(queryObj);

    router.push({
      pathname: `/property`,
      query: {
        ...finalObject,
      },
    });

    console.log(finalObject);
  };

  const handleDropdownOnChange = (data, e) => {
    const { name } = e;
    setFilter({
      ...filter,
      [name]: data,
    });
  };
  const handleOnChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFilter({
      ...filter,
      [name]:
        type === 'number'
          ? Number(value)
          : type === 'checkbox'
          ? checked
          : value,
    });
  };
  const getRanges = (minValue, maxValue) => {
    setFilter({
      ...filter,
      minPrice: Number(minValue),
      maxPrice: Number(maxValue),
    });
  };
  const getAreaRanges = (minValue, maxValue) => {
    setFilter({
      ...filter,
      minSize: Number(minValue),
      maxSize: Number(maxValue),
    });
  };
  return (
    <div className="text-gray-500 mb-6">
      {/* <div>
        <Button className="bg-secondary py-6 rounded uppercase text-white">
          <Home className="mr-2 h-4 w-4" /> For Sale
        </Button>
        <Button className="bg-white text-secondary py-6 rounded">
          <HomeModernIcon className="mr-2 h-4 w-4" /> For Rent
        </Button>
      </div> */}
      <div className="w-full bg-white rounded p-3 ">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
          <div className="col-span-2">
            {/* <label className="uppercase text-sm font-medium px-2">
              Home Type
            </label> */}
            {/* <OptionSelect options={homeType} /> */}
            <SelectBox
              id="propertyType"
              label=" Home Type"
              name="propertyType"
              options={propertyTypes}
              value={filter.propertyType}
              onChange={(data, e) => {
                handleDropdownOnChange(data, e);
              }}
            />
          </div>
          <div className="col-span-3">
            <label className="uppercase text-sm font-medium px-2">Search</label>
            <div className="relative w-auto">
              <Input
                id="title"
                name="title"
                placeholder="Please Title Here"
                value={filter.title}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
              <div className="absolute inset-y-2 right-3">
                <MagnifyingGlassIcon width={24} />
              </div>
            </div>
          </div>
          <div className="col-span-3  grid grid-cols-1 md:grid-cols-2">
            <div className="py-4 group bg-gray-100 btn-search text-gray-600 text-center">
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
              <Button
                onClick={() => {
                  handleSearch();
                }}
                className="w-full text-white hover:bg-white hover:text-black"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
        {/* Advanced Search Section */}
        {isOpenSearchBox && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 animate__animated animate__slideInDown  bg-white">
            <div>
              {/* <label className="uppercase text-sm font-medium px-2">
                BEDROOMS
              </label>
              <OptionSelect options={homeType} /> */}
              <Input
                id="bedRoom"
                type="number"
                name="bedRoom"
                label="BEDROOMS"
                placeholder="Please Bed room"
                value={filter.bedRoom}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
            <div>
              {/* <label className="uppercase text-sm font-medium px-2">
                BATHROOMS
              </label>
              <OptionSelect options={homeType} /> */}
              <Input
                id="bathrooms"
                type="number"
                name="bathrooms"
                label="BATHROOMS"
                placeholder="Please Bed room"
                value={filter.bathrooms}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
            {/* <div>
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
            </div> */}
            <div className="col-span-1">
              <label className="uppercase text-sm font-medium px-2 ">
                Prize Range
              </label>
              <div className="mt-6">
                {/* <RangeSlider
                  initialMin={0}
                  initialMax={1200}
                  min={0}
                  max={10000}
                  step={100}
                  priceCap={400}
                  getRanges={getRanges}
                /> */}
                <RangeSlider
                  initialMin={filter.minPrice}
                  initialMax={filter.maxPrice}
                  min={0}
                  max={100000}
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
                  initialMin={filter.minSize}
                  initialMax={filter.maxSize}
                  min={0}
                  max={100000}
                  step={100}
                  priceCap={400}
                  getRanges={getAreaRanges}
                />
              </div>
            </div>
            <div>
              {/* <label className="uppercase text-sm font-medium px-2">
                Property Id
              </label> */}
              <Input
                id="customID"
                name="customID"
                label="Property Id"
                placeholder="ID here"
                value={filter.customID}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSection;
