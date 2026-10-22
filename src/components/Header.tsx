import React, { useState } from 'react';
import { HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';
import { Phone, MessageCircle, Menu, X, FileText } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
  onOpenPromptModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
  onOpenPromptModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'offers', label: 'Offers & Packages' },
    { id: 'contact', label: 'Contact & Location' }
  ];

  const handleLinkClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Quiet Notice Strip */}
      <div className="bg-[#0f1c2e] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27]"></span>
              51 Forfar Rd, Dundee DD4 7BE
            </span>
            <span className="hidden md:inline text-slate-600">·</span>
            <span className="hidden md:inline">Free On-Site Guest Parking</span>
            <span className="hidden md:inline text-slate-600">·</span>
            <span className="hidden lg:inline text-amber-300 font-medium">Direct Booking Lowest Price Guarantee</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>{HOTEL_INFO.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <button
              onClick={onOpenPromptModal}
              className="text-[#c59b27] hover:text-amber-300 flex items-center gap-1 transition-colors"
              title="View & Copy Prompt Specs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Prompt Specs</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation (Complies with Top Bar Contract: 3 Zones) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark in luxury display serif, single line */}
          <button
            onClick={() => handleLinkClick('home')}
            className="text-left group cursor-pointer focus:outline-hidden"
          >
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#0f1c2e] group-hover:text-[#c59b27] transition-colors whitespace-nowrap shrink-0 block">
              Alberta Guesthouse
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-700 font-semibold block -mt-1">
              Dundee · Scotland
            </span>
          </button>

          {/* Zone 2: 4 single-line nav links with clean hover styling */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#0f1c2e] font-semibold'
                      : 'text-slate-700 hover:text-[#0f1c2e]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c59b27] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action (Single-line, direct WhatsApp booking) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl('Hello Alberta Guesthouse, I would like to book a stay directly.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book via WhatsApp</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-[#0f1c2e] hover:bg-slate-800 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Book Stay</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#0f1c2e] rounded-md"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-100 text-[#0f1c2e] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-emerald-600 rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {HOTEL_INFO.phone}</span>
              </a>
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="w-full text-center flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-800 bg-slate-100 rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#c59b27]" />
                <span>Call Directly: {HOTEL_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
