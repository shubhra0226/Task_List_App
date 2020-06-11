import React from 'react';
import Task from '../Task/Task.jsx';

const TaskList = (props) => {
    const todos = props.tasks.map((todo, index) => {
        return <Task content={todo} key={index} id={index} onDelete={props.onDelete} onCompleted={props.onCompleted}/>
    })
    return (
        <div>{todos}</div>
    )
}
export default TaskList;