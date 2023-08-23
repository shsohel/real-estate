import React from 'react';

const Select = (props) => {
  const { label } = props;
  return (
    <div className="w-full">
      <label className="text-sm mb-2">{label}</label>
      <select
        id="country"
        name="country"
        autoComplete=""
        className="block  bg-gray-200 w-full rounded border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-inset focus:ring-primary  sm:text-sm sm:leading-6"
      >
        <option>For Sale</option>
        <option>For Rent</option>
      </select>
    </div>
  );
};

export default Select;
