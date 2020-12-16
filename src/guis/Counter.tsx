import * as React from 'react';

import Window from '../components/shared/Window';
import Header from '../components/shared/Header';
import Body from '../components/shared/Body';
import Button from '../components/shared/Button';

const Counter: React.FC = () => {
  const [count, setCount] = React.useState<number>(0);
  const handleCount = (): void => setCount((prev) => prev + 1);
  return (
    <Window>
      <Header>Counter</Header>
      <Body>
        <div className="grid grid-cols-2 grid-rows-1 justify-between">
          <div className="flex justify-center items-center text-sm">{count}</div>
          <Button onClick={handleCount}>Count</Button>
        </div>
      </Body>
    </Window>
  );
};

export default Counter;
