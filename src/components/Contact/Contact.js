import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./Contact.css";
import map from "../../images/map.jpg";

const Contact = () => {
  return (
    <div
      className="bg-dark"
      style={{ background: `url(${map})`, backgroundSize: "cover" }}
    >
      <div>
        <h2 className="text-center text-warning m-0 pt-3">Contact Us</h2>
        <hr className="text-center text-white w-75 mx-auto" />

        <div className="contactForm">
          <Form className="ms-5 pb-5" variant="dark">
            <Row className="mb-4">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="formText">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="formText">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-4" controlId="formGridAddress1">
              <Form.Label className="formText">Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formGridAddress2">
              <Form.Label className="formText">Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-4">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label className="formText">City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label className="formText">State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label className="formText">Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group className="mb-4" id="formGridCheckbox">
              <Form.Check
                className="formText"
                type="checkbox"
                label="Save Info"
              />
            </Form.Group>

            <Button className="btnHero" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
