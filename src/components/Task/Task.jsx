import React from 'react';
import { Button, Table } from 'react-bootstrap';
import './Task.css';

const Task = (props) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Action Items</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td className="table_align" style={{ textDecoration: props.content.completed ? "line-through" : "" }}>
                            {props.content.title}
                        </td>
                        <td>
                            <Button variant="dark" className="button_align" onClick={() => { props.onDelete(props.id) }}>Delete</Button>
    <Button variant="dark" className="button_align" onClick={() => {props.onCompleted(props.id)}}>{props.content.completed? 'In Progress': 'Complete'}</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default Task;