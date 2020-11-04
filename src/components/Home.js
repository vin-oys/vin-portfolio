import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <section id="home" className="section-home">
          <div className="home-container">
            <div className="home-profile">
              <h1>Vincent Ong</h1>
              <div className="centered line"></div>
              <h2>Software Engineer</h2>
            </div>
          </div>
        </section>
      </>
    );
  }
}
