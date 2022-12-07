import React from 'react'
import { AiOutlineCheck } from '@react-icons/all-files/ai/AiOutlineCheck'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <div>
      <div className="allcard">
        <div className="Title">
          <h2>Services</h2>
          <div className="line-t"></div>
        </div>
        <div className="cards">
          <div className="s-card">
            <h2>Front-End</h2>
            <h2>Developer</h2>
            <div className="line"></div>
            <div className="b">
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Develop The User Interface</p>
              </div>
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Web Page Development</p>
              </div>
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Design Responsive pages </p>
              </div>
            </div>
            <Link to="/Contact">
              <button className="btn btn-success">Contact Now</button>
            </Link>
          </div>

          <div className="s-card">
            <h2>React</h2>
            <h2>Developer</h2>
            <div className="line"></div>
            <div className="b">
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Create a Single Page WebSite</p>
              </div>
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Work With External API</p>
              </div>
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Design Responsive pages </p>
              </div>
            </div>
            <Link to="/Contact">
              <button className="btn btn-success">Contact Now</button>
            </Link>{' '}
          </div>

          <div className="s-card">
            <h2>Logo</h2>
            <h2>Design</h2>
            <div className="line"></div>
            <div className="b">
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Design a Uniqe Logo for your brand </p>
              </div>
            </div>
            <Link to="/Contact">
              <button className="btn btn-success">Contact Now</button>
            </Link>{' '}
          </div>
        </div>
      </div>
      {/* __________________ */}
      <div className="allservmop">
        <h2 className="title">Services</h2>
        <div className="line-tt"></div>
        <Carousel>
          <Carousel.Item className="s-Card">
            <h2>Front-End Developer</h2>
            <div className="line"></div>
            <div className="b">
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Develop The User Interface</p>
              </div>
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Web Page Development</p>
              </div>
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Design Responsive pages </p>
              </div>
            </div>
            <Link to="/Contact">
              <button className="btn btn-success">Contact Now</button>
            </Link>
          </Carousel.Item>
          <Carousel.Item className="s-Card">
            {' '}
            <h2>React Developer</h2>
            <div className="line"></div>
            <div className="b">
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Create a Single Page WebSite</p>
              </div>
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Work With External API</p>
              </div>
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Design Responsive pages </p>
              </div>
            </div>
            <Link to="/Contact">
              <button className="btn btn-success">Contact Now</button>
            </Link>{' '}
          </Carousel.Item>
          <Carousel.Item className="s-Card">
            <h2>Logo Designs</h2>
            <div className="line"></div>
            <div className="b">
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Design a Uniqe Logo for your brand </p>
              </div>
            </div>
            <Link to="/Contact">
              <button className="btn btn-success">Contact Now</button>
            </Link>{' '}
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default Services
