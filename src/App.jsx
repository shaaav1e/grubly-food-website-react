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
      {/* <Preloader /> */}
      {/* Hero section as background */}
      <Hero />

      {/* Header component - fixed on top with no background */}
      <header className="fixed top-0 left-0 w-full z-30">
        <Header />
      </header>

      {/* Main content */}
      <main>
        <Service />
        <About />
        <Menu />
        <Testimonials />
        <Reviews />
        <Feature />
        <Event />
        <Footer />
      </main>
    </>
  );
}

export default App;
