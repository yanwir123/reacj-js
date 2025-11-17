// src/api/gallery.ts
import axiosClient from "./axiosClient";

export const getGallery = () => axiosClient.get("/gallery/");
export const createGallery = (form: FormData) =>
  axiosClient.post("/gallery/", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const deleteGallery = (id: number) =>
  axiosClient.delete(`/gallery/${id}`);
