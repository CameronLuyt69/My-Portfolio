import React, { Component } from "react";
import Navigation from "./Navigation";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map((network) => {
        return (
          <li key={network.name}>
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <Navigation />

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h2>
              A {occupation} based in {city}.
            </h2>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
