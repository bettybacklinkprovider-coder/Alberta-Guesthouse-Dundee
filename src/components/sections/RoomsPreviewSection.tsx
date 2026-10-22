import React from 'react';
import { ROOMS, getWhatsAppUrl } from '../../data/hotelData';
import { Room } from '../../types';
import { Users, Bed, Check, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

interface RoomsPreviewSectionProps {
  onSelectRoom: (roomId: string) => void;
  onViewAllRooms: () => void;
}

export const RoomsPreviewSection: React.FC<RoomsPreviewSectionProps> = ({
  onSelectRoom,
  onViewAllRooms
}) => {
  const previewRooms = ROOMS.slice(0, 3); // Top 3 flagship rooms

  return (
    <section className="py-20 sm:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold tracking-wider text-[#c59b27] uppercase">
              Accommodation & Comfort
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Boutique Rooms & Suites
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every room at 51 Forfar Road is individually styled with Scottish warmth, en-suite facilities, premium pocket-sprung beds, and modern amenities for restful visits to Dundee.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onViewAllRooms}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <span>Explore All Rooms & Pricing</span>
              <ArrowRight className="w-4 h-4 text-[#c59b27]" />
            </button>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewRooms.map((room) => {
            const whatsappMsg = `Hello Alberta Guesthouse, I would like to inquire about reserving the ${room.name} at 51 Forfar Rd, Dundee.`;
            return (
              <div
                key={room.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={room.image}
                    alt={room.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {room.featured && (
                    <div className="absolute top-3 left-3 bg-[#0f1c2e] text-[#c59b27] text-[11px] font-semibold px-3 py-1 rounded-md shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#c59b27]" />
                      <span>Guest Favorite</span>
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg shadow-sm border border-slate-200">
                    <span className="text-xs text-slate-500">From </span>
                    <span className="font-serif text-lg font-bold text-slate-900 tabular-nums">
                      £{room.pricePerNight}
                    </span>
                    <span className="text-xs text-slate-500"> / night</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span className="flex items-center gap-1 font-medium text-slate-700">
                        <Bed className="w-3.5 h-3.5 text-[#c59b27]" />
                        {room.bedType.split('(')[0]}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        Up to {room.maxGuests} Guests
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-[#c59b27] transition-colors">
                      {room.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-2">
                      {room.description}
                    </p>

                    {/* Amenities list */}
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                      {room.amenities.slice(0, 3).map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5">
                    <button
                      onClick={() => onSelectRoom(room.id)}
                      className="flex-1 py-2.5 px-3 bg-[#0f1c2e] hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer text-center"
                    >
                      Book Room
                    </button>

                    <a
                      href={getWhatsAppUrl(whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl border border-emerald-200 transition-colors flex items-center justify-center"
                      title="Quick Inquiry on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-lg font-bold text-slate-900">
              Need accommodation for family, golf teams, or longer stays?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              We also offer Family Suites, Twin configurations, and solo business accommodations at 51 Forfar Road.
            </p>
          </div>
          <button
            onClick={onViewAllRooms}
            className="shrink-0 px-6 py-3 bg-[#c59b27] hover:bg-amber-500 text-slate-950 font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            Browse All 5 Room Categories
          </button>
        </div>
      </div>
    </section>
  );
};
