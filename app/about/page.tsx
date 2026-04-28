import { Target, Users, Award } from "lucide-react";
import { Phone, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              About CHINS NORTH
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional clean air solutions serving Greater Houston since 2015.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-[#2D6A4F]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">Our Mission</h2>
            </div>
            <p className="text-gray-700 text-lg mb-6">
              At CHINS NORTH, we believe clean air is an investment, not a luxury. Our mission is to improve life quality from within the property through preventive maintenance of your HVAC system.
            </p>
            <div className="bg-[#F8F9FA] rounded-xl p-6">
              <p className="text-center text-[#1A1A1A] font-medium italic">
                &ldquo;We don't just clean ducts—we optimize systems for better airflow, efficiency, and long-term health.&rdquo;
              </p>
            </div>
          </div>

          {/* Our Approach */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6 text-center">
              Our Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: "Inspection-First",
                  description: "Every service begins with a comprehensive system evaluation to identify the root causes, not just symptoms.",
                },
                {
                  icon: Users,
                  title: "System-Focused",
                  description: "We look at your HVAC system as a whole, ensuring all components work together efficiently.",
                },
                {
                  icon: Award,
                  title: "Code Compliant",
                  description: "All work meets or exceeds HVAC code standards and industry best practices.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="h-12 w-12 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-[#2D6A4F]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team & Values */}
          <div className="bg-[#F8F9FA] rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6 text-center">
              Our Team & Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">
                  Highly Knowledgeable Technicians
                </h3>
                <p className="text-gray-700 mb-4">
                  Our team brings extensive field experience with HVAC systems and air quality solutions. We invest in continuous training to stay current with the latest technologies and techniques.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#52B788]" />
                    <span>Licensed and certified technicians</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#52B788]" />
                    <span>Background checked and insured</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#52B788]" />
                    <span>Extensive product and system knowledge</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">
                  Commitment to Quality
                </h3>
                <p className="text-gray-700 mb-4">
                  We take pride in our work and stand behind every service. Our focus on proper airflow, cleanliness, and long-term system health sets us apart from competitors who offer quick fixes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#52B788]" />
                    <span>Satisfaction guarantee on all work</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#52B788]" />
                    <span>Detailed before/after documentation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#52B788]" />
                    <span>Follow-up check-ins after service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6 text-center">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-[#2D6A4F]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A]">Call Us</h3>
                    <a
                      href="tel:+12816877575"
                      className="text-[#2D6A4F] hover:underline font-semibold text-lg"
                    >
                      (281) 687-7575
                    </a>
                    <p className="text-sm text-gray-600">Mon-Sat: 8am-6pm • Sun: 10am-4pm</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-[#2D6A4F]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A]">Serving Area</h3>
                    <p className="text-gray-700">Greater Houston, TX</p>
                    <p className="text-sm text-gray-600">
                      Including Katy, Sugar Land, The Woodlands, Cypress, Pearland
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#F8F9FA] rounded-xl p-6">
                <h3 className="font-bold text-[#1A1A1A] mb-4">Ready to Get Started?</h3>
                <p className="text-gray-700 mb-4">
                  Schedule your free system inspection today and experience the CHINS NORTH difference.
                </p>
                <a
                  href="/booking"
                  className="inline-block bg-[#2D6A4F] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#24523d] transition-colors"
                >
                  Book Free Inspection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}