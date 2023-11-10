import ProgressLoader from '@/components/customs/ProgressLoader';
import Layouts from '@/components/layout';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  ArrowRightLeftIcon,
  BathIcon,
  BedDoubleIcon,
  Bell,
  DiamondIcon,
  Heart,
  ParkingCircleIcon,
  SquareAsterisk,
} from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaChevronRight, FaHome } from 'react-icons/fa';
import { properties } from '@/data';
import { CustomTooltip } from '@/components/customs/tooltip';
import {
  getPropertiesByQuery,
  getUserProperties,
} from '@/store/property/actions';
import { useDispatch, useSelector } from 'react-redux';
import { appUrl } from '@/config';
import Input from '@/components/customs/input';
import { useRouter } from 'next/router';
import { removeFalsyProperties } from '@/utils/utolity';
import RangeSlider from '@/components/customs/range-slider';
import SelectBox from '@/utils/custom/SelectBox';
import { propertyCategories, propertyTypes } from '@/utils/enum';
const FilterProperty = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [sort, setSort] = useState('propertyType');
  const [page, setPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(10);

  const [filter, setFilter] = useState({
    title: '',
    address: '',
    bedRoom: 0,
    bathrooms: 0,
    minPrice: 1,
    maxPrice: 50000,
    minSize: 1,
    maxSize: 50000,
    customID: '',
    propertyType: null,
    category: null,
    page: 1,
    limit: 10,
    sort: 'category',
  });
  const { allProperties, total } = useSelector(
    ({ propertyReducers }) => propertyReducers
  );
  const { isDataProgress } = useSelector(({ basicReducers }) => basicReducers);

  const routerQuery = router.query;

  console.log(router);

  useEffect(() => {
    // const queryObj = {
    //   sort,
    //   page,
    //   limit: rowPerPage,
    //   title: filter.title,
    //   address: filter.address,
    // };
    const obj = {
      page: routerQuery?.page ?? 1,
      limit: routerQuery?.limit ?? 10,
      title: routerQuery?.title,
      sort: routerQuery?.sort,
      propertyType: routerQuery?.propertyType ?? '',
      category: routerQuery?.category ?? '',
      price: {
        operators: {
          gte: routerQuery?.minPrice ?? 0,
          lte: routerQuery?.maxPrice ?? 30000,
        },
      },
      size: {
        operators: {
          gte: routerQuery?.minSize ?? 0,
          lte: routerQuery?.maxSize ?? 50000,
        },
      },
    };
    const finalObject = removeFalsyProperties(obj);

    dispatch(getPropertiesByQuery(finalObject));

    return () => {};
  }, [dispatch, routerQuery]);

  const handleDataChange = (filterObt) => {
    const obj = {
      page: filterObt?.page ?? 1,
      limit: filterObt?.limit ?? 10,
      title: filterObt?.title,
      sort: filterObt?.sort,
      minPrice: filterObt?.minPrice,
      maxPrice: filterObt?.maxPrice,
      minSize: filterObt?.minSize,
      maxSize: filterObt?.maxSize,
      propertyType: filterObt?.propertyType?.label ?? '',
      category: filterObt?.category?.label ?? '',
    };
    const finalObject = removeFalsyProperties(obj);

    router.push({
      pathname: `/property`,
      query: {
        ...finalObject,
      },
    });
  };

  const handleSort = (data) => {
    setSort(data?.value ?? '');
  };
  const handleOnChange = (e) => {
    const { name, value, checked, type } = e.target;

    const updatedFilter = {
      ...filter,
      [name]:
        type === 'number'
          ? Number(value)
          : type === 'checkbox'
          ? checked
          : value,
    };
    handleDataChange(updatedFilter);
    setFilter(updatedFilter);
  };

  const getRanges = (minValue, maxValue) => {
    const updatedFilter = {
      ...filter,
      minPrice: Number(minValue),
      maxPrice: Number(maxValue),
    };
    handleDataChange(updatedFilter);
  };
  const getAreaRanges = (minValue, maxValue) => {
    const updatedFilter = {
      ...filter,
      minSize: Number(minValue),
      maxSize: Number(maxValue),
    };
    handleDataChange(updatedFilter);
    setFilter(updatedFilter);
    setFilter(updatedFilter);
  };

  console.log(allProperties);

  const handleDropdownOnChange = (data, e) => {
    const { name } = e;
    const updatedFilter = {
      ...filter,
      [name]: data,
    };
    handleDataChange(updatedFilter);
    setFilter(updatedFilter);
  };

  return (
    <Layouts isFromAnother={true}>
      <ProgressLoader isProgress={false}>
        <div className="container">
          <div className="pt-28">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-3 text-primary py-4">
              <Link href="/" className="text-base ">
                <FaHome />
              </Link>
              <span className="text-sm ">
                <FaChevronRight />
              </span>
              <p className="font-medium">Property</p>
            </div>
            {/* Main Section */}
            <div className="grid  grid-cols-1 lg:grid-cols-6  gap-6 pt-4 pb-16 text-dark">
              <div className="col-span-4 border p-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 mb-5 ">
                  <div className="mt-1">
                    {`Showing 1–${page * rowPerPage} of ${total} results`}
                  </div>
                  <div className="flex gap-2 justify-end items-center">
                    <div>
                      <button className="px-3 py-2 border font-medium ">
                        <div className="flex  items-center gap-2">
                          <span>
                            <Bell size={20} />
                          </span>
                          <span>Save Search</span>
                        </div>
                      </button>
                    </div>
                    {/* <div>
                      <button className="px-3 py-2 border font-medium ">
                        <div className="flex  items-center gap-2">
                          <span>
                            <Bell size={20} />
                          </span>
                          <span>Save Search</span>
                        </div>
                      </button>
                    </div> */}
                    {/* <div className="px-3 py-2 border font-medium ">
                      <div className="flex  items-center gap-2">
                        <span>
                          <Bell size={20} />
                        </span>
                        <span>Save Search</span>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {allProperties.map((product, index) => {
                    return (
                      <div
                        key={index}
                        className="animate__animated animate__zoomIn"
                      >
                        <Card className="w-auto text-dark">
                          <CardContent className="p-0">
                            <div
                              className="h-56"
                              style={{
                                backgroundImage: `url(${appUrl}/uploads/${
                                  product?.images[0] ?? ''
                                })`,
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover',
                              }}
                            ></div>
                            <div className="p-4">
                              <h2 className="card-title fs-16 lh-2 mb-0">
                                <a
                                  href="/single-property-1.html"
                                  className="text-dark hover-primary"
                                >
                                  {product.title}
                                </a>
                              </h2>
                              <p className="text-sm font-medium text-gray-400 mb-2">
                                {product.address}
                              </p>
                              <ul className=" flex mb-0 flex-wrap mr-n5">
                                <li className="text-gray-400 text-sm font-medium  flex items-center mr-5">
                                  <span className="text-primary">
                                    <BedDoubleIcon className="w-5" />
                                  </span>
                                  <span>{`${product.bedRooms} Be`}</span>
                                  <span className="text-primary ml-1">
                                    <BathIcon className="w-5" />
                                  </span>
                                  <span>{`${product.bathrooms} Ba`}</span>
                                  <span className="text-primary ml-1">
                                    <SquareAsterisk className="w-5" />
                                  </span>
                                  <span>{`${product.size} Sq`}</span>
                                  <span className="text-primary ml-1">
                                    <ParkingCircleIcon className="w-5" />
                                  </span>
                                  <span>{`${product.garageSize} Ge`}</span>
                                  <span className="text-primary ml-1">
                                    <DiamondIcon className="w-5" />
                                  </span>
                                  <span>{`${product.rooms} R`}</span>

                                  {/* <span className="text-primary mr-2">
                                        {attr.name === 'Bed' ? (
                                          <BedDoubleIcon className="w-5" />
                                        ) : attr.name === 'Bathroom' ? (
                                          <BathIcon className="w-5" />
                                        ) : attr.name === 'Square Feet' ? (
                                          <SquareAsterisk className="w-5" />
                                        ) : attr.name === 'Garage' ? (
                                          <ParkingCircleIcon className="w-5" />
                                        ) : (
                                          <DiamondIcon className="w-5" />
                                        )}
                                      </span>
                                      <span>{`${attr.value} ${attr.shortCode}`}</span> */}
                                </li>
                              </ul>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between border-t p-2">
                            <p className="text-base font-bold text-dark mb-0">
                              {`$ ${product.price.toFixed(2)}`}
                            </p>
                            <div className="flex gap-3">
                              <CustomTooltip title="Wishlist">
                                <div className="rounded-full border p-2">
                                  <Heart className="w-5 h-5 text-gray-500" />
                                </div>
                              </CustomTooltip>
                              <CustomTooltip title="Compare">
                                <div className="rounded-full border p-2">
                                  <ArrowRightLeftIcon className="w-5 h-5  text-gray-500" />
                                </div>
                              </CustomTooltip>
                            </div>
                          </CardFooter>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-span-2 border p-3">
                <div className="grid grid-cols-1">
                  <h2 className="font-medium text-lg">Find your home</h2>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Please Title Here"
                    label="Title (mandatory)"
                    value={filter.title}
                    onChange={(e) => {
                      handleOnChange(e);
                    }}
                  />
                  <div className="my-3">
                    <SelectBox
                      id="propertyType"
                      label="Listed In"
                      name="propertyType"
                      options={propertyTypes}
                      value={filter.propertyType}
                      onChange={(data, e) => {
                        handleDropdownOnChange(data, e);
                      }}
                    />
                  </div>
                  <div className="my-3">
                    <SelectBox
                      id="category"
                      label="Category"
                      name="category"
                      options={propertyCategories}
                      value={filter.category}
                      onChange={(data, e) => {
                        handleDropdownOnChange(data, e);
                      }}
                    />
                  </div>
                  <div className="my-3">
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
                  <div className="my-3">
                    <label className="uppercase text-sm font-medium px-2">
                      Price
                    </label>
                    <div className="mt-6">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProgressLoader>
    </Layouts>
  );
};

export default FilterProperty;
