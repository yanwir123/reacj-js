import AdminSidebar from "../../../components/admin/AdminSidebar";
import { useEffect, useState } from "react";
import axiosClient from "../../../api/axiosClient";

// Interface upload
interface UploadItem {
  id: number;
  filename: string;
  file_url: string;
  user_id: number;
  status: "pending" | "acc" | "rejected";
}

// Interface error
interface ApiError {
  response?: {
    data?: {
      detail?: string;
    };
  };
}

const ManageUploads: React.FC = () => {
  const [uploads, setUploads] = useState<UploadItem[]>([]);

  // Fetch uploads
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get<UploadItem[]>("/admin/uploads/");
        setUploads(response.data);
      } catch {
        setUploads([]);
      }
    };
    fetchData();
  }, []);

  // Change status
  const changeStatus = async (id: number, status: "acc" | "rejected") => {
    try {
      await axiosClient.patch(`/admin/uploads/${id}`, { status });
      // reload data
      const response = await axiosClient.get<UploadItem[]>("/admin/uploads/");
      setUploads(response.data);
    } catch (err: unknown) {
      const error = err as ApiError;
      alert(error.response?.data?.detail || "Error");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />
      <main style={{ flex: 1, padding: "1.5rem" }}>
        <h1
          style={{
            fontSize: "1.75rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Manage Uploads
        </h1>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f1f5f9" }}>
              <th style={{ padding: "0.75rem", border: "1px solid #ddd" }}>
                Filename
              </th>
              <th style={{ padding: "0.75rem", border: "1px solid #ddd" }}>
                User ID
              </th>
              <th style={{ padding: "0.75rem", border: "1px solid #ddd" }}>
                Status
              </th>
              <th style={{ padding: "0.75rem", border: "1px solid #ddd" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {uploads.map((u) => (
              <tr key={u.id}>
                <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>
                  <a
                    href={`${
                      import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000"
                    }/${u.file_url}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#0ea5e9", textDecoration: "underline" }}
                  >
                    {u.filename}
                  </a>
                </td>
                <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>
                  {u.user_id}
                </td>
                <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>
                  {u.status}
                </td>
                <td
                  style={{
                    padding: "0.5rem",
                    border: "1px solid #ddd",
                    display: "flex",
                    gap: "0.5rem",
                  }}
                >
                  <button
                    onClick={() => changeStatus(u.id, "acc")}
                    style={{
                      padding: "0.25rem 0.75rem",
                      backgroundColor: "#16a34a",
                      color: "white",
                      borderRadius: "4px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Acc
                  </button>
                  <button
                    onClick={() => changeStatus(u.id, "rejected")}
                    style={{
                      padding: "0.25rem 0.75rem",
                      backgroundColor: "#dc2626",
                      color: "white",
                      borderRadius: "4px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
            {uploads.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  style={{ textAlign: "center", padding: "1rem" }}
                >
                  No uploads found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ManageUploads;
