export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">© {currentYear} SuperTurboRyan</p>
      </div>
    </footer>
  );
}
