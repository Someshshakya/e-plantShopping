import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../store/CartSlice';
import CartItem from './CartItem';
import './CartPage.css';

function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const total = useSelector(selectCartTotal);

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  return (
    <div className="cart-page">
      <h2 className="cart-total-heading">Total Cart Amount: ${total}</h2>

      {items.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items-list">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}

      <div className="cart-actions">
        <Link to="/plants" className="action-btn continue-btn">
          Continue Shopping
        </Link>
        <button className="action-btn checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
