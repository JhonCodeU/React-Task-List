import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'

const Task = ({ task }) => {

  const [editingTask, setEditingTask] = useState(false);
  const [newTaskName, setNewTaskName] = useState(task.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Actualizando tarea...');
    setEditingTask(false);
  }

  return (
    <li className='lista-tareas__tarea' key={task.id}>
      <FontAwesomeIcon className='lista-tareas__icono lista-tareas__icono-check' icon={faCheckSquare} />
      <div className='lista-tareas__texto'>
        {editingTask ? (
          <form onSubmit={handleSubmit} className='formulario-editar-tarea'>
            <input
              type="text"
              className='formulario-editar-tarea__input'
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
            />
            <button type='submit' className='formulario-editar-tarea__btn'>
              Actualizar
            </button>
          </form>
        ) : (
          task.name
        )
        }
      </div>
      <div className='lista-tareas__contenedor-botones'>
        <FontAwesomeIcon className='lista-tareas__icono lista-tareas__icono-accion' icon={faEdit} onClick={() => setEditingTask(true)} />
        <FontAwesomeIcon className='lista-tareas__icono lista-tareas__icono-accion' icon={faTimes} />
      </div>
    </li>
  );
}

export default Task;