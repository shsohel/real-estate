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
import React from 'react';
import { FaChevronRight, FaHome } from 'react-icons/fa';
import { properties } from '@/data';
import { CustomTooltip } from '@/components/customs/tooltip';
const FilterProperty = () => {
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
            <div className="grid grid-cols-6  gap-6 pt-4 pb-16 text-dark">
              <div className="col-span-4 border p-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 mb-5">
                  <div>Showing 1–10 of 52 results</div>
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
                  {properties.map((product, index) => {
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
                                backgroundImage: `url(${
                                  product?.images?.find(
                                    (image) => image.default
                                  )?.src ?? ''
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
                                {product.attributes.map((attr, indexAttr) => {
                                  return (
                                    <li
                                      key={indexAttr}
                                      className="text-gray-400 text-sm font-medium  flex items-center mr-5"
                                    >
                                      <span className="text-primary mr-2">
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
                                      <span>{`${attr.value} ${attr.shortCode}`}</span>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between border-t p-2">
                            <p className="text-base font-bold text-dark mb-0">
                              {`${product.currencySign} ${product.price.toFixed(
                                2
                              )}`}
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
              <div className="col-span-2 border p-3">D </div>
            </div>
          </div>
        </div>
      </ProgressLoader>
    </Layouts>
  );
};

export default FilterProperty;
