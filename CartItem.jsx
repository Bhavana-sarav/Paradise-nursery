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
    return products.filter(product => {
      // Search filter
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Category filter
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      
      // Price range filter
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [products, searchTerm, selectedCategory, priceRange]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'name-asc':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return sorted;
    }
  }, [filteredProducts, sortBy]);

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, priceRange, sortBy]);

  // Handle add to cart with notification
  const handleAddToCart = useCallback((product) => {
    if (!product.inStock) {
      showNotification('This product is currently out of stock!');
      return;
    }
    
    addToCart(product);
    showNotification(`${product.name} added to cart!`);
  }, [addToCart]);

  // Show notification
  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };

  // Handle product click for details
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // Get unique categories for filter dropdown
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(p => p.category))];
    return ['all', ...uniqueCategories];
  }, [products]);

  // Loading state
  if (loading) {
    return (
      <div className="product-list-loading">
        <div className="loading-spinner"></div>
        <p>Loading beautiful plants...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="product-list-error">
        <h3>⚠️ {error}</h3>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="product-list-container">
      {/* Notification Toast */}
      {notification.show && (
        <div className="notification-toast">
          ✓ {notification.message}
        </div>
      )}

      {/* Header Section */}
      <header className="product-list-header">
        <h1>🌿 Our Plant Collection</h1>
        <p className="product-count">
          Showing {sortedProducts.length} of {products.length} plants
        </p>
      </header>

      {/* Filters and Search Section */}
      <section className="filters-section">
        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search plants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search plants"
          />
          <span className="search-icon">🔍</span>
        </div>

        {/* Category Filter */}
        <div className="filter-group">
          <label htmlFor="category-filter">Category:</label>
          <select
            id="category-filter"
            className="filter-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="filter-group">
          <label htmlFor="price-range">Max Price: ${priceRange[1]}</label>
          <input
            type="range"
            id="price-range"
            className="price-slider"
            min="0"
            max="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
          />
        </div>

        {/* Sort Options */}
        <div className="filter-group">
          <label htmlFor="sort-by">Sort By:</label>
          <select
            id="sort-by"
            className="filter-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>

        {/* Clear Filters Button */}
        <button
          className="clear-filters-btn"
          onClick={() => {
            setSearchTerm('');
            setSelectedCategory('all');
            setPriceRange([0, 100]);
            setSortBy('default');
          }}
        >
          Clear Filters
        </button>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        {sortedProducts.length === 0 ? (
          <div className="no-products">
            <h3>🌱 No plants found</h3>
            <p>Try adjusting your filters or search terms</p>
            <button
              className="clear-filters-btn"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setPriceRange([0, 100]);
              }}
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <>
            <div className="products-grid">
              {paginatedProducts.map(product => (
                <div
                  key={product.id}
                  className={`product-card ${!product.inStock ? 'out-of-stock' : ''}`}
                >
                  {/* Product Image */}
                  <div
                    className="product-image-container"
                    onClick={() => handleProductClick(product.id)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                      loading="lazy"
                    />
                    {!product.inStock && (
                      <div className="out-of-stock-badge">Out of Stock</div>
                    )}
                    {product.rating >= 4.8 && (
                      <div className="bestseller-badge">⭐ Bestseller</div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="product-info">
                    <h3
                      className="product-name"
                      onClick={() => handleProductClick(product.id)}
                    >
                      {product.name}
                    </h3>
                    
                    <p className="product-description">{product.description}</p>
                    
                    {/* Product Details */}
                    <div className="product-details">
                      <span className="product-category">{product.category}</span>
                      <span className="product-care">
                        {product.careLevel === 'easy' && '🟢 Easy'}
                        {product.careLevel === 'moderate' && '🟡 Moderate'}
                        {product.careLevel === 'difficult' && '🔴 Difficult'}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="product-rating">
                      <span className="stars">
                        {'★'.repeat(Math.floor(product.rating))}
                        {'☆'.repeat(5 - Math.floor(product.rating))}
                      </span>
                      <span className="rating-value">{product.rating}</span>
                      <span className="reviews-count">({product.reviews})</span>
                    </div>

                    {/* Price and Add to Cart */}
                    <div className="product-footer">
                      <span className="product-price">${product.price.toFixed(2)}</span>
                      
                      <button
                        className="add-to-cart-btn"
                        onClick={() => handleAddToCart(product)}
                        disabled={!product.inStock}
                        aria-label={`Add ${product.name} to cart`}
                      >
                        {product.inStock ? '🛒 Add to Cart' : 'Out of Stock'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination">
                <button
                  className="pagination-btn"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  ← Previous
                </button>

                <div className="pagination-numbers">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  className="pagination-btn"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next →
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default ProductList;
