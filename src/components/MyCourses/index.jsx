import React, { Component } from "react";
// bootstrap
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import classnames from "classnames";
import CourseSec from "./CourseSec";
// course data
import { course, courseDesign, courseBackend } from "../../data";

export default class MyCourses extends Component {
  state = {
    activeTab: "1"
  };

  toggleTabs = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;
    return (
      <Container style={{ marginTop: 30 }}>
        <Nav tabs>
          <NavItem>
            <NavLink
              id="tab-links"
              className={classnames({ active: activeTab === "1" })}
              onClick={() => this.toggleTabs("1")}
            >
              Web Technologies
            </NavLink>
            <NavLink
              id="tab-links"
              className={classnames({ active: activeTab === "2" })}
              onClick={() => this.toggleTabs("2")}
            >
              Web Design
            </NavLink>
            <NavLink
              id="tab-links"
              className={classnames({ active: activeTab === "3" })}
              onClick={() => this.toggleTabs("3")}
            >
              Backend tech
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <CourseSec courses={course} />
          </TabPane>
          <TabPane tabId="2">
            <CourseSec courses={courseDesign} />
          </TabPane>
          <TabPane tabId="3">
            <CourseSec courses={courseBackend} />
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}
