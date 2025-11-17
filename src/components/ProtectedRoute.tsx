// src/components/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";
import type { ReactElement } from "react";

interface ProtectedRouteProps {
  children: ReactElement; // hanya menerima satu elemen React
  adminOnly?: boolean; // opsional, default false
}

export default function ProtectedRoute({
  children,
  adminOnly = false,
}: ProtectedRouteProps) {
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}
