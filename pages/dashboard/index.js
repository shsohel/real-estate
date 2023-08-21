import DashboardLayout from '@/components/dashboard-layout';
import Dashboard from '@/components/views/dashboard-home';
import React from 'react';

const WelcomePage = () => {
  return (
    <div>
      <DashboardLayout title="Home">
        <Dashboard />
      </DashboardLayout>
    </div>
  );
};

export default WelcomePage;
