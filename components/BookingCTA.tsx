import { Phone } from "lucide-react";
import Link from "next/link";

export default function BookingCTA() {
  return (
    <div className="bg-[#2D6A4F] text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Ready for cleaner air?</h3>
            <p className="text-[#D1FAE5]">
              Schedule your FREE system inspection today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/booking"
              className="bg-white text-[#2D6A4F] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Book Free Inspection
            </Link>
            <a
              href="tel:+12816877575"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Now: (281) 687-7575
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}