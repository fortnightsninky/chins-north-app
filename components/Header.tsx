"use client";

import Image from "next/image";
import { Phone } from "lucide-react";

interface HeaderProps {
  activeTab: "home" | "schedule";
  onTabChange: (tab: "home" | "schedule") => void;
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Left */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="CHINS NORTH Clean Air Solutions"
              width={160}
              height={56}
              priority
              className="h-14 w-14 md:h-16 md:w-16 rounded-lg"
            />
          </div>

          {/* Navigation - Center */}
          <nav className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => onTabChange("home")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "home"
                  ? "bg-[#2D6A4F] text-white shadow-sm"
                  : "text-gray-600 hover:text-[#1A1A1A]"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onTabChange("schedule")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "schedule"
                  ? "bg-[#2D6A4F] text-white shadow-sm"
                  : "text-gray-600 hover:text-[#1A1A1A]"
              }`}
            >
              Schedule
            </button>
          </nav>

          {/* Phone - Right */}
          <a
            href="tel:+12816877575"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#2D6A4F] transition-colors"
          >
            <Phone className="h-4 w-4" />
            (281) 687-7575
          </a>
        </div>
      </div>
    </header>
  );
}
