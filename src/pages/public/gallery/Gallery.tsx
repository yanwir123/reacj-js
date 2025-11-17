import { useEffect, useState } from "react";
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

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res: GalleryResponse = await getGallery();
        setItems(res.data);
      } catch {
        setItems([]);
      }
    };

    fetchGallery();
  }, []);

  return (
    <div className="gallery-page">
      <section className="gallery-section container">
        <h1 className="section-title">Gallery</h1>

        <div className="gallery-grid">
          {items.map((i) => (
            <div key={i.id} className="gallery-card">
              <img
                src={`${
                  import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000"
                }/${i.image_url}`}
                alt={i.title}
                className="gallery-image"
              />
              <div className="gallery-info">
                <h4 className="gallery-title">{i.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
