import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const values = [
    {
      title: "Quality",
      description:
        "Every plant is carefully selected and nurtured to ensure customers receive healthy, vibrant, and long-lasting plants."
    },
    {
      title: "Sustainability",
      description:
        "We encourage eco-friendly gardening practices and promote environmental conservation through green initiatives."
    },
    {
      title: "Customer Satisfaction",
      description:
        "Our customers are at the center of everything we do. We strive to provide excellent service and reliable support."
    },
    {
      title: "Innovation",
      description:
        "We continuously improve our products and services by adopting modern gardening techniques and digital technologies."
    }
  ];

  const services = [
    "Indoor Plants",
    "Outdoor Plants",
    "Flowering Plants",
    "Succulents & Cactus",
    "Medicinal Plants",
    "Air Purifying Plants",
    "Gardening Accessories",
    "Decorative Pots",
    "Organic Fertilizers",
    "Plant Care Consultation"
  ];

  const achievements = [
    {
      number: "10,000+",
      title: "Happy Customers"
    },
    {
      number: "500+",
      title: "Plant Varieties"
    },
    {
      number: "98%",
      title: "Customer Satisfaction"
    },
    {
      number: "5+",
      title: "Years of Excellence"
    }
  ];

  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="hero-section">
        <h1>🌿 About Paradise Nursery 🌿</h1>

        <p>
          Growing Happiness, One Plant at a Time.
        </p>
      </section>

      {/* Company Introduction */}
      <section className="company-section">

        <h2>Who We Are</h2>

        <p>
          Paradise Nursery is a trusted destination for plant lovers, gardeners,
          and nature enthusiasts. We specialize in providing premium-quality
          indoor plants, outdoor plants, flowering plants, succulents,
          medicinal plants, and gardening accessories.
        </p>

        <p>
          Since our establishment, we have focused on helping individuals,
          families, offices, and businesses create greener, healthier, and
          more beautiful environments through carefully selected plants and
          sustainable gardening practices.
        </p>

        <p>
          Our experienced horticulture experts carefully nurture every plant
          before it reaches our customers. Whether you are a beginner or an
          experienced gardener, Paradise Nursery is committed to supporting
          your gardening journey with quality products and expert guidance.
        </p>

      </section>

      {/* Mission */}
      <section className="mission-section">

        <h2>Our Mission</h2>

        <p>
          Our mission is to inspire people to embrace nature by making
          high-quality plants easily accessible while promoting sustainable
          living and environmental responsibility.
        </p>

      </section>

      {/* Vision */}
      <section className="vision-section">

        <h2>Our Vision</h2>

        <p>
          Our vision is to become one of the leading online plant nurseries,
          recognized for exceptional customer service, premium plant quality,
          environmental sustainability, and innovation in gardening solutions.
        </p>

      </section>

      {/* Core Values */}
      <section className="values-section">

        <h2>Our Core Values</h2>

        <div className="value-grid">

          {values.map((value, index) => (

            <div className="value-card" key={index}>

              <h3>{value.title}</h3>

              <p>{value.description}</p>

            </div>

          ))}

        </div>

      </section>

      {/* Services */}
      <section className="services-section">

        <h2>Products & Services</h2>

        <div className="service-grid">

          {services.map((service, index) => (

            <div className="service-card" key={index}>
              🌱 {service}
            </div>

          ))}

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="choose-section">

        <h2>Why Choose Paradise Nursery?</h2>

        <ul>
          <li>✔ Healthy and premium quality plants.</li>
          <li>✔ Affordable pricing for every customer.</li>
          <li>✔ Expert gardening advice.</li>
          <li>✔ Eco-friendly packaging materials.</li>
          <li>✔ Fast and secure home delivery.</li>
          <li>✔ 100% customer satisfaction commitment.</li>
          <li>✔ Regular quality inspection of every plant.</li>
          <li>✔ Excellent after-sales support.</li>
        </ul>

      </section>

      {/* Sustainability */}
      <section className="sustainability-section">

        <h2>Our Sustainability Commitment</h2>

        <p>
          At Paradise Nursery, sustainability is more than a responsibility—it
          is our promise. We actively encourage tree planting, water
          conservation, biodegradable packaging, organic fertilizers, and
          environmentally friendly gardening practices.
        </p>

        <p>
          Every purchase contributes to a greener future by encouraging people
          to reconnect with nature and create healthier living spaces.
        </p>

      </section>

      {/* Statistics */}
      <section className="achievement-section">

        <h2>Our Achievements</h2>

        <div className="achievement-grid">

          {achievements.map((item, index) => (

            <div className="achievement-card" key={index}>

              <h1>{item.number}</h1>

              <p>{item.title}</p>

            </div>

          ))}

        </div>

      </section>

      {/* Contact */}
      <section className="contact-section">

        <h2>Company Information</h2>

        <table className="company-table">

          <tbody>

            <tr>
              <td><strong>Company Name</strong></td>
              <td>Paradise Nursery Pvt. Ltd.</td>
            </tr>

            <tr>
              <td><strong>Industry</strong></td>
              <td>Plant Nursery & Gardening Solutions</td>
            </tr>

            <tr>
              <td><strong>Founded</strong></td>
              <td>2021</td>
            </tr>

            <tr>
              <td><strong>Head Office</strong></td>
              <td>Chennai, Tamil Nadu, India</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>support@paradisenursery.com</td>
            </tr>

            <tr>
              <td><strong>Phone</strong></td>
              <td>+91 98765 43210</td>
            </tr>

            <tr>
              <td><strong>Website</strong></td>
              <td>www.paradisenursery.com</td>
            </tr>

            <tr>
              <td><strong>Working Hours</strong></td>
              <td>Monday - Saturday (9:00 AM - 6:00 PM)</td>
            </tr>

          </tbody>

        </table>

      </section>

      {/* Closing */}
      <section className="closing-section">

        <h2>Thank You for Choosing Paradise Nursery</h2>

        <p>
          We believe every plant has the power to transform spaces, improve
          well-being, and bring people closer to nature. Our team remains
          dedicated to providing exceptional products, outstanding customer
          service, and a memorable shopping experience for every customer.
        </p>

        <p>
          Together, let's build a greener, healthier, and more sustainable
          future—one plant at a time.
        </p>

      </section>

      <footer className="footer">

        <p>
          © 2026 Paradise Nursery Pvt. Ltd. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
};

export default AboutUs;
