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
      name: "Betty",
      location: "Houston, TX",
      rating: 5,
      text: "They did a thorough job on my ducts and took the time to explain everything. My allergies have improved noticeably since the cleaning.",
    },
    {
      name: "Wasim",
      location: "Katy, TX",
      rating: 5,
      text: "Professional and honest. They showed me exactly what needed attention and didn't try to upsell me on things I didn't need.",
    },
    {
      name: "Wallace",
      location: "Sugar Land, TX",
      rating: 5,
      text: "The dryer vent cleaning made a real difference. Dryer runs way more efficient now and I feel safer knowing the lint buildup is gone.",
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
