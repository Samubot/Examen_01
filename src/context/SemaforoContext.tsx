//Importamos las herramientas necesarias de React:
import { createContext, useContext, useState, type ReactNode } from 'react';

// Definimos un tipo personalizado llamado Color que solo permite tres valores válidos.
type Color = 'rojo' | 'amarillo' | 'verde';

// Creamos una interfaz que describe cómo será nuestro contexto: un color actual y una función para cambiarlo.
interface SemaforoContextType {
  color: Color; // color: El color actual.
  setColor: (color: Color) => void; // setColor: Una función para cambiarlo.
}

// Crea el contexto.
// Al principio está undefined, pero luego lo llenaremos con el proveedor.
// El tipo le dice a TypeScript qué datos esperar.
const SemaforoContext = createContext<SemaforoContextType | undefined>(undefined);

// Hook para usar el contexto.
// Verifica que no esté vacío y si lo está, lanza un error (esto evita que lo uses fuera del proveedor).
export const useSemaforo = () => {
  const context = useContext(SemaforoContext);
  if (!context) throw new Error('useSemaforo debe usarse dentro de SemaforoProvider');
  return context;
};

// Crea el proveedor que guarda el estado con useState.
// El valor inicial del semáforo es 'rojo'.
export const SemaforoProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColor] = useState<Color>('rojo');

//  Aquí se envuelve a los hijos con el proveedor.
// Todo lo que esté dentro de <SemaforoProvider> puede acceder a color y setColor.
  return (
    <SemaforoContext.Provider value={{ color, setColor }}>
      {children}
    </SemaforoContext.Provider>
  );
};
