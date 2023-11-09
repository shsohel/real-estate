/** @format */

import ProgressLoader from "@/components/customs/ProgressLoader";
import TabControl from "@/components/customs/TabControl";
import Link from "next/link";
import React from "react";
import { FaChevronRight, FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";

const UserAccount = () => {
  const { authUser } = useSelector(({ auth }) => auth);
  const isLoading = !authUser;

  const defaultTabs = [
    { id: 2, name: "My Whitelist", current: true, component: <div>Hell</div> },
    {
      id: 3,
      name: "Account",
      current: false,
      component: <div>Hell</div>,
    },
    {
      id: 4,
      name: "Security",
      current: false,
      component: <div>Hell</div>,
    },
  ];
  return (
    <ProgressLoader isProgress={isLoading}>
      <div className="container">
        <div className="pt-24">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-3 text-primary py-4">
            <Link href="/" className="text-base ">
              <FaHome />
            </Link>
            <span className="text-sm ">
              <FaChevronRight />
            </span>
            <p className="font-medium">My-Account</p>
          </div>
          {/* Main Section */}
          <div className="grid grid-cols-1  gap-6 pt-4 pb-16">
            <TabControl defaultTabs={defaultTabs} />
          </div>
        </div>
      </div>
    </ProgressLoader>
  );
};

export default UserAccount;
