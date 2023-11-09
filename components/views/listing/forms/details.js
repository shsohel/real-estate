import Input from '@/components/customs/input';
import Select from '@/components/customs/select';
import { bindPropertyBasic } from "@/store/property/actions";
import SelectBox from "@/utils/custom/SelectBox";
import { propertyTypes } from "@/utils/enum";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Details() {
  const dispatch = useDispatch();
  const { propertyInfo } = useSelector(
    ({ propertyReducers }) => propertyReducers
  );

  const {
    title,
    description,
    category,
    propertyType,
    propertyStatus,
    averageRating,
    price,
    unit,
    homeOwnerAssociationFee,
    afterPriceLabel,
    beforePriceLabel,
    images,
    videos,
    amenities,
    size,
    lotSize,
    rooms,
    bedRooms,
    bathrooms,
    customID,
    garages,
    garageSize,
    yearBuilt,
    availableFrom, //Date
    basement,
    roofing,
    extraDetails,
    exteriorMaterial,
    structureType,
    floorsNo,
    notes,
    address,
    country,
    state,
    city,
    street,
    zipCode,
    formattedAddress,
  } = propertyInfo;
  const handleOnChange = (e) => {
    const { name, value, checked, type } = e.target;
    const updatedProperty = {
      ...propertyInfo,
      [name]:
        type === "number"
          ? Number(value)
          : type === "checkbox"
          ? checked
          : value,
    };
    dispatch(bindPropertyBasic(updatedProperty));
  };
  const handleDropdownOnChange = (data, e) => {
    const { name } = e;
    const updatedProperty = {
      ...propertyInfo,
      [name]: data,
    };
    dispatch(bindPropertyBasic(updatedProperty));
  };
  return (
    <div className="grid  grid-cols-1 gap-6">
      <div className="bg-white p-5 border rounded">
        <div>
          <h2 className="text-2xl font-medium">Listing Detail</h2>
          <p className="text-mute-200 text-sm font-normal">
            Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
            suscipit
          </p>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-2 my-2">
            <div>
              <Input
                id="size"
                type="number"
                label="Size in ft (only numbers)"
                name="size"
                value={size}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
            <div>
              <Input
                id="lotSize"
                type="number"
                label=" Lot size in ft (only numbers)"
                name="lotSize"
                value={lotSize}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
            <div>
              <Input
                id="rooms"
                type="number"
                label="Rooms"
                name="rooms"
                value={rooms}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 my-2">
            <div>
              <Input
                id="bedRooms"
                type="number"
                label="Bedrooms"
                name="bedRooms"
                value={bedRooms}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
            <div>
              <Input
                id="bathrooms"
                type="number"
                label="Bathrooms"
                name="bathrooms"
                value={bathrooms}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
            <div>
              <Input
                id="customID"
                label="Custom ID (txt)"
                name="customID"
                value={customID}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 my-2">
            <div>
              <Input
                id="garages"
                type="number"
                label="Garages"
                name="garages"
                value={garages}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
            <div>
              <Input
                id="garageSize"
                type="number"
                label="Garage Size"
                name="garageSize"
                value={garageSize}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
            <div>
              <Input
                id="yearBuilt"
                type="number"
                label="Year built (numeric)"
                name="yearBuilt"
                value={yearBuilt}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 my-2">
            <div>
              <Input
                id="availableFrom"
                type="date"
                label="Available from (date)"
                name="availableFrom"
                value={availableFrom}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
            <div>
              <Input
                id="basement"
                label="Basement"
                name="basement"
                value={basement}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
            <div>
              <Input
                id="extraDetails"
                label="Extra Details"
                name="extraDetails"
                value={extraDetails}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 my-2">
            <div>
              <Input
                id="roofing"
                label="Roofing"
                name="roofing"
                value={roofing}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
            <div>
              <Input
                id="exteriorMaterial"
                label="Exterior Material"
                name="exteriorMaterial"
                value={exteriorMaterial}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
            <div>
              <SelectBox
                id="structureType"
                label="Structure type"
                name="structureType"
                options={propertyTypes}
                value={structureType}
                onChange={(data, e) => {
                  handleDropdownOnChange(data, e);
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 my-2">
            <div>
              <Input
                id="floorsNo"
                type="number"
                label="Floors No"
                name="floorsNo"
                value={floorsNo}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
            <div className="col-span-2">
              <label className="text-sm mb-2">Notes</label>
              <textarea
                className="rounded bg-gray-50 border
               border-gray-300 w-full min-h-[10px]"
                label="notes"
                name="notes"
                value={notes}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-white p-5 border rounded">
        <div>
          <h2 className="text-2xl font-medium">Select Energy Class</h2>
          <p className="text-mute-200 text-sm font-normal">
            Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
            suscipit
          </p>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 my-2">
            <div>
              <Select label="Energy Class" />
            </div>
            <div>
              <Select label="Energy index in kWh/m2a" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Details;
