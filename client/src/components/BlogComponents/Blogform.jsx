import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Blogform.css";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
export default function Blogform() {
  return (
    <>
      <div className="blogform_section">
        <Container>
          <Row>
            <Col lg={5}>
              <h2 className="blogform_heading">Write Blog</h2>
              <p
                style={{
                  textAlign: "justify",
                  padding: "1rem",
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt eveniet eos, facilis veniam sequi numquam sint sunt,
                natus temporibus impedit reprehenderit et expedita porro facere
                assumenda odit quod corporis? Ipsam!
              </p>
              <Container style={{ minHeight: "100hv" }} className="login_form">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Title of Blog </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Introduction</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>SubHeading 1</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description for subheading 1</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>SubHeading 2</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description for subheading 2</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Conclusion </Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Button variant="success">Post</Button>{" "}
                </Form>
              </Container>
            </Col>
            <Col lg={7} className="right_section">
              <img
                src="https://api.backlinko.com/app/uploads/2019/12/the-classic-list-post-914x1536.webp"
                alt=""
              />
            </Col>
          </Row>
        </Container>{" "}
      </div>
    </>
  );
}
