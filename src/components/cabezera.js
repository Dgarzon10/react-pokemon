import React, { Component } from "react";
import pokeball from "../extras/pokeball.svg"
export default class cabezera extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={pokeball} style={{width:50}}></img>
          </a>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
            </ul>
            <a className="nav-link active" href="#">
                  Daniel Garzón
                  <span className="visually-hidden">(current)</span>
                </a>
          </div>
        </div>
      </nav>
    );
  }
}
