import React, { useState } from "react";
import "./App.css";

function App() {
  const [started, setStarted] = useState(false);

  const handleGetStarted = () => {
    setStarted(true);
    alert("Welcome to Paradise Nursery!");
  };

  return (
    <div className="App">

      {/* Navigation Bar */}

      <nav className="navbar">
        <div className="logo">
          🌿 Paradise Nursery
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#plants">Plants</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Landing Page */}

      <section className="hero" id="home">

        <div className="hero-content">

          <h1>Welcome to Paradise Nursery</h1>

          <h2>Bringing Nature Closer to Your Home</h2>

          <p>
            Paradise Nursery is your one-stop destination for beautiful
            indoor plants, outdoor plants, flowering plants, decorative
            pots, gardening accessories, and eco-friendly gardening
            solutions.
          </p>

          <p>
            We believe every home deserves a touch of greenery.
            Our carefully selected collection of healthy plants
            helps improve air quality, reduce stress, and create
            a peaceful living environment.
          </p>

          <button
            className="btn"
            onClick={handleGetStarted}
          >
            {started ? "Explore Plants" : "Get Started"}
          </button>

        </div>

      </section>

      {/* About Company */}

      <section className="categories" id="about">

        <h2>About Paradise Nursery</h2>

        <p>
          Paradise Nursery is dedicated to providing premium-quality
          plants and exceptional gardening products. Our experienced
          horticulture experts ensure that every plant is nurtured
          with care before reaching your home.

          We aim to inspire people to create greener spaces through
          sustainable gardening practices and affordable plant
          collections suitable for homes, offices, schools, and
          commercial spaces.
        </p>

      </section>

      {/* Features */}

      <section className="features" id="services">

        <div className="card">
          <h3>🌱 Healthy Plants</h3>

          <p>
            Every plant is carefully inspected to ensure excellent
            health and long-lasting freshness before delivery.
          </p>
        </div>

        <div className="card">
          <h3>🚚 Fast Delivery</h3>

          <p>
            We provide safe and secure doorstep delivery with
            protective packaging across multiple cities.
          </p>
        </div>

        <div className="card">
          <h3>🌎 Eco-Friendly</h3>

          <p>
            We promote sustainable gardening and environmentally
            responsible packaging materials.
          </p>
        </div>

        <div className="card">
          <h3>⭐ Expert Support</h3>

          <p>
            Our gardening experts provide plant care tips,
            maintenance guides, and personalized recommendations.
          </p>
        </div>

      </section>

      {/* Plant Categories */}

      <section className="categories" id="plants">

        <h2>Popular Plant Categories</h2>

        <div className="category-grid">

          <div className="category-box">
            <h3>Indoor Plants</h3>

            <p>
              Air-purifying plants perfect for homes and offices.
            </p>
          </div>

          <div className="category-box">
            <h3>Outdoor Plants</h3>

            <p>
              Beautiful garden plants suitable for all seasons.
            </p>
          </div>

          <div className="category-box">
            <h3>Flowering Plants</h3>

            <p>
              Colorful flowers that brighten every outdoor space.
            </p>
          </div>

          <div className="category-box">
            <h3>Succulents</h3>

            <p>
              Low-maintenance decorative plants for modern interiors.
            </p>
          </div>

          <div className="category-box">
            <h3>Bonsai Collection</h3>

            <p>
              Artistic miniature trees crafted with elegance.
            </p>
          </div>

          <div className="category-box">
            <h3>Medicinal Plants</h3>

            <p>
              Natural herbs known for their traditional health benefits.
            </p>
          </div>

        </div>

      </section>

      {/* Contact */}

      <section className="categories" id="contact">

        <h2>Contact Us</h2>

        <p><strong>Paradise Nursery Pvt. Ltd.</strong></p>

        <p>123 Green Garden Road</p>

        <p>Bengaluru, Karnataka - 560001</p>

        <p>Email: info@paradisenursery.com</p>

        <p>Phone: +91 9876543210</p>

      </section>

      {/* Footer */}

      <footer className="footer">

        <p>
          © 2026 Paradise Nursery. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;
