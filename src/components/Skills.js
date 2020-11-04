import React, { Component } from "react";
import { TechLists } from "./TechLists";
import "./Component.css";
import "./Skills.css";
import { Container } from "@material-ui/core";

export default class Skills extends Component {
  render() {
    console.log(TechLists);
    let techLists = TechLists.map((item, index) => {
      return (
        <div key={index} className="tech-card">
          <i className={item.class}></i>
          <p>{item.title}</p>
        </div>
      );
    });
    return (
      <>
        <section id="skills" className="section">
          <Container style={{ margin: "auto", padding: "0" }}>
            <div className="title">
              <h2>Technical Skills</h2>
              <div className="centered line"></div>
            </div>
            <div className="content skill-content">
              <h3>Technologies that I have been using recently</h3>
              <div className="tech-container">{techLists}</div>
            </div>
          </Container>
        </section>
      </>
    );
  }
}
