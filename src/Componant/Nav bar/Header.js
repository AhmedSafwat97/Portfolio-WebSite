import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { AiFillHome } from '@react-icons/all-files/ai/AiFillHome'
import { GiSkills } from '@react-icons/all-files/gi/GiSkills'
import { BsCodeSlash } from '@react-icons/all-files/bs/BsCodeSlash'
import { FaProjectDiagram } from '@react-icons/all-files/fa/FaProjectDiagram'
import { BiPaint } from '@react-icons/all-files/bi/BiPaint'
import { MdCall } from '@react-icons/all-files/md/MdCall'

function Header() {
  return (
    <div className="Nav-c">
      <div className="Nav">
        <div className="icons">
          <NavLink to="/" className="l-h">
            <AiFillHome className="icon" />
          </NavLink>
          <NavLink to="/Skills" className="l-s">
            <GiSkills className="icon" />
          </NavLink>
          <NavLink to="/services" className="l-se">
            <BsCodeSlash className="icon" />
          </NavLink>
          <NavLink to="/projects" className="l-p">
            <FaProjectDiagram className="icon" />
          </NavLink>{' '}
          <NavLink to="/logo" className="l-p">
            <BiPaint className="icon" />
          </NavLink>
          <NavLink to="/Contact" className="l-c">
            <MdCall className="icon" />
          </NavLink>
        </div>
      </div>
      {/* ________________________________________ */}
      <div className="Nav-mop">
        <div className="icons-mop">
          <NavLink to="/" className="l-h">
            <AiFillHome className="icon" />
          </NavLink>
          <NavLink to="/Skills" className="l-s">
            <GiSkills className="icon" />
          </NavLink>
          <NavLink to="/services" className="l-se">
            <BsCodeSlash className="icon" />
          </NavLink>
          <NavLink to="/projects" className="l-p">
            <FaProjectDiagram className="icon" />
          </NavLink>{' '}
          <NavLink to="/logo" className="l-p">
            <BiPaint className="icon" />
          </NavLink>
          <NavLink to="/Contact" className="l-c">
            <MdCall className="icon" />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
