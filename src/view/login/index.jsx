import React, { Component } from "react";
// bootstrap
import { Container, Form, FormGroup, Input, Button } from "reactstrap";
import SocialButton from "../../utility/SocialButton";

export default class Login extends Component {
  render() {
    return (
      <Container style={{ width: "50%", marginTop: 50, marginBottom: 50 }}>
        <h2 style={{ textAlign: "center", marginTop: 10 }}>My BootCamp</h2>
        <h3 className="login-head">
          Login<span>Need an account?</span>
        </h3>
        <Form>
          <FormGroup>
            <Input type="text" placeholder="Enter email" />
          </FormGroup>
          <FormGroup>
            <Input type="pass" placeholder="Enter password" />
          </FormGroup>
          <Button outline type="submit" color="primary">
            Login
          </Button>
          <p className="forget-pass">forget password?</p>
        </Form>
        <SocialButton
          name="Login with Github"
          icon="fa-github-alt"
          color={"#5dc0e1"}
        />
        <SocialButton
          name="Login with Linkdin"
          icon="fa-linkedin-in"
          color={"#1b86bd"}
        />
      </Container>
    );
  }
}
