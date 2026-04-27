import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductContext';
import { Search, SlidersHorizontal } from 'lucide-react';

const Home = () => {
    const { products } = useProducts();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('All');

    const brands = ['All', ...new Set(products.map(p => p.brand))];

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
        return matchesSearch && matchesBrand;
    });

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center justify-center text-white">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1600&auto=format&fit=crop"
                        alt="Hero Watch"
                        className="w-full h-full object-cover brightness-50"
                    />
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter uppercase italic">Timeless Excellence</h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
                        Discover our curated collection of luxury timepieces from the world's most prestigious brands.
                    </p>
                    <button
                        onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}
                        className="bg-primary text-charcoal px-8 py-3 rounded-full font-bold text-lg hover:bg-primary-dark transition-all transform hover:scale-105"
                    >
                        Explore Collection
                    </button>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 space-y-6 md:space-y-0">
                    <div>
                        <h2 className="text-3xl font-bold text-charcoal">Featured Collection</h2>
                        <p className="text-gray-500">Discover your next signature timepiece</p>
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Search watches..."
                                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent outline-none w-full sm:w-64"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <SlidersHorizontal className="text-gray-400 h-5 w-5" />
                            <select
                                className="bg-white border border-gray-200 rounded-full px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
                                value={selectedBrand}
                                onChange={(e) => setSelectedBrand(e.target.value)}
                            >
                                {brands.map(brand => (
                                    <option key={brand} value={brand}>{brand}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="text-gray-400 text-6xl mb-4">∅</div>
                        <h3 className="text-2xl font-semibold text-gray-700">No timepieces found</h3>
                        <p className="text-gray-500">Try adjusting your search or filters</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Home;
