import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatar from "../Assets/about-avatar.svg";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="section">
        <Row>
          <Col md={8}>
            <h1 className="heading">
              LET ME <span className="pink"> INTRODUCE </span> MYSELF
            </h1>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={avatar} className="img-fluid" alt="About avatar" />
            </Tilt>
          </Col>
        </Row>
    </Container>
  );
}
export default About;
