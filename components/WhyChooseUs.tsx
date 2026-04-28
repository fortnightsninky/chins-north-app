import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Highly Knowledgeable Technicians",
      description: "Our team has extensive field experience with HVAC systems and air quality solutions.",
    },
    {
      title: "HVAC Code Compliant",
      description: "All work is performed in line with HVAC code standards and industry best practices.",
    },
    {
      title: "System Health Focused",
      description: "We prioritize proper airflow, cleanliness, and long-term system health over quick fixes.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
              Why Choose CHINS NORTH?
            </h2>
            <div className="space-y-6">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-[#2D6A4F]/10 p-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-[#2D6A4F]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-1">
                      {point.title}
                    </h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#2D6A4F] mb-2">
                  Our Approach
                </h3>
                <p className="text-gray-600">
                  Inspection-first, system-focused service for lasting results.
                </p>
              </div>

              {/* 3-Step Visual */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {[
                  { step: "1", title: "Inspect", desc: "Comprehensive system evaluation" },
                  { step: "2", title: "Identify", desc: "Pinpoint issues & opportunities" },
                  { step: "3", title: "Improve", desc: "Implement effective solutions" },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="h-16 w-16 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                      {item.step}
                    </div>
                    <h4 className="font-bold text-[#1A1A1A] mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#F8F9FA] rounded-xl p-6 mt-6">
                <p className="text-center text-[#1A1A1A] font-medium">
                  &ldquo;Our goal is to improve life quality from within the property through preventive maintenance of your HVAC system.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}