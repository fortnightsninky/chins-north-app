import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-[#2D6A4F] flex items-center justify-center">
                <span className="text-white font-bold text-lg">CN</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  CHINS <span className="text-[#52B788]">NORTH</span>
                </h3>
                <p className="text-sm text-gray-400">Clean Air Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Professional duct cleaning, mold remediation & HVAC upkeep for
              Greater Houston homes.
            </p>
            <p className="text-[#52B788] italic text-sm">
              &ldquo;Clean air is an investment, not a luxury.&rdquo;
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Full Air Duct Cleaning</li>
              <li className="text-gray-400 text-sm">
                HVAC Unit Cleaning & Upkeep
              </li>
              <li className="text-gray-400 text-sm">
                Mold Inspection & Treatment
              </li>
              <li className="text-gray-400 text-sm">Dryer Vent Cleaning</li>
              <li className="text-gray-400 text-sm">
                Preventative Maintenance
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#52B788]" />
                <div>
                  <p className="font-medium">Call Now</p>
                  <a
                    href="tel:+12816877575"
                    className="text-gray-400 hover:text-white"
                  >
                    (281) 687-7575
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#52B788]" />
                <div>
                  <p className="font-medium">Serving</p>
                  <p className="text-gray-400">Greater Houston, TX</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CHINS NORTH&trade; &mdash; Clean
            Air Solutions. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Licensed technicians &bull; HVAC code compliant &bull; Greater
            Houston serving
          </p>
        </div>
      </div>
    </footer>
  );
}
