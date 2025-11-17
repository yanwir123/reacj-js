import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

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
          <img
            src="../../../public/Logo nya.jpeg"
            alt="Logo"
            className="logo"
          />
          <div className="text-container">
            <span className="name">Arthamawa Renovasi</span>
            <span className="tagline">
              arthawarnarenovasi.com — Jakarta Barat
            </span>
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

        {/* Auth buttons desktop */}
        <div className="navbar-auth desktop">
          {!token ? (
            <>
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
              <Link to="/register" className="btn btn-outline">
                Register
              </Link>
            </>
          ) : (
            <>
              {role === "admin" && (
                <Link to="/admin" className="btn btn-primary">
                  Admin
                </Link>
              )}
              <button onClick={handleLogout} className="btn btn-danger">
                Logout
              </button>
            </>
          )}
        </div>

        {/* Hamburger button */}
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
            <div className="navbar-auth mobile">
              {!token ? (
                <>
                  <Link
                    to="/login"
                    className="btn btn-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="btn btn-outline"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Register
                  </Link>
                </>
              ) : (
                <>
                  {role === "admin" && (
                    <Link
                      to="/admin"
                      className="btn btn-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Admin
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="btn btn-danger"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
