import React from 'react'
import Task from './Task';

const TaskList = ({ tasks }) => {
  return (
    <ul className='lista-tareas'>
      {tasks.length === 0 && <div className='lista-tareas__mensaje'>No hay tareas</div>}
      {tasks.map(task => (
        <Task task={task} />
      ))}
    </ul>
  );
}

export default TaskList;