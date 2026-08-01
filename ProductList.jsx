import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductList.css';

/**
 * ProductList Component
 * Displays the product listing page for the plant shop application
 * Features: Search, Filter, Sort, Add to Cart, Pagination, Responsive Design
 */

const ProductList = ({ addToCart }) => {
  // State Management
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState('default');
  
  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  
  // Cart notification state
  const [notification, setNotification] = useState({ show: false, message: '' });

  const navigate = useNavigate();

  // Sample plant products data (in real app, fetch from API)
  const plantData = [
    {
      id: 1,
      name: 'Monstera Deliciosa',
      category: 'indoor',
      price: 29.99,
      rating: 4.8,
      reviews: 156,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500',
      description: 'Beautiful Swiss Cheese Plant with large, glossy leaves',
      careLevel: 'easy',
      sunlight: 'indirect',
      size: 'medium'
    },
    {
      id: 2,
      name: 'Fiddle Leaf Fig',
      category: 'indoor',
      price: 49.99,
      rating: 4.6,
      reviews: 203,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1612363228108-b89d5e0c4e5b?w=500',
      description: 'Elegant tree-like plant with large violin-shaped leaves',
      careLevel: 'moderate',
      sunlight: 'bright',
      size: 'large'
    },
    {
      id: 3,
      name: 'Snake Plant',
      category: 'succulent',
      price: 19.99,
      rating: 4.9,
      reviews: 312,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1599598425947-320d7f8c8b7e?w=500',
      description: 'Low-maintenance plant perfect for beginners',
      careLevel: 'easy',
      sunlight: 'low',
      size: 'small'
    },
    {
      id: 4,
      name: 'Peace Lily',
      category: 'flowering',
      price: 24.99,
      rating: 4.7,
      reviews: 189,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1593500358678-6d3c3f8b6b6e?w=500',
      description: 'Elegant white flowers with dark green foliage',
      careLevel: 'easy',
      sunlight: 'indirect',
      size: 'medium'
    },
    {
      id: 5,
      name: 'Aloe Vera',
      category: 'succulent',
      price: 14.99,
      rating: 4.8,
      reviews: 267,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1596547608828-7c3e1e3b6e6e?w=500',
      description: 'Medicinal plant with soothing gel inside leaves',
      careLevel: 'easy',
      sunlight: 'bright',
      size: 'small'
    },
    {
      id: 6,
      name: 'Boston Fern',
      category: 'hanging',
      price: 34.99,
      rating: 4.5,
      reviews: 142,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1596547609658-7c3e3e3b6e6e?w=500',
      description: 'Lush, feathery fronds perfect for hanging baskets',
      careLevel: 'moderate',
      sunlight: 'indirect',
      size: 'medium'
    },
    {
      id: 7,
      name: 'Rubber Plant',
      category: 'indoor',
      price: 39.99,
      rating: 4.6,
      reviews: 178,
      inStock: false,
      image: 'https://images.unsplash.com/photo-1612363228108-b89d5e0c4e5b?w=500',
      description: 'Glossy, dark green leaves on a sturdy stem',
      careLevel: 'easy',
      sunlight: 'bright',
      size: 'large'
    },
    {
      id: 8,
      name: 'Pothos',
      category: 'hanging',
      price: 16.99,
      rating: 4.9,
      reviews: 421,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1599598425947-320d7f8c8b7e?w=500',
      description: 'Trailing vine with heart-shaped variegated leaves',
      careLevel: 'easy',
      sunlight: 'low',
      size: 'small'
    },
    {
      id: 9,
      name: 'Bird of Paradise',
      category: 'indoor',
      price: 69.99,
      rating: 4.7,
      reviews: 98,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500',
      description: 'Dramatic tropical plant with large paddle-shaped leaves',
      careLevel: 'moderate',
      sunlight: 'bright',
      size: 'large'
    },
    {
      id: 10,
      name: 'Jade Plant',
      category: 'succulent',
      price: 22.99,
      rating: 4.8,
      reviews: 234,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1596547608828-7c3e1e3b6e6e?w=500',
      description: 'Symbol of good luck with thick, glossy leaves',
      careLevel: 'easy',
      sunlight: 'bright',
      size: 'small'
    },
    {
      id: 11,
      name: 'Orchid',
      category: 'flowering',
      price: 44.99,
      rating: 4.6,
      reviews: 167,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1593500358678-6d3c3f8b6b6e?w=500',
      description: 'Exotic blooms in elegant white or purple',
      careLevel: 'difficult',
      sunlight: 'indirect',
      size: 'medium'
    },
    {
      id: 12,
      name: 'Spider Plant',
      category: 'hanging',
      price: 18.99,
      rating: 4.9,
      reviews: 389,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1599598425947-320d7f8c8b7e?w=500',
      description: 'Easy-to-grow with cascading baby plantlets',
      careLevel: 'easy',
      sunlight: 'indirect',
      size: 'small'
    }
  ];

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setProducts(plantData);
        setError(null);
      } catch (err) {
        setError('Failed to load products. Please try again.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter and search products
  const filteredProducts = useMemo(() => {
    return products.filter(product =>
