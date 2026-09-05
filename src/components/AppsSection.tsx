import FadeContent from './FadeContent';
import SpotlightCard from './SpotlightCard';

const apps = [
  {
    "name": "WatchCloud",
    "icon": "/apps/watchcloud.png",
    "platforms": "iOS · watchOS",
    "description": "Stream SoundCloud on your Apple Watch.",
    "storeUrl": "https://apps.apple.com/us/app/watchcloud/id6466678799",
    "storeLabel": "App Store",
    "websiteUrl": "https://watchcloud.app"
  },
  {
    "name": "Bike Connect",
    "icon": "/apps/bike-connect.png",
    "platforms": "iOS · macOS · watchOS · Android",
    "description": "Control Apple devices with your Di2 bike.",
    "storeUrl": "https://apps.apple.com/us/app/bike-connect-ride-in-control/id6746517051",
    "storeLabel": "App Store",
    "websiteUrl": "https://bike-connect.app"
  },
  {
    "name": "LocationLock",
    "icon": "/apps/locationlock.png",
    "platforms": "iOS · watchOS",
    "description": "Get alerts when your device is moved or unplugged.",
    "storeUrl": "https://apps.apple.com/us/app/locationlock-detect-protect/id6748995958",
    "storeLabel": "App Store"
  },
  {
    "name": "Tethr",
    "icon": "/apps/tethr.png",
    "platforms": "watchOS · Android",
    "description": "Connect Apple Watch to Android.",
    "storeUrl": "https://testflight.apple.com/join/HGPshktm",
    "storeLabel": "TestFlight"
  },
  {
    "name": "Schedule-A-Click",
    "icon": "/apps/schedule-a-click.png",
    "platforms": "macOS",
    "description": "Automate mouse clicks on macOS.",
    "storeUrl": "https://apps.apple.com/us/app/schedule-a-click/id6747453453",
    "storeLabel": "App Store"
  },
  {
    "name": "Magic Tapper",
    "icon": "/apps/magic-tapper.png",
    "platforms": "iOS · watchOS",
    "description": "Power up your Apple Watch double tap feature.",
    "storeUrl": "https://apps.apple.com/us/app/magic-tapper/id6738328808",
    "storeLabel": "App Store"
  }
];

export default function AppsSection() {
  return (
    <section id="apps" className="section">
      <div className="section-content">
        <FadeContent><h2 className="section-title">Apps</h2></FadeContent>
        <div className="apps-grid">
          {apps.map(app => (
            <FadeContent className="app-reveal" key={app.name}>
              <SpotlightCard>
                <div className="app-card-header">
                  <img src={app.icon} alt="" className="app-icon" width={64} height={64} />
                  <div className="app-card-heading">
                    <h3 className="app-name">{app.name}</h3>
                    <p className="app-platforms">{app.platforms}</p>
                  </div>
                </div>
                <p className="app-description">{app.description}</p>
                <div className="app-links">
                  <a href={app.storeUrl} target="_blank" rel="noopener noreferrer" aria-label={`${app.name} on ${app.storeLabel}`}>
                    {app.storeLabel} <span aria-hidden="true">↗</span>
                  </a>
                  {app.websiteUrl && (
                    <a href={app.websiteUrl} target="_blank" rel="noopener noreferrer" aria-label={`${app.name} website`}>
                      Website <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </SpotlightCard>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
