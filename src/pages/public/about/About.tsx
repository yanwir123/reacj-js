import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* ================= HERO SECTION ================= */}
      <section className="about-hero">
        <div className="container hero-content">
          <h1 className="hero-title">Tentang Kami</h1>
          <div className="hero-divider"></div>
          <p className="hero-description">
            <strong>ARTHAWANA RENOVASI BANGUNAN</strong> adalah mitra terpercaya
            Anda dalam jasa renovasi, perbaikan, dan konstruksi profesional di
            Jakarta Barat. Kami berdedikasi untuk menghadirkan kualitas terbaik,
            ketepatan waktu, dan transparansi penuh mulai dari tahap perencanaan
            desain hingga penyelesaian akhir.
          </p>
        </div>
      </section>

      {/* ================= VISI & MISI SECTION ================= */}
      <section className="about-values container">
        <div className="values-grid">
          {/* VISI */}
          <div className="value-card">
            <h2 className="value-title">Visi</h2>
            <p className="value-text">
              Menjadi penyedia layanan renovasi dan konstruksi terdepan yang
              dikenal karena integritas, inovasi, dan hasil berkualitas tinggi
              yang melampaui ekspektasi klien.
            </p>
          </div>

          {/* MISI */}
          <div className="value-card">
            <h2 className="value-title">Misi</h2>
            <ul className="value-list">
              <li>
                Memberikan layanan renovasi & konstruksi yang profesional dan
                terukur.
              </li>
              <li>
                Menggunakan material standar terbaik didukung tenaga ahli
                berpengalaman.
              </li>
              <li>
                Membangun hubungan berdasarkan kepercayaan, ketelitian, &
                ketepatan waktu.
              </li>
              <li>
                Menghadirkan solusi konstruksi yang aman, efisien, dan sesuai
                anggaran.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="about-contact-section container">
        <div className="contact-container-split">
          {/* === KIRI — Informasi Singkat === */}
          <div className="contact-text-area">
            <h2 className="contact-label-light">Contact</h2>
            <h1 className="contact-label-bold">Information</h1>
            {/* === KANAN — Detail Lengkap === */}
            <div className="info-details">
              <div className="info-item">
                <h3>Alamat Kantor</h3>
                <p>
                  Anggrek No.24 Rt.10/03, Kel. Kelapa Dua,
                  <br />
                  Kec. Kebon Jeruk, Jakarta Barat
                </p>
              </div>

              <div className="info-item">
                <h3>Telepon / WhatsApp</h3>
                <p>
                  <strong>Romdon M:</strong> 0877-8794-2532
                </p>
                <p>
                  <strong>Iwan S:</strong> 0856-9322-1161
                </p>
              </div>

              <div className="info-item">
                <h3>Email & Website</h3>
                <p>ptarthawana.renovasibangunan@gmail.com</p>
                <p>www.arthawana.com</p>
              </div>

              <a
                href="https://wa.me/6287787942532"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-contact-dark"
              >
                CONTACT US
              </a>
            </div>
          </div>

          {/* Kanan - Map */}
          <div className="contact-map-box">
            <iframe
              title="Lokasi ARTHAWANA"
              src="https://maps.google.com/maps?q=Jl.+Anggrek+No.24+Kebon+Jeruk&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
