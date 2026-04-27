import { LayoutDashboard, ShoppingBag, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="w-64 bg-charcoal text-white min-h-[calc(100vh-64px)] p-6 hidden lg:block">
            <div className="space-y-8">
                <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Main Menu</h3>
                    <ul className="space-y-4">
                        <li>
                            <a href="/admin" className="flex items-center space-x-3 text-primary">
                                <LayoutDashboard className="h-5 w-5" />
                                <span className="font-medium">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center space-x-3 text-gray-400 hover:text-white transition">
                                <ShoppingBag className="h-5 w-5" />
                                <span className="font-medium">Store Front</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">General</h3>
                    <ul className="space-y-4">
                        <li>
                            <button className="flex items-center space-x-3 text-gray-400 hover:text-white transition w-full">
                                <Settings className="h-5 w-5" />
                                <span className="font-medium">Settings</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={handleLogout} className="flex items-center space-x-3 text-gray-400 hover:text-red-400 transition w-full">
                                <LogOut className="h-5 w-5" />
                                <span className="font-medium">Sign Out</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
