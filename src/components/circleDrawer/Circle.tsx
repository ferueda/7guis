import * as React from 'react';

type Props = {
  radius: number;
};

const Circle: React.FC<Props> = ({ radius }) => {
  return (
    <div
      className={`absolute top-0 -right-4 border border-black rounded-full w-${radius} h-${radius} hover:bg-gray-200`}
    ></div>
  );
};

export default Circle;
