import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Input, Menu, Icon, Dropdown } from "semantic-ui-react";
import leafImage from "../images/leaf.svg";

class Header extends Component {
  state = { activeItem: "Oak Leaf Store" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <>
            <Menu.Item
              name="Login With Google"
              href="/auth/google"
              //active={this.state.activeItem === "Login With Google"}
              onClick={this.handleItemClick}
              key="2"
            >
              <Icon name="google" />
              Login With Google
            </Menu.Item>
          </>
        );
      default:
        return (
          <>
            <Menu.Item
              name="My Account"
              href="/account"
              //active={this.state.activeItem === "My Account"}
              onClick={this.handleItemClick}
              key="2"
            />
            <Menu.Item
              name="Logout"
              href="/api/logout"
              //active={this.state.activeItem === "Logout"}
              onClick={this.handleItemClick}
              key="3"
            />
          </>
        );
    }
  }

  render() {
    return (
      <>
        <Menu text className="header-1">
          <Link to="/">
            <img style={{ maxWidth: "80px" }} src={leafImage} />
          </Link>
          <Menu.Item
            name="Oak Leaf Store"
            style={{ fontWeight: "800" }}
            href="/"
            //active={this.state.activeItem === "Oak Leaf Store"}
            onClick={this.handleItemClick}
            key="1"
          />

          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            {this.renderContent()}
          </Menu.Menu>
        </Menu>
        <Menu text className="header-2">
          <Dropdown item text="Plants" className="nav-item">
            <Dropdown.Menu>
              <Dropdown.Item text="All Plants" />
              <Dropdown.Item text="Tropical Indoor Plants" />
              <Dropdown.Item text="Succulents &amp; Cacti" />
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item
            name="About Us"
            href="/about-us"
            //active={this.state.activeItem === "About Us"}
            onClick={this.handleItemClick}
            key="1"
            className="nav-item"
          />
          <Menu.Item
            name="Contact"
            href="/contact"
            //active={this.state.activeItem === "Contact"}
            onClick={this.handleItemClick}
            key="2"
            className="nav-item"
          />
        </Menu>
      </>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
