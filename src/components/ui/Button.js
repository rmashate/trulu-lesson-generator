import React from 'react';

const Button = ({ children, variant = 'primary', ...props }) => {
  const variantStyles = {
    primary:
      'bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md',
    secondary:
      'border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-md',
  };

  return (
    <button
      className={`${variantStyles[variant]} transition-colors duration-300`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;