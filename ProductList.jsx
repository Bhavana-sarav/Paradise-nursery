import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import "./ProductList.css";

const ProductList = () => {
  const dispatch = useDispatch();

  const categories = [
    "All",
    "Indoor Plants",
    "Outdoor Plants",
    "Flowering Plants",
    "Succulents"
  ];

  const products = [
    {
      id: 1,
      name: "Snake Plant",
      price: 399,
      category: "Indoor Plants",
      image: "/images/snakeplant.jpg",
      description: "Low-maintenance indoor plant that improves air quality."
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 499,
      category: "Indoor Plants",
      image: "/images/peacelily.jpg",
      description: "Elegant flowering plant suitable for homes and offices."
    },
    {
      id: 3,
      name: "Rose Plant",
      price: 599,
      category: "Flowering Plants",
      image: "/images/rose.jpg",
      description: "Beautiful blooming rose plant with vibrant flowers."
    },
    {
      id: 4,
      name: "Jade Plant",
      price: 350,
      category: "Succulents",
      image: "/images/jade.jpg",
      description: "Easy-to-grow succulent that symbolizes prosperity."
    },
    {
      id: 5,
      name: "Aloe Vera",
      price: 299,
      category: "Succulents",
      image: "/images/aloe.jpg",
      description: "Medicinal succulent known for its healing properties."
    },
    {
      id: 6,
      name: "Areca Palm",
      price: 899,
      category: "Outdoor Plants",
      image: "/images/areca.jpg",
      description: "Popular ornamental palm that adds tropical beauty."
    },
    {
      id: 7,
      name: "Money Plant",
      price: 249,
      category: "Indoor Plants",
      image: "/images/moneyplant.jpg",
      description: "Popular indoor plant believed to bring good fortune."
    },
    {
      id: 8,
      name: "Lavender",
      price: 699,
      category: "Flowering Plants",
      image: "/images/lavender.jpg",
      description: "Fragrant flowering plant with calming aroma."
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    alert(`${product.name} added to cart successfully.`);
  };

  return (
    <div className="product-page">

      <header className="page-header">
        <h1>Paradise Nursery Plant Shop</h1>

        <p>
          Browse our carefully selected collection of healthy indoor and outdoor
          plants. Every plant is nurtured with care to ensure exceptional
          quality and freshness.
        </p>
      </header>

      <section className="category-section">
        <h2>Shop by Category</h2>

        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "active-category"
                  : ""
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="products-section">

        <h2>{selectedCategory}</h2>

        <div className="product-grid">

          {filteredProducts.map((product) => (

            <div className="product-card" key={product.id}>

              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />

              <h3>{product.name}</h3>

              <p className="category">
                {product.category}
              </p>

              <p className="description">
                {product.description}
              </p>

              <h2 className="price">
                ₹ {product.price}
              </h2>

              <button
                className="cart-button"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>

            </div>

          ))}

        </div>

      </section>

      <section className="about-shop">

        <h2>Why Shop With Paradise Nursery?</h2>

        <ul>
          <li>Premium quality healthy plants</li>
          <li>Affordable prices</li>
          <li>Secure online ordering</li>
          <li>Fast home delivery</li>
          <li>Expert gardening support</li>
          <li>Eco-friendly packaging</li>
          <li>Wide variety of indoor and outdoor plants</li>
          <li>Customer satisfaction guaranteed</li>
        </ul>

      </section>

      <footer className="footer">

        <h3>Paradise Nursery</h3>

        <p>Growing Happiness One Plant at a Time.</p>

        <p>© 2026 Paradise Nursery. All Rights Reserved.</p>

      </footer>

    </div>
  );
};

export default ProductList;
