import AdminSidebar from "../../../components/admin/AdminSidebar";
import { useEffect, useState } from "react";
import "./ManageBlog.css";
import {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../../../api/blog";

// Interface Blog
interface BlogItem {
  id: number;
  title: string;
  content: string;
  image_url: string;
}

// Response API
interface BlogResponse {
  data: BlogItem[];
}

// Error interface
interface ApiError {
  response?: {
    data?: {
      detail?: string;
    };
  };
}

const ManageBlog: React.FC = () => {
  const [items, setItems] = useState<BlogItem[]>([]);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);

  // Load data blog dengan async function aman
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await getBlogs();
        if (isMounted) {
          const data = response as BlogResponse;
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

  // Submit create/update
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData();
    form.append("title", title);
    form.append("content", content);
    if (file) form.append("file", file);

    try {
      if (editingId) {
        await updateBlog(editingId, form);
      } else {
        await createBlog(form);
      }

      // Reset form
      setTitle("");
      setContent("");
      setFile(null);
      setEditingId(null);

      // Refresh data
      const response = await getBlogs();
      const data = response as BlogResponse;
      setItems(data.data);
    } catch (err) {
      const error = err as ApiError;
      alert(error.response?.data?.detail || "Error saat menyimpan blog");
    }
  };

  // Set editing state
  const onEdit = (b: BlogItem) => {
    setEditingId(b.id);
    setTitle(b.title);
    setContent(b.content);
  };

  // Delete blog
  const onDelete = async (id: number) => {
    if (confirm("Delete this blog?")) {
      await deleteBlog(id);
      const response = await getBlogs();
      const data = response as BlogResponse;
      setItems(data.data);
    }
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="main-content">
        <h1 className="page-title">Manage Blog</h1>

        {/* Form */}
        <form onSubmit={submit} className="blog-form">
          <div className="form-grid">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="input-field"
              required
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              className="input-field"
              required
            />
            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              {editingId ? "Update" : "Create"}
            </button>
            {editingId && (
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => {
                  setEditingId(null);
                  setTitle("");
                  setContent("");
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {/* Blog cards */}
        <div className="cards-grid">
          {items.length === 0 && (
            <p className="no-blogs">No blogs available.</p>
          )}
          {items.map((b) => (
            <div key={b.id} className="blog-card">
              <img
                src={`${
                  import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000"
                }/${b.image_url}`}
                alt={b.title}
                className="blog-image"
              />
              <div className="blog-info">
                <h3 className="blog-title">{b.title}</h3>
                <p className="blog-content">{b.content}</p>
              </div>
              <div className="blog-actions">
                <button className="btn btn-edit" onClick={() => onEdit(b)}>
                  Edit
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() => onDelete(b.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ManageBlog;
