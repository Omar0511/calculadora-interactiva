import React from 'react';
import '../css/styles.css';

function Boton(props)
{
    const operador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return (
        <div
            className={` boton-contenedor ${ operador( props.children ) ? 'operador' : '' }`.trimEnd() }
        >
            {props.children}
        </div>
    );
}

export default Boton;
