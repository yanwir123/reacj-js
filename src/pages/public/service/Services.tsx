import React from "react";
import "./Services.css";

// Import semua gambar
import img1 from "../../../assets/img/gmbr1 (1).jpeg";
import img2 from "../../../assets/img/gmbr1 (2).jpeg";
import img3 from "../../../assets/img/gmbr1 (9).jpeg";
import img4 from "../../../assets/img/gmbr1 (4).jpeg";
import img5 from "../../../assets/img/gmbr1 (5).jpeg";
import img6 from "../../../assets/img/gmbr1 (6).jpeg";
import img7 from "../../../assets/img/gmbr1 (7).jpeg";
import img8 from "../../../assets/img/gmbr1 (10).jpeg";

import img9 from "../../../assets/img/gmbr1 (3).jpeg";
import img10 from "../../../assets/img/gmbr1 (7).jpeg";

import gmbr2_1 from "../../../assets/img/gmbr2 (1).png";
import gmbr2_2 from "../../../assets/img/gmbr2 (2).png";
import gmbr2_3 from "../../../assets/img/gmbr2 (3).png";

// Interface
interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image_url: string;
}

const Services: React.FC = () => {
  const items: ServiceItem[] = [
    {
      id: 1,
      title: "Jasa Renovasi Total Rumah Tinggal",
      description:
        "Melayani renovasi rumah tinggal, dari perombakan minor hingga peningkatan menjadi 2 lantai atau lebih (seperti proyek Bpk. Wendy).",
      image_url: img1,
    },
    {
      id: 2,
      title: "Pembangunan Rumah Baru (Desain Minimalis)",
      description:
        "Jasa konstruksi bangunan baru dengan desain modern dan minimalis. Pengerjaan cepat, rapi, dan sesuai standar kualitas bangunan.",
      image_url: img2,
    },
    {
      id: 3,
      title: "Pekerjaan Struktur Lantai Atas / Dak",
      description:
        "Melayani pengecoran, pemasangan balok, dan pembangunan struktur lantai atas menggunakan baja ringan atau beton.",
      image_url: img3,
    },
    {
      id: 4,
      title: "Perubahan Fasad & Penambahan Teras/Garasi",
      description:
        "Renovasi eksterior rumah seperti fasad, pagar, teras, dan area depan lainnya.",
      image_url: img4,
    },
    {
      id: 5,
      title: "Pemasangan Bata Ringan & Pengecatan Dinding",
      description:
        "Pemasangan bata ringan, plester, acian, dan pengecatan dinding.",
      image_url: img5,
    },
    {
      id: 6,
      title: "Pembangunan Rumah Dua Lantai",
      description: "Pengerjaan rumah 2 lantai dari pondasi hingga finishing.",
      image_url: img6,
    },
    {
      id: 7,
      title: "Konstruksi Balok & Kolom Beton",
      description:
        "Pekerjaan pembesian, pengecoran kolom dan balok yang kuat dan sesuai standar.",
      image_url: img7,
    },
    {
      id: 8,
      title: "Pekerjaan Rangka Atap Baja & Scaffolding",
      description:
        "Pemasangan rangka atap baja, pekerjaan di ketinggian, dan scaffolding.",
      image_url: img8,
    },

    // Layanan tambahan
    {
      id: 9,
      title: "Perbaikan Atap Bocor dan Plafon Rusak",
      description:
        "Memperbaiki atap bocor, mengganti plafon, dan pekerjaan perawatan rumah.",
      image_url: img9,
    },
    {
      id: 10,
      title: "Pemasangan Keramik Lantai & Dinding",
      description:
        "Pemasangan keramik, granit, marmer untuk lantai dan dinding.",
      image_url: img10,
    },

    // gmbr2 section
    {
      id: 11,
      title: "Renovasi Interior Total (Before & After)",
      description:
        "Mengubah interior lama menjadi tampilan modern dan fungsional.",
      image_url: gmbr2_1,
    },
    {
      id: 12,
      title: "Pekerjaan Finishing Fasad dan Halaman",
      description:
        "Finishing fasad, roster, halaman depan, dan landscape sederhana.",
      image_url: gmbr2_2,
    },
    {
      id: 13,
      title: "Pekerjaan Struktur Beton (Pengecoran)",
      description:
        "Pengecoran beton untuk balok, kolom, dak dengan kualitas tinggi.",
      image_url: gmbr2_3,
    },
  ];

  return (
    <div className="services-page">
      <section className="services-section container">
        <h1 className="section-title">Layanan Kami</h1>

        <div className="services-grid">
          {items.map((s) => (
            <div key={s.id} className="service-card">
              <img src={s.image_url} alt={s.title} className="service-image" />
              <div className="service-info">
                <h3 className="service-title">{s.title}</h3>
                <p className="service-description">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
