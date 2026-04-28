# CHINS NORTH — Clean Air Solutions App

A Next.js 15 web application for CHINS NORTH™ Clean Air Solutions, serving the Greater Houston area.

## Features

- **Home Page**: Hero section, services overview, testimonials, and call-to-action
- **Services Page**: Detailed breakdown of all HVAC and air quality services
- **Booking Page**: Contact form with validation and success state
- **FAQ Page**: Accordion-style frequently asked questions
- **About Page**: Company mission, team information, and contact details
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Brand Colors**: Custom green palette (#2D6A4F, #52B788)

## Tech Stack

- **Framework**: Next.js 15 App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: lucide-react
- **Package Manager**: pnpm (configured)

## Project Structure

```
app/
├── layout.tsx              # Root layout with Header/Footer
├── page.tsx               # Home page
├── booking/
│   └── page.tsx           # Booking form page
├── services/
│   └── page.tsx           # Services detail page
├── faq/
│   └── page.tsx           # FAQ page
└── about/
    └── page.tsx           # About page

components/
├── Header.tsx             # Navigation header
├── Footer.tsx             # Site footer
├── BookingCTA.tsx         # Reusable call-to-action
├── HeroSection.tsx        # Home page hero
├── ServicesSection.tsx    # Services overview
├── WhyChooseUs.tsx        # Value proposition
├── TestimonialCard.tsx    # Customer testimonials
├── ServiceCard.tsx        # Service item component
├── BookingForm.tsx        # Contact form
└── FaqAccordion.tsx       # FAQ accordion component
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Run development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

## Design Notes

- **Brand Colors**: Primary green (#2D6A4F), accent green (#52B788), off-white background (#F8F9FA)
- **Typography**: Inter font family
- **Mobile-First**: Minimum 16px font inputs, 44px touch targets
- **Accessibility**: Semantic HTML, ARIA labels, screen reader support

## Next Steps

1. Connect booking form to backend (Formspree, email service, or custom API)
2. Add real images and photos
3. Implement analytics tracking
4. Add SEO meta tags optimization
5. Set up CI/CD pipeline

## License

Proprietary — CHINS NORTH™ Clean Air Solutions