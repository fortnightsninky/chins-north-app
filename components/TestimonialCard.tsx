import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
}

export default function TestimonialCard({ name, location, rating, text }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
          <span className="text-[#2D6A4F] font-bold">{name.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-bold text-[#1A1A1A]">{name}</h4>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>

      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>

      <p className="text-gray-700 italic">&ldquo;{text}&rdquo;</p>
    </div>
  );
}