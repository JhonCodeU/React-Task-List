import React from 'react'
import Task from './Task';

const TaskList = ({ tasks, changeTasks, showCompletedTasks }) => {

  const toggleCompletedTask = (id) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });

    changeTasks(newTasks);
  }

  const editTask = (id, name) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, name }
      }
      return task;
    });

    changeTasks(newTasks);
  }

  const deletingTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    changeTasks(newTasks);
  }

  const renderTask = (task) => {
    return (
      < Task
        task={task}
        key={task.id}
        toggleCompletedTask={toggleCompletedTask}
        editTask={editTask}
        deletingTask={deletingTask}
      />
    )
  }


  return (
    <ul className='lista-tareas'>
      {tasks.length === 0 && <div className='lista-tareas__mensaje'>No hay tareas</div>}
      {tasks.map(task => (
        showCompletedTasks ? renderTask(task) : !task.completed && renderTask(task)
      ))}
    </ul>
  );
}

export default TaskList;