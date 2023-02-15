import React from 'react'
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaBehance } from '@react-icons/all-files/fa/FaBehance'
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail'
import { MdCall } from '@react-icons/all-files/md/MdCall'
import { SiMinutemailer } from '@react-icons/all-files/si/SiMinutemailer'

function Contact() {
  return (
    <div>
      <div className="All-Contact">
        <h4 className="title">Contact</h4>
        <div className="line-tt"></div>
        <div className="Contact-card">
          <div className="contact-row">
            <h3>
              <AiOutlineMail /> Email :
            </h3>
            <h3>Lorem ipsum@gmail.com</h3>
          </div>
          <div className="contact-row">
            <div className="line-c"></div>
            <h3>
              <MdCall />
              Phone Number :
            </h3>
            <h3>+201000000222</h3>
          </div>
          <div className="contact-row">
            <div className="line-c"></div>
            <h3>
              <SiMinutemailer /> Social Media :{' '}
            </h3>
            <div className="Socialm">
              <a>
                <FaFacebookF style={{ color: 'white' }} />
              </a>
              <a>
                <FaTwitter style={{ color: 'white' }} />
              </a>
              <a>
                <FaInstagram style={{ color: 'white' }} />
              </a>
              <a>
                <FaBehance style={{ color: 'white' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
