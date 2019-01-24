import React, { Component } from "react";
// bootstrap
import { UncontrolledAlert } from "reactstrap";

const date = new Date();
date.setDate(date.getDate() + 1);
export default class CountDown extends Component {
  state = {
    deadLine: date,
    hours: "",
    min: "",
    sec: ""
  };

  getTime = dLine => {
    const time = Date.parse(dLine) - Date.parse(new Date());

    if (time < 0) {
      console.log("time was");
    } else {
      const sec = Math.floor((time / 1000) % 60);
      const min = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      this.setState({
        sec,
        min,
        hours
      });
    }
  };

  componentDidMount() {
    setInterval(() => this.getTime(this.state.deadLine), 1000);
  }

  render() {
    const { hours, min, sec } = this.state;
    return (
      <UncontrolledAlert
        color="info"
        style={{ marginBottom: 0, textAlign: "center" }}
      >
        Unlock specail new student with promo code New student as low as $700.
        <br />
        <span
          style={{
            fontWeight: "bold"
          }}
        >
          Ends in {hours}hrs {min}m {sec}s
        </span>
      </UncontrolledAlert>
    );
  }
}
