// import for React
import React, { useState } from 'react';
// import for bootstrap React
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
// import from helper function
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  //----------hooks--------//
  //hook for validation
  const [errorMessage, setErrorMessage] = useState('');
  //hook for recieve fomr infilled
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  // deconstruct formState
  const { firstName, lastName, email, message } = formState;
  //----------event handler--------------//
  function handleChange(event) {
    // user hook of validation to check email and name
    if (event.target.name === 'email') {
      const isValid = validateEmail(event.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Please provide valid email');
      } else {
        if (!event.target.value.length) {
          setErrorMessage(`${event.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
    }
    // use the other hook to recieve changes filled in contact form only when filled info are valid
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
    // // testing for recieve error message ==>>success!
    // console.log(errorMessage);
  }
  // event handler to handle submit
  function handleSubmit(event) {
    event.preventDefault();
    // // testing for recieve input ==>>success!
    // console.log(formState);
  }
  //----------return----------//
  return (
    <div id="contact-form" className="px-4 py-4 container-fluid">
      <Form id="contact-form" onSubmit={handleSubmit}>
        <Col className="py-3 text-muted px-0" xs={12}>
          <p>LET'S TALK</p>
        </Col>
        <Form.Group as={Row} controlId="name">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col>
            <Form.Control
              name="firstName"
              placeholder="First name"
              defaultValue={firstName}
              onBlur={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              name="lastName"
              placeholder="Last name"
              defaultValue={lastName}
              onBlur={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="email">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group controlId="message" className="pt-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            placeholder="Tell me about our next project!"
            defaultValue={message}
            onBlur={handleChange}
          />
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={10}>
            <Button type="submit" variant="outline-secondary">
              Submit
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default ContactForm;
