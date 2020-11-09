import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";
import Extensions from "./Components/Extensions/Extensions";
import FAQ from "./Components/FAQ/FAQ";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Hero />
        <Features />
        <Extensions />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
