import * as React from 'react';

import Window from '../components/shared/Window';
import Header from '../components/shared/Header';
import Body from '../components/shared/Body';
import Button from '../components/shared/Button';

const Timer: React.FC = () => {
  const [elapsedTime, setElapsedTime] = React.useState<number>(0);
  const [duration, setDuration] = React.useState<number>(30000);

  const formattedElapsedTime: string = (elapsedTime / 1000).toFixed(1);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setElapsedTime((prev) => (prev < duration ? prev + 100 : prev));
    }, 100);

    return () => {
      window.clearInterval(interval);
    };
  }, [duration]);

  const handleReset = (): void => {
    setElapsedTime(0);
  };

  const handleDuration = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDuration(Number(e.target.value));
  };

  return (
    <Window>
      <Header>Timer</Header>
      <Body>
        <div className="flex items-center justify-between">
          <span>Elapsed Time:</span>
          <meter min={0} max={duration} value={elapsedTime} className="w-60 ml-4" />
        </div>

        <div className="my-2">{formattedElapsedTime}s</div>

        <div className="w-full flex items-center justify-between mb-2">
          <label htmlFor="dur" className="">
            Duration:
          </label>

          <input
            id="dur"
            name="dur"
            type="range"
            min={1000}
            max={60000}
            value={duration}
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
