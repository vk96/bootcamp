import React from "react";
// bootstrap
import { Row, Col } from "reactstrap";
import SingleAbout from "../../utility/SingleAbout";

export default function About({ name }) {
  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
        textAlign: "center"
      }}
    >
      <h3 style={{ color: "#3498db", marginBottom: 48, textAlign: "left" }}>
        What is {name}?
      </h3>
      <Row>
        <Col md="4">
          <SingleAbout
            icon="users"
            title="CAREER-FOCUSED CURRICULUM"
            decription="Established developers,combination of mentors who know where you are starting."
          />
        </Col>
        <Col md="4">
          <SingleAbout
            icon="building"
            title="HOUSING AT NO EXTRA COST"
            decription="Housing is included for all immersive students at every DevMountain location."
          />
        </Col>
        <Col md="4">
          <SingleAbout
            icon="map-marker-alt"
            title="GREAT LOCATIONS"
            decription="Our locations have everything you need close by."
          />
        </Col>
      </Row>
    </div>
  );
}
