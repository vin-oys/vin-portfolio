import { Container } from "@material-ui/core";
import React, { Component } from "react";
import "./Nav.css";

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      aClassName: "",
    };
  }

  onClick = (e) => {
    if (this.state.aClassName === "") {
      this.setState({
        aClassName: "responsive",
      });
    } else {
      this.setState({
        aClassName: "",
      });
    }
  };

  render() {
    return (
      <div className="parent">
        <Container style={{ margin: "auto", padding: "0" }}>
          <div className="nav-bar">
            <div className="nav-logo">
              <a href="#home">Vincent</a>
            </div>
            <div className="nav-items">
              <i className="material-icons" onClick={this.onClick}>
                {this.state.aClassName === "" ? "menu" : "close"}
              </i>
              <a
                href="#about"
                className={this.state.aClassName}
                onClick={this.onClick}
              >
                about
              </a>
              <a
                href="#skills"
                className={this.state.aClassName}
                onClick={this.onClick}
              >
                skills
              </a>
              <a
                href="#portfolio"
                className={this.state.aClassName}
                onClick={this.onClick}
              >
                projects
              </a>
              <a
                href="#contact"
                className={this.state.aClassName}
                onClick={this.onClick}
              >
                contact
              </a>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
