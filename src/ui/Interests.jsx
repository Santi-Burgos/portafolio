import { interestData } from '../data/interests';

const Interests = () => {
  return (
    <div className="interests-container">
      <h3 className="interest-title">INTERESES</h3>
      <div className="interests-grid">
        {interestData.map((item, index) => (
          <div key={index} className="interest-item">
            <span className="interest-icon" aria-hidden="true">{item.icon}</span>
            <span className="interest-text">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
