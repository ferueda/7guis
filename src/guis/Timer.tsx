import * as React from 'react';

import Window from '../components/shared/Window';
import Header from '../components/shared/Header';
import Body from '../components/shared/Body';
import Button from '../components/shared/Button';
import Label from '../components/shared/Label';

type Time = {
  elapsedTime: number;
  duration: number;
};

const Timer: React.FC = () => {
  const [time, setTime] = React.useState<Time>({ elapsedTime: 0, duration: 30000 });

  const formattedElapsedTime: string = (time.elapsedTime / 1000).toFixed(1);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setTime((prev) =>
        prev.elapsedTime < prev.duration ? { ...prev, elapsedTime: prev.elapsedTime + 100 } : prev,
      );
    }, 100);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const handleReset = (): void => {
    setTime((prev) => ({ ...prev, elapsedTime: 0 }));
  };

  const handleDuration = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTime((prev) => ({ ...prev, duration: Number(e.target.value) }));
  };

  return (
    <Window>
      <Header>Timer</Header>
      <Body>
        <div className="flex items-center justify-between">
          <Label>Elapsed Time:</Label>
          <meter min={0} max={time.duration} value={time.elapsedTime} className="w-60 ml-4" />
        </div>

        <div className="my-2">{formattedElapsedTime}s</div>

        <div className="w-full flex items-center justify-between mb-2">
          <Label isFor="dur">Duration:</Label>

          <input
            id="dur"
            name="dur"
            type="range"
            min={1000}
            max={60000}
            value={time.duration}
            className="ml-4 w-full"
            onChange={handleDuration}
          />
        </div>

        <Button onClick={handleReset}>Reset</Button>
      </Body>
    </Window>
  );
};

export default Timer;
