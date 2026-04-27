import { createContext, useContext, useState, useEffect } from 'react';
import { initialWatches } from '../data/watches';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(() => {
        const saved = localStorage.getItem('watches');
        return saved ? JSON.parse(saved) : initialWatches;
    });

    useEffect(() => {
        localStorage.setItem('watches', JSON.stringify(products));
    }, [products]);

    const addProduct = (product) => {
        const newProduct = { ...product, id: Date.now() };
        setProducts([...products, newProduct]);
    };

    const updateProduct = (id, updatedProduct) => {
        setProducts(products.map(p => p.id === id ? { ...updatedProduct, id } : p));
    };

    const deleteProduct = (id) => {
        setProducts(products.filter(p => p.id !== id));
    };

    const getProductById = (id) => {
        return products.find(p => p.id === parseInt(id));
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, getProductById }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => useContext(ProductContext);
