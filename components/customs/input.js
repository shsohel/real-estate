import React from 'react';
import PropTypes from 'prop-types'; // ES6
const Input = (props) => {
  const { label, classNames, bgColor, border, ...rest } = props;
  return (
    <div>
      {label && <label className="text-sm mb-2">{label}</label>}
      <input
        className={`rounded   w-full focus:ring-primary ${bgColor} ${border}`}
        {...rest}
      />
    </div>
  );
};
Input.defaultProps = {
  placeholder: 'Input Here',
  bgColor: 'bg-gray-200',
  border: 'border-0',
};
export default Input;
