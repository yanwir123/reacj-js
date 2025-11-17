import { useState } from "react";
import axiosClient from "../../api/axiosClient";
import { useNavigate } from "react-router-dom";

// Interface response register (jika backend mengirimkan data tertentu)
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
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axiosClient.post<RegisterResponse>("/auth/register", {
        username,
        email,
        password,
        role: "user",
      });

      alert("Registered. Check your email for OTP then verify.");
      navigate("/login");
    } catch (err: unknown) {
      const error = err as ApiError;
      alert(error.response?.data?.detail || "Register failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <form
        onSubmit={submit}
        className="bg-white p-6 rounded shadow w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">Register</h2>

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full p-2 border rounded mb-3"
          required
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
