import React from 'react';
import {Container, Alert} from 'react-bootstrap';

const Header = (props) => {
    return (
        <Alert variant="danger">
        <Container fluid>
                <strong>You have {props.tasktodo} pending tasks to complete.</strong>
        </Container>
        
      </Alert>
        
    )
}

export default Header;  