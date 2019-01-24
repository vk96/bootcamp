import React from "react";
// bootstrap
import { Row, Col } from "reactstrap";

export default function SingleAbout({ icon, title, decription }) {
  return (
    <Row>
      <Col xs="12" className="text-center" style={{ marginBottom: 25 }}>
        <i
          className={`fas fa-${icon}`}
          style={{
            fontSize: 44,
            color: "#3498db"
          }}
        />
      </Col>
      <Col
        xs="12"
        style={{ fontWeight: "bold", fontSize: 16, marginBottom: 10 }}
      >
        {title}
      </Col>
      <Col xs="12" style={{ fontSize: 14 }}>
        {decription}
      </Col>
    </Row>
  );
}
