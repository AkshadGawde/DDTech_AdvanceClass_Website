import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Courses we offer</h2>
          <p>Discover Our Diverse Course Offerings</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-6">
                  <i className="fa fa-fonticons">{d.icon}</i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <ul>
                      {d.text.split(",").map((subject, index) => (
                        <li key={index}>{subject.trim()}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
