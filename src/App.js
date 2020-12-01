import Counter from './guis/Counter';
import TempConverter from './guis/TempConverter';

function App() {
  return (
    <main className="flex flex-col items-center justify-evenly h-screen w-full ">
      <Counter />
      <TempConverter />
    </main>
  );
}

export default App;
