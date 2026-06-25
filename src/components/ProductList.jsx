import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectIsInCart } from '../store/CartSlice';
import { plantCategories } from '../data/plants';
import './ProductList.css';

function ProductCard({ plant }) {
  const dispatch = useDispatch();
  const inCart = useSelector((state) => selectIsInCart(state, plant.id));

  const handleAddToCart = () => {
    if (!inCart) {
      dispatch(addItem(plant));
    }
  };

  return (
    <div className="product-card">
      <span className="sale-tag">SALE</span>
      <h3 className="product-name">{plant.name}</h3>
      <img src={plant.image} alt={plant.name} className="product-image" />
      <p className="product-price">${plant.price}</p>
      <p className="product-description">{plant.description}</p>
      <button
        className={`add-to-cart-btn ${inCart ? 'added' : ''}`}
        onClick={handleAddToCart}
        disabled={inCart}
      >
        {inCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

function ProductList() {
  return (
    <div className="product-list-page">
      {plantCategories.map((category) => (
        <section key={category.name} className="category-section">
          <h2 className="category-title">{category.name}</h2>
          <div className="product-grid">
            {category.plants.map((plant) => (
              <ProductCard key={plant.id} plant={plant} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
