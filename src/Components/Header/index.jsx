import React from "react";

export default function index() {
  return (
    <header
      className="black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav wow fadeInUp"
      id="mh-header"
    >
      <div className="overlay" />
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg mh-nav nav-btn">
            <a className="navbar-brand" href="#">
              <img src="assets/images/fedalon_logo.png" className="img-fluid" />
              {/* <h2>Maha</h2> */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-0 ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#mh-home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mh-about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mh-skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mh-experience">
                    Experiences
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mh-portfolio">
                    Portfolio
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#mh-pricing">
                    Pricing
                  </a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="#mh-blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#mh-contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
