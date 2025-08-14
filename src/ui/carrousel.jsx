import cssIcon from "../assets/icons/css.svg";
import Expressjs from "../assets/icons/Express.js_dark.svg";
import git from "../assets/icons/git.svg";
import GitHub from "../assets/icons/GitHub_dark.svg";
import mysql from "../assets/icons/mysql.svg";
import nodejs from "../assets/icons/nodejs.svg";
import postgresql from "../assets/icons/postgresql.svg";
import reactIcon from "../assets/icons/React_dark.svg";
import javaScript from "../assets/icons/javascript.svg";

const images = [
    {src: javaScript, name: "JavaScript"},
    { src: nodejs, name: "Node.js" },
    { src: Expressjs, name: "Express.js" },
    { src: reactIcon, name: "React" },
    { src: mysql, name: "MySQL" },
    { src: postgresql, name: "PostgreSQL" },
    { src: cssIcon, name: "CSS" },
    { src: git, name: "Git" },
    { src: GitHub, name: "GitHub" },
];

export default function Carousel() {
  return (
    <div className="tech-carousel">
      <div className="carousel-track">
        {[...images, ...images].map((item, i) => (
          <div className="carousel-item" key={i}>
            <img src={item.src} alt={item.name} title={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}