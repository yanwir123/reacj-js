import { useEffect, useState } from "react";
import { getServices } from "../../../api/services";
import "./Services.css";

// Interface service item
interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image_url: string;
}

// Interface response API
interface ServicesResponse {
  data: ServiceItem[];
}

const Services: React.FC = () => {
  const [items, setItems] = useState<ServiceItem[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res: ServicesResponse = await getServices();
        setItems(res.data);
      } catch {
        setItems([]);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="services-page">
      <section className="services-section container">
        <h1 className="section-title">Layanan Kami</h1>

        <div className="services-grid">
          {items.map((s) => (
            <div key={s.id} className="service-card">
              <img
                src={`${
                  import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000"
                }/${s.image_url}`}
                alt={s.title}
                className="service-image"
              />
              <div className="service-info">
                <h3 className="service-title">{s.title}</h3>
                <p className="service-description">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
