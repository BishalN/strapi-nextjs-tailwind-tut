import React from 'react';

interface ButtonProps {}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className='bg-gray-100 p-2 rounded-lg hover:bg-gray-200 focus:ring-2 focus:ring-gray-600'>
      {children}
    </button>
  );
};
