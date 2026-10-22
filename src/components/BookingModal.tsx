import React, { useState } from 'react';
import { HOTEL_INFO, ROOMS, SPECIAL_OFFERS, getWhatsAppUrl } from '../data/hotelData';
import { X, Calendar, Users, MessageCircle, Phone, CheckCircle2, Shield } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomId?: string;
  initialPackageId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoomId,
  initialPackageId
}) => {
  if (!isOpen) return null;

  // Set default dates
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 3);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [bookingType, setBookingType] = useState<'room' | 'package'>(
    initialPackageId ? 'package' : 'room'
  );
  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    initialRoomId || ROOMS[0].id
  );
  const [selectedPackageId, setSelectedPackageId] = useState<string>(
    initialPackageId || SPECIAL_OFFERS[0].id
  );
  const [checkIn, setCheckIn] = useState<string>(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState<string>(formatDate(dayAfter));
  const [guests, setGuests] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Calculate nights
  const dIn = new Date(checkIn);
  const dOut = new Date(checkOut);
  const timeDiff = dOut.getTime() - dIn.getTime();
  const nights = Math.max(1, Math.ceil(timeDiff / (1000 * 3600 * 24)) || 1);

  const selectedRoom = ROOMS.find((r) => r.id === selectedRoomId) || ROOMS[0];
  const selectedPackage = SPECIAL_OFFERS.find((p) => p.id === selectedPackageId) || SPECIAL_OFFERS[0];

  const estimatedTotal =
    bookingType === 'room'
      ? selectedRoom.pricePerNight * nights
      : selectedPackage.discountedPrice;

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const subjectTitle =
      bookingType === 'room' ? selectedRoom.name : `${selectedPackage.title} (${selectedPackage.categoryLabel})`;

    const messageText = [
      `*New Booking Inquiry - Alberta Guesthouse Dundee*`,
      `📍 Address: 51 Forfar Rd, Dundee DD4 7BE`,
      `---------------------------------------`,
      `👤 *Guest Name:* ${guestName.trim() || 'Guest'}`,
      guestPhone.trim() ? `📞 *Contact:* ${guestPhone.trim()}` : null,
      `🛏️ *Selection:* ${subjectTitle}`,
      `📅 *Check-In:* ${checkIn}`,
      `📅 *Check-Out:* ${checkOut} (${nights} night${nights > 1 ? 's' : ''})`,
      `👥 *Guests:* ${guests}`,
      `💷 *Estimated Rate:* £${estimatedTotal}`,
      notes.trim() ? `📝 *Special Requests:* ${notes.trim()}` : null,
      `---------------------------------------`,
      `Please let me know room availability and confirm my reservation. Thank you!`
    ]
      .filter(Boolean)
      .join('\n');

    const url = getWhatsAppUrl(messageText);
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-[#0f1c2e] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold tracking-wider text-[#c59b27] uppercase block">
              Direct Reservation
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              Book Alberta Guesthouse
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              51 Forfar Rd, Dundee · Best rate guaranteed via WhatsApp
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-slate-900">
              WhatsApp Inquiry Dispatched!
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Your reservation request has been prepared in WhatsApp. We reply promptly to confirm dates and arrange your check-in at 51 Forfar Road, Dundee.
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs text-slate-700 space-y-1">
              <p><strong>Selection:</strong> {bookingType === 'room' ? selectedRoom.name : selectedPackage.title}</p>
              <p><strong>Dates:</strong> {checkIn} to {checkOut} ({nights} nights)</p>
              <p><strong>Estimated Total:</strong> £{estimatedTotal}</p>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setSubmitted(false)}
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                Edit Details
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-[#0f1c2e] hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppBooking} className="p-6 space-y-5">
            {/* Toggle between Room and Special Offer */}
            <div className="flex rounded-lg bg-slate-100 p-1 border border-slate-200">
              <button
                type="button"
                onClick={() => setBookingType('room')}
                className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  bookingType === 'room'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Standard Rooms & Suites
              </button>
              <button
                type="button"
                onClick={() => setBookingType('package')}
                className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  bookingType === 'package'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Special Offers & Packages
              </button>
            </div>

            {/* Room or Package Selection */}
            {bookingType === 'room' ? (
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Select Room
                </label>
                <select
                  value={selectedRoomId}
                  onChange={(e) => setSelectedRoomId(e.target.value)}
                  className="w-full text-sm border border-slate-300 rounded-lg p-2.5 bg-white focus:outline-hidden focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                >
                  {ROOMS.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} — £{room.pricePerNight}/night ({room.type})
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Select Special Offer Package
                </label>
                <select
                  value={selectedPackageId}
                  onChange={(e) => setSelectedPackageId(e.target.value)}
                  className="w-full text-sm border border-slate-300 rounded-lg p-2.5 bg-white focus:outline-hidden focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                >
                  {SPECIAL_OFFERS.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.title} — £{pkg.discountedPrice} (Save {pkg.discountPercentage}%)
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Dates Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  Check-in Date
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  min={formatDate(today)}
                  className="w-full text-sm border border-slate-300 rounded-lg p-2.5 bg-white focus:outline-hidden focus:ring-2 focus:ring-[#c59b27]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  Check-out Date
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn}
                  className="w-full text-sm border border-slate-300 rounded-lg p-2.5 bg-white focus:outline-hidden focus:ring-2 focus:ring-[#c59b27]"
                  required
                />
              </div>
            </div>

            {/* Guests & Guest Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-slate-500" />
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full text-sm border border-slate-300 rounded-lg p-2.5 bg-white focus:outline-hidden focus:ring-2 focus:ring-[#c59b27]"
                >
                  <option value={1}>1 Guest (Solo)</option>
                  <option value={2}>2 Guests (Couple / Pair)</option>
                  <option value={3}>3 Guests (Family)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full text-sm border border-slate-300 rounded-lg p-2.5 bg-white focus:outline-hidden focus:ring-2 focus:ring-[#c59b27]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="+44 7..."
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  className="w-full text-sm border border-slate-300 rounded-lg p-2.5 bg-white focus:outline-hidden focus:ring-2 focus:ring-[#c59b27]"
                />
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Special Requests or Arrival Notes
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Estimated arrival around 16:30, parking spot needed, dietary requirements..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full text-sm border border-slate-300 rounded-lg p-2.5 bg-white focus:outline-hidden focus:ring-2 focus:ring-[#c59b27]"
              />
            </div>

            {/* Price Summary Strip */}
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-amber-900 font-medium block">
                  {bookingType === 'room'
                    ? `${selectedRoom.name} · ${nights} night${nights > 1 ? 's' : ''}`
                    : `${selectedPackage.title} Package`}
                </span>
                <span className="text-[11px] text-amber-700 flex items-center gap-1 mt-0.5">
                  <Shield className="w-3 h-3" />
                  Free cancellation up to 48h · Free parking included
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 block">Estimated Total</span>
                <span className="font-serif text-2xl font-bold text-slate-900">
                  £{estimatedTotal}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm via WhatsApp ({HOTEL_INFO.phone})</span>
              </button>

              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-[#c59b27]" />
                <span>Call Us</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
