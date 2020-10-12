// import for React
import React, { useState } from 'react';
// import for bootstrap React
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function ContactForm() {
  //----------hooks--------//
  //hook for validation
  //hook for recieve fomr infilled
  //----------return----------//
  return (
    <div id="contact-form" class="px-4 py-4 container-fluid">
      <Form>
        <Col className="py-3 text-muted px-0" xs={12}>
          <p>LET'S TALK</p>
        </Col>
        <Form.Group as={Row} controlId="formHorizontalName">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1" className="pt-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Tell me about our next project!"
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
