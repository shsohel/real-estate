/** @format */

import React from "react";
import DashboardLayout from "@/components/dashboard-layout";
import UserList from "@/components/views/users/List";

const User = (props) => {
  return (
    <DashboardLayout title="User Management">
      <UserList />
    </DashboardLayout>
  );
};

export default User;
