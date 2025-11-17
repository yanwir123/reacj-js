import AdminSidebar from "../../../components/admin/AdminSidebar";
import { useEffect, useState } from "react";
import "./ManageGallery.css";
import { getGallery, createGallery, deleteGallery } from "../../../api/gallery";

// Interface gallery
interface GalleryItem {
  id: number;
  title: string;
  image_url: string;
}

// Response API
interface GalleryResponse {
  data: GalleryItem[];
}

// Error interface
interface ApiError {
  response?: {
    data?: {
      detail?: string;
    };
  };
}

const ManageGallery: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [title, setTitle] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  // Load gallery
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await getGallery();
        if (isMounted) {
          const data = response as GalleryResponse;
          setItems(data.data);
        }
      } catch {
        if (isMounted) setItems([]);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  // Submit create
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", title);
    if (file) form.append("file", file);

    try {
      await createGallery(form);
      setTitle("");
      setFile(null);
      const response = await getGallery();
      const data = response as GalleryResponse;
      setItems(data.data);
    } catch (err: unknown) {
      const error = err as ApiError;
      alert(error.response?.data?.detail || "Error saat menambahkan gallery");
    }
  };

  // Delete gallery
  const onDelete = async (id: number) => {
    if (confirm("Delete this item?")) {
      await deleteGallery(id);
      const response = await getGallery();
      const data = response as GalleryResponse;
      setItems(data.data);
    }
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="main-content">
        <h1 className="page-title">Manage Gallery</h1>

        {/* Form */}
        <form onSubmit={submit} className="gallery-form">
          <div className="form-grid">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="input-field"
              required
            />

            <div className="file-input-container">
              <input
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>

        {/* Gallery cards */}
        <div className="cards-grid">
          {items.length === 0 && (
            <p className="no-items">No gallery items available.</p>
          )}
          {items.map((g) => (
            <div key={g.id} className="gallery-card">
              <img
                src={`${
                  import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000"
                }/${g.image_url}`}
                alt={g.title}
                className="gallery-image"
              />
              <div className="gallery-info">
                <h3 className="gallery-title">{g.title}</h3>
                <div className="gallery-actions">
                  <button
                    className="btn btn-delete"
                    onClick={() => onDelete(g.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ManageGallery;
