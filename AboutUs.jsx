import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">

      {/* Header Section */}
      <section className="hero-section">
        <h1>About TechNova Solutions</h1>
        <p>
          Empowering businesses through innovative software solutions,
          cutting-edge technologies, and customer-centric digital services.
        </p>
      </section>

      {/* Company Introduction */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          TechNova Solutions is a modern software development company dedicated
          to providing innovative, scalable, and high-quality digital solutions
          for businesses of all sizes. Since our establishment, we have focused
          on helping organizations embrace digital transformation through
          technology-driven services.
        </p>

        <p>
          Our team consists of experienced software engineers, UI/UX designers,
          cloud specialists, data analysts, and cybersecurity professionals who
          work collaboratively to deliver reliable software products that exceed
          client expectations.
        </p>
      </section>

      {/* Mission */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses with intelligent software
          solutions that improve productivity, streamline operations, and create
          long-term value through innovation, quality, and continuous
          improvement.
        </p>
      </section>

      {/* Vision */}
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          To become one of the world's leading technology companies recognized
          for innovation, customer satisfaction, sustainability, and excellence
          in software engineering.
        </p>
      </section>

      {/* Core Values */}
      <section className="about-section">
        <h2>Our Core Values</h2>

        <ul>
          <li>✔ Innovation and Creativity</li>
          <li>✔ Customer Satisfaction</li>
          <li>✔ Integrity and Transparency</li>
          <li>✔ Teamwork and Collaboration</li>
          <li>✔ Continuous Learning</li>
          <li>✔ Quality Assurance</li>
          <li>✔ Social Responsibility</li>
          <li>✔ Professional Excellence</li>
        </ul>
      </section>

      {/* Services */}
      <section className="about-section">
        <h2>Our Services</h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>Web Development</h3>
            <p>
              We develop responsive, secure, and scalable web applications using
              the latest technologies including React, Angular, Node.js, and
              Django.
            </p>
          </div>

          <div className="service-card">
            <h3>Mobile App Development</h3>
            <p>
              We create Android and iOS applications with intuitive user
              interfaces and high performance using Flutter and React Native.
            </p>
          </div>

          <div className="service-card">
            <h3>Cloud Solutions</h3>
            <p>
              Our cloud experts help businesses migrate, deploy, and manage
              applications securely on AWS, Microsoft Azure, and Google Cloud.
            </p>
          </div>

          <div className="service-card">
            <h3>UI/UX Design</h3>
            <p>
              We design modern, user-friendly, and visually appealing interfaces
              that enhance customer experience and engagement.
            </p>
          </div>

          <div className="service-card">
            <h3>Cybersecurity</h3>
            <p>
              Protecting business data through security assessments, monitoring,
              penetration testing, and best cybersecurity practices.
            </p>
          </div>

          <div className="service-card">
            <h3>Artificial Intelligence</h3>
            <p>
              Delivering AI-powered applications including machine learning,
              predictive analytics, automation, and intelligent decision-making
              systems.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-section">
        <h2>Why Choose TechNova Solutions?</h2>

        <ul>
          <li>Experienced Software Development Team</li>
          <li>High-Quality Coding Standards</li>
          <li>Agile Development Methodology</li>
          <li>Affordable Pricing</li>
          <li>24/7 Technical Support</li>
          <li>Customer-Focused Development</li>
          <li>Scalable Software Solutions</li>
          <li>On-Time Project Delivery</li>
        </ul>
      </section>

      {/* Statistics */}
      <section className="about-section">
        <h2>Company Statistics</h2>

        <div className="stats">

          <div className="stat-box">
            <h3>500+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="stat-box">
            <h3>250+</h3>
            <p>Happy Clients</p>
          </div>

          <div className="stat-box">
            <h3>50+</h3>
            <p>Professional Developers</p>
          </div>

          <div className="stat-box">
            <h3>15+</h3>
            <p>Countries Served</p>
          </div>

        </div>
      </section>

      {/* Company Information */}
      <section className="about-section">
        <h2>Company Information</h2>

        <table border="1" cellPadding="10">
          <tbody>
            <tr>
              <td><strong>Company Name</strong></td>
              <td>TechNova Solutions Pvt. Ltd.</td>
            </tr>

            <tr>
              <td><strong>Founded</strong></td>
              <td>2020</td>
            </tr>

            <tr>
              <td><strong>Headquarters</strong></td>
              <td>Chennai, Tamil Nadu, India</td>
            </tr>

            <tr>
              <td><strong>Industry</strong></td>
              <td>Software Development</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>contact@technovasolutions.com</td>
            </tr>

            <tr>
              <td><strong>Phone</strong></td>
              <td>+91 98765 43210</td>
            </tr>

            <tr>
              <td><strong>Working Hours</strong></td>
              <td>Monday - Friday | 9:00 AM - 6:00 PM</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Closing Section */}
      <section className="about-section">
        <h2>Our Commitment</h2>

        <p>
          At TechNova Solutions, we believe technology should simplify business,
          enhance customer experiences, and create sustainable growth. Our
          commitment to quality, innovation, and continuous improvement enables
          us to build reliable software solutions that make a meaningful impact
          on organizations worldwide.
        </p>

        <p>
          We continue to invest in research, emerging technologies, and talent
          development to ensure our clients receive future-ready digital
          solutions. Every project we undertake reflects our passion for
          excellence and our dedication to delivering measurable business value.
        </p>
      </section>

    </div>
  );
};

export default AboutUs;
