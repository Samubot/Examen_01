 // Importamos nuestro hook personalizado para acceder al color actual.
import { useSemaforo } from '../context/SemaforoContext';

// Llamamos a useSemaforo() para obtener el color actual del contexto.
export default function LucesSemaforo() {
  const { color } = useSemaforo();

//  Esta función ayuda a saber cuál luz está activa (100%) o apagada (30%).
  const getOpacity = (luz: string) => (color === luz ? 'opacity-100' : 'opacity-30');

  return (
    <>
      <div className={`w-24 h-24 rounded-full bg-red-600 ${getOpacity('rojo')}`}></div>
      <div className={`w-24 h-24 rounded-full bg-yellow-400 ${getOpacity('amarillo')}`}></div>
      <div className={`w-24 h-24 rounded-full bg-green-500 ${getOpacity('verde')}`}></div>
    </>
  );
}
