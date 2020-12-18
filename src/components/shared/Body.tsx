import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

const Body: React.FC<Props> = ({ children }) => {
  return <div className="flex flex-col items-center p-2 w-full">{children}</div>;
};

export default Body;
