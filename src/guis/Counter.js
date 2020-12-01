import { useState } from 'react';

import Window from '../components/shared/Window';
import Header from '../components/shared/Header';
import Body from '../components/shared/Body';
import Button from '../components/shared/Button';

function Counter() {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount((prev) => prev + 1);
  return (
    <Window>
      <Header>Counter</Header>
      <Body>
        <div className="grid grid-cols-2 grid-rows-1 justify-between p-2 min-w-200">
          <div className="flex justify-center items-center text-sm">{count}</div>
          <Button onClick={handleCount}>Count</Button>
        </div>
      </Body>
    </Window>
  );
}

export default Counter;
