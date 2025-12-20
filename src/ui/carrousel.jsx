import cssIcon from "../assets/icons/css.svg";
import Expressjs from "../assets/icons/Express.js_dark.svg";
import git from "../assets/icons/git.svg";
import mysql from "../assets/icons/mysql.svg";
import nodejs from "../assets/icons/nodejs.svg";
import postgresql from "../assets/icons/postgresql.svg";
import reactIcon from "../assets/icons/React_dark.svg";
import javaScript from "../assets/icons/javascript.svg";

const images = [
  { src: nodejs, name: "Node.js" },
    {src: javaScript, name: "JavaScript"},
    { src: Expressjs, name: "Express.js" },
    { src: mysql, name: "MySQL" },
    { src: postgresql, name: "PostgreSQL" },
    { src: reactIcon, name: "React" },
    { src: cssIcon, name: "CSS" },
    { src: git, name: "Git" },
];

export default function Carousel() {
  const items = [...images, ...images];

  return (
    <div className="tech-carousel">
      <div className="carousel-track">
        {items.map((item, i) => (
          <div className="carousel-item" key={i}>
            <img src={item.src} alt={item.name} title={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}