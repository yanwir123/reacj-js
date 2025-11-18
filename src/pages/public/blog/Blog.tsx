import React, { useEffect, useState } from "react";
import { getBlogs } from "../../../api/blog"; // Asumsi getBlogs masih digunakan untuk mengambil data
import "./Blog.css";

// Interface Project Item (disesuaikan dari BlogItem)
interface ProjectItem {
  id: number;
  title: string;
  content: string; // Akan diisi dengan teks dummy jika ingin persis gambar
  image_url: string;
}

// Interface response API
interface ProjectResponse {
  data: ProjectItem[];
}

// Konten dummy untuk menyamai teks "Lorem ipsum..." pada gambar
const DUMMY_CONTENT =
  "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const ProjectsList: React.FC = () => {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res: ProjectResponse = await getBlogs(); // Menggunakan getBlogs API

        // Gunakan data dari API, tapi ubah kontennya menjadi dummy content
        const projectsWithDummyContent: ProjectItem[] = res.data.map(
          (project) => ({
            ...project,
            // Menggunakan teks dummy (Lorem Ipsum) agar persis gambar
            content: DUMMY_CONTENT,
          })
        );
        setProjects(projectsWithDummyContent);
      } catch {
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="projects-page-wrapper">
      <section className="projects-section container">
        {/* Judul sesuai gambar: "Our Projects" diubah menjadi "Proyek Kami" */}
        <div className="projects-header">
          <h1 className="header-label-bold project-page-title">Proyek Kami</h1>
        </div>

        {loading && (
          <p className="loading-text">Memuat proyek-proyek terbaru...</p>
        )}

        {/* Daftar Proyek dengan Layout Bergantian */}
        <div className="projects-list">
          {!loading && projects.length === 0 && (
            <p className="no-items">Saat ini belum ada proyek yang tersedia.</p>
          )}

          {projects.map((p, index) => {
            // Tentukan apakah layout gambar harus di kiri (true) atau kanan (false)
            const imageOnLeft = index % 2 === 0;

            return (
              <article
                key={p.id}
                className={`project-card ${
                  imageOnLeft ? "image-left" : "image-right"
                }`}
              >
                {/* Bagian Gambar */}
                <div className="project-image-container">
                  <img
                    src={`${
                      import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000"
                    }/${p.image_url}`}
                    alt={p.title}
                    className="project-image"
                    loading="lazy"
                  />
                </div>

                {/* Bagian Konten */}
                <div className="project-info">
                  {/* Judul Proyek */}
                  <h3 className="project-title">{p.title}</h3>
                  {/* Konten Proyek (menggunakan dummy content agar sesuai gambar) */}
                  <p className="project-content">{p.content}</p>

                  {/* Tautan LIHAT SELENGKAPNYA (menggantikan VIEW MORE) */}
                  <a href={`/projects/${p.id}`} className="view-more-link">
                    LIHAT SELENGKAPNYA
                    <span className="arrow"> →</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Pagination yang menyerupai gambar */}
        <div className="blog-pagination">
          <span className="current-page">01</span>
          <span className="divider">/</span>
          <span className="total-pages">05</span>
          <span className="nav-separator"> — </span>
          <button className="nav-button prev-button">←</button>
          <button className="nav-button next-button">→</button>
        </div>
      </section>
    </div>
  );
};

export default ProjectsList;
