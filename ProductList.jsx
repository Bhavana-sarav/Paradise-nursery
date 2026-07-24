import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import "./ProductList.css";

const ProductList = () => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "Snake Plant",
      category: "Indoor",
      price: 299,
      image: "https://images.unsplash.com/photo-1463320726281-696a485928c7",
      description:
        "An easy-to-maintain indoor plant known for purifying air and enhancing home décor.",
    },
    {
      id: 2,
      name: "Peace Lily",
      category: "Indoor",
      price: 399,
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
      description:
        "Beautiful flowering indoor plant that removes toxins from indoor air.",
    },
    {
      id: 3,
      name: "Money Plant",
      category: "Indoor",
      price: 249,
      image: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e",
      description:
        "Popular decorative plant believed to bring prosperity and positive energy.",
    },
    {
      id: 4,
      name: "Rose Plant",
      category: "Flowering",
      price: 349,
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
      description:
        "Elegant flowering plant available in multiple vibrant colors.",
    },
    {
      id: 5,
      name: "Hibiscus",
      category: "Flowering",
      price: 379,
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      description:
        "Bright tropical flowers ideal for balconies and gardens.",
    },
    {
      id: 6,
      name: "Tulsi",
      category: "Medicinal",
      price: 199,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      description:
        "Sacred medicinal herb with numerous health benefits.",
    },
    {
      id: 7,
      name: "Aloe Vera",
      category: "Medicinal",
      price: 249,
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42",
      description:
        "Natural medicinal plant widely used for skin and health care.",
    },
    {
      id: 8,
      name: "Bonsai Tree",
      category: "Bonsai",
      price: 999,
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      description:
        "Miniature ornamental tree crafted for artistic indoor decoration.",
    },
    {
      id: 9,
      name: "Jade Plant",
      category: "Succulent",
      price: 349,
      image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1",
      description:
        "Low-maintenance succulent ideal for home and office spaces.",
    },
    {
      id: 10,
      name: "Cactus",
      category: "Succulent",
      price: 199,
      image: "https://images.unsplash.com/photo-1463154545680-d59320fd685d",
      description:
        "Beautiful desert plant requiring minimal watering.",
    },
    {
      id: 11,
      name: "Palm Plant",
      category: "Outdoor",
      price: 599,
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      description:
        "Decorative outdoor plant suitable for gardens and landscapes.",
    },
    {
      id: 12,
      name: "Areca Palm",
      category: "Outdoor",
      price: 699,
      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      description:
        "Popular ornamental palm known for improving indoor air quality.",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const searchMatch =
      product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    alert(`${product.name} added to cart.`);
  };

  return (
    <div className="product-page">

      <h1>Paradise Nursery Plant Collection</h1>

      <p>
        Discover our wide collection of healthy indoor plants,
        flowering plants, succulents, bonsai trees, and medicinal herbs.
      </p>

      <div className="filters">

        <input
          type="text"
          placeholder="Search plants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(e) =>
            setSelectedCategory(e.target.value)
          }
        >
          <option>All</option>
          <option>Indoor</option>
          <option>Outdoor</option>
          <option>Flowering</option>
          <option>Succulent</option>
          <option>Bonsai</option>
          <option>Medicinal</option>
        </select>

      </div>

      <div className="product-grid">

        {filteredProducts.map((product) => (

          <div className="product-card" key={product.id}>

            <img
              src={product.image}
              alt={product.name}
            />

            <h2>{product.name}</h2>

            <h4>{product.category}</h4>

            <p>{product.description}</p>

            <h3>₹ {product.price}</h3>

            <button
              onClick={() =>
                handleAddToCart(product)
              }
            >
              Add to Cart
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default ProductList;
