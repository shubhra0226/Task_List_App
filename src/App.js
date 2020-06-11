import React, { useState, useEffect } from 'react';
import './App.css';
import { Alert } from 'react-bootstrap';
import Header from './components/Header/Header.jsx';
import TaskList from './components/TaskList/TaskList.jsx';
import FormSubmit from './components/FormSubmit/FormSubmit.jsx';
import Homepage from './components/Homepage/Homepage.jsx';


const App = () => {
  const initialTask = () => window.localStorage.getItem('tasks');
  const [tasks, setTasks] = useState([initialTask]);
  const [complete, setCompleted] = useState([]);

  const handleDelete = (index) => {
    const newArr = [...tasks];
    newArr.splice(index, 1);
    setTasks(newArr);
  }

  const handleSubmit = task => {
    setTasks([...tasks, task]);
  }

  const completedTask = (event) => {
    const selectedTask = event.currentTarget;
    this.updateTaskStatus(selectedTask);
  };

  useEffect(() => {
    window.localStorage.setItem('tasks', tasks);
  }, [tasks]);
  
  return (
    <Alert>
      <h1 className="App">Task List Application</h1>
      <Homepage />
      <Header tasktodo={tasks.length} />
      <FormSubmit onFormSubmit={handleSubmit} />
      <TaskList tasks={tasks} onDelete={handleDelete} onCompleted={completedTask} />
    </Alert>
  );
}

export default App;
