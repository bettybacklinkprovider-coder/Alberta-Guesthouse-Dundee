import React from 'react';
import { HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';
import { MapPin, Phone, Mail, Clock, MessageCircle, ShieldCheck, Star } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenPromptModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPromptModal }) => {
  return (
    <footer className="bg-[#0f1c2e] text-slate-300 border-t border-slate-800">
      {/* Upper Footer: Value Proposition & Direct Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <span className="font-serif text-2xl font-bold text-white tracking-tight block">
              Alberta Guesthouse
            </span>
            <p className="text-sm text-slate-400 leading-relaxed">
              Charming Victorian stone residence offering luxury boutique en-suite rooms, quiet comfort, and traditional Scottish hospitality in Dundee.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-slate-300 font-medium">4.9 / 5.0 (186 Reviews)</span>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenPromptModal}
                className="text-xs text-[#c59b27] hover:text-amber-300 underline underline-offset-4 cursor-pointer transition-colors"
              >
                View Website Architecture & Prompt Specs
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Website Pages
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home (6 Distinct Sections)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('rooms')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Rooms & Suites (En-suite Catalog)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('offers')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Special Offers & Packages (6 Deals)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Dundee Location Map
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Location & Check-in */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Location & Hours
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                <span>
                  {HOTEL_INFO.address}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                <div>
                  <p>Check-in: {HOTEL_INFO.checkIn}</p>
                  <p>Check-out: {HOTEL_INFO.checkOut}</p>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300">Free On-site Driveway Parking</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Book Direct & Instant WhatsApp */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#c59b27] shrink-0" />
                <span className="font-semibold">{HOTEL_INFO.phone}</span>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Chat via WhatsApp</span>
              </a>
              <a
                href={`mailto:${HOTEL_INFO.email}`}
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#c59b27] shrink-0" />
                <span className="truncate">{HOTEL_INFO.email}</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl('Hi Alberta Guesthouse, I would like to book a room at 51 Forfar Rd Dundee.')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2.5 px-4 bg-[#c59b27] hover:bg-amber-600 text-slate-950 font-semibold text-xs rounded-lg transition-colors shadow-sm"
              >
                Book Direct for Best Rate
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Quiet Copyright */}
      <div className="border-t border-slate-800/80 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Alberta Guesthouse Dundee. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>51 Forfar Rd, Dundee DD4 7BE, Scotland</span>
            <span>·</span>
            <span>Tel: {HOTEL_INFO.phone}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
