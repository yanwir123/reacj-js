import { Link } from "react-router-dom";
import "./Home.css";
import Services from "../service/Services";
import Blog from "../blog/Blog";
import Gallery from "../gallery/Gallery";
import Contact from "../contact/Contact";
import About from "../about/About";
import hero from "../../../assets/img/gmbr1 (7).jpeg";

export default function Home() {
  return (
    <div className="home-wrapper">
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-right">
          <img src={hero} className="hero-img" />
        </div>
        <div className="hero-left">
          <h2 className="hero-project">Jasa Renovasi & Konstruksi</h2>
          <h1 className="hero-title">Mewujudkan Hunian Impian Anda</h1>
          <p className="hero-desc">
            ARTHAWANA siap membantu renovasi rumah, pembangunan baru, perbaikan
            atap, renovasi kamar mandi & dapur, serta desain interior dengan
            tenaga ahli berpengalaman dan material berkualitas.
          </p>

          <div className="hero-buttons">
            <a
              href="https://wa.me/6287787942532"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Konsultasi Gratis
            </a>
            <Link to="/gallery" className="btn-outline">
              Lihat Galeri
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <h3>Tenaga Ahli</h3>
            <p>Arsitek & tukang bersertifikat</p>
          </div>
          <div className="feature-card">
            <h3>Material Terjamin</h3>
            <p>Material berkualitas & tahan lama</p>
          </div>
          <div className="feature-card">
            <h3>Harga Transparan</h3>
            <p>Detail RAB & tanpa biaya tersembunyi</p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <About />

      {/* ================= ESTIMASI ================= */}
      <section className="estimate">
        <h2>Permintaan Estimasi</h2>
        <p className="estimate-desc">
          Isi form singkat, tim kami akan menghubungi Anda untuk survei &
          estimasi biaya.
        </p>

        <form className="estimate-form">
          <input type="text" placeholder="Nama lengkap" />
          <input type="text" placeholder="Nomor WhatsApp" />
          <input type="text" placeholder="Lokasi proyek (kota)" />
          <select>
            <option>Pilih layanan yang dibutuhkan</option>
            <option>Renovasi Rumah</option>
            <option>Renovasi Dapur</option>
            <option>Renovasi Kamar Mandi</option>
            <option>Pembangunan Baru</option>
            <option>Perbaikan Atap</option>
          </select>
          <textarea
            placeholder="Deskripsi singkat (opsional)"
            rows={5}
          ></textarea>
          <button type="submit">Kirim Permintaan</button>
        </form>
      </section>

      {/* ================= SERVICES ================= */}
      <Services />

      {/* ================= ARTICLES ================= */}
      <Blog />

      {/* ================= GALLERY ================= */}
      <Gallery />

      {/* ================= CONTACT ================= */}
      <Contact />
    </div>
  );
}
