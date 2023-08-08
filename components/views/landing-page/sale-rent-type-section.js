import React from 'react';
import group01 from '@/images/group-16.png';
import group02 from '@/images/group-17.png';
import group03 from '@/images/group-21.png';
import pattern07 from '@/images/pattern-07.png';
import Image from 'next/image';
import { ArrowBigLeft, MoveRightIcon } from 'lucide-react';

const SaleRentSection = () => {
  return (
    <div
      className="py-32 my-6 bg-[#eff6f7] "
      style={{
        backgroundImage: `url(${pattern07?.src})`,
        backgroundPosition: ' right top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
      }}
    >
      <div className=" container  text-dark ">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-center text-[26px] px-14 max-w-[751px] ">
            We have the most listings and constant updates. So you’ll never miss
            out.
          </h2>
          <span className="border-b-[3px] border-primary border-spacing-1 w-20"></span>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white flex gap-6 hover:shadow-xl hover:rounded-md group animate__animated animate__zoomIn ">
                <div className="px-4 py-7">
                  <Image
                    width={150}
                    height={150}
                    src={group01}
                    alt="Group 01"
                  />
                </div>
                <div className="px-4 py-7">
                  <h2 className="font-medium my-2 flex gap-6">
                    <span> Buy a new home</span>
                    <span className="invisible group-hover:visible">
                      <MoveRightIcon className="text-primary" />
                    </span>
                  </h2>

                  <p className="text-xs text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>
              <div className="bg-white flex gap-6 hover:shadow-xl hover:rounded-md group animate__animated animate__zoomIn ">
                <div className="px-4 py-7">
                  <Image
                    width={150}
                    height={150}
                    src={group02}
                    alt="Group 01"
                  />
                </div>
                <div className="px-4 py-7">
                  <h2 className="font-medium my-2 flex gap-6">
                    <span> Sell a home</span>
                    <span className="invisible group-hover:visible">
                      <MoveRightIcon className="text-primary" />
                    </span>
                  </h2>
                  <p className="text-xs text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>
              <div className="bg-white flex gap-6 hover:shadow-xl hover:rounded-md group animate__animated animate__zoomIn">
                <div className="px-4 py-7">
                  <Image
                    width={150}
                    height={150}
                    src={group03}
                    alt="Group 01"
                  />
                </div>
                <div className="px-4 py-7">
                  <h2 className="font-medium my-2 flex gap-6">
                    <span>Rent a home</span>
                    <span className="invisible group-hover:visible">
                      <MoveRightIcon className="text-primary" />
                    </span>
                  </h2>
                  <p className="text-xs text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleRentSection;
