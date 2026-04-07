import { FaServer, FaChartLine, FaCubes, FaCode } from 'react-icons/fa6';

const Interests = () => {
  const interestData = [
    { icon: <FaServer />, text: "Diseño y desarrollo de APIs escalables y mantenibles." },
    { icon: <FaChartLine />, text: "Optimización de performance en aplicaciones backend." },
    { icon: <FaCubes />, text: "Arquitecturas desacopladas y sistemas en tiempo real." },
    { icon: <FaCode />, text: "Buenas prácticas de código y modularización." }
  ];

  return (
    <div className="interests-container">
      <h3 className="gradient-text">INTERESES</h3>
      <div className="interests-grid">
        {interestData.map((item, index) => (
          <div key={index} className="interest-item">
            <span className="interest-icon">{item.icon}</span>
            <span className="interest-text">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
