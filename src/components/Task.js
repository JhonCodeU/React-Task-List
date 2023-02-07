import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEdit, faTimes, faSquare } from '@fortawesome/free-solid-svg-icons'

const Task = ({ task, toggleCompletedTask, editTask, deletingTask }) => {

  const [editingTask, setEditingTask] = useState(false);
  const [newTaskName, setNewTaskName] = useState(task.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(task.id, newTaskName);
    setEditingTask(false);
  }

  return (
    <li className='lista-tareas__tarea' key={task.id}>
      <FontAwesomeIcon
        className='lista-tareas__icono lista-tareas__icono-check'
        icon={task.completed ? faCheckSquare : faSquare}
        onClick={() => toggleCompletedTask(task.id)}
      />
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
        <FontAwesomeIcon
          className='lista-tareas__icono lista-tareas__icono-accion'
          icon={faEdit}
          onClick={() => setEditingTask(true)} />

        <FontAwesomeIcon
          className='lista-tareas__icono lista-tareas__icono-accion'
          icon={faTimes}
          onClick={() => deletingTask(task.id)}
        />
      </div>
    </li>
  );
}

export default Task;