import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import Navbar from './components/Navbar';
import './App.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/plants');
  };

  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <div className="hero-section">
            <h1>Welcome to Paradise Nursery</h1>
            <div className="hero-divider"></div>
            <p className="hero-subtitle">Where Green Meets Serenity</p>
            <button className="get-started-btn" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
          <AboutUs />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/plants"
          element={
            <>
              <Navbar />
              <ProductList />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <CartItem />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
