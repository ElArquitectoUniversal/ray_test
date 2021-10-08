import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Listener() {
    window.addEventListener('keydown', (e)=> {
        alert(`F U N C I O N A`);
    });

    return (
        <h1>Presiona cualquier tecla para corroborar que funcione</h1>
    );
}


ReactDOM.render(
    <Listener />,
    document.getElementById('root')
);