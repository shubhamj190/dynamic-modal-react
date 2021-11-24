import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div>
      <Container className="py-5" style={{ width: "25rem" }}>
        <h1
          className="my-3 mt-5"
          style={{ fontSize: "3rem", textTransform: "uppercase" }}
        >
          Contact Me
        </h1>
        <FontAwesomeIcon
          className="my-4"
          style={{ fontSize: "2rem" }}
          icon={faStar}
        />
        <Form>
          <Form.Group className="mb-4" controlId="formBasicText">
            <Form.Control
              className="my-3 py-3 formInput"
              type="name"
              placeholder="Full Name"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              className="my-3 py-3 formInput"
              type="email"
              placeholder="email"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPhone">
            <Form.Control
              className="my-3 py-3 formInput"
              type="text"
              placeholder="Phone"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="outline-success" style={{"width":"100%"}} className="py-3" size="lg" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Contact;
