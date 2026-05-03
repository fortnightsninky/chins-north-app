import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onScheduleClick?: () => void;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  onScheduleClick,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="flex items-start gap-4">
        <div className="bg-[#2D6A4F]/10 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-[#2D6A4F]" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <button
            onClick={onScheduleClick}
            className="bg-[#2D6A4F] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#24523d] transition-colors cursor-pointer"
          >
            Schedule
          </button>
        </div>
      </div>
    </div>
  );
}
