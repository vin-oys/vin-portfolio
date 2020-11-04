import React, { Component } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Component.css";
import "./About.css";
import { Container } from "@material-ui/core";

export default class About extends Component {
  render() {
    return (
      <>
        <section id="about" className="section">
          <Container style={{ margin: "auto", padding: "0" }}>
            <div className="title">
              <h2>About Me</h2>
              <div className="centered line"></div>
            </div>
            <div className="about-content">
              <div className="about-img about-col">
                <img
                  src="https://i.imgur.com/VcnwJRtl.jpg"
                  alt=""
                  style={{ width: "300px" }}
                  className="profile-img"
                />
              </div>
              <div className="about-des about-col">
                <h3>Hello!</h3>
                <p>
                  I recently graduated from General Assembly Singapore, equipped
                  with skills to build fullstack applications.
                </p>
                <p>
                  I was a mechanical engineer specializing in medical gas
                  system. In my last project involving digitisation of the
                  operation, I discovered the possibilities programming can
                  achieve. Therefore contributing to the decision to pursue
                  coding as a career.
                </p>

                <ul className="social-media">
                  <li>
                    <a href="https://www.linkedin.com/in/yushengong/">
                      <LinkedInIcon fontSize="large" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/vin-oys">
                      <GitHubIcon fontSize="large" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </>
    );
  }
}
