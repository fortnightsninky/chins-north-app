import { Wind, Droplets, ShieldCheck, Fan, Thermometer, Zap } from "lucide-react";
import ServiceCard from "./ServiceCard";

interface ServicesSectionProps {
  onScheduleClick?: () => void;
}

export default function ServicesSection({ onScheduleClick }: ServicesSectionProps) {
  const services = [
    {
      icon: Wind,
      title: "Full Air Duct Cleaning",
      description: "Complete cleaning of supply & return air ducts for optimal airflow.",
      features: [
        "Supply & return duct cleaning",
        "Debris removal",
        "Airflow optimization",
        "FREE system inspection included",
      ],
    },
    {
      icon: Thermometer,
      title: "HVAC Unit Cleaning & Upkeep",
      description: "Professional cleaning and maintenance of your HVAC system.",
      features: [
        "Coil cleaning",
        "Filter replacement",
        "System inspection",
        "Performance testing",
      ],
    },
    {
      icon: Droplets,
      title: "Mold Inspection & Treatment",
      description: "Visual, non-invasive mold detection and safe remediation.",
      features: [
        "Visual inspection",
        "Non-invasive testing",
        "Safe treatment",
        "Prevention recommendations",
      ],
    },
    {
      icon: Fan,
      title: "Dryer Vent Cleaning",
      description: "Prevent fire hazards with professional dryer vent cleaning.",
      features: [
        "Lint removal",
        "Vent inspection",
        "Fire hazard prevention",
        "Efficiency improvement",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Preventative Maintenance",
      description: "Regular upkeep to extend system life and prevent issues.",
      features: [
        "Seasonal checkups",
        "Component inspection",
        "Early problem detection",
        "Extended system lifespan",
      ],
    },
    {
      icon: Zap,
      title: "Anti-Microbial Sanitation",
      description: "Optional sanitation & deodorization for cleaner air.",
      features: [
        "Microbial treatment",
        "Odor elimination",
        "Air quality improvement",
        "Complimentary with full service",
      ],
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
            Comprehensive clean air solutions for your home or business.
          </p>
        </div>

        {/* FREE Inspection Banner */}
        <div className="bg-[#2D6A4F] text-white rounded-2xl p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">
                FREE System Inspection
              </h3>
              <p className="text-[#D1FAE5]">
                Included with every full air duct cleaning service.
              </p>
            </div>
            <button
              onClick={onScheduleClick}
              className="bg-white text-[#2D6A4F] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              Schedule Your Free Inspection
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
              onScheduleClick={onScheduleClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
