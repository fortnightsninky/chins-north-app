import { CheckCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const trustBadges = [
    "Licensed Technicians",
    "HVAC Code Compliant",
    "Greater Houston Serving",
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight">
                Breathe Cleaner Air.
                <span className="block text-[#2D6A4F]">Live Better.</span>
              </h1>
              <p className="text-lg text-gray-600 mt-6 max-w-lg">
                Professional duct cleaning, mold remediation & HVAC upkeep for Greater Houston homes.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2"
                >
                  <CheckCircle className="h-4 w-4 text-[#52B788]" />
                  <span className="text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="bg-[#2D6A4F] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#24523d] transition-colors text-center"
              >
                Book a Free Inspection
              </Link>
              <a
                href="tel:+12816877575"
                className="border-2 border-[#2D6A4F] text-[#2D6A4F] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2D6A4F]/5 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Now: (281) 687-7575
              </a>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#2D6A4F]/10 to-[#52B788]/10 rounded-3xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[#2D6A4F] mb-4">
                    FREE Inspection Included
                  </h3>
                  <p className="text-gray-600">
                    Every full air duct cleaning comes with a complimentary system inspection.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[#2D6A4F] mb-4">
                    Anti-Microbial Treatment
                  </h3>
                  <p className="text-gray-600">
                    Optional sanitation & deodorization included with full service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}