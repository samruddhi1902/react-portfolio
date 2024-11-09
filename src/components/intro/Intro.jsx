import "./intro.css";


import React from "react";

import img from "../../assets/Me.png";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
        <div className="about__cards">
            
          </div>
          <p>
           With a solid foundation in Computer Science and a keen interest in Data Science,
           building practical solutions, from crafting robust backend systems to creating 
           intuitive user interfaces. Beyond academics and projects, I am actively involved
           in student initiatives, driving membership growth and promoting international engagement
           at SIT, Pune. I pride myself on my adaptability, problem-solving skills, and ability to
           work collaboratively.
          </p>
          <a href="https://www.linkedin.com/in/samruddhi-borhade-4191a0283/" className="btn btn-primary">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
