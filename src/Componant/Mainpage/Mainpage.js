import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

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
                <img src="./img/photo.jpg" alt="" />
              </div>
              <h4>Hello, my name is</h4>
              <h1>
                Ahmed <span>Safwat Abbas</span>
              </h1>
              <h3>
                <span> | Front-End </span> developer |<h3>| Logo Designer |</h3>
              </h3>
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
                <p>I'm a front-end web developer | React.js</p>
                <p>i can provied clean and pixel perfect code Design ,</p>
                <p>makes your website more attractive using Web animation</p>
                <p>and responsive design creation that makes your website</p>
                <p>accessible to all users no matter what device they are.</p>
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
                    <img src="./img/photo.jpg" alt="" />
                  </div>
                  <h4>Hello, my name is</h4>
                  <h1>
                    Ahmed <span>Safwat Abbas</span>
                  </h1>
                  <h3>
                    <span> | Front-End </span> developer |
                    <h3>| Logo Designer |</h3>
                  </h3>
                  <button className="btn btn-success">Download Cv</button>
                </div>
              </Carousel.Item>
              <Carousel.Item className="card-mop">
                <div className="about-mop">
                  <div className="Text-mop">
                    <h4>About Me</h4>
                    <p>I'm a front-end web developer | React.js</p>
                    <p>i can provied clean and pixel perfect code Design ,</p>
                    <p>
                      makes your website more attractive using Web animation
                    </p>
                    <p>
                      and responsive design creation that makes your website
                    </p>
                    <p>
                      accessible to all users no matter what device they are.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mainpage
