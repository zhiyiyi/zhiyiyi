import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <Container fluid className="section">
      <Container>
        <Row>
          <Col md={12}>
            <h1 className="heading">
              Feel free to <span className="purple"> connect </span> with me!
            </h1>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Contact;
