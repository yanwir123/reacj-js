// src/api/gallery.ts
import axiosClient from "./axiosClient";

// Get all gallery
export const getGallery = () => axiosClient.get("/gallery/");

// Create gallery
export const createGallery = (form: FormData) =>
  axiosClient.post("/gallery/", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// Delete gallery
export const deleteGallery = (id: number) =>
  axiosClient.delete(`/gallery/${id}`);

// Update gallery
export const updateGallery = (id: number, form: FormData) =>
  axiosClient.put(`/gallery/${id}`, form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
