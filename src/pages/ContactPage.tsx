import React, { useState } from 'react';
import { HOTEL_INFO, DUNDEE_ATTRACTIONS, getWhatsAppUrl } from '../data/hotelData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Train,
  Bus,
  Plane,
  MessageCircle,
  Navigation,
  CheckCircle2,
  Send,
  Compass
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    guests: '2',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = [
      `*Inquiry from Alberta Guesthouse Contact Form*`,
      `📍 51 Forfar Rd, Dundee DD4 7BE`,
      `---------------------------------------`,
      `👤 *Name:* ${formData.name || 'Guest'}`,
      `✉️ *Email:* ${formData.email || 'N/A'}`,
      `📞 *Phone:* ${formData.phone || 'N/A'}`,
      formData.dates ? `📅 *Dates:* ${formData.dates}` : null,
      `👥 *Guests:* ${formData.guests}`,
      `💬 *Message:* ${formData.message || 'General Inquiry'}`,
      `---------------------------------------`
    ]
      .filter(Boolean)
      .join('\n');

    window.open(getWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-12 sm:py-16 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-wider text-[#c59b27] uppercase">
            Location & Inquiries
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Contact Alberta Guesthouse
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed [text-wrap:balance]">
            We are here to assist with your Dundee visit. Reach us directly via WhatsApp, telephone, or our contact form. Free on-site parking is guaranteed for all guests at 51 Forfar Road.
          </p>
        </div>

        {/* 3 Contact Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Address */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#c59b27] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-slate-900">
              Address & Parking
            </h3>
            <p className="text-sm text-slate-700 font-medium">
              {HOTEL_INFO.address}
            </p>
            <p className="text-xs text-slate-500">
              Private off-street driveway parking on-site. Postcode: {HOTEL_INFO.postcode}
            </p>
            <div className="pt-2">
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f1c2e] hover:text-[#c59b27] underline underline-offset-4"
              >
                <span>Open in Google Maps</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-slate-900">
              Telephone & WhatsApp
            </h3>
            <p className="text-base font-bold text-slate-900">
              <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-[#c59b27] transition-colors">
                {HOTEL_INFO.phone}
              </a>
            </p>
            <p className="text-xs text-slate-500">
              Available 7 days a week for reservations, late arrivals, and local advice.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-4"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: Check-in & Host Hours */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-slate-900">
              Check-In & Departure
            </h3>
            <div className="text-xs text-slate-700 space-y-1">
              <p><strong>Check-in:</strong> {HOTEL_INFO.checkIn}</p>
              <p><strong>Check-out:</strong> {HOTEL_INFO.checkOut}</p>
              <p className="text-slate-500 pt-1">
                Flexible self-check-in available upon prior arrangement for late flights or trains.
              </p>
            </div>
            <div className="pt-2">
              <span className="text-xs text-slate-600">
                Email: <a href={`mailto:${HOTEL_INFO.email}`} className="text-slate-900 font-medium hover:underline">{HOTEL_INFO.email}</a>
              </span>
            </div>
          </div>
        </div>

        {/* Map and Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Map & Directions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-md overflow-hidden">
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-slate-100">
                <iframe
                  title="Alberta Guesthouse Location on Forfar Road Dundee"
                  src="https://maps.google.com/maps?q=51%20Forfar%20Rd%2C%20Dundee%20DD4%207BE%2C%20UK&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-4 flex items-center justify-between text-xs text-slate-600">
                <span className="font-semibold text-slate-900">51 Forfar Rd, Dundee DD4 7BE</span>
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0f1c2e] hover:text-[#c59b27] font-semibold underline"
                >
                  View Large Map →
                </a>
              </div>
            </div>

            {/* Travel Directions Guide */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-serif text-xl font-bold text-slate-900 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#c59b27]" />
                How to Reach Alberta Guesthouse
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-emerald-600" />
                    By Car (A90 Kingsway)
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Exit the A90 at the Forfar Road junction (A929) heading south towards the City Centre. Number 51 is on your left with private driveway parking.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Train className="w-3.5 h-3.5 text-blue-600" />
                    From Dundee Train Station
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Approx. 7 minutes by taxi (£6–£8) or take direct local buses 22 or 23 north towards Forfar Road.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Bus className="w-3.5 h-3.5 text-amber-600" />
                    Dundee Seagate Bus Station
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    National Express / Megabus coaches arrive at Seagate. 6 minutes by cab or a straightforward bus connection.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Plane className="w-3.5 h-3.5 text-indigo-600" />
                    Airports & Golf Links
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Dundee Airport is 12 mins. St Andrews Old Course is 25 mins drive across the Tay Road Bridge.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="space-y-2 mb-6">
              <span className="text-[11px] font-semibold text-[#c59b27] uppercase tracking-wider block">
                Send an Inquiry
              </span>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                Message the Host
              </h3>
              <p className="text-xs text-slate-500">
                Have questions about rooms, check-in, parking, or special arrangements? Send a message below.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-slate-900">
                  Message Received!
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thank you, {formData.name}. We will review your message and reply promptly. For urgent inquiries, please call {HOTEL_INFO.phone}.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-emerald-800 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Campbell"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-sm border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#c59b27] focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-sm border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#c59b27] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+44 7..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-sm border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#c59b27] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Dates (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 14 - 17 Nov 2026"
                      value={formData.dates}
                      onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                      className="w-full text-sm border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#c59b27] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full text-sm border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#c59b27] focus:outline-hidden"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests (Family)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Message or Special Request
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your trip to Dundee, room preference, parking needs, or arrival time..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-sm border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#c59b27] focus:outline-hidden"
                  />
                </div>

                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-[#0f1c2e] hover:bg-slate-800 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Alberta Guesthouse</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp (+447753429354)</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
