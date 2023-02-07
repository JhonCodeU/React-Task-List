import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TaskList from './components/TaskList';

const App = () => {

  // Get tasks from local storage
  let allTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  let showCompleted = '';

  // If there is no value in local storage, use this default value
  if (localStorage.getItem('showCompletedTasks') === null) {
    showCompleted = true;
  } else {
    showCompleted = JSON.parse(localStorage.getItem('showCompletedTasks'));
  }

  // If there is no value in local storage, use this default value
  const [tasks, changeTasks] = useState(allTasks);
  const [showCompletedTasks, changeShowCompletedTasks] = useState(showCompleted);

  // Save tasks in local storage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('showCompletedTasks', JSON.stringify(showCompletedTasks));
  }, [showCompletedTasks]);

  // Add new task
  return (
    <div className='contenedor'>
      <Header
        showCompletedTasks={showCompletedTasks}
        changeShowCompletedTasks={changeShowCompletedTasks}
      />
      <Form tasks={tasks} changeTasks={changeTasks} />
      <TaskList
        tasks={tasks}
        changeTasks={changeTasks}
        showCompletedTasks={showCompletedTasks}
      />
    </div>
  );
}

export default App;
