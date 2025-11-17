// src/api/blog.ts
import axiosClient from "./axiosClient";

export const getBlogs = () => axiosClient.get("/blog/");
export const getBlog = (id: number) => axiosClient.get(`/blog/${id}`);
export const createBlog = (form: FormData) =>
  axiosClient.post("/blog/", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const updateBlog = (id: number, form: FormData) =>
  axiosClient.patch(`/blog/${id}`, form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const deleteBlog = (id: number) => axiosClient.delete(`/blog/${id}`);
