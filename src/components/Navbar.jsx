import { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon, DownloadIcon } from './Icons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Resume', href: '#resume', id: 'resume' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy to detect active section
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'experience', 'achievements', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#hero" className="nav-brand" aria-label="Deepak Pandit Home">
          <span className="brand-bracket">&lt;</span>
          <span className="brand-text">Deepak Pandit</span>
          <span className="brand-slash">/</span>
          <span className="brand-bracket">&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.label}
                  {activeSection === link.id && <span className="nav-active-indicator" />}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#resume"
            className="btn btn-outline btn-sm nav-resume-btn"
          >
            <DownloadIcon size={14} />
            <span>CV</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-drawer-footer">
            <a
              href="#resume"
              className="btn btn-outline w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <DownloadIcon size={16} />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              className="btn btn-primary w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Me
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
