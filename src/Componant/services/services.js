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
            <h2>Lorem ipsum</h2>
            <div className="line"></div>
            <div className="b">
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <Link to="/Contact">
              <button className="btn btn-success">Contact Now</button>
            </Link>
          </div>

          <div className="s-card">
            <h2>Lorem ipsum</h2>
            <div className="line"></div>
            <div className="b">
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <Link to="/Contact">
              <button className="btn btn-success">Contact Now</button>
            </Link>{' '}
          </div>

          <div className="s-card">
            <h2>Lorem ipsum</h2>
            <div className="line"></div>
            <div className="b">
              <div className="details">
              <p>Lorem ipsum dolor sit amet</p>                <AiOutlineCheck className="check" />

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
          <Carousel.Item className="s-Card" style={{padding:"50px 20px"}}>
          <h2>Lorem ipsum</h2>
            <div className="line"></div>
            <div className="b">
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Web Page Development</p>
              </div>
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <Link to="/Contact">
              <button className="btn btn-success">Contact Now</button>
            </Link>
          </Carousel.Item>
          <Carousel.Item className="s-Card" style={{padding:"50px 20px"}}>
            {' '}
            <h2>Lorem ipsum</h2>
            <div className="line"></div>
            <div className="b">
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <Link to="/Contact">
              <button className="btn btn-success">Contact Now</button>
            </Link>{' '}
          </Carousel.Item>
          <Carousel.Item className="s-Card" style={{padding:"50px 20px"}}>
          <h2>Lorem ipsum</h2>
            <div className="line"></div>
            <div className="b">
              <div className="details">
                <AiOutlineCheck className="check" />
                <p>Lorem ipsum dolor sit amet</p>
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
