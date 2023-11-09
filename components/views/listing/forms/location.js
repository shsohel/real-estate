/** @format */

import Input from "@/components/customs/input";
import { bindPropertyBasic } from "@/store/property/actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Location() {
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
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
      <div className="bg-white p-5 border rounded">
        <div>
          <h2 className="text-2xl font-medium">Listing Location</h2>
          <p className="text-mute-200 text-sm font-normal">
            Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
            suscipit
          </p>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-2 my-2">
            <div>
              <Input
                id="address"
                label="Address"
                name="address"
                value={address}
                onChange={(e) => {
                  handleOnChange(e);
                }}
                disabled
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 my-2">
            <div>
              <Input
                id="state"
                label="State"
                name="state"
                value={state}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
            <div>
              <Input
                id="city"
                label="City"
                name="city"
                value={city}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 my-2">
            <div>
              <Input
                id="street"
                label="Street"
                name="street"
                value={street}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
            <div>
              <Input
                id="zipCode"
                label="Zip Code"
                name="zipCode"
                value={zipCode}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 my-2">
            <div>
              <Input
                id="country"
                label="Country"
                name="country"
                value={country}
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Map Section  */}
      <div className="bg-white p-5 border rounded">
        <div>
          <h2 className="text-2xl font-medium">
            Place the listing pin on the map
          </h2>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-2 my-2">
            <div className="min-h-[200px]  bg-gray-200 rounded"></div>
          </div>
          <div className="grid grid-cols-2 gap-2 my-2">
            <div>
              <label className="text-sm mb-2">Latitude</label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
            <div>
              <label className="text-sm mb-2">Longitude</label>
              <input className="rounded bg-gray-200 border-0 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
