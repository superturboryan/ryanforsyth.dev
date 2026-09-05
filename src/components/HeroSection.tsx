import FadeContent from './FadeContent';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }
  };

  return (
    <section className="hero">
      <FadeContent className="hero-content">
        <h1 className="hero-title">Ryan Forsyth</h1>
        <p className="hero-subtitle">Apple Platforms Engineer & Indie App Creator</p>
        <p className="hero-description">
          I design and ship delightful, high-performance apps for iOS, macOS, and watchOS. 
          From 0 → 1 prototypes to polished App Store releases.
        </p>
        <div className="hero-cta">
          <button onClick={() => scrollToSection('apps')} className="hero-cta-link">
            View Apps →
          </button>
        </div>
      </FadeContent>
    </section>
  );
}
