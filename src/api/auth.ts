// src/api/auth.ts
import axiosClient from "./axiosClient";

export const register = (payload: {
  username: string;
  email: string;
  password: string;
}) => axiosClient.post("/auth/register", payload);

export const verifyOtp = (payload: { email: string; otp: string }) =>
  axiosClient.post("/auth/verify-otp", payload);

export const login = (payload: { username: string; password: string }) =>
  axiosClient.post("/auth/login", payload);

export const me = () => axiosClient.get("/users/me");
