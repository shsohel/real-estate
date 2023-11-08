/** @format */

"use client";
import Input from "@/components/customs/input";
import Select from "@/components/customs/select";

import { bindPropertyBasic } from "@/store/property/actions";
import SelectBox from "@/utils/custom/SelectBox";
import React from "react";

import { useDispatch, useSelector } from "react-redux";

function Descriptions() {
  const dispatch = useDispatch();
  const { propertyInfo } = useSelector(
    ({ propertyReducers }) => propertyReducers
  );

  const {
    title,
    description,
    category,
    propertyType,
    averageRating,
    price,
    images,
    amenities,
    size,
    lotSize,
    rooms,
    bedRooms,
    customID,
    garages,
    garageSize,
    yearBuilt,
    availableForm, //Date
    basement,
    roofing,
    extraDetails,
    exteriorMaterial,
    structureType,
    floorsNo,
    address,
  } = propertyInfo;

  const handleOnChange = (e) => {
    const { name, value, checked, type } = e.target;
    const updatedProperty = {
      [name]:
        type === "number"
          ? Number(value)
          : type === "checkbox"
          ? checked
          : value,
    };
    dispatch(bindPropertyBasic(updatedProperty));
  };

  console.log(title);
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
      <div>
        <div className="bg-white p-5 border rounded">
          <div>
            <h2 className="text-2xl font-medium">Property Description</h2>
            <p className="text-mute-200 text-sm font-normal">
              Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
              suscipit
            </p>
          </div>
          <div className="mt-8">
            <div className="grid grid-cols-1 gap-2 my-2">
              <Input
                id="title"
                name="title"
                placeholder="Please Title Here"
                label="Title (mandatory)"
                value={title}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
            <div className="grid grid-cols-1 gap-2 my-2">
              <div>
                <label className="text-sm mb-2">Description</label>
                <textarea
                  className="rounded bg-gray-200 border-0 w-full min-h-[107px]"
                  id="description"
                  name="description"
                  placeholder="Please description here"
                  label="Description"
                  value={description}
                  onChange={(e) => {
                    handleOnChange(e);
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 border rounded my-3">
          <div>
            <h2 className="text-2xl font-medium">Select Category</h2>
            <p className="text-mute-200 text-sm font-normal">
              Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
              suscipit
            </p>
          </div>
          <div className="mt-8">
            <div className="grid grid-cols-2 gap-2 my-2">
              <SelectBox
                id="category"
                label="Category"
                name="category"
                onChange={(data, e) => {}}
                invalid={true}
              />
              <SelectBox
                id="listedInd"
                label="Listed in"
                name="listedInd"
                onChange={(data, e) => {}}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Map Section  */}
      <div>
        <div className="bg-white p-5 border rounded">
          <div>
            <h2 className="text-2xl font-medium">Property Price</h2>
            <p className="text-mute-200 text-sm font-normal">
              Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
              suscipit
            </p>
          </div>
          <div className="mt-8">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 my-2">
              <div>
                <Input label="Price in $ (only numbers)" name="" />
              </div>
              <div>
                <Input label="Yearly Tax Rate" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 my-2">
              <div>
                <Input label="Homeowners Asso. Fee (monthly)" />
              </div>
              <div>
                <Input label="After Price Label ( ex: /month)" />
              </div>
              <div>
                <Input label={`Before Price label (ex: "from")`} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 border rounded my-3">
          <div>
            <h2 className="text-2xl font-medium">Select Poperty Status</h2>
            <p className="text-mute-200 text-sm font-normal">
              Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
              suscipit
            </p>
          </div>
          <div className="mt-8">
            <div className="  my-2">
              <Select label="Property Status" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Descriptions;
