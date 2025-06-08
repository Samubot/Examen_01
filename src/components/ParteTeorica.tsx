/*

1. ¿Qué hace el hook useState? Dé un ejemplo.

Un hook es una función especial que te permite usar características de React 
(como estado, contexto o efectos secundarios) dentro de los componentes funcionales, 
sin necesidad de convertirlos en clases.

useState es un hook de React que permite agregar estado local a un componente funcional.

import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0); // Hook de estado

  return (
    <button onClick={() => setContador(contador + 1)}>
      Has hecho clic {contador} veces
    </button>
  );
}

Aquí useState es un hook que permite que contador recuerde su valor entre renders.

2. ¿Qué es un fragmento (<> </>) y para qué sirve?

Un fragmento en React (<> </>) permite agrupar múltiples elementos sin añadir nodos extra al DOM.
En lugar de envolver elementos en un <div> o cualquier otro contenedor, se puede usar un fragmento para
mantener el código limpio y evitar elementos innecesarios en el HTML final.

3. ¿Qué diferencia hay entre useContext y useState?

| Característica       | `useState`                           | `useContext`                                 |
| -------------------- | ------------------------------------ | -------------------------------------------- |
| ¿Para qué sirve?     | Maneja **estado local**              | Accede a **contexto global** compartido      |
| ¿Dónde se usa?       | Dentro de componentes individuales   | Donde se necesita acceder a valores globales |
| Ejemplo de uso común | Contadores, formularios, toggles     | Tema global, usuario logueado, idioma        |
| Comunicación         | No comparte estado entre componentes | Permite compartir estado entre componentes   |

4. ¿Cuál es la estructura básica de un componente funcional?

import React from 'react';

function MiComponente() {
  return (
    <div>
      <h1>Hola mundo</h1>
    </div>
  );
}

export default MiComponente;


*/