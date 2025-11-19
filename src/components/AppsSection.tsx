export default function AppsSection() {
  return (
    <section id="apps" className="section">
      <div className="section-content">
        <h2 className="section-title">Apps</h2>
        <div className="apps-grid">
          <div className="app-card">
            <img src="/apps/watchcloud.png" alt="WatchCloud icon" className="app-icon" />
            <h3 className="app-name">WatchCloud</h3>
            <div className="platform-tags">
              <span className="platform-tag">iOS</span>
              <span className="platform-tag">watchOS</span>
            </div>
            <p className="app-description">
              Stream SoundCloud on your Apple Watch. <a href="https://watchcloud.app" target="_blank" rel="noopener noreferrer" className="app-website-link">Learn more →</a>
            </p>
            <a href="https://apps.apple.com/us/app/watchcloud/id6466678799" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on App Store</a>
          </div>

          <div className="app-card">
            <img src="/apps/bike-connect.png" alt="Bike Connect icon" className="app-icon" />
            <h3 className="app-name">Bike Connect</h3>
            <div className="platform-tags">
              <span className="platform-tag">iOS</span>
              <span className="platform-tag">macOS</span>
              <span className="platform-tag">watchOS</span>
              <span className="platform-tag">Android</span>
            </div>
            <p className="app-description">
              Control Apple devices with your Di2 bike.
            </p>
            <a href="https://apps.apple.com/us/app/bike-connect-ride-in-control/id6746517051" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on App Store</a>
          </div>

          <div className="app-card">
            <img src="/apps/locationlock.png" alt="LocationLock icon" className="app-icon" />
            <h3 className="app-name">LocationLock</h3>
            <div className="platform-tags">
              <span className="platform-tag">iOS</span>
              <span className="platform-tag">watchOS</span>
            </div>
            <p className="app-description">
              Get alerts when your device is moved or unplugged.
            </p>
            <a href="https://apps.apple.com/us/app/locationlock-detect-protect/id6748995958" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on App Store</a>
          </div>

          <div className="app-card">
            <img src="/apps/tethr.png" alt="Tethr icon" className="app-icon" />
            <h3 className="app-name">Tethr</h3>
            <div className="platform-tags">
              <span className="platform-tag">watchOS</span>
              <span className="platform-tag">Android</span>
            </div>
            <p className="app-description">
              Connect Apple Watch to Android.
            </p>
            <a href="https://testflight.apple.com/join/HGPshktm" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View on TestFlight ✈️</a>
          </div>

          <div className="app-card">
            <img src="/apps/schedule-a-click.png" alt="Schedule-A-Click icon" className="app-icon" />
            <h3 className="app-name">Schedule-A-Click</h3>
            <div className="platform-tags">
              <span className="platform-tag">macOS</span>
            </div>
            <p className="app-description">
              Automate mouse clicks on macOS.
            </p>
            <a href="https://apps.apple.com/us/app/schedule-a-click/id6747453453" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on App Store</a>
          </div>

          <div className="app-card">
            <img src="/apps/magic-tapper.png" alt="Magic Tapper icon" className="app-icon" />
            <h3 className="app-name">Magic Tapper</h3>
            <div className="platform-tags">
              <span className="platform-tag">iOS</span>
              <span className="platform-tag">watchOS</span>
            </div>
            <p className="app-description">
              Power up your Apple Watch double tap feature.
            </p>
            <a href="https://apps.apple.com/us/app/magic-tapper/id6738328808" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on App Store</a>
          </div>
        </div>
      </div>
    </section>
  );
}
