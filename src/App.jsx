import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import About from "./components/About";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Reviews from "./components/Reviews";
import Feature from "./components/Feature";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

function App() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Service />
        <About />
        <Menu />
        <Testimonials />
        <Reviews />
        <Feature />
        <Event />
      </main>
      <Footer />
    </>
  );
}

export default App;
