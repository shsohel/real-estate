import Tabs from '@/components/customs/tab';
import DashboardLayout from '@/components/dashboard-layout';
import React from 'react';

const AddListing = () => {
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
        <div className="w-full">
          <Tabs />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddListing;
