import { useState } from "react";
import axiosClient from "../../api/axiosClient";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Impor file CSS terpisah

// Interface response register
interface RegisterResponse {
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

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axiosClient.post<RegisterResponse>("/auth/register", {
        username,
        email,
        password,
        role: "user",
      });

      alert(
        "Pendaftaran berhasil! Silakan periksa email Anda untuk verifikasi."
      );
      navigate("/login");
    } catch (err: unknown) {
      const error = err as ApiError;
      alert(error.response?.data?.detail || "Pendaftaran gagal. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page-container">
      <form onSubmit={submit} className="register-form-card">
        {/* Header Register yang Lebih Menarik */}
        <div className="register-header">
          {/* Placeholder untuk Ikon */}
          <div className="register-icon-wrapper">
            <svg
              className="register-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              ></path>
            </svg>
          </div>
          <h2 className="register-title">Buat Akun Baru</h2>
          <p className="register-subtitle">
            Daftar untuk memulai menggunakan layanan kami.
          </p>
        </div>

        {/* Input Username */}
        <div className="form-group">
          <label className="form-label" htmlFor="username">
            Nama Pengguna
          </label>
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Masukkan nama pengguna"
            className="form-input"
            required
            disabled={loading}
          />
        </div>

        {/* Input Email */}
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Alamat Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email"
            className="form-input"
            required
            disabled={loading}
          />
        </div>

        {/* Input Password */}
        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Kata Sandi
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Buat kata sandi (min. 8 karakter)"
            className="form-input"
            required
            disabled={loading}
          />
        </div>

        {/* Tombol Register */}
        <button
          type="submit"
          disabled={loading}
          className={`register-button ${loading ? "is-loading" : ""}`}
        >
          {loading ? (
            <span className="button-loading-content">
              <svg
                className="spinner"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Mendaftar...
            </span>
          ) : (
            "DAFTAR SEKARANG"
          )}
        </button>

        {/* Tautan ke Halaman Login */}
        <p className="login-link-text">
          Sudah punya akun?{" "}
          <a href="/login" className="login-link">
            Masuk di sini
          </a>
          .
        </p>
      </form>
    </div>
  );
};

export default Register;
