import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="flex items-start gap-4">
        <div className="bg-[#2D6A4F]/10 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-[#2D6A4F]" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>

          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#52B788]" />
                <span className="text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#2D6A4F]">
              Contact for free quote
            </span>
            <Link
              href="/booking"
              className="bg-[#2D6A4F] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#24523d] transition-colors"
            >
              Schedule
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}