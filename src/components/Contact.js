import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <>
        <section id="contact" className="section-contact">
          <div>
            <div className="title">
              <h2>let's get in touch</h2>
              <div className="centered line"></div>
            </div>
            <div className="content contact-content">
              <p>Drop me an e-mail at</p>
              <span>
                <a href="mailto:vincent.ong90@gmail.com">
                  vincent.ong90@gmail.com
                </a>
              </span>
              <p>and I will get back to you soon!</p>
            </div>
          </div>
        </section>
      </>
    );
  }
}
