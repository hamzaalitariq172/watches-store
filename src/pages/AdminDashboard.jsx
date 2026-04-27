import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Plus, Edit, Trash2, ExternalLink, Package } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useProducts } from '../context/ProductContext';
import Sidebar from '../components/Sidebar';
import ProductForm from '../components/ProductForm';

const AdminDashboard = () => {
    const { isAdmin } = useAuth();
    const { products, addProduct, updateProduct, deleteProduct } = useProducts();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    if (!isAdmin) {
        return <Navigate to="/login" replace />;
    }

    const handleOpenAdd = () => {
        setEditingProduct(null);
        setIsFormOpen(true);
    };

    const handleOpenEdit = (product) => {
        setEditingProduct(product);
        setIsFormOpen(true);
    };

    const handleSubmitForm = (formData) => {
        if (editingProduct) {
            updateProduct(editingProduct.id, formData);
        } else {
            addProduct(formData);
        }
        setIsFormOpen(false);
    };

    return (
        <div className="flex bg-gray-50">
            <Sidebar />

            <main className="flex-1 p-8 overflow-x-hidden">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-charcoal">Inventory Management</h1>
                        <p className="text-gray-500">Manage your product catalog and pricing</p>
                    </div>
                    <button
                        onClick={handleOpenAdd}
                        className="flex items-center space-x-2 bg-primary text-charcoal px-6 py-3 rounded-xl font-bold hover:bg-primary-dark transition shadow-lg shadow-primary/20"
                    >
                        <Plus className="h-5 w-5" />
                        <span>Add New Watch</span>
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                            <Package className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Total Products</p>
                            <p className="text-2xl font-bold">{products.length}</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
                        <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                            <ExternalLink className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Active Brands</p>
                            <p className="text-2xl font-bold">{new Set(products.map(p => p.brand)).size}</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 text-primary rounded-xl">
                            <span className="text-2xl font-bold">$</span>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Inventory Value</p>
                            <p className="text-2xl font-bold">
                                ${products.reduce((acc, p) => acc + p.price, 0).toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Products Table */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b border-gray-100">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Product</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Brand</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {products.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-4">
                                                <img src={product.image} alt="" className="h-12 w-12 rounded-lg object-cover bg-gray-100" />
                                                <span className="font-semibold text-charcoal">{product.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                                                {product.brand}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 font-bold text-charcoal">
                                            ${product.price.toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end space-x-2">
                                                <button
                                                    onClick={() => handleOpenEdit(product)}
                                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                                                >
                                                    <Edit className="h-5 w-5" />
                                                </button>
                                                <button
                                                    onClick={() => deleteProduct(product.id)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                                                >
                                                    <Trash2 className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {products.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            No products available in the inventory.
                        </div>
                    )}
                </div>

                {isFormOpen && (
                    <ProductForm
                        product={editingProduct}
                        onSubmit={handleSubmitForm}
                        onClose={() => setIsFormOpen(false)}
                    />
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
