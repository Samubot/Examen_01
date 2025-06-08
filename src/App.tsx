import { SemaforoProvider } from './context/SemaforoContext';
import LucesSemaforo from './components/LucesSemaforo';
import BotonesSemaforo from './components/BotonesSemaforo';

function App() {
  return (
    <SemaforoProvider>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <LucesSemaforo />
        </div>
        <div className="flex justify-center space-x-4">
          <BotonesSemaforo />
        </div>
      </div>
    </SemaforoProvider>
  );
}

export default App;
