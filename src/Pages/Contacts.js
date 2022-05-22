import React, {Component} from 'react';
import {Button, Container, Form} from "react-bootstrap";

class Contacts extends Component {
    render() {
        return (
           <Container style={{width: '500px'}}>
               <h1 className="text-center"> Contact us </h1>
               <Form>
                   <Form.Group controlId="formBasicEmail">
                       <Form.Label>Email address</Form.Label>
                       <Form.Control type="email" placeholder="Enter email" />
                       <Form.Text>
                           We'll never share your email with anyone else
                       </Form.Text>
                   </Form.Group>

                   <Form.Group controlId="formBasicTextarea" className="mt-3">
                       <Form.Label>Example textarea</Form.Label>
                       <Form.Control as="textarea" rows="3" />
                   </Form.Group>

                   <Form.Group controlId="formBasicCheckbox" className="mt-1">
                       <Form.Check type="checkbox" label="Check my out"/>
                   </Form.Group>

                   <Button variant="primary" type="submit" className="mt-3">Submit</Button>
               </Form>
           </Container>
        );
    }
}

export default Contacts;
