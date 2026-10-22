import React, { useState } from 'react';
import { ROOMS, HOTEL_INFO, getWhatsAppUrl } from '../data/hotelData';
import { Room } from '../types';
import {
  Bed,
  Users,
  Maximize2,
  Check,
  Calendar,
  MessageCircle,
  Phone,
  Sparkles,
  Car,
  Wifi,
  Coffee,
  ShieldCheck
} from 'lucide-react';

interface RoomsPageProps {
  onSelectRoom: (roomId: string) => void;
  onOpenBooking: () => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({ onSelectRoom, onOpenBooking }) => {
  const [filterType, setFilterType] = useState<string>('all');
  const [calcRoomId, setCalcRoomId] = useState<string>(ROOMS[0].id);
  const [calcNights, setCalcNights] = useState<number>(2);
  const [calcGuests, setCalcGuests] = useState<number>(2);

  const filteredRooms = ROOMS.filter((room) => {
    if (filterType === 'all') return true;
    if (filterType === 'king') return room.id.includes('king');
    if (filterType === 'double') return room.id.includes('double');
    if (filterType === 'twin') return room.id.includes('twin');
    if (filterType === 'single') return room.id.includes('single');
    if (filterType === 'family') return room.id.includes('family');
    return true;
  });

  const selectedCalcRoom = ROOMS.find((r) => r.id === calcRoomId) || ROOMS[0];
  const calculatedTotal = selectedCalcRoom.pricePerNight * calcNights;

  return (
    <div className="py-12 sm:py-16 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Banner / Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-wider text-[#c59b27] uppercase">
            Alberta Guesthouse Accommodation
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Rooms & Suites at 51 Forfar Road
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed [text-wrap:balance]">
            Choose from five distinct room styles. Each bedroom provides private en-suite shower facilities, pocket-sprung beds, high-speed fiber Wi-Fi, and guaranteed free driveway parking in Dundee.
          </p>
        </div>

        {/* Live Stay & Rate Calculator Strip */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="w-full lg:w-auto space-y-1 text-center lg:text-left">
              <span className="text-xs font-semibold text-[#c59b27] uppercase tracking-wider block">
                Direct Booking Calculator
              </span>
              <h2 className="font-serif text-xl font-bold text-slate-900">
                Estimate Your Stay Cost
              </h2>
              <p className="text-xs text-slate-500">
                Transparent rates with no hidden fees or platform commissions
              </p>
            </div>

            <div className="w-full lg:w-auto grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                  Room Selection
                </label>
                <select
                  value={calcRoomId}
                  onChange={(e) => setCalcRoomId(e.target.value)}
                  className="w-full text-xs font-medium border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:ring-2 focus:ring-[#c59b27]"
                >
                  {ROOMS.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name} (£{r.pricePerNight}/nt)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                  Nights ({calcNights})
                </label>
                <select
                  value={calcNights}
                  onChange={(e) => setCalcNights(Number(e.target.value))}
                  className="w-full text-xs font-medium border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:ring-2 focus:ring-[#c59b27]"
                >
                  <option value={1}>1 Night</option>
                  <option value={2}>2 Nights (Weekend)</option>
                  <option value={3}>3 Nights</option>
                  <option value={4}>4 Nights</option>
                  <option value={5}>5 Nights</option>
                  <option value={7}>7 Nights (Full Week)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 uppercase mb-1">
                  Guests
                </label>
                <select
                  value={calcGuests}
                  onChange={(e) => setCalcGuests(Number(e.target.value))}
                  className="w-full text-xs font-medium border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:ring-2 focus:ring-[#c59b27]"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-4 border-t lg:border-t-0 lg:border-l border-slate-200 pt-4 lg:pt-0 lg:pl-6 w-full lg:w-auto justify-between lg:justify-start">
              <div>
                <span className="text-xs text-slate-500 block">Total Rate</span>
                <span className="font-serif text-2xl font-bold text-slate-900 tabular-nums">
                  £{calculatedTotal}
                </span>
              </div>
              <button
                onClick={() => onSelectRoom(calcRoomId)}
                className="py-2.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Reserve via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white rounded-xl border border-slate-200 max-w-xl mx-auto shadow-2xs">
          {[
            { id: 'all', label: 'All Rooms (5)' },
            { id: 'king', label: 'Deluxe King' },
            { id: 'double', label: 'Classic Double' },
            { id: 'twin', label: 'Twin Beds' },
            { id: 'single', label: 'Solo Traveler' },
            { id: 'family', label: 'Family Suite' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterType(tab.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterType === tab.id
                  ? 'bg-[#0f1c2e] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Detailed Room Cards List */}
        <div className="space-y-8">
          {filteredRooms.map((room: Room) => {
            const whatsappMsg = `Hello Alberta Guesthouse, I am interested in reserving the "${room.name}" (£${room.pricePerNight}/night) at 51 Forfar Rd, Dundee.`;

            return (
              <div
                key={room.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Image Section (5 cols) */}
                <div className="lg:col-span-5 relative aspect-16/10 lg:aspect-auto h-64 lg:h-full bg-slate-100">
                  <img
                    src={room.image}
                    alt={room.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  {room.featured && (
                    <div className="absolute top-4 left-4 bg-[#0f1c2e] text-[#c59b27] text-xs font-semibold px-3 py-1 rounded-md shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
                      <span>Signature Suite</span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg shadow-sm border border-slate-200">
                    <span className="text-xs text-slate-500">From </span>
                    <span className="font-serif text-xl font-bold text-slate-900 tabular-nums">
                      £{room.pricePerNight}
                    </span>
                    <span className="text-xs text-slate-500"> / night</span>
                  </div>
                </div>

                {/* Details Section (7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Header line */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-2">
                      <span className="flex items-center gap-1.5 font-medium text-slate-700">
                        <Bed className="w-4 h-4 text-[#c59b27]" />
                        {room.bedType}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1.5 font-medium text-slate-700">
                        <Users className="w-4 h-4 text-[#c59b27]" />
                        Up to {room.maxGuests} Guests
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1.5 font-medium text-slate-700">
                        <Maximize2 className="w-3.5 h-3.5 text-[#c59b27]" />
                        {room.size}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl font-bold text-slate-900">
                      {room.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {room.description}
                    </p>

                    {/* All Amenities checklist */}
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-700 block mb-2.5">
                        Room Amenities & Features
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {room.amenities.map((amenity, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions & Guarantee */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500 w-full sm:w-auto">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Free cancellation up to 48 hours</span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <a
                        href={getWhatsAppUrl(whatsappMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Book via WhatsApp</span>
                      </a>

                      <button
                        onClick={() => onSelectRoom(room.id)}
                        className="flex-1 sm:flex-none py-2.5 px-4 bg-[#0f1c2e] hover:bg-slate-800 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer text-center whitespace-nowrap"
                      >
                        Book Direct
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stay Inclusions info card */}
        <div className="bg-[#0f1c2e] text-white rounded-2xl p-8 border border-slate-800">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#c59b27] uppercase">
              Standard With Every Room Reservation
            </span>
            <h3 className="font-serif text-2xl font-bold">
              Included in Your Stay at Alberta Guesthouse
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="space-y-1">
                <Car className="w-5 h-5 text-[#c59b27]" />
                <h4 className="text-sm font-semibold">Free On-Site Parking</h4>
                <p className="text-xs text-slate-300">
                  Off-street driveway parking on 51 Forfar Road reserved for staying guests.
                </p>
              </div>

              <div className="space-y-1">
                <Wifi className="w-5 h-5 text-[#c59b27]" />
                <h4 className="text-sm font-semibold">Fiber Optic Wi-Fi</h4>
                <p className="text-xs text-slate-300">
                  Reliable 150 Mbps connection throughout all bedrooms for work or streaming.
                </p>
              </div>

              <div className="space-y-1">
                <Coffee className="w-5 h-5 text-[#c59b27]" />
                <h4 className="text-sm font-semibold">Scottish Hospitality Tray</h4>
                <p className="text-xs text-slate-300">
                  Highland teas, fresh coffee, and complimentary traditional Scottish shortbread.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
