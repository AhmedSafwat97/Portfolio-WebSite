import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

function Projects() {
  const [width, setwidth] = useState(0)
  // to catch the element like java script quaryselector
  const sliderref = useRef()

  useEffect(() => {
    // to get the slider width
    // console.log(sliderref.current.scrollWidth);
    // console.log(sliderref.current.offsetWidth);
    setwidth(sliderref.current.scrollWidth - sliderref.current.offsetWidth)
  }, [])
  return (
    <div>
      <div className="allpro">
        <div>
          <div>
            <h4 className="title">Projects</h4>
            <div className="line-t"></div>
          </div>
          <motion.div
            ref={sliderref}
            className="Slider"
            whileTap={{ cursor: 'grabbing' }}
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -1000 }}
              className="Inner-Slider"
            >
              <motion.div className="Cards">
                <div className="cards">
                  <div className="s-Card">
                    <h2>Movies App</h2>
                    <div className="line"></div>
                    <img
                      className="pro"
                      src="./img/project/movie3.png"
                      alt=""
                    />
                    <div style={{ height: '60px' }} className="details">
                      <p>Movies app using react js</p>
                    </div>
                    <button className="btn btn-success">View More</button>
                  </div>
                </div>
                <div className="cards">
                  <div className="s-Card">
                    <h2>E-Commerce App</h2>
                    <div className="line"></div>
                    <img className="pro" src="./img/project//e3.png" alt="" />
                    <div className="details">
                      <p>E-commerce with Shopping Cart using react js </p>
                    </div>
                    <button className="btn btn-success">View More</button>
                  </div>
                </div>
                <div className="cards">
                  <div className="s-Card">
                    <h2>Dashboard</h2>
                    <div className="line"></div>
                    <img className="pro" src="./img/project/dash1.png" alt="" />
                    <div className="details">
                      <p>Dashboard project using Html , Css and JavaScript</p>
                    </div>
                    <button className="btn btn-success">View More</button>
                  </div>
                </div>
                <div className="cards">
                  <div className="s-Card">
                    <h2>To Do List</h2>
                    <div className="line"></div>
                    <img
                      className="pro"
                      src="./img/project/todolist.png"
                      alt=""
                    />
                    <div className="details">
                      <p>To Do List Project using Html, Css and JavaScript</p>
                    </div>
                    <button className="btn btn-success">View More</button>
                  </div>
                </div>
                <div className="cards">
                  <div className="s-Card">
                    <h2>X-O Game</h2>
                    <div className="line"></div>
                    <img
                      className="pro"
                      src="./img/project/xogame.png"
                      alt=""
                    />
                    <div className="details">
                      <p>X-o-Game Project using Html , Css and JavaScript</p>
                    </div>
                    <button className="btn btn-success">View More</button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* __________________ */}
      <div className="allservmop">
        <h2 className="title">Projects</h2>
        <div className="line-tt"></div>
        <div className="c-slider">
          <motion.div
            ref={sliderref}
            className="Slider"
            whileTap={{ cursor: 'grabbing' }}
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -1250 }}
              className="Inner-Slider"
            >
              <motion.div className="Cards">
                <div className="cards">
                  <div className="s-Card">
                    <h2>Movies App</h2>
                    <div className="line"></div>
                    <img
                      className="pro"
                      src="./img/project/movie3.png"
                      alt=""
                    />
                    <div className="details">
                      <p>Movies app using react js</p>
                    </div>
                    <button className="btn btn-success">View More</button>
                  </div>
                </div>
                <div className="cards">
                  <div className="s-Card">
                    <h2>E-Commerce App</h2>
                    <div className="line"></div>
                    <img className="pro" src="./img/project//e3.png" alt="" />
                    <div className="details">
                      <p>E-commerce with Shopping Cart using react js </p>
                    </div>
                    <button className="btn btn-success">View More</button>
                  </div>
                </div>
                <div className="cards">
                  <div className="s-Card">
                    <h2>Dashboard</h2>
                    <div className="line"></div>
                    <img className="pro" src="./img/project/dash1.png" alt="" />
                    <div className="details">
                      <p>Dashboard project using Html , Css and JavaScript</p>
                    </div>
                    <button className="btn btn-success">View More</button>
                  </div>
                </div>
                <div className="cards">
                  <div className="s-Card">
                    <h2>To Do List</h2>
                    <div className="line"></div>
                    <img
                      className="pro"
                      src="./img/project/todolist.png"
                      alt=""
                    />
                    <div className="details">
                      <p>To Do List Project using Html, Css and JavaScript</p>
                    </div>
                    <button className="btn btn-success">View More</button>
                  </div>
                </div>
                <div className="cards">
                  <div className="s-Card">
                    <h2>X-O Game</h2>
                    <div className="line"></div>
                    <img
                      className="pro"
                      src="./img/project/xogame.png"
                      alt=""
                    />
                    <div className="details">
                      <p>X-o-Game Project using Html , Css and JavaScript</p>
                    </div>
                    <button className="btn btn-success">View More</button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Projects
