import React from 'react'
import { ImHtmlFive } from '@react-icons/all-files/im/ImHtmlFive'
import { SiCss3 } from '@react-icons/all-files/si/SiCss3'
import { BsFillBootstrapFill } from '@react-icons/all-files/bs/BsFillBootstrapFill'
import { IoLogoJavascript } from '@react-icons/all-files/io/IoLogoJavascript'
import { RiReactjsLine } from '@react-icons/all-files/ri/RiReactjsLine'
import { SiAdobephotoshop } from '@react-icons/all-files/si/SiAdobephotoshop'
import { SiAdobeillustrator } from '@react-icons/all-files/si/SiAdobeillustrator'

function Skills() {
  return (
    <div>
      <div className="All-skill">
        <h2 className="title">Skills</h2>
        <div className="line-tt"></div>
        <div className="skill-card">
          <div>
            <div className="skill">
              <ImHtmlFive />
              <h2 className="mx-3">Html 5</h2>
            </div>
            <div className="skill">
              <SiCss3 />
              <h2 className="mx-3">Css 3</h2>
            </div>
            <div className="skill">
              <BsFillBootstrapFill />
              <h2 className="mx-3">Bootstrap</h2>
            </div>
            <div className="skill">
              <IoLogoJavascript />
              <h2 className="mx-3">Java Script</h2>
            </div>
          </div>
          <div>
            <div className="skill">
              <RiReactjsLine />
              <h2 className="mx-3">React</h2>
            </div>
            <div className="skill">
              <SiAdobephotoshop />
              <h2 className="mx-3">Photoshop</h2>
            </div>
            <div className="skill">
              <SiAdobeillustrator />
              <h2 className="mx-3">Illustrator</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
