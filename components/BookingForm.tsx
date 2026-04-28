"use client";

import { useState } from "react";
import { Calendar, Clock, Mail, MapPin, Phone, User } from "lucide-react";

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    street: "",
    city: "",
    zip: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
  });

  const serviceOptions = [
    "Air Duct Cleaning",
    "HVAC Upkeep",
    "Mold Inspection",
    "Dryer Vent Cleaning",
    "Preventative Maintenance",
    "Not Sure",
  ];

  const timeOptions = ["Morning", "Afternoon", "Evening"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    // For MVP, we'll just show success state
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
        <div className="h-16 w-16 rounded-full bg-[#52B788]/20 flex items-center justify-center mx-auto mb-6">
          <div className="h-8 w-8 rounded-full bg-[#2D6A4F] flex items-center justify-center">
            <span className="text-white text-xl">✓</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
          Thank You for Your Request!
        </h3>
        <p className="text-gray-600 mb-6">
          We'll call you within 24 hours to confirm your appointment.
        </p>
        <div className="bg-[#F8F9FA] rounded-xl p-6">
          <p className="text-[#2D6A4F] font-medium">
            Need immediate assistance? Call us at{" "}
            <a href="tel:+12816877575" className="underline">
              (281) 687-7575
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
        Request Your Free Inspection
      </h3>

      <div className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Full Name *
              </div>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Phone Number *
              </div>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
              placeholder="123-456-7890"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Address *
              </div>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Service Type *
              </div>
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Address */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Street Address *
            </label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
              placeholder="123 Main St"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City *
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
              placeholder="Houston"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ZIP Code *
            </label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
              pattern="[0-9]{5}"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
              placeholder="77002"
            />
          </div>
        </div>

        {/* Schedule */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Preferred Date *
              </div>
            </label>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Preferred Time *
              </div>
            </label>
            <div className="flex gap-2">
              {timeOptions.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, preferredTime: time }))}
                  className={`flex-1 py-3 rounded-lg border text-sm font-medium ${
                    formData.preferredTime === time
                      ? "bg-[#2D6A4F] text-white border-[#2D6A4F]"
                      : "border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Notes (Optional)
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
            placeholder="Any specific concerns or questions..."
          />
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-[#2D6A4F] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#24523d] transition-colors"
          >
            Request Free Inspection
          </button>
          <p className="text-sm text-gray-500 text-center mt-4">
            By submitting, you agree to be contacted by CHINS NORTH regarding your inquiry.
          </p>
        </div>
      </div>
    </form>
  );
}