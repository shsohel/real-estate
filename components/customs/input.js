import React from 'react';
import PropTypes from 'prop-types'; // ES6
const Input = (props) => {
  const { label, disabled, classNames, bgColor, border, ...rest } = props;
  return (
    <div>
      {label && <label className="text-sm mb-2">{label}</label>}
      <input
        disabled={disabled}
        className={`rounded w-full focus:ring-primary  ${border} ${
          disabled ? "bg-gray-200" : bgColor
        }`}
        {...rest}
      />
    </div>
  );
};
Input.defaultProps = {
  placeholder: "Write Plz",
  bgColor: "bg-gray-50",
  border: "border border-gray-200",
  disabled: false,
};
export default Input;
