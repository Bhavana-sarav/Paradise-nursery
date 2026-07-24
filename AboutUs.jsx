import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">

      <header className="about-header">
        <h1>About Our Company</h1>
        <p>
          Delivering innovative technology solutions that empower businesses
          and improve lives across the globe.
        </p>
      </header>

      <section className="about-section">
        <h2>Who We Are</h2>

        <p>
          TechNova Solutions Pvt. Ltd. is a leading software development
          company committed to delivering innovative, reliable, and
          high-performance digital solutions. Since our establishment, we have
          been helping businesses transform their ideas into scalable web,
          mobile, and cloud-based applications.
        </p>

        <p>
          Our team consists of experienced software engineers, UI/UX designers,
          quality analysts, project managers, and cloud specialists who work
          together to build secure and efficient applications. We focus on
          delivering quality software while maintaining transparency,
          professionalism, and customer satisfaction throughout every stage of
          development.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>

        <p>
          Our mission is to create innovative technology solutions that solve
          real-world problems while delivering exceptional value to our clients.
          We strive to build products that improve business productivity,
          enhance customer experiences, and support sustainable digital growth.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>

        <p>
          To become a globally recognized software company known for innovation,
          quality, integrity, and customer success. We aim to shape the future
          through advanced technologies including Artificial Intelligence,
          Machine Learning, Cloud Computing, Data Analytics, and Cybersecurity.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Services</h2>

        <ul>
          <li>Custom Software Development</li>
          <li>Website Design and Development</li>
          <li>Mobile Application Development</li>
          <li>Cloud Computing Solutions</li>
          <li>Artificial Intelligence Solutions</li>
          <li>Machine Learning Applications</li>
          <li>Cyber Security Services</li>
          <li>Database Design and Management</li>
          <li>API Development and Integration</li>
          <li>UI/UX Design</li>
          <li>Digital Transformation Consulting</li>
          <li>Software Testing and Quality Assurance</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Why Choose Us?</h2>

        <ul>
          <li>✔ Experienced and Certified Development Team</li>
          <li>✔ Customer-Centric Approach</li>
          <li>✔ Agile Development Methodology</li>
          <li>✔ Secure and Scalable Solutions</li>
          <li>✔ Timely Project Delivery</li>
          <li>✔ Affordable Pricing</li>
          <li>✔ 24/7 Technical Support</li>
          <li>✔ High Quality Standards</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our Core Values</h2>

        <div className="values">
          <div>
            <h3>Innovation</h3>
            <p>
              We continuously embrace new technologies and creative thinking to
              deliver advanced digital solutions.
            </p>
          </div>

          <div>
            <h3>Integrity</h3>
            <p>
              We conduct business with honesty, transparency, and ethical
              practices in every project.
            </p>
          </div>

          <div>
            <h3>Quality</h3>
            <p>
              Delivering high-quality software is our highest priority, ensuring
              reliability and long-term value.
            </p>
          </div>

          <div>
            <h3>Customer Success</h3>
            <p>
              We believe our success is directly connected to the success of our
              clients and partners.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Company Statistics</h2>

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Category</th>
              <th>Achievement</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Years of Experience</td>
              <td>10+</td>
            </tr>

            <tr>
              <td>Projects Completed</td>
              <td>500+</td>
            </tr>

            <tr>
              <td>Global Clients</td>
              <td>150+</td>
            </tr>

            <tr>
              <td>Countries Served</td>
              <td>20+</td>
            </tr>

            <tr>
              <td>Professional Employees</td>
              <td>120+</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="about-section">
        <h2>Contact Information</h2>

        <p><strong>Company Name:</strong> TechNova Solutions Pvt. Ltd.</p>

        <p><strong>Address:</strong> 123 Innovation Park, Bengaluru, Karnataka, India</p>

        <p><strong>Email:</strong> info@technovasolutions.com</p>

        <p><strong>Phone:</strong> +91 98765 43210</p>

        <p><strong>Website:</strong> www.technovasolutions.com</p>

        <p>
          We welcome collaborations, partnerships, and business inquiries.
          Feel free to contact us for software development, consulting,
          or technology solutions tailored to your business needs.
        </p>
      </section>

      <footer className="about-footer">
        <h3>Building Tomorrow's Technology Today</h3>

        <p>
          © 2026 TechNova Solutions Pvt. Ltd. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
};

export default AboutUs;
