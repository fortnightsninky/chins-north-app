import { HelpCircle } from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";

export default function FAQPage() {
  const faqItems = [
    {
      question: "How often should I clean my air ducts?",
      answer: "We recommend having your air ducts cleaned every 3-5 years, or more frequently if you have pets, allergies, or have recently completed home renovations. Homes with smokers or respiratory issues may benefit from more frequent cleaning.",
    },
    {
      question: "What's included in the free inspection?",
      answer: "Our free inspection includes a visual assessment of your HVAC system, ductwork inspection, airflow measurement, and identification of any potential issues. We'll provide a detailed report and recommendations with no obligation.",
    },
    {
      question: "Do you service commercial properties?",
      answer: "Yes, we service both residential and commercial properties in the Greater Houston area. Commercial services include larger HVAC systems, ductwork in office buildings, and regular maintenance contracts.",
    },
    {
      question: "How long does a full duct cleaning take?",
      answer: "A typical residential duct cleaning takes 3-5 hours, depending on the size of your home and the complexity of your duct system. We'll provide a more accurate timeframe during your free inspection.",
    },
    {
      question: "Is mold remediation safe for my family?",
      answer: "Yes, our mold remediation process uses safe, non-invasive methods that are family and pet-friendly. We use HEPA filtration to contain spores and ensure the area is thoroughly cleaned and safe after treatment.",
    },
    {
      question: "What areas do you serve?",
      answer: "We serve the Greater Houston area including Katy, Sugar Land, The Woodlands, Cypress, Pearland, and surrounding communities. Contact us to confirm service availability in your specific area.",
    },
    {
      question: "How is CHINS NORTH different from competitors?",
      answer: "We focus on system health and proper airflow rather than just cleaning. Our technicians are highly knowledgeable about HVAC systems, we follow strict code compliance, and include a free inspection with every full service.",
    },
    {
      question: "Do I need to be home during service?",
      answer: "Yes, we require someone to be home during the service for access and to answer any questions. However, we work efficiently and respect your time and property.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, check, and all major credit cards. Financing options are also available for larger projects.",
    },
    {
      question: "Do you offer any warranties or guarantees?",
      answer: "Yes, we offer a satisfaction guarantee on all our work. If you're not satisfied with the results, we'll return to address your concerns at no additional cost.",
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#2D6A4F]/10 mb-6">
              <HelpCircle className="h-8 w-8 text-[#2D6A4F]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="mb-12">
            <FaqAccordion items={faqItems} />
          </div>

          {/* Still Have Questions */}
          <div className="bg-[#F8F9FA] rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We're here to help! Contact us directly for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+12816877575"
                  className="bg-[#2D6A4F] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#24523d] transition-colors"
                >
                  Call Us: (281) 687-7575
                </a>
                <a
                  href="mailto:info@chinsnorth.com"
                  className="border-2 border-[#2D6A4F] text-[#2D6A4F] px-8 py-3 rounded-full font-semibold hover:bg-[#2D6A4F]/5 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}