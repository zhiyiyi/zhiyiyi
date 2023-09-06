import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../Assets/home-logo.svg";
import Type from "./Type";

function Home() {
  return (
      <Container fluid className="section">
          <Row>
            <Col md={7}>
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋
                </span>
              </h1>
              <h1 style={{paddingTop: 10}} className="heading">
                I'M
                <b className="pink"> Zhiyi Chen</b>
              </h1>
              <div style={{paddingTop: 50}} className="heading">
                <Type />
              </div>
            </Col>

            <Col md={5}>
              <img
                src={homeLogo}
                alt="home logo"
                className="img-fluid"
                style={{maxHeight: "30rem"}}/>
            </Col>
          </Row>
      </Container>
  );
}

export default Home;
