import { useState } from "react";
import axiosClient from "../../api/axiosClient";
import { useNavigate } from "react-router-dom";
// Pastikan Anda mengimpor file CSS
import "./Login.css";

// Interface response login
interface LoginResponse {
  access_token: string;
  token_type: string;
}

// Interface response user info
interface MeResponse {
  username: string;
  role: "admin" | "user";
}

// Interface error API
interface ApiError {
  response?: {
    data?: {
      detail?: string;
    };
  };
}

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axiosClient.post<LoginResponse>("/auth/login", {
        username,
        password,
      });
      const token = res.data.access_token;

      localStorage.setItem("token", token);

      const me = await axiosClient.get<MeResponse>("/users/me");
      localStorage.setItem("role", me.data.role);

      navigate(me.data.role === "admin" ? "/admin" : "/");
    } catch (err: unknown) {
      const error = err as ApiError;
      alert(error.response?.data?.detail || "Login gagal. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page-container">
      <form onSubmit={submit} className="login-form-card">
        {/* Header Login */}
        <div className="login-header">
          {/* Placeholder untuk Ikon/Logo */}
          <div className="login-icon-wrapper">
            <svg
              className="login-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3v-1m3-4h14"
              ></path>
            </svg>
          </div>
          <h2 className="login-title">Masuk ke Akun Anda</h2>
          <p className="login-subtitle">Silakan masukkan kredensial Anda.</p>
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
            placeholder="Masukkan kata sandi"
            className="form-input"
            required
            disabled={loading}
          />
        </div>

        {/* Tombol Login */}
        <button
          type="submit"
          disabled={loading}
          className={`login-button ${loading ? "is-loading" : ""}`}
        >
          {loading ? (
            <span className="button-loading-content">
              {/* Anda perlu memastikan animasi spinner CSS terdefinisi */}
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
              Memuat...
            </span>
          ) : (
            "MASUK"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
