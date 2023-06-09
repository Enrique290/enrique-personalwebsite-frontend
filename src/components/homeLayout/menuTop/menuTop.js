import React from "react";

import Logo from "../../../assets/img/personal/personalLogo.png";
import SocialNetworks from "../socialNetworks";
import "./menuTop.css";

export default function MenuTop() {
  return (
    <div className="menuTop">
      <div className="container-xl">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a href="/" rel="noreferrer">
            <img
              src={Logo}
              alt="EnriqueCC_Logo"
              rel="noreferrer"
              className="navbar-brand"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item menuTop-item">
                <a className="nav-link active" href="/" rel="noreferrer">
                  Home
                </a>
              </li>
              <li className="nav-item menuTop-item">
                <a className="nav-link active" href="/contact" rel="noreferrer">
                  Contact
                </a>
              </li>
              <li className="nav-item menuTop-item">
                <a
                  className="nav-link active"
                  href="/certificates"
                  rel="noreferrer"
                >
                  Certificates
                </a>
              </li>
            </ul>
            <SocialNetworks />
          </div>
        </nav>
      </div>
    </div>
  );
}
