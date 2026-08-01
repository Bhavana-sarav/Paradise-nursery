import React from "react";
import "./App.css";

function App() {

  const handleGetStarted = () => {
    alert("Welcome to Paradise Nursery! Let's explore our beautiful collection of plants.");
  };

  return (
    <div className="App">

      {/* ================= HEADER ================= */}

      <header className="navbar">

        <div className="logo">
          🌿 Paradise Nursery
        </div>

        <nav>

          <ul className="nav-links">

            <li><a href="#home">Home</a></li>

            <li><a href="#about">About</a></li>

            <li><a href="#services">Services</a></li>

            <li><a href="#plants">Plants</a></li>

            <li><a href="#contact">Contact</a></li>

          </ul>

        </nav>

      </header>

      {/* ================= HERO SECTION ================= */}

      <section className="landing-page" id="home">

        <div className="landing-content">

          <h1>🌱 Paradise Nursery</h1>

          <h2>Growing Happiness, One Plant at a Time</h2>

          <p>
            Welcome to Paradise Nursery, where nature meets beauty.
            We are passionate about providing premium-quality indoor plants,
            outdoor plants, flowering plants, medicinal herbs, succulents,
            bonsai trees, and decorative gardening accessories.
          </p>

          <p>
            Whether you are decorating your home, beautifying your office,
            or creating your dream garden, Paradise Nursery offers healthy,
            affordable, and carefully nurtured plants for every environment.
          </p>

          <button
            className="shop-btn"
            onClick={handleGetStarted}
          >
            Get Started
          </button>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="about-section" id="about">

        <h2>About Paradise Nursery</h2>

        <p>
          Paradise Nursery is one of India's trusted online plant stores.
          Our mission is to encourage sustainable living by making beautiful
          plants accessible to every household.
        </p>

        <p>
          Every plant is carefully selected by our experienced horticulture
          experts to ensure excellent quality and long-lasting freshness.
          We believe plants not only beautify spaces but also improve
          physical health, mental well-being, and environmental sustainability.
        </p>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="features-section" id="services">

        <h2>Why Choose Us?</h2>

        <div className="feature-container">

          <div className="feature-card">

            <h3>🌿 Premium Plants</h3>

            <p>
              Healthy and carefully nurtured indoor and outdoor plants.
            </p>

          </div>

          <div className="feature-card">

            <h3>🚚 Fast Delivery</h3>

            <p>
              Safe packaging with quick doorstep delivery across India.
            </p>

          </div>

          <div className="feature-card">

            <h3>💚 Expert Guidance</h3>

            <p>
              Professional plant care tips and gardening consultation.
            </p>

          </div>

          <div className="feature-card">

            <h3>♻ Eco Friendly</h3>

            <p>
              Sustainable packaging and environmentally responsible practices.
            </p>

          </div>

        </div>

      </section>

      {/* ================= PLANTS ================= */}

      <section className="plants-section" id="plants">

        <h2>Popular Categories</h2>

        <div className="plant-grid">

          <div className="plant-card">
            <h3>Indoor Plants</h3>
            <p>Air-purifying plants for homes and offices.</p>
          </div>

          <div className="plant-card">
            <h3>Outdoor Plants</h3>
            <p>Perfect plants for gardens and landscapes.</p>
          </div>

          <div className="plant-card">
            <h3>Flowering Plants</h3>
            <p>Bright and colorful flowering varieties.</p>
          </div>

          <div className="plant-card">
            <h3>Succulents</h3>
            <p>Beautiful low-maintenance decorative plants.</p>
          </div>

        </div>

      </section>

      {/* ================= COMPANY STATS ================= */}

      <section className="stats-section">

        <h2>Our Achievements</h2>

        <div className="stats-grid">

          <div className="stat-card">
            <h1>10,000+</h1>
            <p>Happy Customers</p>
          </div>

          <div className="stat-card">
            <h1>500+</h1>
            <p>Plant Varieties</p>
          </div>

          <div className="stat-card">
            <h1>100+</h1>
            <p>Expert Gardeners</p>
          </div>

          <div className="stat-card">
            <h1>98%</h1>
            <p>Customer Satisfaction</p>
          </div>

        </div>

      </section>

      {/* ================= CALL TO ACTION ================= */}

      <section className="cta-section">

        <h2>Bring Nature Into Your Home</h2>

        <p>
          Discover an amazing collection of healthy plants that transform
          your living space into a peaceful green paradise.
        </p>

        <button
          className="shop-btn"
          onClick={handleGetStarted}
        >
          Get Started
        </button>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer" id="contact">

        <h3>Paradise Nursery</h3>

        <p>
          Growing Happiness • Building Greener Communities
        </p>

        <p>
          Chennai, Tamil Nadu, India
        </p>

        <p>
          Email: support@paradisenursery.com
        </p>

        <p>
          Phone: +91 98765 43210
        </p>

        <p>
          © 2026 Paradise Nursery Pvt. Ltd.
          All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;
