import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">


        <div className="footer-column">
          <h3>Varanasi Software Junction</h3>
          <p>
            Varanasi Software Junction is the premier agency directory, awards platform,
            and media hub connecting brands with top agencies in software,
            app development, design. We deliver vetted reviews, insights,
            and trends to drive business growth.
          </p>
          <p>© Varanasi Software Junction 2024 - 25, All Rights Reserved</p>
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
            href="https://wa.me/919559618602"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn">
           <div className="b">WhatsApp</div>
          </a>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/prince-kumar-724160333/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/share/188L8ad4ag/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/roshan_bind12?utm_source=qr&igsh=MWV5dHQ5NTVrbzh0Mw==" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@champaksworld" target="_blank" rel="noopener noreferrer">
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
