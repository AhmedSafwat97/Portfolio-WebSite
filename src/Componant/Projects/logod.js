import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

function Logo() {
  const [width, setwidth] = useState(0)
  // to catch the element like java script quaryselector
  const sliderref = useRef()

  useEffect(() => {
    // to get the slider width
    // console.log(sliderref.current.scrollWidth);
    // console.log(sliderref.current.offsetWidth);
    setwidth(sliderref.current.scrollWidth - sliderref.current.offSetWidth)
  }, [])
  return (
    <div>
      <div className="allpro">
        <div>
          <div>
            <h4 className="title">Logo</h4>
            <div className="line-t"></div>
          </div>
          <motion.div
            ref={sliderref}
            className="Slider"
            whileTap={{ cursor: 'grabbing' }}
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -1500 }}
              className="Inner-Slider"
            >
              <motion.div className="Cards">
                <div className="cards">
                  <div className="s-Card">
                    <h2>Eight Limbs</h2>
                    <div className="line"></div>
                    <img className="pro" src="./img/logo/1.jpg" alt="" />
                    <div className="details">
                      <p>Eight Limbs Logo design</p>
                    </div>
                    <a
                      href="https://www.behance.net/gallery/118617527/Eight-Limbs-Yoga-Institute"
                      _blank
                    >
                      <button className="btn btn-success">View More</button>
                    </a>
                  </div>
                </div>
                <div className="cards">
                  <div className="s-Card">
                    <h2>Queen Burger</h2>
                    <div className="line"></div>
                    <img className="pro" src="./img/logo/2.jpg" alt="" />
                    <div className="details">
                      <p>Queen Burger Logo design </p>
                    </div>
                    <a href="https://www.behance.net/gallery/144740007/Queen-Burger-logo?tracking_source=project_owner_other_projects">
                      {' '}
                      <button className="btn btn-success">View More</button>
                    </a>{' '}
                  </div>
                </div>
                <div className="cards">
                  <div className="s-Card">
                    <h2>lucky duck</h2>
                    <div className="line"></div>
                    <img className="pro" src="./img/logo/3.jpg" alt="" />
                    <div className="details">
                      <p>lucky duck Logo design</p>
                    </div>
                    <a href="https://www.behance.net/gallery/138782969/lucky-duck">
                      {' '}
                      <button className="btn btn-success">View More</button>
                    </a>{' '}
                  </div>
                </div>
                <div className="cards">
                  <div className="s-Card">
                    <h2>El Zahraa Lab</h2>
                    <div className="line"></div>
                    <img className="pro" src="./img/logo/4.jpg" alt="" />
                    <div className="details">
                      <p>El Zahraa Lab Logo design</p>
                    </div>
                    <a href="https://www.behance.net/gallery/142679997/_?tracking_source=project_owner_other_projects">
                      <button className="btn btn-success">View More</button>
                    </a>{' '}
                  </div>
                </div>
                <div className="cards">
                  <div className="s-Card">
                    <h2>Abo saif </h2>
                    <div className="line"></div>
                    <img className="pro" src="./img/logo/5.jpg" alt="" />
                    <div className="details">
                      <p>Abo saif Logo design</p>
                    </div>
                    <a href="https://www.behance.net/gallery/147146461/_?tracking_source=project_owner_other_projects">
                      {' '}
                      <button className="btn btn-success">View More</button>
                    </a>
                  </div>
                </div>
                <div className="cards">
                  <div className="s-Card">
                    <h2>Urology</h2>
                    <div className="line"></div>
                    <img className="pro" src="./img/logo/6.jpg" alt="" />
                    <div className="details">
                      <p>Urology Logo design</p>
                    </div>
                    <a href="https://www.behance.net/gallery/118621327/GM-Urology">
                      <button className="btn btn-success">View More</button>
                    </a>{' '}
                  </div>
                </div>{' '}
                <div className="cards">
                  <div className="s-Card">
                    <h2>Vally Dental</h2>
                    <div className="line"></div>
                    <img className="pro" src="./img/logo/7.jpg" alt="" />
                    <div className="details">
                      <p>Vally Logo design</p>
                    </div>
                    <a href="https://www.behance.net/gallery/144837917/Vally-Dental-Logo?tracking_source=project_owner_other_projects">
                      {' '}
                      <button className="btn btn-success">View More</button>
                    </a>{' '}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* __________________ */}
      <div className="allservmop">
        <h2 className="title">Logo</h2>
        <div className="line-tt"></div>
        <div className="c-slider">
          <motion.div
            ref={sliderref}
            className="Slider"
            whileTap={{ cursor: 'grabbing' }}
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -2000 }}
              className="Inner-Slider"
            >
              <motion.div className="Cards">
                <div className="cards">
                  <div className="s-Card">
                    <h2>Eight Limbs </h2>
                    <div className="line"></div>
                    <img className="pro" src="./img/logo/1.jpg" alt="" />
                    <div className="details">
                      <p>Eight Limbs Logo design</p>
                    </div>
                    <a
                      href="https://www.behance.net/gallery/118617527/Eight-Limbs-Yoga-Institute"
                      _blank
                    >
                      <button className="btn btn-success">View More</button>
                    </a>
                  </div>
                </div>
                <div className="cards">
                  <div className="s-Card">
                    <h2>Queen Burger</h2>
                    <div className="line"></div>
                    <img className="pro" src="./img/logo/2.jpg" alt="" />
                    <div className="details">
                      <p>Queen Burger Logo design</p>
                    </div>
                    <a href="https://www.behance.net/gallery/144740007/Queen-Burger-logo?tracking_source=project_owner_other_projects">
                      {' '}
                      <button className="btn btn-success">View More</button>
                    </a>{' '}
                  </div>
                </div>
                <div className="cards">
                  <div className="s-Card">
                    <h2>lucky duck</h2>
                    <div className="line"></div>
                    <img className="pro" src="./img/logo/3.jpg" alt="" />
                    <div className="details">
                      <p>lucky duck Logo design</p>
                    </div>
                    <a href="https://www.behance.net/gallery/138782969/lucky-duck">
                      {' '}
                      <button className="btn btn-success">View More</button>
                    </a>{' '}
                  </div>
                </div>
                <div className="cards">
                  <div className="s-Card">
                    <h2>El Zahraa Lab </h2>
                    <div className="line"></div>
                    <img className="pro" src="./img/logo/4.jpg" alt="" />
                    <div className="details">
                      <p>El zahraa Lab</p>
                    </div>
                    <a href="https://www.behance.net/gallery/142679997/_?tracking_source=project_owner_other_projects">
                      <button className="btn btn-success">View More</button>
                    </a>{' '}
                  </div>
                </div>
                <div className="cards">
                  <div className="s-Card">
                    <h2>Abo saif</h2>
                    <div className="line"></div>
                    <img className="pro" src="./img/logo/5.jpg" alt="" />
                    <div className="details">
                      <p>Abo saif Logo design</p>
                    </div>
                    <a href="https://www.behance.net/gallery/147146461/_?tracking_source=project_owner_other_projects">
                      {' '}
                      <button className="btn btn-success">View More</button>
                    </a>
                  </div>
                </div>
                <div className="cards">
                  <div className="s-Card">
                    <h2>Urology</h2>
                    <div className="line"></div>
                    <img className="pro" src="./img/logo/6.jpg" alt="" />
                    <div className="details">
                      <p>Urology Logo design</p>
                    </div>
                    <a href="https://www.behance.net/gallery/118621327/GM-Urology">
                      <button className="btn btn-success">View More</button>
                    </a>{' '}
                  </div>
                </div>{' '}
                <div className="cards">
                  <div className="s-Card">
                    <h2>Vally Dental</h2>
                    <div className="line"></div>
                    <img className="pro" src="./img/logo/7.jpg" alt="" />
                    <div className="details">
                      <p>Logo design Logo design</p>
                    </div>
                    <a href="https://www.behance.net/gallery/144837917/Vally-Dental-Logo?tracking_source=project_owner_other_projects">
                      {' '}
                      <button className="btn btn-success">View More</button>
                    </a>{' '}
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

export default Logo
