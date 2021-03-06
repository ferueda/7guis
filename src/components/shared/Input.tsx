import * as React from 'react';

type Props = {
  type?: string;
  id: string;
  name: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  isValid?: boolean;
  isDisabled?: boolean;
};

const Input: React.FC<Props> = ({
  type = 'text',
  id,
  placeholder = '',
  name = '',
  onChange,
  value,
  isValid = true,
  isDisabled = false,
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className={`rounded-md bg-white border border-gray-200 text-sm shadow py-1 pl-2 w-full ${
        !isValid && 'bg-red-300 border-red-300'
      } ${isDisabled && 'cursor-not-allowed bg-gray-100'}`}
      onChange={onChange}
      value={value}
      disabled={isDisabled}
    />
  );
};

export default Input;
