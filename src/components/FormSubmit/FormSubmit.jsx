import React, {useState} from 'react';
import { Accordion, Card, Button, Form } from 'react-bootstrap';

const FormSubmit = (props) => {
    const [term, setTerm] = useState('');
    // state = { term: ''};

    const handleSubmit = (e) => {
        e.preventDefault();
        if (term === '') return;
        props.onFormSubmit(term);
        setTerm('');
    }
        return (
            <Accordion defaultActiveKey="1">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Click here to get started
  </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" >
                        <Card.Body>

                            <form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicText">
                                    <Form.Label>New Task</Form.Label>
                                    <Form.Control type="text" placeholder="Enter task" value={term} onChange={(e) => setTerm( e.target.value )} />
                                    <Form.Text className="text-muted">
                                        We'll never share your tasks with anyone else.
    </Form.Text>
                                </Form.Group>
                                <Button variant="success" type="submit">Submit</Button>
                            </form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Want your tasks to save? Register here
  </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1" >
                        <Card.Body>

                            <form>
                                <Form.Group controlId="formBasicText">
                                    <Form.Label>Task Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter task name"/>
                                </Form.Group>
                            </form>
                            <Button variant="info">Register</Button>

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion> 
        );
}

export default FormSubmit;