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
        <p className="hero-subtitle">Senior iOS Engineer & Indie App Creator</p>
        <p className="hero-description">
          I build apps for Apple platforms, with a focus on connected devices and media.
          From the first prototype through launch and beyond.
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
