import { useState } from "react";
import axiosClient from "../../api/axiosClient";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Login
      const res = await axiosClient.post<LoginResponse>("/auth/login", {
        username,
        password,
      });
      const token = res.data.access_token;

      localStorage.setItem("token", token);

      // Ambil role user
      const me = await axiosClient.get<MeResponse>("/users/me");
      localStorage.setItem("role", me.data.role);

      navigate(me.data.role === "admin" ? "/admin" : "/");
    } catch (err: unknown) {
      const error = err as ApiError;
      alert(error.response?.data?.detail || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <form
        onSubmit={submit}
        className="bg-white p-6 rounded shadow w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full p-2 border rounded mb-3"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 border rounded mb-3"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-sky-600 text-white rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
