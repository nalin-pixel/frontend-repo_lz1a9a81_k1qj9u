import React from 'react';
import Hero from './components/Hero';
import ParallaxGallery from './components/ParallaxGallery';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-indigo-500/30 selection:text-white">
      <Hero />
      <ParallaxGallery />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
