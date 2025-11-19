import { Link } from "react-router-dom";
// Pastikan path logo ini sama dengan yang digunakan di Navbar
import logo from "../../public/Logo nya.jpeg";
import "./footer/Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-content-wrapper">
        {/* --- Kolom 1: Logo dan Nama (Seperti Navbar) --- */}
        <div className="footer-column brand-column">
          <Link to="/" className="navbar-logo-link">
            <img
              src={logo}
              alt="Logo Arthamawa Renovasi"
              className="logo-image"
            />
            <div className="brand-text-container">
              <span className="brand-name">Arthamawa Renovasi</span>
              <span className="brand-tagline">
                arthawarnarenovasi.com - Jakarta Barat
              </span>
            </div>
          </Link>
        </div>

        {/* --- Kolom 2: Navigasi Cepat (Information) --- */}
        <div className="footer-column nav-column">
          <h4 className="column-title">Information</h4>
          <nav className="footer-nav-list">
            <Link to="/" className="footer-link-item">
              {" "}
              Home{" "}
            </Link>
            <Link to="/services" className="footer-link-item">
              {" "}
              Services{" "}
            </Link>
            <Link to="/gallery" className="footer-link-item">
              {" "}
              Gallery{" "}
            </Link>
            <Link to="/blog" className="footer-link-item">
              {" "}
              Blog{" "}
            </Link>
            <Link to="/about" className="footer-link-item">
              {" "}
              About{" "}
            </Link>
            <Link to="/contact" className="footer-link-item">
              {" "}
              Contact{" "}
            </Link>
          </nav>
        </div>

        {/* --- Kolom 3: Kontak (Contacts) --- */}
        <div className="footer-column contact-column">
          <h4 className="column-title">Contacts</h4>

          <div className="contact-item">
            <span className="contact-icon location-icon">📍</span>
            <div>
              <p>Jakarta Barat</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon phone-icon">📞</span>
            <p>+62 XXXX XXXX</p>
          </div>

          <div className="contact-item">
            <span className="contact-icon email-icon">📧</span>
            <p>info@arthamawa.com</p>
          </div>
        </div>

        {/* --- Kolom 4: Social Media (Media Sosial) --- */}
        <div className="footer-column social-column">
          <h4 className="column-title">Social Media</h4>
          <div className="social-links">
            {/* Menggunakan placeholder huruf seperti di contoh sebelumnya */}
            <a href="#" aria-label="Facebook" className="social-icon-link">
              {" "}
              F{" "}
            </a>
            <a href="#" aria-label="Twitter" className="social-icon-link">
              {" "}
              T{" "}
            </a>
            <a href="#" aria-label="Instagram" className="social-icon-link">
              {" "}
              I{" "}
            </a>
            <a href="#" aria-label="LinkedIn" className="social-icon-link">
              {" "}
              In{" "}
            </a>
          </div>
        </div>
      </div>

      {/* --- Bagian Bawah: Copyright --- */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {currentYear} Arthamawa Renovasi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
