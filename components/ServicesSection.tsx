import { Wind, ShieldCheck, Fan, Droplets, Sparkles } from "lucide-react";
import ServiceCard from "./ServiceCard";

interface ServicesSectionProps {
  onScheduleClick?: () => void;
}

export default function ServicesSection({ onScheduleClick }: ServicesSectionProps) {
  const services = [
    {
      icon: Wind,
      title: "Duct Cleaning",
      description: "Full supply and return duct cleaning to restore airflow and indoor air quality.",
      onScheduleClick,
    },
    {
      icon: ShieldCheck,
      title: "Preventative Maintenance",
      description: "Filter replacement, drain line flush, and coil cleaning to keep your system running right.",
      onScheduleClick,
    },
    {
      icon: Fan,
      title: "Dryer Vent Cleaning",
      description: "Lint and debris removal to prevent fire hazards and improve dryer performance.",
      onScheduleClick,
    },
    {
      icon: Droplets,
      title: "Mold Removal",
      description: "Safe, non-invasive mold treatment to protect your home and air quality.",
      onScheduleClick,
    },
    {
      icon: Sparkles,
      title: "Unit Deodorization & Sanitation",
      description: "Anti-microbial treatment to eliminate odors and sanitize your HVAC system.",
      onScheduleClick,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Clean air solutions for Greater Houston homes and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
