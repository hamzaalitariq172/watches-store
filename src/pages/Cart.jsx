import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-center flex-col items-center justify-center px-4">
                <div className="bg-gray-100 p-8 rounded-full mb-6">
                    <ShoppingBag className="h-16 w-16 text-gray-400" />
                </div>
                <h2 className="text-3xl font-bold text-charcoal mb-4">Your bag is empty</h2>
                <p className="text-gray-500 mb-8 text-center max-w-md">
                    Explore our collection and find the perfect timepiece to start your journey.
                </p>
                <Link
                    to="/"
                    className="bg-charcoal text-white px-8 py-3 rounded-full font-bold hover:bg-black transition"
                >
                    Discover Collection
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-10">Shopping Bag</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-6">
                    {cart.map((item) => (
                        <div key={item.id} className="flex flex-col sm:flex-row items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 gap-6">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-32 h-32 object-cover rounded-lg"
                            />
                            <div className="flex-1 text-center sm:text-left">
                                <h3 className="text-xl font-bold text-charcoal">{item.name}</h3>
                                <p className="text-gray-500 mb-2">{item.brand}</p>
                                <p className="text-primary font-bold">${item.price.toLocaleString()}</p>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="flex items-center border border-gray-200 rounded-full">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="p-2 hover:text-primary transition"
                                    >
                                        <Minus className="h-4 w-4" />
                                    </button>
                                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="p-2 hover:text-primary transition"
                                    >
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-2 text-gray-400 hover:text-red-500 transition"
                                >
                                    <Trash2 className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-charcoal text-white p-8 rounded-2xl sticky top-24">
                        <h2 className="text-xl font-bold mb-6 border-b border-gray-700 pb-4">Order Summary</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Subtotal</span>
                                <span>${totalPrice.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Shipping</span>
                                <span className="text-green-400">Free</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Estimated Tax</span>
                                <span>$0.00</span>
                            </div>
                            <div className="pt-4 border-t border-gray-700 flex justify-between font-bold text-xl">
                                <span>Total</span>
                                <span className="text-primary">${totalPrice.toLocaleString()}</span>
                            </div>
                        </div>
                        <button className="w-full bg-primary text-charcoal py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-primary-dark transition group">
                            <span>Proceed to Checkout</span>
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="mt-4 text-xs text-gray-400 text-center">
                            Secure checkout powered by Chronos Luxe
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
