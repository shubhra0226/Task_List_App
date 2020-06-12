import React, { useState, useEffect } from 'react';
import './App.css';
import { Alert } from 'react-bootstrap';
import Header from './components/Header/Header.jsx';
import TaskList from './components/TaskList/TaskList.jsx';
import FormSubmit from './components/FormSubmit/FormSubmit.jsx';
import Homepage from './components/Homepage/Homepage.jsx';


const App = () => {
  const initialTask = JSON.parse(window.localStorage.getItem('tasks'));
  const [tasks, setTasks] = useState(initialTask ? initialTask : []);

  const handleDelete = (index) => {
    const newArr = [...tasks];
    newArr.splice(index, 1);
    setTasks(newArr);
  }

  const handleComplete = (index) => {
    const taskToComplete = tasks[index];
    taskToComplete.completed = !taskToComplete.completed;
    const newArr = [...tasks];
    newArr.splice(index, 1, taskToComplete);
    setTasks(newArr);
  }

  const handleSubmit = task => {
    const newTask = {
      title: task,
      completed: false
    }
    setTasks([...tasks, newTask]);
  }

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Alert>
      <h1 className="App">Task List Application</h1>
      <Homepage />
      <Header tasktodo={tasks.length} />
      <FormSubmit onFormSubmit={handleSubmit} />
      <TaskList tasks={tasks} onDelete={handleDelete} onCompleted={handleComplete} />
    </Alert>
  );
}

export default App;
