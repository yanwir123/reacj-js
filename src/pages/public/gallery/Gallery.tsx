import React from "react";
import "./Gallery.css";

// Interface gallery item
interface GalleryItem {
  id: number;
  title: string;
  image_url: string;
}

const Gallery: React.FC = () => {
  // Data hardcode disesuaikan agar cocok dengan data layanan konstruksi/renovasi
  const items: GalleryItem[] = [
    {
      id: 1,
      title: "Renovasi Total Rumah Tinggal",
      image_url: "../../../../public/gmbr1 (1).jpeg", // Rumah Bpk. Wendy
    },
    {
      id: 2,
      title: "Pembangunan Rumah Baru Minimalis",
      image_url: "../../../../public/gmbr1 (2).jpeg", // Rumah Baru Putih
    },
    {
      id: 3,
      title: "Pekerjaan Struktur Lantai Atas",
      image_url: "../../../../public/gmbr1 (9).jpeg", // Struktur Rangka Atas
    },
    {
      id: 4,
      title: "Perubahan Fasad Rumah",
      image_url: "../../../../public/gmbr1 (4).jpeg", // Renovasi Bpk. Ray & Ibu Dinda
    },
    {
      id: 5,
      title: "Pemasangan Dinding Bata Ringan",
      image_url: "../../../../public/gmbr1 (5).jpeg", // Pemasangan Bata
    },
    {
      id: 6,
      title: "Proyek Pembangunan Dua Lantai",
      image_url: "../../../../public/gmbr1 (6).jpeg", // Proyek Kelapa Dua
    },
    {
      id: 7,
      title: "Konstruksi Balok & Kolom Beton",
      image_url: "../../../../public/gmbr1 (7).jpeg", // Pekerjaan Balok & Kolom
    },
    {
      id: 8,
      title: "Pekerjaan Rangka Atap Baja",
      image_url: "../../../../public/gmbr1 (10).jpeg", // Pekerja di atas rangka baja
    },
    {
      id: 9,
      title: "Renovasi Interior Dapur/Ruang Keluarga",
      image_url: "../../../../public/gmbr2 (1).png", // Renovasi Interior Before/After
    },
    {
      id: 10,
      title: "Pekerjaan Finishing Fasad",
      image_url: "../../../../public/gmbr2 (2).png", // Fasad dengan Roster
    },
    {
      id: 11,
      title: "Pengecoran Struktur Beton",
      image_url: "../../../../public/gmbr2 (3).png", // Pengecoran Truk Mixer
    },
  ];

  return (
    <div className="gallery-page-wrapper">
      <section className="gallery-section container">
        {/* Header */}
        <div className="gallery-header">
          <h2 className="header-label-light">Portofolio</h2>
          <h1 className="header-label-bold">Galeri Proyek</h1>
          <div className="header-divider"></div>
        </div>

        {/* Grid Foto */}
        <div className="gallery-grid">
          {items.map((i) => (
            <div key={i.id} className="gallery-card">
              <img
                // Perhatian: Pastikan path ini benar di proyek Anda.
                // Saya menggunakan struktur yang sama seperti Anda, tapi disarankan
                // untuk menggunakan path absolut atau import jika menggunakan framework seperti Next.js/Vite.
                src={i.image_url}
                alt={i.title}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-info">
                <h4 className="gallery-title">{i.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination statis (seperti contoh gambar) */}
        <div className="gallery-pagination">
          <span className="current-page">01</span>
          <span className="divider">/</span>
          <span className="total-pages">05</span>
          <button className="nav-button" disabled>
            ←
          </button>
          <button className="nav-button">→</button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
