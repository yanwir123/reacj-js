import React, { useState } from "react";
import axiosClient from "../../../api/axiosClient";
import "./Contact.css";

// Interface response API
interface ContactResponse {
  message: string;
}

// Interface error API
interface ApiError {
  response?: {
    data?: {
      detail?: string;
    };
  };
}

const Contact: React.FC = () => {
  // State Management
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosClient.post<ContactResponse>("/contact/", {
        name,
        phone,
        city,
        service,
        message,
      });
      alert("Pesan berhasil dikirim! Tim kami akan segera menghubungi Anda.");
      setName("");
      setPhone("");
      setCity("");
      setService("");
      setMessage("");
    } catch (err: unknown) {
      const error = err as ApiError;
      alert(error.response?.data?.detail || "Gagal mengirim pesan");
    } finally {
      setLoading(false);
    }
  };

  const whatsappLink = `https://wa.me/6287787942532?text=Halo%20ARTHAWANA,%20saya%20ingin%20konsultasi%20renovasi%20atau%20konstruksi`;

  return (
    <div className="contact-page-wrapper">
      {/* ================= HERO SECTION ================= */}
      <section className="contact-hero-section">
        <div className="container">
          <h1 className="hero-title">Hubungi Kami</h1>
          <div className="hero-divider"></div>
          <p className="hero-subtitle">
            Siap mewujudkan hunian impian Anda? Konsultasikan kebutuhan renovasi
            atau konstruksi Anda bersama tim ahli kami.
          </p>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="contact-content-section container">
        <div className="contact-grid-layout">
          {/* --- KOLOM KIRI: Info Kontak --- */}
          <div className="info-side">
            <div className="info-header">
              <h2 className="info-label-light">Informasi</h2>
              <h1 className="info-label-bold">Kontak</h1>
            </div>

            <div className="info-details">
              <div className="info-item">
                <h3>Alamat Kantor</h3>
                <p>
                  Anggrek No.24 Rt.10/03, Kel. Kelapa Dua,
                  <br />
                  Kec. Kebon Jeruk, Jakarta Barat
                </p>
              </div>

              <div className="info-item">
                <h3>Telepon / WhatsApp</h3>
                <p>
                  <strong>Romdon M:</strong> 0877-8794-2532
                </p>
                <p>
                  <strong>Iwan S:</strong> 0856-9322-1161
                </p>
              </div>

              <div className="info-item">
                <h3>Email & Website</h3>
                <p>arthawanarenovasi@gmail.com</p>
                <p>www.arthawana.com</p>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-outline"
            >
              Chat via WhatsApp
            </a>
          </div>

          {/* --- KOLOM KANAN: Form --- */}
          <div className="form-side">
            <div className="form-wrapper">
              <h2 className="form-title">Kirim Pesan</h2>
              <p className="form-desc">
                Isi formulir di bawah ini untuk mendapatkan penawaran gratis.
              </p>

              <form onSubmit={submit} className="contact-form">
                <div className="form-group">
                  <label>Nama Lengkap</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Nomor WhatsApp</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Contoh: 0812xxxx"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Lokasi Proyek (Kota/Daerah)</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Contoh: Jakarta Barat"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Layanan yang Dibutuhkan</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                  >
                    <option value="">-- Pilih Layanan --</option>
                    <option value="Renovasi Rumah">Renovasi Rumah</option>
                    <option value="Bangunan Baru">Bangunan Baru</option>
                    <option value="Perbaikan Atap">Perbaikan Atap</option>
                    <option value="Renovasi Kamar Mandi & Dapur">
                      Renovasi Kamar Mandi & Dapur
                    </option>
                    <option value="Desain Interior">Desain Interior</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Pesan / Detail Singkat</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Jelaskan sedikit tentang rencana renovasi atau pembangunan Anda..."
                    required
                    rows={4}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-submit-dark"
                  disabled={loading}
                >
                  {loading ? "Mengirim..." : "KIRIM PESAN"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
