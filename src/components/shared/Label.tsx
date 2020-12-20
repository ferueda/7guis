import * as React from 'react';

type Props = {
  children: React.ReactNode;
  isFor?: string | undefined;
  margin?: 'mx' | 'ml' | 'mr';
};

const Label: React.FC<Props> = ({ children, isFor, margin = undefined }) => {
  return (
    <label
      htmlFor={isFor}
      className={`text-sm text-gray-800 whitespace-nowrap ${margin ? `${margin}-2` : ''}`}
    >
      {children}
    </label>
  );
};

export default Label;
