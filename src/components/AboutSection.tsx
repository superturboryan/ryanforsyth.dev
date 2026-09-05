import FadeContent from './FadeContent';

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <FadeContent className="section-content">
        <h2 className="section-title">About</h2>
        <div className="about-text">
          <p>
            I'm a senior iOS engineer with over seven years of experience building and
            shipping apps. At Dyson, I worked on connected-device setup and control;
            at Meta, I helped improve account recovery and content review workflows.
          </p>
          <p>
            Independently, I create apps including WatchCloud and Bike Connect, using
            Swift and SwiftUI to build experiences that feel at home on Apple devices.
            I also share what I learn with the developer community, including a talk on{' '}
            <a href="https://www.youtube.com/watch?v=lslot4B_4y0" target="_blank" rel="noopener noreferrer">
              practical Core Bluetooth
            </a>{' '}at iOS Conf SG 2025.
          </p>
        </div>
      </FadeContent>
    </section>
  );
}
