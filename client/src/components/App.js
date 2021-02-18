import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Container } from "semantic-ui-react";
import "../index.css";
import "semantic-ui-css/semantic.min.css";

import Header from "./Header";
import Landing from "./Landing";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <>
            <Header></Header>
            <Route exact path="/" component={Landing}></Route>
          </>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
