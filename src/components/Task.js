import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'

const Task = ({ task }) => {
  return (
    <li className='lista-tareas__tarea' key={task.id}>
      <FontAwesomeIcon className='lista-tareas__icono lista-tareas__icono-check' icon={faCheckSquare} />
      <div className='lista-tareas__texto'>
        {task.name}
      </div>
      <div className='lista-tareas__contenedor-botones'>
        <FontAwesomeIcon className='lista-tareas__icono lista-tareas__icono-accion' icon={faEdit} />
        <FontAwesomeIcon className='lista-tareas__icono lista-tareas__icono-accion' icon={faTimes} />
      </div>
    </li>
  );
}

export default Task;