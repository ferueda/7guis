import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

const Body: React.FC<Props> = ({ children }) => {
  return <div className="p-2">{children}</div>;
};

export default Body;
