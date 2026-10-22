import React from 'react';
import { HOTEL_FACILITIES } from '../../data/hotelData';
import {
  Car,
  Coffee,
  Wifi,
  Bath,
  CupSoda,
  Tv,
  MapPin,
  Sparkles,
  ShieldCheck,
  Check
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Car: <Car className="w-5 h-5 text-[#c59b27]" />,
  Coffee: <Coffee className="w-5 h-5 text-[#c59b27]" />,
  Wifi: <Wifi className="w-5 h-5 text-[#c59b27]" />,
  Bath: <Bath className="w-5 h-5 text-[#c59b27]" />,
  CupSoda: <CupSoda className="w-5 h-5 text-[#c59b27]" />,
  Tv: <Tv className="w-5 h-5 text-[#c59b27]" />,
  MapPin: <MapPin className="w-5 h-5 text-[#c59b27]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#c59b27]" />
};

export const FacilitiesSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#faf8f5] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual feature card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="/src/assets/images/scottish_breakfast_lounge_1792671163219.jpg"
                alt="Alberta Guesthouse Scottish Breakfast Lounge"
                referrerPolicy="no-referrer"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c2e]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-amber-300 text-xs font-semibold uppercase tracking-wider">
                  Morning In Scotland
                </span>
                <h3 className="font-serif text-2xl font-bold mt-1">
                  Scottish Breakfast & Morning Tea
                </h3>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                  Served in our dining room with fresh brewed coffee, local preserves, and warm morning rolls.
                </p>
              </div>
            </div>

            {/* Parking and Location Highlight Card */}
            <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Complimentary On-Site Driveway Parking</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Parking in Dundee can be challenging; at Alberta Guesthouse on 51 Forfar Road, you have free, safe off-street parking included with your room.
              </p>
            </div>
          </div>

          {/* Right Column: Facilities Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#c59b27] uppercase">
                Guest Experience & Comfort
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Traditional Scottish Hospitality & Modern Amenities
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether visiting Dundee for leisure, university, or business, we provide a warm, quiet retreat equipped with everything required for a comfortable stay.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {HOTEL_FACILITIES.map((facility, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-colors space-y-2"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                    {iconMap[facility.icon] || <Check className="w-5 h-5 text-[#c59b27]" />}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
