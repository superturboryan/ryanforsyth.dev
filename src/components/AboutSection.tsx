import FadeContent from './FadeContent';

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <FadeContent className="section-content">
        <h2 className="section-title">About</h2>
        <div className="about-text">
          <p>
            I'm passionate about building native experiences for Apple platforms. 
            With a focus on Swift and SwiftUI, I create apps that feel at home on your devices.
          </p>
          <p>
            Beyond app development, I'm particularly interested in Bluetooth and connected
            device ecosystems. I've had the opportunity to share my knowledge at iOS
            conferences, speaking about topics I'm passionate about in the Apple developer
            community.
          </p>
        </div>
      </FadeContent>
    </section>
  );
}
