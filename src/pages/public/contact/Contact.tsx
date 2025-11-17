import { useState } from "react";
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
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axiosClient.post<ContactResponse>("/contact/", {
        name,
        phone,
        city,
        service,
        message,
      });
      alert("Pesan berhasil dikirim!");
      setName("");
      setPhone("");
      setCity("");
      setService("");
      setMessage("");
    } catch (err: unknown) {
      const error = err as ApiError;
      alert(error.response?.data?.detail || "Gagal mengirim pesan");
    }
  };

  const whatsappLink = `https://wa.me/6287787942532?text=Halo%20ARTHAWANA,%20saya%20ingin%20konsultasi%20renovasi%20atau%20konstruksi`;

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title">Hubungi Kami</h1>
          <p className="contact-subtitle">
            Konsultasikan proyek renovasi atau konstruksi Anda sekarang!
          </p>
        </div>
      </section>

      <section className="contact-info container">
        <div className="info-card">
          <h2>Info Kontak</h2>
          <p>
            📍 Anggrek No.24 Rt.10/03, Kel. Kelapa Dua, Kec. Kebon Jeruk —
            Jakarta Barat
          </p>
          <p>📞 0877-8794-2532 (Romdon Maulana)</p>
          <p>📞 0856-9322-1161 (Iwan Setiawan)</p>
          <p>✉️ info@arthawarnarenovasi.com</p>
          <p>🌐 arthawarnarenovasi.com</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
          >
            Konsultasi via WhatsApp
          </a>
        </div>

        <div className="form-card">
          <h2>Kirim Pesan</h2>
          <form onSubmit={submit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Lengkap"
              required
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Nomor WhatsApp"
              required
            />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Alamat Proyek (Kota)"
              required
            />
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="">Pilih Layanan</option>
              <option value="Renovasi Rumah">Renovasi Rumah</option>
              <option value="Bangunan Baru">Bangunan Baru</option>
              <option value="Perbaikan Atap">Perbaikan Atap</option>
              <option value="Renovasi Kamar Mandi & Dapur">
                Renovasi Kamar Mandi & Dapur
              </option>
              <option value="Desain Interior">Desain Interior</option>
            </select>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Pesan / Detail Singkat"
              required
            />
            <button type="submit" className="btn-submit">
              Kirim Pesan
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
