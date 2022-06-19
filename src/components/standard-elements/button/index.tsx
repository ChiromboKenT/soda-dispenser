import React, { MouseEventHandler, ReactNode } from 'react';

const Button = ({
  onClick,
  children,
  variant,
}: {
  variant: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  const buttonStyles = {
    primary: 'bg-purple-600 text-white border-purple-600 hover:bg-purple-300',
    secondary: 'bg-gray-600  border-gray-600 hover:bg-gray-300',
    outline: 'bg-white text-purple-600 border-purple-600 hover:bg-purple-300',
  };
  return (
    <button
      className={`shadow-xl rounded-lg cursor-pointer px-3 py-2 border-[2px] ${buttonStyles[variant]} mx-5`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
