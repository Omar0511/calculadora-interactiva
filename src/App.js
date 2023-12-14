import { useState } from 'react';
import './App.css';
import Boton from './component/Boton';
import Clear from './component/Clear';
import Pantalla from './component/Pantalla';
import logo from './img/dos.png';

// Se instaló la librería: npm install mathjs
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {

  };

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img
          src={logo}
          className='logo'
          alt='Logo'
        />
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla
          input={input}
        />

        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>x</Boton>
        </div>

        <div className='fila'>
          <Clear 
            manejarClic={ () => setInput('') }
          >
            Clear
          </Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
