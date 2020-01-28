import React from "react";

export default function index() {
  return (
    <section className="mh-about" id="mh-about">
      <div className="container">
        <div className="row section-separator">
          <div className="col-sm-12 col-md-6">
            <div
              className="mh-about-img shadow-2 wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.4s"
            >
              <img src="assets/images/ab-img.png" alt className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="mh-about-inner">
              <h2
                className="wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.1s"
              >
                About Me
              </h2>
              <p
                className="wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s"
              >
                Hello, I’m a MERN Stack, web-developer based in Karachi. I have
                rich experience in web site logic development &amp; animations
                as well as backend handling. Also I am good at
              </p>
              <div
                className="mh-about-tag wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.3s"
              >
                <ul>
                  <li>
                    <span>React</span>
                  </li>
                  <li>
                    <span>Node</span>
                  </li>
                  <li>
                    <span>Express</span>
                  </li>
                  <li>
                    <span>JavaScript</span>
                  </li>
                  <li>
                    <span>C#</span>
                  </li>
                  <li>
                    <span>HTML</span>
                  </li>
                  <li>
                    <span>CSS</span>
                  </li>
                </ul>
              </div>
              <a
                href="assets/resume/SyedAnsurMehdiResume.pdf"
                download="SyedAnsurMehdiResume"
                className="btn btn-fill wow fadeInUp"
                style={{ backgroundColor: "royalblue" }}
                data-wow-duration="0.8s"
                data-wow-delay="0.4s"
              >
                Download CV
                <i className="fa fa-download" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
