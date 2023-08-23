import React from 'react';

const Input = (props) => {
  const { label } = props;
  return (
    <div>
      <label className="text-sm mb-2">{label}</label>
      <input className="rounded bg-gray-200 border-0 w-full focus:ring-primary" />
    </div>
  );
};

export default Input;
