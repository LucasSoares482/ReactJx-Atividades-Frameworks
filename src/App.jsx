// codigo basico e padrão gerado pelo propio stack blitz para React.jsx

//  import { useState } from 'react';
//  import reactLogo from './assets/react.svg';
//  import viteLogo from '/vite.svg';
//  import './App.css';

//  function App() {
//    const [count, setCount] = useState(0);

//    return (
//      <>
//        <div>
//          <a href="https:vitejs.dev" target="_blank">
//            <img src={viteLogo} className="logo" alt="Vite logo" />
//          </a>
//          <a href="https:react.dev" target="_blank">
//            <img src={reactLogo} className="logo react" alt="React logo" />
//          </a>
//        </div>
//        <h1>Lucas Soares Dos Santos</h1>
//        <div className="card">
//          <button onClick={() => setCount((count) => count + 1)}>
//            count is {count}
//          </button>
//          <p>
//            Edit <code>src/App.jsx</code> and save to test HMR
//          </p>
//        </div>
//        <p className="read-the-docs">
//          Click on the Vite and React logos to learn more
//        </p>
//      </>
//    );
//  }

//  export default App;


// codigo para importar MeuComponentes.jsx

// import React from 'react';
// import MeuComponente from './componentes/MeuComponentes';
// import MeuComponentes from './componentes/MeuComponentes';

// function App() {
//   return (
//     <div className="App">
//       <MeuComponente />
//     </div>
//   );
// }

// export default App;


//lista de compras exercicio 2 do pdf 2

// src/App.jsx
// import React from 'react';
// import ListaDeCompras from './componentes/ListaDeCompras';

// function App() {
//   return (
//     <div className="App">
//       <ListaDeCompras />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Imagem from './componentes/Imagem';
import Textos from './componentes/Textos';

function App() {
  return (
    <div className="App">
      <Imagem />
      <Textos />
    </div>
  );
}

export default App;

