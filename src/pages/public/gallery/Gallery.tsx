import React, { useEffect, useState } from "react";
import { getGallery } from "../../../api/gallery";
import "./Gallery.css";

// Interface gallery item
interface GalleryItem {
  id: number;
  title: string;
  image_url: string;
}

// Interface response API
interface GalleryResponse {
  data: GalleryItem[];
}

const Gallery: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res: GalleryResponse = await getGallery();
        setItems(res.data);
      } catch {
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  // Catatan: Placeholder image untuk kasus data masih kosong
  const placeholderItems = Array(10).fill({
    id: 0,
    title: "Memuat...",
    image_url: "",
  });

  const displayItems = loading && items.length === 0 ? placeholderItems : items;

  return (
    <div className="gallery-page-wrapper">
      <section className="gallery-section container">
        {/* Judul dengan style modern (mirip Contact/About) */}
        <div className="gallery-header">
          <h2 className="header-label-light">Portofolio</h2>
          <h1 className="header-label-bold">Galeri Proyek</h1>
          <div className="header-divider"></div>
        </div>

        {/* Tampilkan pesan loading jika data sedang dimuat */}
        {loading && items.length === 0 && (
          <p className="loading-text">Memuat foto galeri...</p>
        )}

        {/* Grid Foto */}
        <div className="gallery-grid">
          {displayItems.map((i, index) => (
            <div
              key={i.id === 0 ? `ph-${index}` : i.id}
              className={`gallery-card ${i.id === 0 ? "placeholder-card" : ""}`}
            >
              <img
                // Gunakan placeholder warna abu-abu jika sedang loading
                src={
                  i.id === 0
                    ? "https://placehold.co/400x400/f0f0f0/f0f0f0"
                    : `${
                        import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000"
                      }/${i.image_url}`
                }
                alt={i.title}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-info">
                {/* Judul hanya muncul saat data tidak loading */}
                {i.id !== 0 && <h4 className="gallery-title">{i.title}</h4>}
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder Pagination (Sesuai contoh gambar) */}
        {items.length > 0 && (
          <div className="gallery-pagination">
            <span className="current-page">01</span>
            <span className="divider">/</span>
            <span className="total-pages">05</span>
            <button className="nav-button" disabled>
              ←
            </button>
            <button className="nav-button">→</button>
          </div>
        )}

        {items.length === 0 && !loading && (
          <p className="no-data-text">
            Maaf, belum ada foto yang diunggah di galeri ini.
          </p>
        )}
      </section>
    </div>
  );
};

export default Gallery;
