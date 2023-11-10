/** @format */

import Tabs from '@/components/customs/tab';
import DashboardLayout from '@/components/dashboard-layout';
import Descriptions from '@/components/views/listing/forms/description';
import Location from '@/components/views/listing/forms/location';
import Media from '@/components/views/listing/forms/media';
import Details from '@/components/views/listing/forms/details';
import React, { useEffect } from 'react';
import Amenities from '@/components/views/listing/forms/amenities';
import {
  bindPropertyBasic,
  getUserPropertyById,
  postPoperies,
  updatePoperies,
} from '@/store/property/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import ProgressLoader from '@/components/customs/ProgressLoader';

const EditListing = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { propertyInfo } = useSelector(
    ({ propertyReducers }) => propertyReducers
  );
  const { isDataProgress } = useSelector(({ basicReducers }) => basicReducers);

  const { id } = router.query;

  const {
    title,
    description,
    category,
    propertyType,
    propertyStatus,
    averageRating,
    price,
    unit,
    homeOwnerAssociationFee,
    afterPriceLabel,
    beforePriceLabel,
    images,
    videos,
    amenities,
    size,
    lotSize,
    rooms,
    bedRooms,
    bathrooms,
    customID,
    garages,
    garageSize,
    yearBuilt,
    availableFrom, //Date
    basement,
    roofing,
    extraDetails,
    exteriorMaterial,
    structureType,
    floorsNo,
    notes,
    address,
    country,
    state,
    city,
    street,
    zipCode,
    formattedAddress,
  } = propertyInfo;

  useEffect(() => {
    dispatch(getUserPropertyById(id));

    return () => {
      dispatch(bindPropertyBasic());
    };
  }, [dispatch, id]);

  const tabsAll = [
    {
      name: 'Description',
      href: '#',
      current: true,
      component: <Descriptions />,
    },
    {
      name: 'Media',
      href: '#',
      current: false,
      component: <Media />,
    },
    {
      name: 'Location',
      href: '#',
      current: false,
      component: <Location />,
    },
    {
      name: 'Details',
      href: '#',
      current: false,
      component: <Details />,
    },
    {
      name: 'Amenities',
      href: '#',
      current: false,
      component: <Amenities />,
    },
  ];

  const handleSubmit = () => {
    const submitObj = {
      title,
      description,
      category: category?.label ?? '',
      propertyType: propertyType?.label ?? '',
      propertyStatus: propertyStatus?.label ?? '',
      averageRating,
      price,
      unit,
      homeOwnerAssociationFee,
      afterPriceLabel,
      beforePriceLabel,
      images,
      videos,
      amenities: amenities
        .filter((amenity) => amenity.isSelect)
        .map((am) => am.name),
      size,
      lotSize,
      rooms,
      bedRooms,
      bathrooms,
      customID,
      garages,
      garageSize,
      yearBuilt,
      availableFrom, //Date
      basement,
      roofing,
      extraDetails,
      exteriorMaterial,
      structureType: structureType?.label ?? '',
      floorsNo,
      notes,
      address: `${zipCode} ${street} ${city} ${state} ${country}`,
      // country,
      // state,
      // city,
      // street,
      // zipCode,
      // formattedAddress,
    };
    dispatch(updatePoperies(submitObj, id));
  };
  return (
    <DashboardLayout title="Edit Listing">
      <ProgressLoader isProgress={isDataProgress}>
        <div className="text-dark p-11">
          <div className="grid grid-cols-2 ">
            <div>
              <h2 className="text-2xl font-medium">Add new property</h2>
              <p className="text-mute-200 text-sm font-normal">
                Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
                suscipit
              </p>
            </div>
            <div className="flex justify-end">
              <div>
                <button
                  onClick={() => handleSubmit()}
                  className="border w-24 hover:text-white hover:bg-secondary rounded font-semibold uppercase bg-primary py-[0.55rem] px-2 mt-4"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
          <div className="w-full my-4">
            <Tabs tabComponent={tabsAll} />
          </div>
        </div>
      </ProgressLoader>
    </DashboardLayout>
  );
};

export default EditListing;
