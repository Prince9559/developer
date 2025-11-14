 import React from "react";
import "./testimonial.css";

export default function Testimonial() {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">Testimonials</h2>

      <div className="testimonial-container">
        <div className="testimonial-card">
          <p className="testimonial-quote">
            “With real-time data sync and insights across stakeholders, the
            connected classroom environment ensures timely interventions to
            improve the learning outcomes of students.”
          </p>

          <div className="testimonial-author">
            <img src="/Pic/ss.jpg" alt="Mr. Binod Kumar Mishra"className="author-img"/>
            <div>

              <h4 className="author-name">
                Mr. Champak Roy, Manager
              </h4>
              
              <p className="author-school">Varanasi Software Junction</p>
            </div>
          </div>
        </div>

    
        <div className="testimonial-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
}
