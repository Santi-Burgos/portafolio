function Experience({ experience, index }) {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`timeline-item ${isEven ? 'left' : 'right'}`}>
      <div className="timeline-dot">
        <img alt={experience.company} src={experience.img} />
      </div>
      
      <div className="timeline-content-card">
        <div className="experience-header">
          <h2>{experience.company}</h2>
          <p className="experience-role">{experience.role}</p>
          <div className="experience-period">{experience.period}</div>
        </div>
        
        <div className="experience-intro">{experience.intro}</div>
          
        <ul className="achievements-list">
          {experience.achievements.map((item, index) => (
            <li key={index} className="achievement-item">
              <span className="achievement-desc">{item.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Experience;