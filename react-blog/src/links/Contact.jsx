import React from "react";
import "./Contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <div>
        <h1>Contact Us </h1>
        <p>
          Feel free to use this form or drop us an email. Old-fashion calls
          works too.
        </p>
      </div>
      <div className="listsWrapper">
        <ul className="contactUsInfo">
          <li>
            <BsFillTelephoneFill className="icon" /> +40789363772{" "}
          </li>
          <li>
            <MdEmail className="icon" />
            info@wblog.com
          </li>
          <li>
            <FaLocationPin className="icon" />
            Romania, Timisoara, str Nicolae Iliesu nr 13, 300730
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
