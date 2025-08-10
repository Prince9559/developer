import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">


        <div className="footer-column">
          <h3>A2 Developers</h3>
          <p>
            A2 Developers is the premier agency directory, awards platform,
            and media hub connecting brands with top agencies in software,
            app development, design. We deliver vetted reviews, insights,
            and trends to drive business growth.
          </p>
          <p>© A2 Developers 2024 - 25, All Rights Reserved</p>
        </div>


        <div className="footer-column">
          <h4>WHO WE ARE</h4>
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>


        <div className="footer-column">
          <h4>Modules</h4>
          <ul>
            <li>Student Management</li>
            <li>Fee Management</li>
            <li>Employee Management</li>
            <li>Certificate Management</li>
            <li>Transport Management</li>
            <li>Exam Management</li>
            <li>Report Management</li>
          </ul>
        </div>


        <div className="footer-column">
          <h4>Our Services</h4>
          <ul>
            <li>School ERP</li>
            <li>Email Services</li>
            <li>Website Design</li>
            <li>Digital Marketing</li>
            <li>Domain & Hosting</li>
            <li>Wordpress Development</li>
            <li>E-commerce Development</li>
            <li>Android App Development</li>
            <li>Search Engine Optimization</li>
          </ul>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B918303837930&text=I+am+Looking+for+a+school+ERP+%2C+Please+Share+Me+More+Details+about+how+to+Enroll.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            WhatsApp
          </a>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/a2-developers/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/people/VidyaMint/61566325152930/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/a2.developers/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@VidyaMint12" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <ul>
          <li>Sitemap</li>
          <li>Privacy Policy</li>
          <li>Cancellation and Refund Policy</li>
          <li>Shipping and Delivery Policy</li>
          <li>Terms & Condition</li>
        </ul>
      </div>
    </footer>
  );
}
