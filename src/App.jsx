import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="portfolio-app">
      {/* Background Ambience Layers */}
      <div className="bg-grid-layer" aria-hidden="true"></div>
      <div className="bg-glow-orb orb-top" aria-hidden="true"></div>
      <div className="bg-glow-orb orb-middle" aria-hidden="true"></div>
      <div className="bg-glow-orb orb-bottom" aria-hidden="true"></div>

      {/* 1. Navbar */}
      <Navbar />

      <main className="main-content">
        {/* 2. Hero */}
        <Hero />

        {/* 3. About */}
        <About />

        {/* 4. Education */}
        <Education />

        {/* 5. Skills */}
        <Skills />

        {/* 6. Featured Projects */}
        <Projects />

        {/* 7. Experience */}
        <Experience />

        {/* 8. Achievements & Certifications */}
        <Achievements />

        {/* 9. Resume Download Section */}
        <Resume />

        {/* 10. Contact */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}

export default App;
