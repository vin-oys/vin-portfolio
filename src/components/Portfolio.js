import React, { Component } from "react";
import { PortfolioLists } from "./PortfolioLists";
import "./Component.css";
import "./Portfolio.css";
import { Container } from "@material-ui/core";

export default class Portfolio extends Component {
  render() {
    let portfolio = PortfolioLists.map((item, index) => {
      return (
        <div className="card" key={index}>
          <div className="card-img">
            <img src={item.img} alt="" style={{ width: "300px" }} />
          </div>
          <div className="card-body">
            <h3>{item.projectTitle}</h3>
            <p>{item.description}</p>
            <span>
              <a href={item.url}>Find Out More</a>
            </span>
          </div>
        </div>
      );
    });
    return (
      <>
        <section id="portfolio" className="section">
          <Container style={{ margin: "auto", padding: "0" }}>
            <div className="title">
              <h2>Projects</h2>
              <div className="centered line"></div>
            </div>
            <div className="content">
              <div className="portfolio-container">{portfolio}</div>
            </div>
          </Container>
        </section>
      </>
    );
  }
}
