import React from "react";
import { Button } from "reactstrap";
// classnames
import classnames from "classnames";

export default function SocialButton({ icon, name, color }) {
  return (
    <Button block style={{ background: `${color}`, border: "none" }}>
      <i className={classnames("fab", icon)} style={{ marginRight: 10 }} />
      {name}
    </Button>
  );
}
