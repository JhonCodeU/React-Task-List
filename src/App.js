import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TaskList from './components/TaskList';

const App = () => {

  const allTasks = [
    { id: 1, name: 'Organizar la casa', completed: false },
    { id: 2, name: 'Hacer la compra', completed: true },
    { id: 3, name: 'Pasear al perro', completed: false }
  ]

  const [tasks, changeTasks] = useState(allTasks);
  const [showCompletedTasks, changeShowCompletedTasks] = useState(true);

  console.log('index:', tasks);

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
