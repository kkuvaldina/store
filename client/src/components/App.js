import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Container } from "semantic-ui-react";
import "../index.css";
import "semantic-ui-css/semantic.min.css";

import Header from "./Header";
import Landing from "./Landing";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Account from "./Account";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="page-container">
        <BrowserRouter>
          <>
            <Header></Header>
            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/about-us" component={AboutUs}></Route>
            <Route exact path="/contact" component={ContactUs}></Route>
            <Route exact path="/account" component={Account}></Route>
            <Footer></Footer>
          </>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
