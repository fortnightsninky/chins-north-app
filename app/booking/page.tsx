import { Phone } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export default function BookingPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Book Your Free Inspection
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and we'll contact you within 24 hours to schedule your appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Form */}
            <div className="lg:col-span-2">
              <BookingForm />
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-[#2D6A4F]" />
                    </div>
                    <div>
                      <p className="font-medium">Call Us Directly</p>
                      <a
                        href="tel:+12816877575"
                        className="text-[#2D6A4F] hover:underline font-semibold"
                      >
                        (281) 687-7575
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                      <span className="text-[#2D6A4F] font-bold">CN</span>
                    </div>
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-gray-600">Mon-Sat: 8am-6pm</p>
                      <p className="text-gray-600">Sun: 10am-4pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8F9FA] rounded-2xl p-6">
                <h4 className="font-bold text-[#1A1A1A] mb-3">
                  What to Expect
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#52B788] mt-2" />
                    <span className="text-sm text-gray-700">
                      Free system inspection with every full service
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#52B788] mt-2" />
                    <span className="text-sm text-gray-700">
                      Licensed, experienced technicians
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#52B788] mt-2" />
                    <span className="text-sm text-gray-700">
                      HVAC code compliant work
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#52B788] mt-2" />
                    <span className="text-sm text-gray-700">
                      Serving Greater Houston area
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}