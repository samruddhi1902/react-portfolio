import "./portfolio.css";

import IMG1 from "../../assets/PMS.jpeg";
import IMG2 from "../../assets/MovieR.png";
import IMG3 from "../../assets/Paper-Lingo.png";
import IMG4 from "../../assets/RPG.png";
import IMG5 from "../../assets/Quiz.png";
import IMG6 from "../../assets/Pharma.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
        id: 1,
        title: "PaperLingo",
        img: IMG3,
        description:
         "A gamified Paper Trading website where you can trade with zero risk and learn more about finance.",
        technologies: "React | NodeJS | MongoDb |Express",
        link: "https://github.com/priyankag12/mern-project",
    },
    {
      id: 2,
      title: "Movie Recommendation System",
      img: IMG2,
      description:
        "A movie recommendation system based on three types of filtering: Collaborative, Content-Based, and Popularity-based.",
      technologies: "Python | Flask | NLP",
      link: "https://github.com/samruddhi1902/movie-recommendation-system",
    },
    {
        id: 3,
        title: "Pharmacy Management System",
        img: IMG1,
        description:
        "An app with CRUD operations for managing inventory, billing, etc. emphasizing efficient data management through OOP principles.",
        technologies: "Java Swing | MySQL ",
        link: "https://github.com/samruddhi1902/Pharmacy_Management_System",
    },
    {
      id: 4,
      title: "Game Inventory",
      img: IMG4,
      description:
        "A text-based RPGgame,featuring dynamic combat mechanics and strategic item allowing players to enhance health,attack,and defense.",
      technologies: "C++",
      link: "github.com/samruddhi1902/GAME-INVENTORY",
    },
    {
      id: 5,
      title: "Quiz Website",
      img: IMG5,
      description:
        "Through the PotSave.com platform, PotSave offers in-person product assessment and ordering services, accessible via the website, mobile applications, and software.",
      technologies: "HTML| CSS | JavaScript",
      link: "github.com/samruddhi1902/Quiz-Website",
    },
    {
        id: 6,
        title: "PharmaTrust",
        img: IMG6,
        description:
          "A secured supply chain management website that uses AI and Data Science for stock prediction and dynamically updated through cloud.",
        technologies: "Java | AWS Cloud | PowerBI",
        link: "https://github.com/samruddhi1902/SIH_2024",
      },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Link
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
