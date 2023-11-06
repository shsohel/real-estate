import { IdCardIcon } from '@radix-ui/react-icons';
import React from 'react';

const CheckBox = (props) => {
  const { label, id } = props;
  return (
    <div className="flex items-center gap-4">
      <input
        id={id}
        type="checkbox"
        className="rounded bg-gray-200 border-0 "
      />
      <label htmlFor={IdCardIcon} className="text-sm ">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
