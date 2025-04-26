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
            <span>
              <BsFillTelephoneFill className="telephoneIcon" />
            </span>
            +40767107307
          </li>
          <li>
            <span>
              <MdEmail className="emailIcon" />
              <a href="mailto:andreeadan0302@gmail.com">
                andreeadan0302@gmail.com
              </a>
            </span>
          </li>
          <li>
            <span>
              <FaLocationPin className="pinIcon" />
            </span>
            Romania, Timisoara, str Nicolae Iliesu nr 13, 300730
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
