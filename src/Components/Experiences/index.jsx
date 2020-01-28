import React from "react";

export default function index() {
  return (
    <section className="mh-experince" id="mh-experience">
      <div className="bolor-overlay">
        <div className="container">
          <div className="row section-separator">
            <div className="col-sm-12 col-md-6">
              <div className="mh-education">
                <h3
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.2s"
                >
                  Education
                </h3>
                <div className="mh-education-deatils">
                  {/* Education Institutes*/}
                  <div
                    className="mh-education-item dark-bg wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.3s"
                  >
                    <h4>
                      Bachelors of Computer Science From
                      <a href="http://www.uok.edu.pk/">University of Karachi</a>
                    </h4>
                    <div className="mh-eduyear">2016-2019</div>
                    <p>
                      I completed my Bachelors of Computer Science from UoK,
                      with an honorable CGPA and respectable reputation. I
                      learned valuable courses and gained insightful knowledge
                      during this span which really helped me enhance my
                      abilities and expand my mindset to set goals at higher
                      horizons.
                    </p>
                  </div>
                  {/* Education Institutes*/}
                  <div
                    className="mh-education-item dark-bg wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.5s"
                  >
                    <h4>
                      O &amp; A Levels From
                      <a href="https://www.beaconhouse.net/">
                        Beaconhouse School System
                      </a>
                    </h4>
                    <div className="mh-eduyear">2010-2015</div>
                    <p>
                      Beaconhouse is one of the most reputable schools in
                      Pakistan and has its network expanded internationally, so
                      my learning experience during this highly-accredited
                      degree of education was a really pleasing one.
                    </p>
                  </div>
                  {/* Education Institutes*/}
                  {/* <div
                    className="mh-education-item dark-bg wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.6s"
                  >
                    <h4>
                      Art &amp; Multimedia From <a href>Oxford University</a>
                    </h4>
                    <div className="mh-eduyear">2005-2008</div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using L orem Ipsum{" "}
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="mh-work">
                <h3>Work Experience</h3>
                <div className="mh-experience-deatils">
                  {/* Education Institutes*/}
                  <div
                    className="mh-work-item dark-bg wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.4s"
                  >
                    <h4>
                      Web App Developer at{" "}
                      <a href="https://www.salsoft.net/">
                        Salsoft Technologies
                      </a>
                    </h4>
                    <div className="mh-eduyear">July 2019 - Current</div>
                    <span>Responsibilities :</span>
                    <ul className="work-responsibility">
                      <li>
                        <i className="fa fa-circle" />
                        Implement front end Logic to designs.
                      </li>
                      <li>
                        <i className="fa fa-circle" />
                        Validate and enhance user experience.
                      </li>
                      <li>
                        <i className="fa fa-circle" />
                        Implement and tweak back end as per the need.
                      </li>
                      <li>
                        <i className="fa fa-circle" />
                        Research and develop new features to enhance and upgrade
                        existing systems as well as innovate new features.
                      </li>
                    </ul>
                  </div>
                  {/* Education Institutes*/}
                  <div
                    className="mh-work-item dark-bg wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.7s"
                  >
                    <h4>
                      Frontend Developer at{" "}
                      <a href="https://xord.one/">Xord.One</a>
                    </h4>
                    <div className="mh-eduyear">Feb 2019 - Jun 2019</div>
                    <span>Responsibility :</span>
                    <ul className="work-responsibility">
                      <li>
                        <i className="fa fa-circle" />
                        Implement front end Logic to designs.
                      </li>
                      <li>
                        <i className="fa fa-circle" />
                        Validate and enhance user experience.
                      </li>
                      <li>
                        <i className="fa fa-circle" />
                        Used and implemented latest libraries and dashboards
                        like Ant Design Pro.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
