import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import About from "./components/About";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
function App() {
  return (
    <>
      {/* <Preloader /> */}
      <Cursor />
      {/* Hero section as background */}
      <Hero />

      {/* Header component - fixed on top with no background */}
      <header className="fixed top-0 left-0 w-full z-20">
        <Header />
      </header>

      {/* Main content */}
      <main>
        <Service />
        <About />
        {/* <Menu /> */}
        <Testimonials />
        {/* <Contact /> */}
        <Footer />
      </main>
    </>
  );
}

export default App;
