import React from "react";
// bootstrap comp
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  ListGroup,
  ListGroupItem
} from "reactstrap";
// routes
import { Link } from "react-router-dom";
import CountDown from "../CountDown";
// react scroll
import { scroller } from "react-scroll";

export default class NavbarCus extends React.Component {
  state = {
    open: false
  };

  navbarToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  scrollElement = (element, e) => {
    e.preventDefault();
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    });
    this.navbarToggle();
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <CountDown />
        <Navbar color="dark" dark>
          <Link to="/">
            <NavbarBrand style={{ color: "#fff" }}>My BootCamp</NavbarBrand>
          </Link>
          <NavbarToggler
            style={{ color: "#fff" }}
            onClick={() => this.navbarToggle()}
          >
            <i className="fas fa-bars" />
          </NavbarToggler>
          <Collapse id="collapse" isOpen={open} navbar>
            <Navbar className="ml-auto">
              <ListGroup flush id="navbar-lists">
                <ListGroupItem disabled tag="a" href="/">
                  Home
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  onClick={e => this.scrollElement("about", e)}
                >
                  About
                </ListGroupItem>
                <ListGroupItem tag="a" href="/">
                  Contact
                </ListGroupItem>
                <ListGroupItem tag="a" href="/">
                  <Link
                    to="/login"
                    style={{ color: "#fff" }}
                    onClick={() => this.navbarToggle()}
                  >
                    Login
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </Navbar>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
