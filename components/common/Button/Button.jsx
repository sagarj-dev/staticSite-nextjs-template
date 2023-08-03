import React from 'react';
import './Button.scss';
const Button = ({ children, type, ...extraProps }) => {
  return (
    <button
      className='Button'
      {...extraProps}
    >
      {children}
    </button>
  );
};

export default Button;
