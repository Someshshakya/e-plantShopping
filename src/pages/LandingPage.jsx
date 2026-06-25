import { Link } from 'react-router-dom';
import AboutUs from '../components/AboutUs';
import '../App.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <div className="hero-section">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="hero-divider"></div>
            <p className="hero-subtitle">Where Green Meets Serenity</p>
            <Link to="/plants" className="get-started-btn">
              Get Started
            </Link>
          </div>
          <AboutUs />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
