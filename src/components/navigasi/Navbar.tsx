import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src="../../assets/Logo nya.jpeg" alt="Logo" className="logo" />
          <div className="text-container">
            <span className="name">Arthawana Renovasi</span>
            <span className="tagline">Arthawana.com — Jakarta Barat</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar-nav desktop">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className="nav-item">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="navbar-nav mobile">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
