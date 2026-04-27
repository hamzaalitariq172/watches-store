import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, Clock } from 'lucide-react';

const AdminLogin = () => {
    const [email, setEmail] = useState('admin@luxury.com');
    const [password, setPassword] = useState('admin123');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(email, password)) {
            navigate('/admin');
        } else {
            setError('Invalid credentials. Hint: use the defaults provided.');
        }
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full">
                <div className="text-center mb-10">
                    <div className="inline-block p-4 bg-charcoal rounded-full mb-4">
                        <Clock className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-charcoal">Admin Portal</h2>
                    <p className="text-gray-500 mt-2">Manage your inventory and store</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium">
                            {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="email"
                                required
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                placeholder="admin@luxury.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="password"
                                required
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg text-xs text-gray-500 mb-4">
                        <p className="font-bold mb-1">Demo Access:</p>
                        <p>Email: admin@luxury.com</p>
                        <p>Pass: admin123</p>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-charcoal text-white py-3 rounded-lg font-bold hover:bg-black transition duration-200"
                    >
                        Login to Dashboard
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
