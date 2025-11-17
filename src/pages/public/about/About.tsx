import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="about-title">Tentang Kami</h1>
          <p className="about-description">
            ARTHAWANA RENOVASI BANGUNAN adalah perusahaan jasa renovasi,
            perbaikan, dan konstruksi profesional di Jakarta Barat. Kami
            berkomitmen memberikan kualitas terbaik, tepat waktu, dan transparan
            dari desain hingga finishing.
          </p>
        </div>
      </section>

      <section className="about-mission container">
        <div className="mission-card">
          <h2 className="card-title">Visi</h2>
          <p className="card-content">
            Menjadi penyedia layanan renovasi dan konstruksi terpercaya dengan
            hasil berkualitas tinggi dan inovatif.
          </p>
        </div>

        <div className="mission-card">
          <h2 className="card-title">Misi</h2>
          <ul className="card-list">
            <li>Memberikan layanan renovasi & konstruksi profesional.</li>
            <li>
              Menggunakan material berkualitas & tenaga ahli berpengalaman.
            </li>
            <li>Mengutamakan kepercayaan, ketelitian, & ketepatan waktu.</li>
            <li>Memberikan solusi aman, efisien, sesuai anggaran.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
