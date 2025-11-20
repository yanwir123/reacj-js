import React from "react";
import "./Services.css";

// Interface service item
interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image_url: string;
}

const Services: React.FC = () => {
  // Data disesuaikan berdasarkan konteks visual gambar
  const items: ServiceItem[] = [
    {
      id: 1,
      title: "Jasa Renovasi Total Rumah Tinggal",
      description:
        "Melayani renovasi rumah tinggal, dari perombakan minor hingga peningkatan menjadi 2 lantai atau lebih (seperti proyek Bpk. Wendy).",
      image_url: "../../../../public/gmbr1 (1).jpeg", // Renovasi Rumah Bpk. Wendy
    },
    {
      id: 2,
      title: "Pembangunan Rumah Baru (Desain Minimalis)",
      description:
        "Jasa konstruksi bangunan baru dengan desain modern dan minimalis. Pengerjaan cepat, rapi, dan sesuai standar kualitas bangunan.",
      image_url: "../../../../public/gmbr1 (2).jpeg", // Bangunan Rumah Baru Minimalis Putih
    },
    {
      id: 3,
      title: "Pekerjaan Struktur Lantai Atas / Dak",
      description:
        "Melayani pengecoran, pemasangan balok, dan pembangunan struktur lantai atas menggunakan baja ringan atau beton (terlihat pada gmbr1 (9)).",
      image_url: "../../../../public/gmbr1 (9).jpeg", // Pekerjaan Struktur Rangka Atas
    },
    {
      id: 4,
      title: "Perubahan Fasad & Penambahan Teras/Garasi",
      description:
        "Renovasi eksterior untuk tampilan rumah yang lebih segar (seperti proyek Bpk. Ray & Ibu Dinda). Meliputi fasad, pagar, dan teras.",
      image_url: "../../../../public/gmbr1 (4).jpeg", // Renovasi Rumah Bpk. Ray & Ibu Dinda
    },
    {
      id: 5,
      title: "Pemasangan Bata Ringan & Pengecatan Dinding",
      description:
        "Pekerjaan pemasangan material dinding (bata ringan) dan penyelesaian akhir seperti plester, acian, dan pengecatan (terlihat pada gmbr1 (5)).",
      image_url: "../../../../public/gmbr1 (5).jpeg", // Pemasangan Bata & Pengecatan
    },
    {
      id: 6,
      title: "Pembangunan Rumah Dua Lantai",
      description:
        "Layanan lengkap pembangunan rumah dari nol hingga selesai, khususnya untuk bangunan bertingkat dua di area padat penduduk (seperti proyek di Kelapa Dua).",
      image_url: "../../../../public/gmbr1 (6).jpeg", // Proyek Kelapa Dua
    },
    {
      id: 7,
      title: "Konstruksi Balok & Kolom Beton",
      description:
        "Fokus pada pekerjaan struktural, seperti pembesian dan pengecoran balok serta kolom yang kokoh untuk menopang beban bangunan bertingkat.",
      image_url: "../../../../public/gmbr1 (7).jpeg", // Pekerjaan Balok & Kolom
    },
    {
      id: 8,
      title: "Pekerjaan Rangka Atap Baja & Scaffolding",
      description:
        "Pemasangan rangka atap baja dan persiapan *scaffolding* (perancah) untuk pekerjaan di ketinggian dengan standar keselamatan.",
      image_url: "../../../../public/gmbr1 (10).jpeg", // Pekerja di atas rangka baja
    },
    // Tambahan layanan umum yang mungkin juga dilakukan kontraktor/tukang bangunan
    {
      id: 9,
      title: "Perbaikan Atap Bocor dan Plafon Rusak",
      description:
        "Solusi cepat untuk atap yang bocor, penggantian genteng, dan perbaikan/pemasangan plafon gypsum atau PVC.",
      image_url: "../../../../public/gmbr1 (3).jpeg", // Bangunan Selesai (sebagai representasi perbaikan)
    },
    {
      id: 10,
      title: "Pemasangan Keramik Lantai & Dinding",
      description:
        "Pemasangan keramik, marmer, atau granit untuk lantai dan dinding kamar mandi, dapur, atau area lainnya.",
      image_url: "../../../../public/gmbr1 (7).jpeg", // Menggunakan gambar konstruksi sebagai umum
    },
    // ... (Data Item 1 hingga 10 tidak ditampilkan, diasumsikan sudah ada)

    // Data Item 11, 12, dan 13 disesuaikan:
    {
      id: 11,
      title: "Renovasi Interior Total (Before & After)",
      description:
        "Jasa perombakan total interior rumah, mengubah ruang yang rusak atau lama menjadi desain modern dan fungsional (seperti Dapur & Ruang Keluarga pada gambar).",
      image_url: "../../../../public/gmbr2 (1).png", // Sesuai dengan gambar Renovasi Interior Before/After
    },
    {
      id: 12,
      title: "Pekerjaan Finishing Fasad dan Halaman",
      description:
        "Fokus pada pekerjaan akhir seperti pemasangan roster, lantai teras, dan penyelesaian fasad bangunan. Ini termasuk pekerjaan *landscaping* sederhana di halaman depan.",
      image_url: "../../../../public/gmbr2 (2).png", // Sesuai dengan gambar Pekerjaan Fasad/Halaman dengan Roster
    },
    {
      id: 13,
      title: "Pekerjaan Struktur Beton (Pengecoran)",
      description:
        "Layanan pengecoran struktur utama seperti balok, kolom, atau dak lantai menggunakan beton *ready-mix* (truk mixer) untuk efisiensi dan kualitas tinggi.",
      image_url: "../../../../public/gmbr2 (3).png", // Sesuai dengan gambar Pengecoran dengan Truk Mixer
    },
    // ... (Lanjutan kode jika ada),
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
