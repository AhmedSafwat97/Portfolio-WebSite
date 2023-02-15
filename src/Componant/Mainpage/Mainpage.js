import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Mainpage() {
  return (
    <>
      <div>
        <div className="Container">
          <div className="Title">
            <h4 className="title">Home</h4>
            <div className="line-tt"></div>
          </div>
          <div className="info">
            <div className="Card">
              <div className="p-img">
                <img src="https://mui.com/static/images/avatar/2.jpg" alt="" />
              </div>
              <h4>Hello, my name is</h4>
              <h1>Lorem ipsum</h1>
              <h3>Front-End developer</h3>
              <button className="btn btn-success">Download Cv</button>
              <div className="circle1">
                <div className="c"></div>
                <div className="c"></div>
                <div className="c"></div>
                <div className="c"></div>
                <div className="c"></div>
              </div>

              <div className="archs">
                <div className="arch"></div>
                <div className="arch"></div>
                <div className="arch"></div>
                <div className="arch"></div>
                <div className="arch"></div>
              </div>
            </div>

            <div className="about">
              <div className="circle2">
                <div className="c"></div>
                <div className="c"></div>
                <div className="c"></div>
                <div className="c"></div>
                <div className="c"></div>
              </div>
              <div className="Text">
                <h4>About Me</h4>
                <p>
                  {" "}
                  LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit,{" "}
                </p>
                  <p>
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim{" "}
                  </p>
                  <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ______________________ */}
        <div className="allservmop">
          <h2 className="title">Home</h2>
          <div className="line-tt"></div>
          <div className="info-m">
            <Carousel>
              <Carousel.Item className="card-mop">
                <div className="Card-mop">
                  <div className="p-img">
                    <img
                      src="https://mui.com/static/images/avatar/2.jpg"
                      alt=""
                    />
                  </div>
                  <h4>Hello, my name is</h4>
                  <h1>
                    Lorem ipsum
                  </h1>
                  <h3>
                   Front-End developer
                  </h3>

                  <button className="btn btn-success">
                      Download Cv
                  </button>
                </div>
              </Carousel.Item>
              <Carousel.Item className="card-mop">
                <div className="about-mop">
                  <div className="Text-mop">
                    <h4>About Me</h4>
                    <p>
                  LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit,{" "}
                </p>
                  <p>
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim{" "}
                  </p>
                  <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainpage;
