import AdminSidebar from "../../../components/admin/AdminSidebar";
import { useEffect, useState } from "react";
import "./ManagerServices.css";
import {
  getServices,
  createService,
  updateService,
  deleteService,
} from "../../../api/services";

// Interface service
interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image_url: string;
}

// Response API
interface ServiceResponse {
  data: ServiceItem[];
}

// Error interface
interface ApiError {
  response?: {
    data?: {
      detail?: string;
    };
  };
}

const ManageServices: React.FC = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);

  // Load service list
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getServices();
        const data = response as ServiceResponse;
        setServices(data.data);
      } catch {
        setServices([]);
      }
    };
    fetchData();
  }, []);

  // Submit create/update
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", title);
    form.append("description", description);
    if (file) form.append("file", file);

    try {
      if (editingId) {
        await updateService(editingId, form);
      } else {
        await createService(form);
      }
      setTitle("");
      setDescription("");
      setFile(null);
      setEditingId(null);
      const response = await getServices();
      const data = response as ServiceResponse;
      setServices(data.data);
    } catch (err: unknown) {
      const error = err as ApiError;
      alert(error.response?.data?.detail || "Error saat menyimpan service");
    }
  };

  // Set editing state
  const onEdit = (svc: ServiceItem) => {
    setEditingId(svc.id);
    setTitle(svc.title);
    setDescription(svc.description);
  };

  // Delete service
  const onDelete = async (id: number) => {
    if (confirm("Delete this service?")) {
      await deleteService(id);
      const response = await getServices();
      const data = response as ServiceResponse;
      setServices(data.data);
    }
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="main-content">
        <h1 className="page-title">Manage Services</h1>

        {/* Form */}
        <form onSubmit={onSubmit} className="service-form">
          <div className="form-grid">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="input-field"
              required
            />
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
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
                onClick={() => {
                  setEditingId(null);
                  setTitle("");
                  setDescription("");
                }}
                className="btn btn-outline"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {/* Service cards */}
        <div className="cards-grid">
          {services.map((s) => (
            <div key={s.id} className="service-card">
              <img
                src={`${
                  import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000"
                }/${s.image_url}`}
                alt={s.title}
                className="service-image"
              />
              <div className="service-info">
                <h3 className="service-title">{s.title}</h3>
                <p className="service-description">{s.description}</p>
              </div>
              <div className="service-actions">
                <button
                  type="button"
                  onClick={() => onEdit(s)}
                  className="btn btn-edit"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => onDelete(s.id)}
                  className="btn btn-delete"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {services.length === 0 && (
            <p className="no-services">No services available.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default ManageServices;
