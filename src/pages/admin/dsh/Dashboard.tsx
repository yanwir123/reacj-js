import AdminSidebar from "../../../components/admin/AdminSidebar";
import { useEffect, useState } from "react";
import axiosClient from "../../../api/axiosClient";
import "./Dashboard.css"; // CSS terpisah

interface UploadStats {
  total: number;
  pending: number;
  approved: number;
}

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<UploadStats | null>(null);

  useEffect(() => {
    axiosClient
      .get<UploadStats>("/admin/uploads/stats")
      .then((res) => setStats(res.data))
      .catch(() => setStats(null));
  }, []);

  return (
    <div className="dashboard-container">
      <AdminSidebar />

      <main className="dashboard-main">
        <h1 className="dashboard-title">Admin Dashboard</h1>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Uploads</h3>
            <p>{stats?.total ?? "-"}</p>
          </div>

          <div className="stat-card">
            <h3>Pending</h3>
            <p>{stats?.pending ?? "-"}</p>
          </div>

          <div className="stat-card">
            <h3>Approved</h3>
            <p>{stats?.approved ?? "-"}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
