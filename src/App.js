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
        </div>

        <div className='fila'></div>

        <div className='fila'></div>

        <div className='fila'></div>
        
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
