import React from "react";
// bootstrap
import { Row, Col } from "reactstrap";
import Course from "./Course";

export default function CourseSec({ courses }) {
  console.log({ courses });
  return (
    <Row style={{ marginTop: 30 }}>
      {courses.map((cour, i) => (
        <Col md="4" key={i} style={{ marginBottom: 15 }}>
          <Course course={cour} />
        </Col>
      ))}
    </Row>
  );
}
