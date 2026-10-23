import React, { useState } from 'react';
import { HOTEL_INFO, getWhatsAppUrl } from '../../data/hotelData';
import { Phone, MessageCircle, Calendar, Users, MapPin, Star, ShieldCheck, Car } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreRooms: () => void;
  onExploreOffers: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onExploreRooms,
  onExploreOffers
}) => {
  const [quickCheckIn, setQuickCheckIn] = useState('');
  const [quickGuests, setQuickGuests] = useState('2');

  const handleQuickCheck = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking();
  };

  return (
    <section className="relative bg-[#0f1c2e] text-white overflow-hidden">
      {/* Background Hero Video with Image Poster Fallback & Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero_alberta_guesthouse.jpg"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
        >
          <source
            src="https://res.cloudinary.com/k7og2ybq/video/upload/v1792673816/hero-background.mp4.mp4"
            type="video/mp4"
          />
          <img
            src="/images/hero_alberta_guesthouse.jpg"
            alt="Alberta Guesthouse Dundee Exterior"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1c2e]/90 via-[#0f1c2e]/75 to-[#0f1c2e]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c2e] via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-20 lg:pb-28">
        <div className="max-w-3xl space-y-6">
          {/* Unboxed Metadata Header (Zero-Pill Discipline) */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-amber-300 font-medium tracking-wide">
            <span className="flex items-center gap-1.5 text-white">
              <MapPin className="w-3.5 h-3.5 text-[#c59b27]" />
              51 Forfar Rd, Dundee DD4 7BE
            </span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>Free On-Site Parking</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="flex items-center gap-1 text-amber-300">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              4.9 Rating (186 Reviews)
            </span>
          </div>

          {/* Marquee Headline with text-wrap: balance */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
            Experience Scottish Warmth & Modern Boutique Comfort in Dundee
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-light">
            Welcome to Alberta Guesthouse. Nestled on Forfar Road, just minutes from the Dundee Waterfront and V&A Museum. Featuring luxurious en-suite rooms, quiet garden surroundings, and generous Scottish hospitality.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={getWhatsAppUrl('Hello Alberta Guesthouse, I would like to book a stay directly.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-950/20 transition-all cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Book via WhatsApp (+44 7753 429354)</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-[#c59b27] hover:bg-amber-400 rounded-xl shadow-lg transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Check Room Availability</span>
            </button>

            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl transition-all whitespace-nowrap border border-white/15"
            >
              <Phone className="w-4 h-4 text-[#c59b27]" />
              <span>{HOTEL_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Floating Quick Stay Inquiry Strip (Full-width row below hero split) */}
        <div className="mt-12 sm:mt-16 bg-white/95 backdrop-blur-md text-slate-900 rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/40">
          <form onSubmit={handleQuickCheck} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c59b27]" />
                Location
              </label>
              <div className="text-sm font-medium text-slate-800 bg-slate-100/80 px-3 py-2.5 rounded-lg border border-slate-200">
                51 Forfar Rd, Dundee
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#c59b27]" />
                Check-in Date
              </label>
              <input
                type="date"
                value={quickCheckIn}
                onChange={(e) => setQuickCheckIn(e.target.value)}
                className="w-full text-sm font-medium text-slate-800 bg-slate-50 px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#c59b27]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#c59b27]" />
                Guests
              </label>
              <select
                value={quickGuests}
                onChange={(e) => setQuickGuests(e.target.value)}
                className="w-full text-sm font-medium text-slate-800 bg-slate-50 px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#c59b27]"
              >
                <option value="1">1 Adult (Solo)</option>
                <option value="2">2 Adults (Couple)</option>
                <option value="3">3 Guests (Family)</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#0f1c2e] hover:bg-slate-800 text-white font-semibold text-sm rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Find Available Rooms</span>
              </button>
            </div>
          </form>

          {/* Highlights bar */}
          <div className="mt-4 pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-3">
            <span className="flex items-center gap-1.5">
              <Car className="w-4 h-4 text-emerald-600" />
              Free On-Site Guesthouse Parking
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#c59b27]" />
              Book Direct: No Commission Fees
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              Rated 4.9/5 by 186+ Verified Guests
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={onExploreOffers}
                className="text-[#0f1c2e] font-semibold hover:text-[#c59b27] underline underline-offset-4 cursor-pointer"
              >
                View 6 Exclusive Offers →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
