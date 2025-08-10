 import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./component/Navbar";
import ProductsGrid from "./component/ProductsGrid";
import Hero from "./component/Hero";
import ServicesSection from "./component/ServicesSection";
import HeroSection from "./component/HeroSection";
import Store from "./component/Store";
import Testimonial from "./component/Testimonial";
import Timeline from "./component/Timeline";
import Values from "./component/Values";
import Footer from "./component/Footer";


function App() {

  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div>
      <Navbar onOpenForm={() => setIsFormOpen(true)} />

      <section id="home"><Hero /></section>

      <section id="products"><ProductsGrid /></section>

      <section id="services"><ServicesSection/></section>

      <HeroSection onOpenForm={() => setIsFormOpen(true)} />

      <section id="contact"><Store isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}/></section>

      <Testimonial />
      <Timeline />
      <Values />
      <Footer />
      
    </div>
  );
}

export default App;
