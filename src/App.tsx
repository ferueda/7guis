import * as React from 'react';

import Counter from './guis/Counter';
import TempConverter from './guis/TempConverter';
import FlightBooker from './guis/FlightBooker';
import Timer from './guis/Timer';
import Crud from './guis/Crud';
import CircleDrawer from './guis/CircleDrawer';

const App: React.FC = () => {
  return (
    <main className="flex flex-col items-evenly w-full overflow-y-scroll p-6">
      <h1 className="text-xl font-bold text-center mb-2 text-blue-500 hover:underline">
        <a href="https://eugenkiss.github.io/7guis/tasks" target="_blank" rel="noreferrer">
          7 GUIs Challenge
        </a>
      </h1>

      <h3 className="text-center mb-4">Implementation using React, TypeScript and Tailwind CSS</h3>

      <div className="flex flex-col items-center justify-between w-full">
        <Counter />
        <TempConverter />
        <FlightBooker />
        <Timer />
        <Crud />
        <CircleDrawer />
      </div>
    </main>
  );
};

export default App;
