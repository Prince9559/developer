import React, { useState, useEffect } from "react";
import "./testimonial.css";

export default function Testimonial() {
  const testimonials = [
    {
      quote:
        "“With real-time data sync and powerful insights, the platform boosts productivity and ensures smooth coordination across teams.”",
      img: "/Pic/sir.jpg",
      name: "Mr. Champak Roy",
      position: "Manager",
      school: "Varanasi Software Junction",
      bgColor: "#4db6ff"
    },
    {
      quote:
        "“I created this system to simplify complex tasks with automation and clean UI, ensuring faster performance and a seamless user experience.”",
      img: "/Pic/prince.jpg",
      name: "Mr. Prince Kumar",
      position: "Developer",
      school: "Varanasi Software Junction",
      bgColor: "#4caf50"
    },
    {
      quote:
        "“The platform provides accurate real-time analytics that reduce manual effort and support better technical decision-making.”",
      img: "/Pic/avi.jpg",
      name: "Mr. Avinash Singh",
      position: "Senior Python Developer",
      school: "Varanasi Software Junction",
      bgColor: "#ff7043"
    },
    {
      quote:
        "“A smooth interface with automated workflows makes the platform extremely user-friendly and reliable for daily operations.”",
      img: "/Pic/kishan.jpg",
      name: "Mr. Kishan Kumar",
      position: "Junior Full Stack Developer",
      school: "Varanasi Software Junction",
      bgColor: "#9575cd"
    },
    {
      quote:
        "“The tool helps track progress efficiently with a clean UI and organized workflow that simplifies overall management.”",
      img: "/Pic/sun.jpg",
      name: "Mr. Sundram Pal",
      position: "Junior Flutter Developer",
      school: "Varanasi Software Junction",
      bgColor: "#29b6f6"
    },
    {
      quote:
        "“Its automation engine removes repetitive work and saves hours of manual effort, boosting productivity across the team.”",
      img: "/Pic/amit.jpg",
      name: "Mr. Amit Singh",
      position: "Junior Flutter Developer",
      school: "Varanasi Software Junction",
      bgColor: "#ff5252"
    },
    {
      quote:
        "“The system delivers fast performance and accuracy, offering a smooth user experience with clean interaction flow.”",
      img: "/Pic/roshan.jpg",
      name: "Mr. Roshan Bind",
      position: "Front-End Developer",
      school: "Varanasi Software Junction",
      bgColor: "#ffa726"
    },
    {
      quote:
        "“A powerful platform with clean UI and reliable backend integration that ensures stable and efficient operation.”",
      img: "/Pic/piyush.jpg",
      name: "Mr. Piyush Maurya",
      position: "Junior Python Developer",
      school: "Varanasi Software Junction",
      bgColor: "#66bb6a"
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">Testimonials</h2>

      <div className="testimonial-container">
        <div
          className="testimonial-card"
          style={{ background: testimonials[index].bgColor }}
        >
          <p className="testimonial-quote">{testimonials[index].quote}</p>

          <div className="testimonial-author">
            <img
              src={testimonials[index].img}
              alt={testimonials[index].name}
              className="author-img"
            />
            <div>
              <h4 className="author-name">
                {testimonials[index].name}, {testimonials[index].position}
              </h4>

              <p className="author-school">{testimonials[index].school}</p>
            </div>
          </div>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
