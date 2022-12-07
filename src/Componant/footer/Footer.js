import React from "react";
import { AiOutlineCopyrightCircle } from "@react-icons/all-files/ai/AiOutlineCopyrightCircle";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaBehance } from "@react-icons/all-files/fa/FaBehance";

function Footer() {
  return (
    <div className="TheFooter">
      <div className="Social">
        <a href="http://www.facebook.com">
          <FaFacebookF style={{ color: "white" }} />
        </a>
        <a href="http://twiter.com">
          <FaTwitter style={{ color: "white" }} />
        </a>
        <a href="http://www.instagram.com">
          <FaInstagram style={{ color: "white" }} />
        </a>
        <a href="http://www.instagram.com">
          <FaBehance style={{ color: "white" }} />
        </a>
      </div>
      <div className="Footer">
        <h4>
          Copy Right 2022
          <AiOutlineCopyrightCircle />
          By Ahmed Safwat All Right Reserved
        </h4>
      </div>
    </div>
  );
}

export default Footer;
