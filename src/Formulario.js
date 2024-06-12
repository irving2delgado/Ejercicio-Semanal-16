import React, { useState } from 'react';

function Formulario({ agregarTarea }) {
    const [input, setInput] = useState('');

    const manejarCambio = (e) => {
        setInput(e.target.value); // Actualizar el estado con el valor del input
    };

    const manejarSubmit = (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        agregarTarea(input); // Llamar a la función agregarTarea y pasarle el input
        setInput(''); // Limpiar el input
    };

    return (
        <form onSubmit={manejarSubmit}>
            <input
                type="text"
                value={input}
                onChange={manejarCambio}
            />
            <button type="submit">Agregar Tarea</button>
        </form>
    );
}

export default Formulario;
