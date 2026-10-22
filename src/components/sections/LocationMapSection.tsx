import React from 'react';
import { HOTEL_INFO, DUNDEE_ATTRACTIONS, getWhatsAppUrl } from '../../data/hotelData';
import { MapPin, Phone, MessageCircle, Navigation, Car, Clock, ShieldCheck, Compass } from 'lucide-react';

interface LocationMapSectionProps {
  onOpenBooking: () => void;
}

export const LocationMapSection: React.FC<LocationMapSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="location-section" className="py-20 sm:py-24 bg-[#faf8f5] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold tracking-wider text-[#c59b27] uppercase">
            Location & Travel
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Convenient Dundee Location
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed [text-wrap:balance]">
            Alberta Guesthouse is ideally situated at <span className="font-semibold text-slate-900">51 Forfar Rd, Dundee DD4 7BE</span>, offering swift access to the city centre, universities, and Angus coastal landmarks.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Map Embed (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-3 border border-slate-200 shadow-md overflow-hidden">
            <div className="relative w-full h-[380px] sm:h-[440px] rounded-xl overflow-hidden bg-slate-100">
              <iframe
                title="Alberta Guesthouse Location Map"
                src="https://maps.google.com/maps?q=51%20Forfar%20Rd%2C%20Dundee%20DD4%207BE%2C%20UK&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-3 left-3 bg-[#0f1c2e] text-white text-xs px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#c59b27]" />
                <span>Alberta Guesthouse · 51 Forfar Rd</span>
              </div>
            </div>

            <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-slate-800">Free Off-Street Guest Parking</span>
                <span>(Driveway access on Forfar Road)</span>
              </div>
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#0f1c2e] hover:text-[#c59b27] font-semibold underline underline-offset-4"
              >
                <span>Get Turn-by-Turn Directions</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Location Info & Travel Times (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact & WhatsApp Banner */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Direct Contact & Bookings
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#c59b27] shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">{HOTEL_INFO.address}</p>
                    <p className="text-xs text-slate-500">Angus & Tayside, Scotland</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#c59b27] shrink-0" />
                  <a
                    href={`tel:${HOTEL_INFO.phone}`}
                    className="font-bold text-slate-900 hover:text-[#c59b27] transition-colors"
                  >
                    {HOTEL_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#c59b27] shrink-0" />
                  <span className="text-xs text-slate-600">
                    Check-in: 15:00 - 21:00 · Check-out: 10:30
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <a
                  href={getWhatsAppUrl('Hello Alberta Guesthouse, I would like to book a stay directly.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {HOTEL_INFO.phone}</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  className="py-3 px-4 bg-[#0f1c2e] hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  <span>Book Direct</span>
                </button>
              </div>
            </div>

            {/* Travel Times to Dundee Attractions */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#c59b27]" />
                Nearby Attractions & Distance
              </h4>

              <div className="space-y-2 pt-1">
                {DUNDEE_ATTRACTIONS.map((att, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-1.5 border-b border-slate-100 last:border-b-0 text-xs"
                  >
                    <span className="font-medium text-slate-800">{att.name}</span>
                    <span className="text-slate-500 tabular-nums">{att.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
