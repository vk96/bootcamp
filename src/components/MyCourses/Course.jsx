import React from "react";
// bootstrap
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import { Link } from "react-router-dom";

export default function Course({ course }) {
  return (
    <Card>
      <CardImg top width="100%" src={course.img} alt={course.name} />
      <CardBody>
        <CardTitle style={{ fontWeight: "bold", fontSize: 16 }}>
          {course.name}
        </CardTitle>
        <CardSubtitle style={{ color: "rgba(0,0,0,0.7)", fontSize: 14 }}>
          {course.author}
        </CardSubtitle>
        <CardText style={{ textAlign: "right" }}>
          <span
            style={{
              textDecoration: "line-through",
              fontSize: 14,
              marginRight: 12
            }}
          >
            {course.actualPrice}
          </span>
          <span
            style={{
              fontWeight: "bold"
            }}
          >
            {course.price}
          </span>
        </CardText>
        <Link
          to={{
            pathname: "/course",
            state: {
              course
            }
          }}
          style={{
            "&:hover": {
              textDecoration: "none"
            }
          }}
        >
          <Button color="danger" block>
            Buy now
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}
