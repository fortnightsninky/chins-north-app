import { Wind, Droplets, ShieldCheck, Fan, Thermometer, Zap, CheckCircle } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesPage() {
  const services = [
    {
      icon: Wind,
      title: "Full Air Duct Cleaning",
      description: "Complete cleaning of supply & return air ducts to remove dust, debris, and allergens for optimal airflow and indoor air quality.",
      features: [
        "Supply & return duct cleaning",
        "Debris and allergen removal",
        "Airflow optimization",
        "FREE system inspection included",
        "Optional anti-microbial treatment",
      ],
    },
    {
      icon: Thermometer,
      title: "HVAC Unit Cleaning & Upkeep",
      description: "Professional cleaning and maintenance of your HVAC system to ensure efficiency and extend its lifespan.",
      features: [
        "Coil cleaning and maintenance",
        "Filter replacement recommendations",
        "Comprehensive system inspection",
        "Performance testing and optimization",
        "Energy efficiency assessment",
      ],
    },
    {
      icon: Droplets,
      title: "Mold Inspection & Treatment",
      description: "Visual, non-invasive mold detection and safe remediation to protect your home and health.",
      features: [
        "Visual inspection of ductwork",
        "Non-invasive testing methods",
        "Safe, effective treatment",
        "Prevention recommendations",
        "Follow-up assessment available",
      ],
    },
    {
      icon: Fan,
      title: "Dryer Vent Cleaning",
      description: "Prevent fire hazards and improve dryer efficiency with professional vent cleaning.",
      features: [
        "Complete lint removal",
        "Vent inspection and assessment",
        "Fire hazard prevention",
        "Dryer efficiency improvement",
        "Safety compliance check",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Preventative Maintenance",
      description: "Regular upkeep to extend system life, prevent issues, and maintain optimal performance.",
      features: [
        "Seasonal system checkups",
        "Component inspection and testing",
        "Early problem detection",
        "Extended system lifespan",
        "Priority scheduling for members",
      ],
    },
    {
      icon: Zap,
      title: "Anti-Microbial Sanitation",
      description: "Optional sanitation & deodorization treatment for cleaner, fresher air throughout your home.",
      features: [
        "Microbial treatment of ductwork",
        "Odor elimination",
        "Air quality improvement",
        "Complimentary with full service",
        "Long-lasting protection",
      ],
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive clean air solutions designed to improve your indoor air quality and HVAC system performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* Pricing Note */}
        <div className="bg-[#F8F9FA] rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                Customized Pricing
              </h3>
              <p className="text-gray-600">
                Each home is unique. Contact us for a free, no-obligation quote tailored to your specific needs.
              </p>
            </div>
            <a
              href="tel:+12816877575"
              className="bg-[#2D6A4F] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#24523d] transition-colors whitespace-nowrap"
            >
              Call for Free Quote
            </a>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 text-center">
            Benefits of Professional HVAC Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Improved Air Quality",
                desc: "Reduce allergens and pollutants for healthier breathing.",
              },
              {
                title: "Energy Efficiency",
                desc: "Optimized systems use less energy, saving you money.",
              },
              {
                title: "Extended System Life",
                desc: "Regular maintenance prevents costly breakdowns.",
              },
              {
                title: "Peace of Mind",
                desc: "Know your system is safe and operating properly.",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="h-12 w-12 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-[#2D6A4F]" />
                </div>
                <h4 className="font-bold text-[#1A1A1A] mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}