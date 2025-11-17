import { Link } from "react-router-dom";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">ARTHAWANA - Jasa Renovasi & Konstruksi</h1>
          <p className="hero-subtitle">
            Mewujudkan Hunian & Bangunan Impian Anda — Profesional, Rapi,
            Bergaransi
          </p>
          <p className="hero-description">
            ARTHAWANA siap membantu renovasi rumah, pembangunan baru, perbaikan
            atap, renovasi kamar mandi & dapur, serta desain interior dengan
            tenaga berpengalaman dan material berkualitas.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Konsultasi Gratis
            </Link>
            <Link to="/gallery" className="btn btn-outline">
              Lihat Galeri
            </Link>
          </div>
        </div>
      </section>

      {/* Features / Highlights */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <h3>📌 Tenaga Ahli</h3>
              <p>Arsitek & Tukang bersertifikat</p>
            </div>
            <div className="feature-card">
              <h3>🛠 Material Terjamin</h3>
              <p>Material berkualitas, tahan lama</p>
            </div>
            <div className="feature-card">
              <h3>💰 Harga Transparan</h3>
              <p>Detail RAB & tanpa biaya tersembunyi</p>
            </div>
            <div className="feature-card">
              <h3>📍 Lokasi</h3>
              <p>Anggrek No.24 Rt.10/03, Kelapa Dua, Kebon Jeruk</p>
            </div>
            <div className="feature-card">
              <h3>📞 Kontak</h3>
              <p>0877-8794-2532</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Layanan Unggulan</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Renovasi Rumah</h3>
              <p>Mengubah hunian menjadi lebih nyaman & modern</p>
            </div>
            <div className="service-card">
              <h3>Pembangunan Baru</h3>
              <p>Bantu wujudkan bangunan impian dari nol</p>
            </div>
            <div className="service-card">
              <h3>Renovasi Kamar Mandi & Dapur</h3>
              <p>Praktis, bersih, dan desain modern</p>
            </div>
            <div className="service-card">
              <h3>Desain Interior</h3>
              <p>Estetika & fungsi ruang optimal</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
