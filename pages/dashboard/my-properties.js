/* eslint-disable jsx-a11y/alt-text */
import Input from '@/components/customs/input';
import Select from '@/components/customs/select';
import DashboardLayout from '@/components/dashboard-layout';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import partner01 from '@/images/my-properties-01.jpg';
import { Edit2, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProperties, getUserProperties } from '@/store/property/actions';
import { appUrl } from '@/config';
import moment from 'moment/moment';
import SelectBox from '@/utils/custom/SelectBox';
import { propertyTypes, sortTypes } from '@/utils/enum';
import ProgressLoader from '@/components/customs/ProgressLoader';

const MyProperties = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState('propertyType');
  const [page, setPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(10);

  const [filter, setFilter] = useState({
    title: '',
  });
  const { userProperties } = useSelector(
    ({ propertyReducers }) => propertyReducers
  );
  const { isDataProgress } = useSelector(({ basicReducers }) => basicReducers);

  // const obj = {
  //   page: 1,
  //   limit: 10,
  //   title: "Bangladesh",
  //   name: "Dehs Bangl",
  //   category: ["D", "B"],
  //   price: { operators: { gt: 500, lt: 6000 } },
  //   size: { operators: { gte: 10, lte: 20 } }
  // };

  useEffect(() => {
    const queryObj = {
      sort,
      page,
      limit: rowPerPage,
      title: filter.title,
    };
    dispatch(getUserProperties(queryObj));

    return () => {};
  }, [dispatch, sort, page, rowPerPage, filter]);

  const handleSort = (data) => {
    setSort(data?.value ?? '');
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

  const handleDropdownOnChange = () => {};
  return (
    <DashboardLayout title="My Properties">
      <ProgressLoader isProgress={isDataProgress}>
        <div className="text-dark p-11">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
            <div className="grid grid-cols-3 gap-2">
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
              <SelectBox
                id="type"
                label="Sort By"
                name="propertyType"
                options={sortTypes}
                value={{ value: sort, label: sort.toUpperCase() }}
                onChange={(data) => {
                  handleSort(data);
                }}
              />
              <div className="flex items-center justify-end">
                <Link
                  href="/dashboard/add-listing"
                  className="border hover:text-white hover:bg-secondary rounded font-semibold uppercase bg-primary py-[0.55rem] px-2 mt-4"
                >
                  Add Listing
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full overflow-auto">
              <table className="w-full mt-3 bg-white border">
                <thead className="border">
                  <tr className="h-16">
                    <th className="text-left text-base font-normal px-4 w-[25rem]">
                      Listing title
                    </th>
                    <th className=" text-base font-normal px-4">
                      Date Published
                    </th>
                    <th className=" text-base font-normal px-4">Category</th>
                    <th className=" text-base font-normal px-4">
                      Property Type
                    </th>
                    <th className=" text-base font-normal px-4">View</th>
                    <th className=" text-base font-normal px-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userProperties.map((property, index) => {
                    return (
                      <tr
                        key={index}
                        className="border text-sm font-semibold text-mute-200"
                      >
                        <td className="p-4">
                          <div className="block  md:flex gap-4 ">
                            <div className="w-40">
                              <Image
                                src={`${appUrl}/uploads/${property.images[0]}`}
                                className="h-24 w-36"
                                height={100}
                                width={200}
                                priority
                                alt={property.title}
                              />
                            </div>
                            <div>
                              <h2 className="font-medium text-base">
                                {property.title}
                              </h2>
                              <p className="text-sm font-normal text-txt-mute">
                                {property.address}
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
                        <td className="text-center p-4">
                          {moment(property).format('MMM DD, YYYY')}
                        </td>
                        <td className="text-center p-4">
                          <div className="border border-primary bg-primary/20 p-1 rounded text-primary">
                            {property.category}
                          </div>
                        </td>
                        <td className="text-center p-4">
                          <div className="border border-secondary bg-secondary/20 p-1 rounded text-secondary">
                            {property.propertyType}
                          </div>
                        </td>
                        <td className="p-4 text-center">2049</td>
                        <td className="p-4 text-center">
                          <div className="flex gap-4 justify-center items-center">
                            <div
                              onClick={() => {
                                dispatch(deleteProperties(property.id));
                              }}
                              className="text-danger hover:cursor-pointer"
                            >
                              <Trash2 />
                            </div>
                            <Link
                              href={`/dashboard/edit-property/${property.id}`}
                              className="text-primary hover:cursor-pointer"
                            >
                              <Edit2 />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </ProgressLoader>
    </DashboardLayout>
  );
};

export default MyProperties;
