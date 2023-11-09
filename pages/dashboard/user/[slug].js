/** @format */

import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import DashboardLayout from "@/components/dashboard-layout";
import UserEditForm from "@/components/views/users/UserEditForm";
import { getUserBySlug } from "@/store/user/actions";

const EditUser = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      dispatch(getUserBySlug(slug, router));
    }
  }, [dispatch, router, slug]);

  return (
    <DashboardLayout title="Edit User">
      <UserEditForm />
    </DashboardLayout>
  );
};

export default EditUser;
