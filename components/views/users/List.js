/** @format */

import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";

import { tableCustomStyles } from "../../../utils/utolity";
import { IoMdRefreshCircle } from "react-icons/io";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

import { useRouter } from "next/router";
import { userBasicInfoModal } from "../../../store/user/model";
import { API_URL_FILE } from "../../../config";
import { bindUserBasicInfo, deleteUser, getUsers } from "@/store/user/actions";
import ListLoader from "@/components/customs/ListLoader";

const UserList = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [rowPerPage, setRowPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [orderBy, setOrderBy] = useState("asc");
  const [sortedBy, setSortedBy] = useState("name");

  const { users, total, dataProgress, openUserSidebar } = useSelector(
    ({ users }) => users,
  );

  const [filterObj, setFilterObj] = useState({
    name: "",
  });

  const getAllUserCategories = useCallback(() => {
    dispatch(
      getUsers(
        {
          page: currentPage,
          limit: rowPerPage,
          sort: sortedBy,
          orderBy: orderBy,
        },
        filterObj,
      ),
    );
  }, [dispatch, rowPerPage, currentPage, orderBy, sortedBy, filterObj]);

  useEffect(() => {
    getAllUserCategories();
  }, [dispatch, getAllUserCategories]);

  const handleFilterObj = (e) => {
    const { name, value } = e.target;
    setFilterObj({
      ...filterObj,
      [name]: value,
    });
  };

  const handlePerPage = (row) => {
    const value = parseInt(row);
    setRowPerPage(value);
  };
  const handleSort = (column, direction) => {
    const { sortField } = column;
    if (sortField) {
      setSortedBy(sortField);
      setOrderBy(direction);
    }
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  const handleNew = () => {
    router.push("/dashboard/user/new");
    dispatch(bindUserBasicInfo(userBasicInfoModal));
  };

  const handleEdit = (row) => {
    console.log(row);
    router.push({
      pathname: "/dashboard/user/[id]",
      query: { id: row._id },
    });
  };

  return (
    <div>
      <div className="mb-3 flex  items-center justify-between">
        <div className="">
          {/* <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label> */}
          <input
            className="mt-1 block w-full rounded-sm border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            autoComplete="given-name"
            value={filterObj.name}
            onChange={(e) => {
              handleFilterObj(e);
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div className="flex justify-center">
            <IoMdRefreshCircle
              className=" cursor-pointer fill-green-600 hover:animate-spin hover:fill-primary"
              size={30}
              onClick={() => {
                getAllUserCategories();
              }}
            />
          </div>
          <button
            className="whitespace-nowrap rounded-sm bg-primary py-1 px-3 font-medium text-white hover:bg-secondary"
            onClick={() => {
              handleNew();
            }}
          >
            Add New
          </button>
        </div>
      </div>

      <div>
        <DataTable
          paginationTotalRows={total}
          persistTableHead
          dense
          progressPending={dataProgress}
          progressComponent={
            <div className="w-full">
              <ListLoader rowLength={10} colLength={9} />
            </div>
          }
          data={users}
          className="border "
          onChangeRowsPerPage={handlePerPage}
          onSort={handleSort}
          onChangePage={handlePagination}
          paginationServer
          sortServer
          defaultSortAsc
          defaultSortFieldId={sortedBy}
          columns={[
            {
              id: "action",
              name: "Action",
              width: "80px",
              cell: (row) => (
                <div className="flex justify-between">
                  <FaTrashAlt
                    onClick={() => {
                      dispatch(deleteUser(row));
                    }}
                    size={16}
                    className="mr-3 cursor-pointer fill-red-600"
                  />
                  <FaPencilAlt
                    onClick={() => {
                      handleEdit(row);
                    }}
                    size={16}
                    className="cursor-pointer fill-green-600"
                  />
                </div>
              ),
            },

            {
              id: "name",
              name: "Name",
              selector: (row) => row["name"],
            },
            {
              id: "email",
              name: "Email",
              selector: (row) => row["email"],
            },
            {
              id: "role",
              name: "Role",
              selector: (row) => row["role"].toUpperCase(),
            },
            {
              id: "photo",
              name: "Photo",
              center: true,
              cell: (row) => (
                <div className="p-1">
                  <img
                    className="h-12 w-12 flex-shrink-0 rounded-full border border-primary bg-gray-300"
                    src={`${API_URL_FILE}/${row.photoUrl}`}
                  />
                </div>
              ),
            },
            {
              id: "active",
              name: "Is Active",
              cell: (row) => (row.isActive ? "Active" : "InActive"),
            },
          ]}
          customStyles={tableCustomStyles}
          pagination
        />
      </div>
      {/* <UserForm isOpen={openUserSidebar} /> */}
    </div>
  );
};

export default UserList;
