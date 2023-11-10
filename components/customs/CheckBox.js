/** @format */

import React from 'react';

const CheckBox = (props) => {
  const { label, id, ...rest } = props;
  return (
    <div className="flex items-center gap-4">
      <input
        id={id}
        type="checkbox"
        className="rounded bg-gray-200 border-0 "
        {...rest}
      />
      <label htmlFor={id} className="text-sm ">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
