import React from "react";
import "./Gallery.css";

// IMPORT GAMBAR
import img1 from "../../../assets/img/gmbr1 (1).jpeg";
import img2 from "../../../assets/img/gmbr1 (2).jpeg";
import img3 from "../../../assets/img/gmbr1 (9).jpeg";
import img4 from "../../../assets/img/gmbr1 (4).jpeg";
import img5 from "../../../assets/img/gmbr1 (5).jpeg";
import img6 from "../../../assets/img/gmbr1 (6).jpeg";
import img7 from "../../../assets/img/gmbr1 (7).jpeg";
import img8 from "../../../assets/img/gmbr1 (10).jpeg";
import img9 from "../../../assets/img/gmbr2 (1).png";
import img10 from "../../../assets/img/gmbr2 (2).png";
import img11 from "../../../assets/img/gmbr2 (3).png";

// Interface gallery item
interface GalleryItem {
  id: number;
  title: string;
  image_url: string;
}

const Gallery: React.FC = () => {
  const items: GalleryItem[] = [
    { id: 1, title: "Renovasi Total Rumah Tinggal", image_url: img1 },
    { id: 2, title: "Pembangunan Rumah Baru Minimalis", image_url: img2 },
    { id: 3, title: "Pekerjaan Struktur Lantai Atas", image_url: img3 },
    { id: 4, title: "Perubahan Fasad Rumah", image_url: img4 },
    { id: 5, title: "Pemasangan Dinding Bata Ringan", image_url: img5 },
    { id: 6, title: "Proyek Pembangunan Dua Lantai", image_url: img6 },
    { id: 7, title: "Konstruksi Balok & Kolom Beton", image_url: img7 },
    { id: 8, title: "Pekerjaan Rangka Atap Baja", image_url: img8 },
    { id: 9, title: "Renovasi Interior Dapur", image_url: img9 },
    { id: 10, title: "Finishing Fasad", image_url: img10 },
    { id: 11, title: "Pengecoran Struktur Beton", image_url: img11 },
  ];

  return (
    <div className="gallery-page-wrapper">
      <section className="gallery-section container">
        <div className="gallery-header">
          <h2 className="header-label-light">Portofolio</h2>
          <h1 className="header-label-bold">Galeri Proyek</h1>
          <div className="header-divider"></div>
        </div>

        <div className="gallery-grid">
          {items.map((i) => (
            <div key={i.id} className="gallery-card">
              <img
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
