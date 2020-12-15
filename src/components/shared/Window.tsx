import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

const Window: React.FC<Props> = ({ children }) => {
  return (
    <div className="max-w-max bg-gray-100 border rounded-md border-gray-300 shadow-lg">
      {children}
    </div>
  );
};

export default Window;
