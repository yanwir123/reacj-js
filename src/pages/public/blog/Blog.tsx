import { useEffect, useState } from "react";
import { getBlogs } from "../../../api/blog";
import "./Blog.css";

// Interface blog item
interface BlogItem {
  id: number;
  title: string;
  content: string;
  image_url: string;
}

// Interface response API
interface BlogResponse {
  data: BlogItem[];
}

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res: BlogResponse = await getBlogs();
        setBlogs(res.data);
      } catch {
        setBlogs([]);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-page">
      <section className="blog-section container">
        <h1 className="section-title">Blog</h1>

        <div className="blog-grid">
          {blogs.length === 0 && (
            <p className="no-items">No blogs available.</p>
          )}
          {blogs.map((b) => (
            <article key={b.id} className="blog-card">
              <img
                src={`${
                  import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000"
                }/${b.image_url}`}
                alt={b.title}
                className="blog-image"
              />
              <div className="blog-info">
                <h3 className="blog-title">{b.title}</h3>
                <p className="blog-content">{b.content}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
