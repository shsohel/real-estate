/** @format */

import React from "react";

import DashboardLayout from "@/components/dashboard-layout";
import UserForm from "@/components/views/users/UserForm";

const NewUser = () => {
  return (
    <DashboardLayout title="User">
      <UserForm />
    </DashboardLayout>
  );
};

export default NewUser;
