import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, cart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-w-1 aspect-h-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-md font-bold text-blue-600 mb-3">
            ₹{product.price.toFixed(2)}
          </p>
        </div>
      </Link>
      <div className="px-4 pb-4 space-y-2">
        <button
          onClick={handleAddToCart}
          disabled={isInCart}
          className={`w-full py-2 px-4 rounded-lg transition-colors ${
            isInCart
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {isInCart ? "Added" : "Add to Cart"}
        </button>
        <Link
          to={`/product/${product.id}`}
          className="block w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-center"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
