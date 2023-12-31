import React from 'react';
interface ButtonProps {
  label: string;
  onClick: () => void;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  disabled?: boolean;
  outline?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outline,
}) => {
  return (
    <button
      className={`
      disabled:opacity-70 disabled:cursor-not-allowed rounded-full font-semibold hover:opacity-80 transition border-2
      ${fullWidth ? 'w-full' : 'w-fit'} 
      ${
        secondary
          ? 'bg-white text-black border-black'
          : 'bg-rose-500 text-white border-rose-500'
      }
      ${large ? 'px-5 py-3 text-xl' : 'px-4 py-2 text-md'}
      ${outline && 'bg-transparent border-white text-white'}
        ${disabled && ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
