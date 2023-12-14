import React from 'react';
import '../css/styles.css';

const Clear = ( props ) => (
    <div 
        className='boton-clear'
        onClick={props.manejarClic}
    >
        {props.children}
    </div>
);

export default Clear;