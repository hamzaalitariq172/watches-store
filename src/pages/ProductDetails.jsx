import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getProductById } = useProducts();
    const { addToCart } = useCart();

    const product = getProductById(id);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Product not found</h2>
                    <button onClick={() => navigate('/')} className="text-primary hover:underline">Return to Shop</button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center space-x-2 text-gray-500 hover:text-charcoal mb-8 transition"
            >
                <ArrowLeft className="h-5 w-5" />
                <span>Back</span>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="rounded-2xl overflow-hidden bg-white shadow-lg">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <span className="text-primary font-bold tracking-widest uppercase mb-2">{product.brand}</span>
                    <h1 className="text-4xl font-bold text-charcoal mb-4">{product.name}</h1>
                    <p className="text-3xl font-light text-gray-700 mb-8">${product.price.toLocaleString()}</p>

                    <div className="prose prose-slate mb-10">
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {product.description || "This exceptional timepiece represents the pinnacle of luxury watchmaking, combining heritage design with modern precision engineering. Every detail is crafted to perfection."}
                        </p>
                    </div>

                    <div className="flex flex-col space-y-4 mb-12">
                        <button
                            onClick={() => addToCart(product)}
                            className="flex items-center justify-center space-x-3 bg-charcoal text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-black transition-all transform hover:scale-[1.02]"
                        >
                            <ShoppingCart className="h-6 w-6" />
                            <span>Add to Shopping Bag</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                        <div className="flex items-center space-x-3 text-sm text-gray-600">
                            <ShieldCheck className="h-8 w-8 text-primary" />
                            <span>2-Year Warranty</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-gray-600">
                            <Truck className="h-8 w-8 text-primary" />
                            <span>Free Insured Shipping</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-gray-600">
                            <RefreshCcw className="h-8 w-8 text-primary" />
                            <span>30-Day Returns</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
