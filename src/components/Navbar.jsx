import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../store/CartSlice';
import './Navbar.css';

function Navbar() {
  const cartCount = useSelector(selectCartCount);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/plants" className="brand-link">
          <span className="brand-icon">🌱</span>
          <div>
            <span className="brand-name">Paradise Nursery</span>
            <span className="brand-tagline">Where Green Meets Serenity</span>
          </div>
        </Link>
      </div>

      <div className="navbar-center">
        <Link
          to="/plants"
          className={`nav-link ${location.pathname === '/plants' ? 'active' : ''}`}
        >
          Plants
        </Link>
      </div>

      <div className="navbar-right">
        <Link to="/" className="nav-link home-link">
          Home
        </Link>
        <Link to="/cart" className="cart-link">
          <span className="cart-icon">🛒</span>
          <span className="cart-badge">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
