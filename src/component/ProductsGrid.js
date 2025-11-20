import React from "react";
import "./ProductsGrid.css";

const products = [
  { icon: "👨‍🎓", title: "Student Data Management", desc: "Manage balance fees, fines, fee defaulters, and class/students-wise dues, extra income, and ledger with 10+ filters." },
  { icon: "💰", title: "Fee Management", desc: "The Fee Management system helps collect fees from specific students or parents anytime, ensuring smooth fee collection." },
  { icon: "📜", title: "Certificate Management", desc: "Allows you to view schedules, reports, activities, and assign permissions based on roles." },
  { icon: "🚗", title: "Transport Management", desc: "Send unlimited push notifications to all students or specific classes, along with the lowest-cost SMS services." },
  { icon: "📝", title: "Exam Management", desc: "Enables the generation of dynamic marksheets, offering 100+ customizable options." },
  { icon: "📊", title: "Report Card Management", desc: "Uses advanced technologies like fingerprint, face recognition, and RFID cards for biometric attendance tracking." },
  { icon: "👥", title: "Multi-User Access Control", desc: "Enable secure and flexible access to the exam system for admins, teachers, and students." },
  { icon: "📚", title: "Homework", desc: "Manage homework assignments and track attendance using biometric scanners and cloud-based systems." }
];

export default function ProductsGrid() {
  return (
    <section className="products-section">
      <div className="products-container">
        <h2 className="a">
         Product <span className="highlight">Varanasi Software Junction</span> for every Learning need
        </h2>
        <div className="products-grid">
          
          {products.map((item, index) => (
            <div className="product-card" key={index}>
              <div className="product-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
