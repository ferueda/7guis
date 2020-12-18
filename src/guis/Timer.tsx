import * as React from 'react';

import Window from '../components/shared/Window';
import Header from '../components/shared/Header';
import Body from '../components/shared/Body';
import Button from '../components/shared/Button';

const Timer: React.FC = () => {
  return (
    <Window>
      <Header>Timer</Header>
      <Body>
        <div className="flex">
          <span>Elapsed Time:</span>
          <div className="w-60"></div>
        </div>
        <div>11.8s</div>
        <div className="flex">
          <label>Duration:</label>
          <input type="range" min="0" max="3000" />
        </div>
        <Button onClick={() => {}}>Reset</Button>
      </Body>
    </Window>
  );
};

export default Timer;
