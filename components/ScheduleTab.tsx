import { Phone, Clock, ShieldCheck } from "lucide-react";
import BookingForm from "./BookingForm";

export default function ScheduleTab() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Schedule Your Free Inspection
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              No cost, no obligation. We&apos;ll inspect your system and let you know
              exactly what it needs.
            </p>
          </div>

          <BookingForm />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
              <div className="h-10 w-10 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-[#2D6A4F]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#1A1A1A]">Prefer to call?</p>
                <a
                  href="tel:+12816877575"
                  className="text-[#2D6A4F] text-sm font-semibold hover:underline"
                >
                  (281) 687-7575
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
              <div className="h-10 w-10 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-[#2D6A4F]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#1A1A1A]">Business Hours</p>
                <p className="text-gray-600 text-sm">Mon-Sat: 8am-6pm</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
              <div className="h-10 w-10 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-5 w-5 text-[#2D6A4F]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#1A1A1A]">EPA Certified</p>
                <p className="text-gray-600 text-sm">Licensed &amp; compliant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
