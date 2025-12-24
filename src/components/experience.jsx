function CardExperience({ experience }) {
  return (
    <div className="experience-card">
      <div className="profile-company">
        <img alt={experience.company} src={experience.img} />
      </div>
      
      <div className="experience-body">
        <h2>{experience.company}</h2>
        <p className="experience-role">{experience.role}</p>
        <div className="experience-period">{experience.period}</div>
        
        <div className="experience-content">
          <div className="experience-intro">{experience.intro}</div>
          
          <ul className="achievements-list">
            {experience.achievements.map((item, index) => (
              <li key={index} className="achievement-item">
                <span className="achievement-title">{item.title}</span>
                <span className="achievement-desc">{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardExperience