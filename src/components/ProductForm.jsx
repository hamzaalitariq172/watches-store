import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ProductForm = ({ product, onSubmit, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        price: '',
        image: '',
        description: ''
    });

    useEffect(() => {
        if (product) {
            setFormData(product);
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: name === 'price' ? parseFloat(value) : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
                <div className="bg-charcoal text-white px-6 py-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold">{product ? 'Edit Timepiece' : 'Add New Timepiece'}</h2>
                    <button onClick={onClose} className="hover:text-primary">
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Model Name</label>
                        <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            placeholder="e.g. Submariner"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
                        <input
                            required
                            type="text"
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            placeholder="e.g. Rolex"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Price (USD)</label>
                        <input
                            required
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            placeholder="0.00"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                        <input
                            required
                            type="url"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            placeholder="https://images.unsplash.com/..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            required
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="3"
                            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            placeholder="Short history or features..."
                        ></textarea>
                    </div>

                    <div className="pt-4 flex space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-2 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 py-2 bg-primary text-charcoal rounded-lg font-bold hover:bg-primary-dark transition"
                        >
                            {product ? 'Save Changes' : 'Add Product'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;
