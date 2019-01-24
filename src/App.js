import React, { Component } from "react";
// styles
import "./App.css";
// routes
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import myRoutes from "./routes";
import NavbarCus from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavbarCus />
          <Switch>
            {myRoutes.map((route, i) => {
              return (
                <Route
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                  key={"route" + i}
                />
              );
            })}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
