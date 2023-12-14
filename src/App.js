import './App.css';
import Boton from './component/Boton';
import logo from './img/dos.png';

function App() {
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
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>

        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>

        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>/</Boton>
        </div>

        <div className='fila'>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>=</Boton>
          <Boton>x</Boton>
        </div>

        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
