import CheckBox from '@/components/customs/CheckBox';
import { bindPropertyBasic } from "@/store/property/actions";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Amenities() {
  const dispatch = useDispatch();
  const { propertyInfo } = useSelector(
    ({ propertyReducers }) => propertyReducers
  );

  const { amenities } = propertyInfo;
  const handleOnChange = (e) => {
    const { name, value, checked, type } = e.target;
    const updatedAmenities = amenities.map((amenity) => {
      if (amenity === name) {
        amenity[name] = checked;
      }
      return amenity;
    });
    const updatedProperty = {
      ...propertyInfo,
      ["amenities"]: updatedAmenities,
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-2">
            {amenities.map((amenity, index) => {
              return (
                <dvi key={index}>
                  <CheckBox
                    id={amenity.name}
                    label={amenity.name}
                    checked={amenity.isSelect}
                    onChange={(e) => {
                      handleOnChange(e);
                    }}
                  />
                </dvi>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Amenities;
