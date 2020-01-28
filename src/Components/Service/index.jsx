import React from "react";

export default function index() {
  return (
    <section className="mh-service">
      <div className="container">
        <div className="row section-separator">
          <div
            className="col-sm-12 text-center section-title wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.2s"
          >
            <h3>What I do</h3>
          </div>
          <div className="col-sm-6">
            <div
              className="mh-service-item shadow-1 dark-bg wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.5s"
            >
              <i className="fa fa-code iron-color" />
              <h3>Frontend Development</h3>
              <p>
                I am proficient in bringing static html and css pages to life by
                injecting functionality to them, making sure the pages remain
                super fast and engaging for the user. I use Reactjs as my daily
                driver for this task, using latest JavaScript and React
                features.
              </p>
            </div>
          </div>
          {/* <div className="col-sm-4">
            <div
              className="mh-service-item shadow-1 dark-bg wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.3s"
            >
              <i className="fa fa-bullseye purple-color" />
              <h3>UI Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </div>
          </div> */}
          <div className="col-sm-6">
            <div
              className="mh-service-item shadow-1 dark-bg wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.7s"
            >
              <i className="fa fa-object-ungroup sky-color" />
              <h3>Backend Development</h3>
              <p>
                I am proficient in developing REST APIs as well as full blown
                backend servers as per the need. I have used MySQL as well as
                MongoDB for the database purposes. I am well aware of
                authentication strategies such as Passport/JWT, using express or
                Nodejs frameworks such as Adonisjs as my tool of art.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
