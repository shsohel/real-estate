/** @format */

import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import DashboardLayout from "@/components/dashboard-layout";
import UserEditForm from "@/components/views/users/UserEditForm";
import { getUserById } from "@/store/user/actions";

const EditUser = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      dispatch(getUserById(id, router));
    }
  }, [dispatch, router, id]);

  return (
    <DashboardLayout title="Edit User">
      <UserEditForm />
    </DashboardLayout>
  );
};

export default EditUser;
