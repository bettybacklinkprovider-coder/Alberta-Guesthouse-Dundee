import React, { useState } from 'react';
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
  Check,
  Camera,
  X,
  Maximize2
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Car: <Car className="w-4 h-4 text-[#c59b27]" />,
  Coffee: <Coffee className="w-4 h-4 text-[#c59b27]" />,
  Wifi: <Wifi className="w-4 h-4 text-[#c59b27]" />,
  Bath: <Bath className="w-4 h-4 text-[#c59b27]" />,
  CupSoda: <CupSoda className="w-4 h-4 text-[#c59b27]" />,
  Tv: <Tv className="w-4 h-4 text-[#c59b27]" />,
  MapPin: <MapPin className="w-4 h-4 text-[#c59b27]" />,
  Sparkles: <Sparkles className="w-4 h-4 text-[#c59b27]" />
};

export const FacilitiesSection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; title: string; desc: string } | null>(null);

  return (
    <section id="facilities-section" className="py-20 sm:py-24 bg-[#faf8f5] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold tracking-wider text-[#c59b27] uppercase flex items-center justify-center gap-1.5">
            <Camera className="w-4 h-4 text-[#c59b27]" />
            Guest Experience & Facilities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Facilities & Scottish Hospitality
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed [text-wrap:balance]">
            Explore our curated amenities designed for maximum comfort at 51 Forfar Road, Dundee — with private parking, en-suite bathrooms, high-speed Wi-Fi, and Scottish hospitality.
          </p>
        </div>

        {/* Featured Scottish Breakfast & Parking Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
          {/* Main Breakfast Lounge Showcase */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
            <div className="relative aspect-16/9 overflow-hidden bg-slate-100">
              <img
                src="/images/scottish_breakfast_lounge.jpg"
                alt="Alberta Guesthouse Scottish Breakfast Lounge"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c2e]/90 via-[#0f1c2e]/30 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-amber-300 text-xs font-semibold uppercase tracking-wider">
                  Traditional Scottish Hospitality
                </span>
                <h3 className="font-serif text-2xl font-bold mt-1">
                  Scottish Breakfast & Morning Tea Lounge
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-xl leading-relaxed">
                  Start your day with freshly brewed roast coffee, Scottish morning rolls, artisanal jams, and warm homemade scones in our sunlit dining lounge.
                </p>
              </div>
            </div>
          </div>

          {/* Guaranteed Driveway Parking Showcase */}
          <div className="lg:col-span-5 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md flex flex-col justify-between group">
            <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
              <img
                src="/images/parking_driveway_exterior.jpg"
                alt="Free Private Parking at Alberta Guesthouse 51 Forfar Road"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Free On-Site</span>
              </div>
            </div>
            <div className="p-6 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-amber-50 flex items-center justify-center">
                  <Car className="w-4 h-4 text-[#c59b27]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Free Private Driveway Parking
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Secure, off-street driveway parking directly at 51 Forfar Road. Safe and convenient for cars, SUVs, and golf travelers visiting Angus and Dundee.
              </p>
            </div>
          </div>
        </div>

        {/* 8 Facilities Cards with Photos & Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOTEL_FACILITIES.map((facility, index) => (
            <div
              key={index}
              onClick={() =>
                setSelectedPhoto({
                  src: facility.image,
                  title: facility.title,
                  desc: facility.description
                })
              }
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-[#c59b27]/60 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Card Photo Header */}
              <div className="relative aspect-16/11 overflow-hidden bg-slate-100">
                <img
                  src={facility.image}
                  alt={facility.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />

                {/* Floating Icon Badge */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/95 backdrop-blur-md flex items-center justify-center shadow-sm border border-slate-100">
                  {iconMap[facility.icon] || <Check className="w-4 h-4 text-[#c59b27]" />}
                </div>

                {/* Subtle Expand Indicator */}
                <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white p-1 rounded-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold text-slate-900 group-hover:text-[#c59b27] transition-colors leading-snug">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#c59b27] font-semibold">
                  <span>View Details & Photo</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guesthouse Ambiance Proof Strip */}
        <div className="mt-14 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#c59b27] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-slate-900">
                Immaculate Scottish Quality & Personal Care
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Daily housekeeping, fresh Scottish Highland herbal toiletries, and friendly local hosts ready to guide your Dundee itinerary.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-700">
              Postcode: <strong>DD4 7BE</strong>
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs font-semibold text-emerald-700">
              Free Parking Guaranteed
            </span>
          </div>
        </div>
      </div>

      {/* Photo Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 bg-slate-900">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 bg-white space-y-1">
              <span className="text-xs font-semibold text-[#c59b27] uppercase tracking-wider">
                Alberta Guesthouse Dundee
              </span>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                {selectedPhoto.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedPhoto.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
