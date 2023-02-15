import React from 'react'
import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';


function Projects() {
  const [width, setwidth] = useState(0)
  const [project, setproject] = useState([]);
  const sliderref = useRef()

useEffect(() => {
  axios.get("project.json").then( res => {
    setproject(res.data.project)
    console.log(res.data.project)
  })
}, []);



  useEffect(() => {
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
              dragConstraints={{ right: 0, left: -1200 }}
              className="Inner-Slider"
              style={{display:"flex"}}
            >
              {
                project.map((project , index) => {
                  return <motion.div key={index} className="Cards">
                  <div  className="s-Card">
                  <h2>{project.Title}</h2>
                  <div className="pro">
                  <Carousel slide={false} style={{height:"100%"}}>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={project.image1}
                              alt="First slide"
                              style={{height:"305px"}}
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={project.image2}
                              alt="Second slide"
                              style={{height:"300px"}}
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={project.image3}
                              alt="Third slide"
                              style={{height:"300px"}}
                            />
                          </Carousel.Item>
                        </Carousel>
                      <div className='Detail'>
                      <p>{project.description}</p>
                      </div>
                    </div>
                    <button className="btn btn-success"><a className="view" href={project.Link} target="_blank">View Project</a> </button>
                  </div>
              </motion.div>
                })
                  }
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
              dragConstraints={{ right: 0, left: -1550 }}
              className="Inner-Slider"
              style={{display :"flex"}}
            >
              {
                project.map((project , index) => {
                  return <motion.div key={index}  className="Cards">
                  <div className="cards">
                      <div className="s-Card">
                        <h2>{project.Title}</h2>
                        <div className="pro">
                        <Carousel slide={false} style={{height:"100%"}}>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={project.image1}
                              alt="First slide"
                              style={{height:"305px"}}
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={project.image2}
                              alt="Second slide"
                              style={{height:"300px"}}
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={project.image3}
                              alt="Third slide"
                              style={{height:"300px"}}
                            />
                          </Carousel.Item>
                        </Carousel>
                      <div className='Detail'>
                      <p>{project.description}</p>
                      </div>
                    </div>
                        <button className="btn btn-success"><a className="view" href={project.Link} target="_blank">View Project</a></button>
                      </div>
                    </div>
                  </motion.div>
                })
              }
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Projects