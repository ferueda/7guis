import * as React from 'react';

import Counter from './guis/Counter';
import TempConverter from './guis/TempConverter';
import FlightBooker from './guis/FlightBooker';
import Timer from './guis/Timer';
import Crud from './guis/Crud';

const App: React.FC = () => {
  return (
    <main className="flex flex-col items-center h-screen w-full">
      <h1 className="text-xl font-bold text-center mt-5 text-blue-500 hover:underline">
        <a href="https://eugenkiss.github.io/7guis/tasks" target="_blank" rel="noreferrer">
          7 GUIs Challenge
        </a>
      </h1>

      <h3 className="text-center">Implementation using React, TypeScript and Tailwind CSS</h3>

      <div className="flex flex-col items-center justify-evenly h-screen w-full">
        <Counter />
        <TempConverter />
        <FlightBooker />
        <Timer />
        <Crud />
      </div>
    </main>
  );
};

export default App;
