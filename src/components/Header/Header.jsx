import React from 'react';
import {Container, Alert, Button} from 'react-bootstrap';
import './Header.css';

const Header = (props) => {
  let textInput = React.createRef();

  const handleRef = () => {
    textInput.current.focus();
  }
    return (
        <Alert variant="danger">
        <Container fluid>
                <strong>You have {props.tasktodo} pending tasks to complete.</strong>
        </Container>
        <input className="text_box" type="textbox" ref={textInput} />
      <Button className="click_btn" variant="outline-dark" value="Click me to take notes" onClick={handleRef}>Click me to take notes</Button>
      </Alert>
      
        
        
        
    )
}

export default Header;  