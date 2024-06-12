import React, { useState } from 'react';
import Tarea from './Tarea';
import Formulario from './Formulario';

function App() {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) => {
        setTareas([...tareas, tarea]);
    };
    return (
        <div>
            <h1>Lista de Tareas</h1>
            <Formulario agregarTarea={agregarTarea} />
            <ul>
                {tareas.map((tarea, index) => (
                    <Tarea key={index} tarea={tarea} />
                ))}
            </ul>
        </div>
    );
}

export default App;