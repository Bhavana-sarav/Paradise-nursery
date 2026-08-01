import React from "react";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    alert("Welcome to Paradise Nursery! Explore our beautiful collection of indoor and outdoor plants.");
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo">
          🌿 Paradise Nursery
        </div>

        <nav>
          <ul className="nav-links">
            <li>Home</li>
            <li>Plants</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      {/* Landing Page */}
      <main className="landing-page">
        <div className="landing-content">

          <h1>Paradise Nursery</h1>

          <h2>Bring Nature Home</h2>

          <p>
            Welcome to Paradise Nursery, your trusted destination for healthy,
            vibrant, and beautiful plants. We are passionate about helping
            people create greener homes, healthier workplaces, and peaceful
            gardens through carefully selected indoor and outdoor plants.
          </p>

          <p>
            Our nursery offers a wide variety of ornamental plants, flowering
            plants, succulents, bonsai, medicinal herbs, air-purifying plants,
            and decorative pots suitable for homes, offices, balconies, and
            gardens. Every plant is nurtured with care to ensure exceptional
            quality and long-lasting freshness.
          </p>

          <p>
            Whether you are a beginner starting your gardening journey or an
            experienced plant enthusiast, Paradise Nursery provides everything
            you need to build your own green paradise. Our mission is to promote
            sustainable living and inspire everyone to reconnect with nature.
          </p>

          <button className="shop-btn" onClick={handleGetStarted}>
            Get Started
          </button>

        </div>
      </main>

      {/* About Section */}
      <section className="about-section">
        <div className="container">

          <h2>Why Choose Paradise Nursery?</h2>

          <div className="features">

            <div className="feature-card">
              <h3>🌱 Premium Quality Plants</h3>
              <p>
                Every plant is carefully grown and inspected before reaching
                customers to ensure freshness and excellent health.
              </p>
            </div>

            <div className="feature-card">
              <h3>🚚 Fast Delivery</h3>
              <p>
                We deliver plants safely using eco-friendly packaging to protect
                every order during transportation.
              </p>
            </div>

            <div className="feature-card">
              <h3>💚 Expert Guidance</h3>
              <p>
                Our gardening experts provide plant care tips and maintenance
                guidance to help your plants thrive.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Popular Plant Categories</h2>

        <div className="category-grid">

          <div className="card">
            <h3>Indoor Plants</h3>
            <p>
              Beautiful indoor plants that improve air quality and brighten your
              living spaces.
            </p>
          </div>

          <div className="card">
            <h3>Outdoor Plants</h3>
            <p>
              Decorative garden plants suitable for balconies, terraces, and
              outdoor landscapes.
            </p>
          </div>

          <div className="card">
            <h3>Flowering Plants</h3>
            <p>
              Colorful flowering plants that enhance the beauty of your home and
              garden.
            </p>
          </div>

          <div className="card">
            <h3>Succulents</h3>
            <p>
              Low-maintenance succulents perfect for modern homes and office
              desks.
            </p>
          </div>

        </div>
      </section>

      {/* Company Information */}
      <section className="company-info">
        <h2>Our Commitment</h2>

        <p>
          Paradise Nursery is committed to promoting environmental sustainability
          by encouraging people to plant more trees and care for nature. Our
          experienced horticulture team ensures that every plant receives proper
          attention before reaching our customers.
        </p>

        <p>
          Customer satisfaction remains our highest priority. We continuously
          improve our services by offering quality products, affordable prices,
          secure delivery, and dedicated customer support.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h3>Paradise Nursery</h3>

        <p>
          Growing Happiness, One Plant at a Time.
        </p>

        <p>
          © 2026 Paradise Nursery. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
