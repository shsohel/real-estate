/* eslint-disable jsx-a11y/alt-text */
import Input from '@/components/customs/input';
import Select from '@/components/customs/select';
import DashboardLayout from '@/components/dashboard-layout';
import Image from 'next/image';
import React from 'react';
import partner01 from '@/images/my-properties-01.jpg';
import { Edit2, Trash2 } from 'lucide-react';

const MyProperties = () => {
  return (
    <DashboardLayout title="My Properties">
      <div className="text-dark p-11">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-medium">My Properties</h2>
              <div className="h-10 w-10 border border-primary rounded-full bg-white flex justify-center items-center text-primary font-semibold">
                29
              </div>
            </div>
            <p className="text-mute-200 text-sm font-normal">
              Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
              suscipit
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Input
              label="Search"
              placeholder="Search Properties"
              bgColor="bg-white"
              border="border border-gray-300"
            />
            <Select label="Sort By" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="w-full overflow-auto">
            <table class="w-full mt-3 bg-white border">
              <thead className="border">
                <tr className="h-16">
                  <th className="text-left text-base font-normal px-4 w-[25rem]">
                    Listing title
                  </th>
                  <th className=" text-base font-normal px-4">
                    Date Published
                  </th>
                  <th className=" text-base font-normal px-4">Status</th>
                  <th className=" text-base font-normal px-4">View</th>
                  <th className=" text-base font-normal px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border text-sm font-semibold text-mute-200">
                  <td className="p-4">
                    <div className="block  md:flex gap-4 ">
                      <div className="w-40">
                        <Image
                          src={partner01?.src}
                          className="h-24 w-36"
                          height={100}
                          width={200}
                          priority
                        />
                      </div>
                      <div>
                        <h2 className="font-medium text-base">
                          Home in Metric Way
                        </h2>
                        <p className="text-sm font-normal text-txt-mute">
                          1421 San Pedro St, Los Angeles
                        </p>
                        <div className="font-semibold text-sm my-1">
                          $2500
                          <span className="text-sm font-normal text-txt-mute">
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center p-4">30 December, 2019</td>
                  <td className="text-center p-4">
                    <div className="border border-warning bg-warning/20 p-1 rounded text-warning">
                      Pending
                    </div>
                  </td>
                  <td className="p-4 text-center">2049</td>
                  <td className="p-4 text-center">
                    <div className="flex gap-4 justify-center items-center">
                      <div className="text-danger hover:cursor-pointer">
                        <Trash2 />
                      </div>
                      <div className="text-primary hover:cursor-pointer">
                        <Edit2 />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border text-sm font-semibold text-mute-200">
                  <td className="p-4">
                    <div className="block  md:flex gap-4 ">
                      <div className="w-40">
                        <Image
                          src={partner01?.src}
                          className="h-24 w-36"
                          height={100}
                          width={200}
                          priority
                        />
                      </div>
                      <div>
                        <h2 className="font-medium text-base">
                          Home in Metric Way
                        </h2>
                        <p className="text-sm font-normal text-txt-mute">
                          1421 San Pedro St, Los Angeles
                        </p>
                        <div className="font-semibold text-sm my-1">
                          $2500
                          <span className="text-sm font-normal text-txt-mute">
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center p-4">30 December, 2019</td>
                  <td className="text-center p-4">
                    <div className="border border-warning bg-warning/20 p-1 rounded text-warning">
                      Pending
                    </div>
                  </td>
                  <td className="p-4 text-center">2049</td>
                  <td className="p-4 text-center">
                    <div className="flex gap-4 justify-center items-center">
                      <div className="text-danger hover:cursor-pointer">
                        <Trash2 />
                      </div>
                      <div className="text-primary hover:cursor-pointer">
                        <Edit2 />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border text-sm font-semibold text-mute-200">
                  <td className="p-4">
                    <div className="block  md:flex gap-4 ">
                      <div className="w-40">
                        <Image
                          src={partner01?.src}
                          className="h-24 w-36"
                          height={100}
                          width={200}
                          priority
                        />
                      </div>
                      <div>
                        <h2 className="font-medium text-base">
                          Home in Metric Way
                        </h2>
                        <p className="text-sm font-normal text-txt-mute">
                          1421 San Pedro St, Los Angeles
                        </p>
                        <div className="font-semibold text-sm my-1">
                          $2500
                          <span className="text-sm font-normal text-txt-mute">
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center p-4">30 December, 2019</td>
                  <td className="text-center p-4">
                    <div className="border border-warning bg-warning/20 p-1 rounded text-warning">
                      Pending
                    </div>
                  </td>
                  <td className="p-4 text-center">2049</td>
                  <td className="p-4 text-center">
                    <div className="flex gap-4 justify-center items-center">
                      <div className="text-danger hover:cursor-pointer">
                        <Trash2 />
                      </div>
                      <div className="text-primary hover:cursor-pointer">
                        <Edit2 />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border text-sm font-semibold text-mute-200">
                  <td className="p-4">
                    <div className="block  md:flex gap-4 ">
                      <div className="w-40">
                        <Image
                          src={partner01?.src}
                          className="h-24 w-36"
                          height={100}
                          width={200}
                          priority
                        />
                      </div>
                      <div>
                        <h2 className="font-medium text-base">
                          Home in Metric Way
                        </h2>
                        <p className="text-sm font-normal text-txt-mute">
                          1421 San Pedro St, Los Angeles
                        </p>
                        <div className="font-semibold text-sm my-1">
                          $2500
                          <span className="text-sm font-normal text-txt-mute">
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center p-4">30 December, 2019</td>
                  <td className="text-center p-4">
                    <div className="border border-warning bg-warning/20 p-1 rounded text-warning">
                      Pending
                    </div>
                  </td>
                  <td className="p-4 text-center">2049</td>
                  <td className="p-4 text-center">
                    <div className="flex gap-4 justify-center items-center">
                      <div className="text-danger hover:cursor-pointer">
                        <Trash2 />
                      </div>
                      <div className="text-primary hover:cursor-pointer">
                        <Edit2 />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyProperties;
