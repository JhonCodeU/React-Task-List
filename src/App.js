import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Form from './components/Form';

const App = () => {

  const tasks = [
    { id: 1, name: 'Organizar la casa', completed: false },
    { id: 2, name: 'Hacer la compra', completed: true },
    { id: 3, name: 'Pasear al perro', completed: false }
  ]

  const [task, changeTasks] = useState(tasks);

  console.log(task);

  return (
    <div className='contenedor'>
      <Header />
      <Form tasks={tasks} changeTasks={changeTasks} />
    </div>
  );
}

export default App;
