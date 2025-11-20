import React, { useState } from "react";
import "./Blog.css";

// Import semua gambar
import img1 from "../../../assets/img/gmbr1 (1).jpeg";
import img2 from "../../../assets/img/gmbr1 (2).jpeg";
import img3 from "../../../assets/img/gmbr1 (9).jpeg";
import img4 from "../../../assets/img/gmbr1 (4).jpeg";
import img5 from "../../../assets/img/gmbr1 (6).jpeg";

interface ProjectItem {
  id: number;
  title: string;
  short_content: string;
  long_content: string;
  image_url: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Upgrading Fasad dan Struktur Rumah Tinggal (Bpk. Wendy)",
    short_content:
      "Transformasi ekstensif rumah 1 lantai menjadi hunian **2 lantai modern**...",
    long_content:
      "**DETAIL PROYEK:** Renovasi total ini mencakup peningkatan struktur...",
    image_url: img1,
  },
  {
    id: 2,
    title: "Konstruksi Rumah Baru (Turnkey Project)",
    short_content:
      "Pembangunan rumah tinggal baru (Ground Up) dengan konsep minimalis...",
    long_content:
      "**DETAIL PROYEK:** Kami menyediakan layanan Turnkey Project...",
    image_url: img2,
  },
  {
    id: 3,
    title: "Penguatan Struktur dan Pengecoran Dak",
    short_content: "Pekerjaan spesialis struktur beton bertulang...",
    long_content: "**DETAIL PROYEK:** Layanan ini mencakup analisis beban...",
    image_url: img3,
  },
  {
    id: 4,
    title: "Transformasi Fasad Eksterior",
    short_content: "Perombakan total tampilan fasad rumah...",
    long_content:
      "**DETAIL PROYEK:** Mengganti batu alam, desain pagar baru...",
    image_url: img4,
  },
  {
    id: 5,
    title: "Pekerjaan Dinding & Finishing",
    short_content: "Spesialis pemasangan dinding bata ringan dan finishing...",
    long_content:
      "**DETAIL PROYEK:** Finishing 3 tahap untuk hasil halus dan rapi...",
    image_url: img5,
  },
];

const ProjectsList: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggleExpand = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="projects-page-wrapper">
      <section className="projects-section container">
        <div className="projects-header">
          <h1 className="header-label-bold project-page-title">Proyek Kami</h1>
        </div>
        <hr />

        <div className="projects-list">
          {projectsData.map((p, index) => {
            const imageOnLeft = index % 2 === 0;
            const isExpanded = expandedId === p.id;

            return (
              <article
                key={p.id}
                className={`project-card ${
                  imageOnLeft ? "image-left" : "image-right"
                }`}
              >
                <div className="project-image-container">
                  <img
                    src={p.image_url}
                    alt={p.title}
                    className="project-image"
                    loading="lazy"
                  />
                </div>

                <div className="project-info">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-content">
                    {isExpanded ? p.long_content : p.short_content}
                  </p>

                  <button
                    onClick={() => handleToggleExpand(p.id)}
                    className="view-more-link button-as-link"
                  >
                    {isExpanded ? (
                      <>SEMBUNYIKAN DETAIL ↑</>
                    ) : (
                      <>LIHAT SELENGKAPNYA →</>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <hr />

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
