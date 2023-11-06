import Tabs from '@/components/customs/tab';
import DashboardLayout from '@/components/dashboard-layout';
import Descriptions from '@/components/views/listing/forms/description';
import Location from '@/components/views/listing/forms/location';
import Media from '@/components/views/listing/forms/media';
import Details from '@/components/views/listing/forms/details';
import React from 'react';
import Amenities from '@/components/views/listing/forms/amenities';

const AddListing = () => {
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
  return (
    <DashboardLayout title="Add Listing">
      <div className="text-dark p-11">
        <div>
          <h2 className="text-2xl font-medium">Add new property</h2>
          <p className="text-mute-200 text-sm font-normal">
            Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
            suscipit
          </p>
        </div>
        <div className="w-full my-4">
          <Tabs tabComponent={tabsAll} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddListing;
