import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    ```
{/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }

emailjs
  .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
  .then(
    (result) => {
      console.log(result.text);
      clearState();
    },
    (error) => {
      console.log(error.text);
    }
  );

```;
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>Press the button to open a whatsapp chat with us.</p>
              </div>
              <div className="btn-container">
                <a
                  href="https://wa.me/917208549842"
                  className="btn btn-custom btn-lg"
                >
                  Contact us!
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <span>
                <i className="fa fa-map-marker"></i> Address
              </span>{" "}
              <a href="https://g.co/kgs/Ya49vZC">
                {" "}
                <span> {props.data ? props.data.address : "loading"}</span>
              </a>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <span>
                <i className="fa fa-envelope-o"></i> Email
              </span>{" "}
              <a href="mailto:advanceclasses01@gmail.com">
                <span>{props.data ? props.data.email : "loading"}</span>
              </a>
            </div>
          </div>
          {/* <div className="col-md-12">
<div className="row">
<div className="social">
<ul>
<li>
<a href={props.data ? props.data.facebook : "/"}>
<i className="fa fa-facebook"></i>
</a>
</li>
<li>
<a href={props.data ? props.data.twitter : "/"}>
<i className="fa fa-twitter"></i>
</a>
</li>
<li>
<a href={props.data ? props.data.youtube : "/"}>
<i className="fa fa-youtube"></i>
</a>
</li>
</ul>
</div>
</div>
</div> */}
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p className="mt-8 text-xl text-center">
            © 2024{" "}
            <a
              href="https://www.thedd.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TheDDtech
            </a>{" "}
            - All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};
