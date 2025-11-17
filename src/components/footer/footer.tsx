import { Link } from "react-router-dom";
import logo from "../../../public/Logo nya.jpeg"; // pastikan file logo ada di src/assets/
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo dan Nama */}
        <div className="footer-brand">
          <img src={logo} alt="Logo" className="footer-logo" />
          <div>
            <span className="footer-name">Arthamawa Renovasi</span>
            <span className="footer-tagline">
              arthawarnarenovasi.com — Jakarta Barat
            </span>
          </div>
        </div>

        {/* Navigasi */}
        <nav className="footer-nav">
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/services" className="footer-link">
            Services
          </Link>
          <Link to="/gallery" className="footer-link">
            Gallery
          </Link>
          <Link to="/blog" className="footer-link">
            Blog
          </Link>
          <Link to="/about" className="footer-link">
            About
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </nav>

        {/* Copyright */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Arthamawa Renovasi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
