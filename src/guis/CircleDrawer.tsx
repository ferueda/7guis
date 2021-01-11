import * as React from 'react';

import Body from '../components/shared/Body';
import Header from '../components/shared/Header';
import Window from '../components/shared/Window';
import Button from '../components/shared/Button';
import Circle from '../components/circleDrawer/Circle';

const CircleDrawer: React.FC = () => {
  return (
    <Window>
      <Header>Circle Drawer</Header>
      <Body>
        <div className="grid grid-cols-2 gap-2 justify-center items-center">
          <Button onClick={() => {}}>Undo</Button>
          <Button onClick={() => {}}>Redo</Button>
        </div>

        <canvas
          className="relative rounded-md bg-white border border-gray-200 text-sm shadow mt-2 overflow-hidden"
          width="400"
          height="250"
        ></canvas>
      </Body>
    </Window>
  );
};

export default CircleDrawer;
