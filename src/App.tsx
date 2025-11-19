// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";

/* components */
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./components/ProtectedRoute";

/* public pages */
import Home from "./pages/public/home/Home";
import About from "./pages/public/about/About";
import Services from "./pages/public/service/Services";
import Blog from "./pages/public/blog/Blog";
import Gallery from "./pages/public/gallery/Gallery";
import Contact from "./pages/public/contact/Contact";

/* auth */
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

/* admin pages */
import Dashboard from "./pages/admin/dsh/Dashboard";
import ManageServices from "./pages/admin/ams/ManageServices";
import ManageGallery from "./pages/admin/amg/ManageGallery";
import ManageBlog from "./pages/admin/amb/ManageBlog";
import ManageUploads from "./pages/admin/amu/ManageUploads";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

          {/* auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* admin routes protected */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly>
                <AdminLayout>
                  <Dashboard />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/services"
            element={
              <ProtectedRoute adminOnly>
                <AdminLayout>
                  <ManageServices />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/gallery"
            element={
              <ProtectedRoute adminOnly>
                <AdminLayout>
                  <ManageGallery />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/blog"
            element={
              <ProtectedRoute adminOnly>
                <AdminLayout>
                  <ManageBlog />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/uploads"
            element={
              <ProtectedRoute adminOnly>
                <AdminLayout>
                  <ManageUploads />
                </AdminLayout>
              </ProtectedRoute>
            }
          />

          {/* fallback route */}
          <Route
            path="*"
            element={<div className="p-8 text-center">Page not found</div>}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
