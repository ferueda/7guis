import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

const Header: React.FC<Props> = ({ children }) => {
  return (
    <header className="flex bg-gray-300 text-gray-600 rounded-t-md justify-center w-full px-1 text-base shadow cursor-default">
      {children}
    </header>
  );
};

export default Header;
