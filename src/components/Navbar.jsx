import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, LogOut, Clock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { isAdmin, logout } = useAuth();
    const { totalItems } = useCart();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="bg-charcoal text-white sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/" className="flex items-center space-x-2">
                        <Clock className="text-primary h-8 w-8" />
                        <span className="text-xl font-bold tracking-widest uppercase">Chronos Luxe</span>
                    </Link>

                    <div className="hidden md:flex space-x-8 items-center">
                        <Link to="/" className="hover:text-primary transition">Shop</Link>
                        {isAdmin && <Link to="/admin" className="hover:text-primary transition">Dashboard</Link>}

                        <div className="flex items-center space-x-6">
                            <Link to="/cart" className="relative group">
                                <ShoppingCart className="h-6 w-6 group-hover:text-primary transition" />
                                {totalItems > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-primary text-charcoal text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                        {totalItems}
                                    </span>
                                )}
                            </Link>

                            {isAdmin ? (
                                <button onClick={handleLogout} className="flex items-center space-x-1 hover:text-primary transition">
                                    <LogOut className="h-5 w-5" />
                                    <span>Logout</span>
                                </button>
                            ) : (
                                <Link to="/login" className="flex items-center space-x-1 hover:text-primary transition">
                                    <User className="h-5 w-5" />
                                    <span>Admin</span>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
