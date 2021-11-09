import React from "react";
//import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import Icon from "./Icon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <Container className="lowerBorder">
      <Row>
        <Col>
          <h5>Monday</h5>
          <h4>Max/Min</h4>
        </Col>
        <Col>
          <h5>Tuesday</h5>
          <h4>Max/Min</h4>
        </Col>
        <Col>
          <h5>Wednesday</h5>
          <h4>Max/Min</h4>
        </Col>
        <Col>
          <h5>Thursday</h5>
          <h4>Max/Min</h4>
        </Col>
        <Col>
          <h5>Friday</h5>
          <h4>Max/Min</h4>
        </Col>
      </Row>
    </Container>
  );
}
