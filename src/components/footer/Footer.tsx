import { Link } from "react-router-dom";
import logo from "../../assets/Logo nya.jpeg";
import "./Footer.css";

// Import ikon sosial media
import WhatsAppIcon from "../../assets/whatsapp.png";
import TikTokIcon from "../../assets/tiktok.png";
import InstagramIcon from "../../assets/instagram.png";
import YoutubeIcon from "../../assets/youtube.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Variabel untuk kontak
  const phoneNumber = "6287787942532";
  const whatsappMessage =
    "Halo ARTHAWANA, saya ingin konsultasi renovasi atau konstruksi";

  // Link Media Sosial (silakan ganti dengan URL akun Anda yang sebenarnya)
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  const instagramURL = "https://www.instagram.com/arthawana.official/"; // GANTI DENGAN AKUN ASLI ANDA
  const tiktokURL = "https://www.tiktok.com/@arthawana.official/"; // GANTI DENGAN AKUN ASLI ANDA
  const youtubeURL = "https://youtube.com/@konstruksi-36.?si=GT09RP10yqUO0nbV"; // Sesuai dengan yang Anda berikan

  return (
    <footer className="footer-section">
      <div className="footer-content-wrapper">
        {/* Kolom 1 — Brand */}
        <div className="footer-column brand-column">
          <Link to="/" className="footer-brand-link">
            <img
              src={logo}
              alt="Logo Arthamawa Renovasi"
              className="logo-image"
            />
            <div className="brand-text-container">
              <span className="brand-name">Arthawana Renovasi</span>
              <span className="brand-tagline">
                arthawana.com — Jakarta Barat
              </span>
            </div>
          </Link>
        </div>

        {/* Kolom 2 — Navigasi */}
        <div className="footer-column nav-column">
          <h4 className="column-title">Information</h4>
          <nav className="footer-nav-list">
            <Link to="/" className="footer-link-item">
              Home
            </Link>
            <Link to="/services" className="footer-link-item">
              Services
            </Link>
            <Link to="/gallery" className="footer-link-item">
              Gallery
            </Link>
            <Link to="/blog" className="footer-link-item">
              Blog
            </Link>
            <Link to="/about" className="footer-link-item">
              About
            </Link>
            <Link to="/contact" className="footer-link-item">
              Contact
            </Link>
          </nav>
        </div>

        {/* Kolom 3 — Kontak */}
        <div className="footer-column contact-column">
          <h4 className="column-title">Contacts</h4>

          <div className="contact-item">
            <span className="contact-icon"></span>
            <p>
              Anggrek No. 24 Rt. 10/03, Kel. Kelapa Dua, Kec. Kebon Jeruk —
              Jakarta Barat
            </p>
          </div>

          <div className="contact-item">
            <span className="contact-icon"></span>
            {/* Link langsung ke WhatsApp (walaupun di kolom kontak) */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              0877-8794-2532
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-icon"></span>
            <p>arthawnarenovasi@gmail.com</p>
          </div>
        </div>

        {/* Kolom 4 — Sosial Media */}
        <div className="footer-column social-column">
          <h4 className="column-title">Social Media</h4>
          <div className="social-links">
            {/* WhatsApp - Menggunakan wa.me untuk link langsung ke chat */}
            <a
              href={whatsappLink}
              className="social-icon-link"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={WhatsAppIcon}
                alt="WhatsApp"
                className="social-icon-img"
              />
            </a>

            {/* TikTok */}
            <a
              href={tiktokURL}
              className="social-icon-link"
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TikTokIcon} alt="TikTok" className="social-icon-img" />
            </a>

            {/* Instagram */}
            <a
              href={instagramURL}
              className="social-icon-link"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="social-icon-img"
              />
            </a>

            {/* YouTube */}
            <a
              href={youtubeURL}
              className="social-icon-link"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={YoutubeIcon}
                alt="YouTube"
                className="social-icon-img"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bagian Bawah */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {currentYear} Arthamawa Renovasi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
