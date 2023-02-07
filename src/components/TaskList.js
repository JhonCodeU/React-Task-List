import React from 'react'
import Task from './Task';

const TaskList = ({ tasks, changeTasks }) => {

  const toggleCompletedTask = (id) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });

    changeTasks(newTasks);
  }

  return (
    <ul className='lista-tareas'>
      {tasks.length === 0 && <div className='lista-tareas__mensaje'>No hay tareas</div>}
      {tasks.map(task => (
        <Task
          task={task}
          key={task.id}
          toggleCompletedTask={toggleCompletedTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;