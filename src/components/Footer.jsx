import { Clock } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-charcoal text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <Clock className="text-primary h-6 w-6" />
                            <span className="text-xl font-bold tracking-widest uppercase">Chronos Luxe</span>
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            Providing timeless elegance since 1990. Our collection features only the finest horological masterpieces from around the globe.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/" className="hover:text-white transition">Collections</a></li>
                            <li><a href="/" className="hover:text-white transition">About Us</a></li>
                            <li><a href="/" className="hover:text-white transition">Warranty</a></li>
                            <li><a href="/" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-primary">Newsletter</h4>
                        <p className="text-gray-400 mb-4">Subscribe for exclusive releases.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-charcoal-light border border-gray-700 px-4 py-2 w-full focus:outline-none focus:border-primary"
                            />
                            <button className="bg-primary text-charcoal px-4 py-2 font-bold hover:bg-primary-dark transition">
                                Join
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Chronos Luxe. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
