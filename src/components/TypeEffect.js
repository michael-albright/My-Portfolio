import React from 'react';
import Typed from 'typed.js';

export class TypeEffect extends React.Component {
  componentDidMount() {
      this.typed = new Typed(".auto-input", {
        strings: [ "I work in Java.", "I work in SpringBoot.", "I work in PostgreSQL.", 
        "I work in JavaScript.", "I work in Bootstrap.", 
        "I work in React.", "I work in MySql.", "I am a Web Developer."],
        typeSpeed: 100,
        backSpeed: 75,
        smartBackspace: true,
        loop: false
      });
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div class="type-effect-container">
        <div className="auto-text-body mt-4 mx-1 d-flex justify-content-center">
          <span className="auto-header auto-input"></span>
        </div>
          <p className="header-text part-1 m-2">
            Building robust web applications from <br /> <span className="header-text part-2">
            initiation to depolyment.</span>
          </p>
      </div>
    );
  }
}

