import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../store/CartSlice';
import './CartItem.css';

function CartItem({ item }) {
  const dispatch = useDispatch();
  const lineTotal = item.price * item.quantity;

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">${item.price}</p>
        <p className="cart-item-total">Total: ${lineTotal}</p>
      </div>
      <div className="cart-item-controls">
        <button
          className="qty-btn"
          onClick={() => dispatch(decrementQuantity(item.id))}
        >
          -
        </button>
        <span className="qty-value">{item.quantity}</span>
        <button
          className="qty-btn"
          onClick={() => dispatch(incrementQuantity(item.id))}
        >
          +
        </button>
        <button
          className="delete-btn"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;
