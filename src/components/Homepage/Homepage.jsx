import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Alert, ListGroup } from 'react-bootstrap'; 
import './Homepage.css';
import Header from '../Header/Header.jsx';

const Homepage = () => {
  return (
    <ListGroup>
    <Router>
      <ListGroup.Item variant="info">
          <Link to="/about" className="list_heading">About Us</Link>
        </ListGroup.Item>
        <ListGroup.Item variant="info">
          <Link to="/dashboard"  className="list_heading">Dashboard</Link>
        </ListGroup.Item>
      <hr />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
    </ListGroup>
  )
  function About() {
    return (
      <div>
        <Alert variant="success">
        <h2>What is a Task List App? </h2>
        At their most basic, to-dos contain all of the tasks that you need to complete on a given
        day. It’s a great device for managing time that enables you to lay out everything that you
        need to accomplish and plan and prioritize your day from there. You can also make to-dos
        for major tasks like a work assignment or an overall goal. Therefore, the overall purpose
        of creating a to-do is to remember tasks and create a plan of action to accomplish them.
 </Alert>
      </div>
    );
  }
  function Dashboard() {
    return (
      <div>
        <Alert variant="success">
        <h2>Dashboard</h2>
        </Alert>
      </div>
    );
  }
}
export default Homepage;