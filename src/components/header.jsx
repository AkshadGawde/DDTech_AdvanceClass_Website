import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="https://wa.me/917208549842"
                  className="btn btn-custom btn-lg"
                >
                  Ask your Query !
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
