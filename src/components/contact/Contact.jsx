import "./contact.css";

import React from "react";
import { MdOutlineEmail, MdLocationCity, MdPhoneAndroid } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-children">
              <MdOutlineEmail className="contact__option-icon" />
              <MdPhoneAndroid className="contact__option-icon" />
              <MdLocationCity className="contact__option-icon" />
            </div>
            <div className="contact__option-children">
              <h5>samruddhi.borhade13@gmail.com</h5>
              <h5>+91 9723594149</h5>
              <h5>Pune, Maharashtra</h5>
            </div>
          </article>
        </div>

        {/* Social Icons - moved above contact info */}
        <div className="contact__socials">
          <a
            href="https://www.linkedin.com/in/samruddhi-borhade-4191a0283/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/samruddhi1902"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
