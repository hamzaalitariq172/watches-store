import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
            <Link to={`/product/${product.id}`} className="block relative h-64 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-charcoal text-primary text-xs font-bold px-2 py-1 rounded">
                    {product.brand}
                </div>
            </Link>
            <div className="p-5">
                <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-semibold text-charcoal truncate">{product.name}</h3>
                </Link>
                <p className="text-gray-500 text-sm mb-4">{product.brand}</p>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-charcoal">
                        ${product.price.toLocaleString()}
                    </span>
                    <button
                        onClick={() => addToCart(product)}
                        className="p-2 bg-charcoal text-white hover:bg-primary hover:text-charcoal transition-colors rounded-full"
                        aria-label="Add to cart"
                    >
                        <Plus className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
