import React, { useState } from "react";
import "./Blog.css"; // Pastikan path ini benar

// Interface Project Item yang diperbarui
interface ProjectItem {
  id: number;
  title: string;
  short_content: string; // Konten singkat untuk tampilan awal
  long_content: string; // Konten detail untuk tampilan diperluas
  image_url: string;
}

// Data proyek dengan konten detail yang disesuaikan dengan layanan Konstruksi/Renovasi
const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Upgrading Fasad dan Struktur Rumah Tinggal (Bpk. Wendy)",
    short_content:
      "Transformasi ekstensif rumah 1 lantai menjadi hunian **2 lantai modern** di Jakarta Selatan. Proyek ini meliputi penambahan ruang vertikal dan pembaruan total desain fasad minimalis.",
    long_content:
      "**DETAIL PROYEK:** Renovasi total ini mencakup **peningkatan struktur** untuk menopang beban lantai kedua. Luas bangunan bertambah signifikan menjadi **220m²**. Lingkup pekerjaan mencakup perhitungan sipil yang akurat, pembangunan struktur baru, instalasi mekanikal/elektrikal/plumbing (MEP) yang terintegrasi, hingga **finishing premium** pada cat dan desain pagar kontemporer. **Komitmen:** Hasil akhir yang kokoh, fungsional, dan estetis.",
    image_url: "../../../../public/gmbr1 (1).jpeg",
  },
  {
    id: 2,
    title: "Konstruksi Rumah Baru (Turnkey Project) Desain Minimalis",
    short_content:
      "Pembangunan rumah tinggal baru (Ground Up) dengan konsep **arsitektur minimalis** yang menekankan efisiensi tata ruang dan pencahayaan alami yang optimal.",
    long_content:
      "**DETAIL PROYEK:** Kami menyediakan layanan **Turnkey Project** (dari nol sampai serah terima kunci), memastikan *timeline* dan anggaran dipatuhi secara ketat. Fokus kami adalah pada **penggunaan material struktural SNI**, tata letak interior yang efisien, dan penerapan desain fasad dominan putih yang bersih dan modern. **Klaim:** Garansi struktur dan pengerjaan yang terjamin untuk daya tahan jangka panjang.",
    image_url: "../../../../public/gmbr1 (2).jpeg",
  },
  {
    id: 3,
    title: "Penguatan Struktur dan Persiapan Pengecoran Dak",
    short_content:
      "Pekerjaan spesialis dalam **penguatan struktur beton bertulang** dan pemasangan rangka atap baja ringan, esensial untuk pembangunan atau penambahan lantai di masa depan.",
    long_content:
      "**DETAIL PROYEK:** Layanan ini mencakup **analisis beban** dan perencanaan struktur yang ketat. Proses meliputi instalasi *formwork* presisi, pembesian balok dan kolom menggunakan besi ulir standar, dan pengecoran mutu beton yang teruji. **Keunggulan:** Mempersiapkan pondasi yang aman dan stabil untuk menahan beban tambahan vertikal sesuai standar teknis konstruksi.",
    image_url: "../../../../public/gmbr1 (9).jpeg",
  },
  {
    id: 4,
    title: "Transformasi Fasad Eksterior (Proyek Bpk. Ray & Ibu Dinda)",
    short_content:
      "Layanan **perombakan total tampilan depan** (fasad) hunian di Cluster Serpong Indah, melibatkan elemen batu alam dan penggantian pagar untuk meningkatkan daya tarik properti.",
    long_content:
      "**DETAIL PROYEK:** Kami merancang ulang *curb appeal* properti ini secara menyeluruh. Lingkup pekerjaan meliputi penghilangan material fasad lama, pemasangan **batu alam modern** (seperti yang terlihat), pembuatan desain pagar besi baru, dan perbaikan area carport/teras. **Tujuan:** Meningkatkan nilai estetika dan investasi properti secara instan.",
    image_url: "../../../../public/gmbr1 (4).jpeg",
  },
  {
    id: 5,
    title: "Pekerjaan Dinding dan Finishing Interior/Eksterior",
    short_content:
      "Layanan spesialis pada tahap *superstructure*, fokus pada **pemasangan dinding bata ringan** yang cepat dan efisien, serta proses *finishing* halus (plester, aci, cat).",
    long_content:
      "**DETAIL PROYEK:** Kami menjamin dinding tegak lurus dan rata melalui penggunaan *waterpass* laser. Pekerjaan *finishing* melibatkan proses **tiga tahap** (plester, acian, dan cat berkualitas) untuk mencegah retak rambut dan menjamin warna tahan lama. **Standar:** Kerapihan pengerjaan di setiap detail sudut dan sambungan, siap untuk serah terima.",
    image_url: "../../../../public/gmbr1 (6).jpeg",
  },
];

const ProjectsList: React.FC = () => {
  // State untuk menyimpan ID proyek yang sedang diperluas
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Fungsi untuk menangani klik tombol "LIHAT SELENGKAPNYA"
  const handleToggleExpand = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="projects-page-wrapper">
      <section className="projects-section container">
        {/* Header */}
        <div className="projects-header">
          <h1 className="header-label-bold project-page-title">Proyek Kami</h1>
        </div>
        <hr />

        {/* List Projects */}
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
                {/* Image Section */}
                <div className="project-image-container">
                  <img
                    // PATH disesuaikan dengan data layanan Anda
                    src={p.image_url}
                    alt={p.title}
                    className="project-image"
                    loading="lazy"
                  />
                </div>

                {/* Text Section */}
                <div className="project-info">
                  <h3 className="project-title">{p.title}</h3>
                  {/* Tampilkan konten singkat atau konten panjang */}
                  <p className="project-content">
                    {/* Konten yang ditampilkan di sini */}
                    {isExpanded ? p.long_content : p.short_content}
                  </p>

                  <button
                    onClick={() => handleToggleExpand(p.id)}
                    className="view-more-link button-as-link"
                  >
                    {isExpanded ? (
                      <>
                        SEMBUNYIKAN DETAIL <span className="arrow"> ↑</span>
                      </>
                    ) : (
                      <>
                        LIHAT SELENGKAPNYA <span className="arrow"> →</span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <hr />
        {/* Pagination (static) */}
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
