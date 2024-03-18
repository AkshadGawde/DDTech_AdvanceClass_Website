import React from "react";

const Maps = () => {
  return (
    <section className="container" id="Maps" data-aos="fade-up">
      <h2 className="title text-center">Where are we at?</h2>
      <span className="service-name text-center">FIND US</span>
      <div className="map-container">
        <iframe
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.6736021270867!2d73.01445551075467!3d19.034099153212292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c327a2d42041%3A0xa3d2170890384b4!2sAdvance%20Classes!5e0!3m2!1sen!2sin!4v1710748003203!5m2!1sen!2sin"
          title="location-map"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Maps;
