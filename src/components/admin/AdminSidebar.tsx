import { Link } from "react-router-dom";
import "./AdminSidebar.css"; // pastikan path benar

export default function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <h4>Admin Panel</h4>

      <ul className="nav flex-column mt-4">
        <li className="nav-item">
          <Link className="nav-link" to="/admin">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/services">
            Kelola Layanan
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/gallery">
            Kelola Galeri
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/blog">
            Kelola Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/uploads">
            Validasi Upload
          </Link>
        </li>
      </ul>
    </div>
  );
}
