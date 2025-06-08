// Accedemos a la función setColor del contexto.
import { useSemaforo } from '../context/SemaforoContext';

//  Solo usamos setColor porque no necesitamos el valor actual del color.
export default function BotonesSemaforo() {
  const { setColor } = useSemaforo();

  return (
    <>
      {/*Boton Rojo*/}
      <button
        onClick={() => setColor('rojo')}
        className="bg-red-600 text-white px-4 py-2 rounded m-2"
      >
        Luz Roja
      </button>

      {/*Boton Amarillo*/}
      <button
        onClick={() => setColor('amarillo')}
        className="bg-yellow-400 text-black px-4 py-2 rounded m-2"
      >
        Luz Amarilla
      </button>

      {/*Boton Verde*/}
      <button
        onClick={() => setColor('verde')}
        className="bg-green-500 text-white px-4 py-2 rounded m-2"
      >
        Luz Verde
      </button>
    </>
  );
}
