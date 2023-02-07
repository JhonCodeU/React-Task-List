import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid';


const Form = ({ tasks, changeTasks }) => {

  const [inputTask, changeInputTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputTask.trim() === '') {
      alert('No puedes ingresar una tarea vacía');
      return;
    }

    changeTasks([...tasks, { id: uuidv4(), name: inputTask, completed: false }]);
    changeInputTask('');
  }

  const handleInput = (e) => {
    changeInputTask(e.target.value);
  }

  return (
    <form className='formulario-tareas' onSubmit={handleSubmit}>
      <input
        type="text"
        className='formulario-tareas__input'
        placeholder='Escribe una tarea'
        onChange={(e) => handleInput(e)}
        value={inputTask}
      />
      <button
        type='submit'
        className='formulario-tareas__btn'>
        <FontAwesomeIcon className='formulario-tareas__icono-btn' icon={faPlusSquare} />
      </button>
    </form>
  );
}

export default Form;