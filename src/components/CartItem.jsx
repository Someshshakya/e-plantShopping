import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateQuantity, removeItem } from '../store/CartSlice';
import './CartItem.css';

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const calculateItemTotal = (price, quantity) => price * quantity;

  const calculateTotalCartAmount = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleIncrement = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const handleDecrement = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: quantity - 1 }));
  };

  const handleQuantity = (id, newQuantity) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  return (
    <div className="cart-page">
      <h2 className="cart-total-heading">
        Total Cart Amount: ${calculateTotalCartAmount()}
      </h2>

      {items.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items-list">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">${item.price}</p>
                <p className="cart-item-total">
                  Total: ${calculateItemTotal(item.price, item.quantity)}
                </p>
              </div>
              <div className="cart-item-controls">
                <button
                  className="qty-btn"
                  onClick={() => handleDecrement(item.id, item.quantity)}
                >
                  -
                </button>
                <span className="qty-value">{item.quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => handleIncrement(item.id, item.quantity)}
                >
                  +
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
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

export default CartItem;
