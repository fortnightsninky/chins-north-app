import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import WhyChooseUs from "./WhyChooseUs";
import TestimonialCard from "./TestimonialCard";

interface HomeTabProps {
  onScheduleClick: () => void;
}

export default function HomeTab({ onScheduleClick }: HomeTabProps) {
  const testimonials = [
    {
      name: "Michael R.",
      location: "Katy, TX",
      rating: 5,
      text: "CHINS NORTH transformed our home's air quality. The technicians were professional and thorough. Highly recommend!",
    },
    {
      name: "Sarah L.",
      location: "Sugar Land, TX",
      rating: 5,
      text: "Our HVAC system runs so much better after their maintenance service. The free inspection was incredibly helpful.",
    },
    {
      name: "James T.",
      location: "The Woodlands, TX",
      rating: 5,
      text: "Great service, fair pricing, and they actually explained everything they were doing. Will use them again.",
    },
  ];

  return (
    <>
      <HeroSection onScheduleClick={onScheduleClick} />
      <ServicesSection onScheduleClick={onScheduleClick} />
      <WhyChooseUs />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real feedback from Houston-area homeowners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
