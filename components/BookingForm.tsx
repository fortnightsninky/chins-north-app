"use client";

import { useState } from "react";
import { Calendar, Clock, Mail, Phone, User } from "lucide-react";

const TIME_WINDOWS = [
  { label: "8:00 AM - 11:00 AM", value: "8AM-11AM" },
  { label: "11:00 AM - 2:00 PM", value: "11AM-2PM" },
  { label: "2:00 PM - 5:00 PM", value: "2PM-5PM" },
];

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const hasContact = formData.phone.trim() !== "" || formData.email.trim() !== "";
  const phoneValid = formData.phone.trim() === "" || /^\d{3}-?\d{3}-?\d{4}$/.test(formData.phone);
  const emailValid = formData.email.trim() === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!hasContact) return;

    try {
      const formspreeEndpoint = "https://formspree.io/f/your-form-id-here";

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _subject: `New Inspection Request: ${formData.fullName} - ${formData.preferredDate} ${formData.preferredTime}`,
          _replyto: formData.email || formData.phone,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Failed to submit. Please try again or call us at (281) 687-7575.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please try again or call us at (281) 687-7575.");
    }
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTimeWindow = (value: string) => {
    const tw = TIME_WINDOWS.find((t) => t.value === value);
    return tw ? tw.label : value;
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
        <div className="h-16 w-16 rounded-full bg-[#52B788]/20 flex items-center justify-center mx-auto mb-6">
          <div className="h-8 w-8 rounded-full bg-[#2D6A4F] flex items-center justify-center">
            <span className="text-white text-xl">&#10003;</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
          Inspection Scheduled
        </h3>
        <p className="text-gray-600 mb-6">
          We&apos;ll reach out to confirm your appointment shortly.
        </p>

        <div className="bg-[#F8F9FA] rounded-xl p-6 text-left space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-500 text-sm">Name</span>
            <span className="font-medium text-[#1A1A1A]">{formData.fullName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 text-sm">Date</span>
            <span className="font-medium text-[#1A1A1A]">{formatDate(formData.preferredDate)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 text-sm">Time Window</span>
            <span className="font-medium text-[#1A1A1A]">{formatTimeWindow(formData.preferredTime)}</span>
          </div>
          {formData.phone && (
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Phone</span>
              <span className="font-medium text-[#1A1A1A]">{formData.phone}</span>
            </div>
          )}
          {formData.email && (
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Email</span>
              <span className="font-medium text-[#1A1A1A]">{formData.email}</span>
            </div>
          )}
        </div>

        <p className="text-[#2D6A4F] font-medium text-sm">
          Need to make changes? Call us at{" "}
          <a href="tel:+12816877575" className="underline">
            (281) 687-7575
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
        Schedule Your Free Inspection
      </h3>
      <p className="text-gray-500 text-sm mb-6">
        Provide your name, a way to reach you, and your preferred date and time.
      </p>

      <div className="space-y-6">
        {/* Name */}
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
            placeholder="Your name"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Phone Number
            </div>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent ${
              !phoneValid ? "border-red-400" : "border-gray-300"
            }`}
            placeholder="123-456-7890"
          />
          {!phoneValid && (
            <p className="text-red-500 text-xs mt-1">Enter a valid phone number</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email Address
            </div>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent ${
              !emailValid ? "border-red-400" : "border-gray-300"
            }`}
            placeholder="you@example.com"
          />
          {!emailValid && (
            <p className="text-red-500 text-xs mt-1">Enter a valid email address</p>
          )}
        </div>

        {/* Contact requirement note */}
        {!hasContact && (
          <p className="text-amber-600 text-sm">
            Phone or email is required so we can reach you.
          </p>
        )}

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Date of Inspection *
            </div>
          </label>
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
          />
        </div>

        {/* Time Window */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Time Window *
            </div>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {TIME_WINDOWS.map((tw) => (
              <button
                key={tw.value}
                type="button"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, preferredTime: tw.value }))
                }
                className={`py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                  formData.preferredTime === tw.value
                    ? "bg-[#2D6A4F] text-white border-[#2D6A4F]"
                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                {tw.label}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={!hasContact || !phoneValid || !emailValid}
            className="w-full bg-[#2D6A4F] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#24523d] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Schedule
          </button>
          <p className="text-sm text-gray-500 text-center mt-4">
            By submitting, you agree to be contacted by CHINS NORTH regarding your inspection.
          </p>
        </div>
      </div>
    </form>
  );
}
