// src/api/services.ts
import axiosClient from "./axiosClient";

export const getServices = () => axiosClient.get("/services/");
export const getService = (id: number) => axiosClient.get(`/services/${id}`);
export const createService = (form: FormData) =>
  axiosClient.post("/services/", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const updateService = (id: number, form: FormData) =>
  axiosClient.patch(`/services/${id}`, form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const deleteService = (id: number) =>
  axiosClient.delete(`/services/${id}`);
