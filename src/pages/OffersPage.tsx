import React, { useState } from 'react';
import { SPECIAL_OFFERS, FAQ_LIST, getWhatsAppUrl } from '../data/hotelData';
import { SpecialOffer } from '../types';
import {
  Tag,
  CheckCircle2,
  Clock,
  Calendar,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  Sparkles,
  Gift,
  Plus,
  Check
} from 'lucide-react';

interface OffersPageProps {
  onSelectOffer: (offerId: string) => void;
  onOpenBooking: () => void;
}

export const OffersPage: React.FC<OffersPageProps> = ({ onSelectOffer, onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Customizer state
  const [customPackageId, setCustomPackageId] = useState<string>(SPECIAL_OFFERS[0].id);
  const [addOns, setAddOns] = useState<{ [key: string]: boolean }>({
    prosecco: false,
    flowers: false,
    lateCheckout: false,
    breakfastInBed: false,
    golfStorage: false
  });

  const addOnOptions = [
    { id: 'prosecco', label: 'Chilled Bottle of Prosecco in Room', price: 22 },
    { id: 'flowers', label: 'Fresh Scottish Highland Bouquet', price: 28 },
    { id: 'lateCheckout', label: 'Guaranteed 13:00 Late Checkout', price: 15 },
    { id: 'breakfastInBed', label: 'Scottish Breakfast In Bed Tray', price: 12 },
    { id: 'golfStorage', label: 'Private Golf Club Secure Locker', price: 0 }
  ];

  const toggleAddOn = (id: string) => {
    setAddOns((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredOffers = SPECIAL_OFFERS.filter((offer) => {
    if (selectedCategory === 'all') return true;
    return offer.category === selectedCategory;
  });

  const selectedBasePackage =
    SPECIAL_OFFERS.find((p) => p.id === customPackageId) || SPECIAL_OFFERS[0];

  const addOnsTotal = addOnOptions.reduce((acc, curr) => {
    return addOns[curr.id] ? acc + curr.price : acc;
  }, 0);

  const customTotal = selectedBasePackage.discountedPrice + addOnsTotal;

  const handleCustomWhatsAppOrder = () => {
    const activeAddOnNames = addOnOptions
      .filter((opt) => addOns[opt.id])
      .map((opt) => opt.label);

    const msg = [
      `*Custom Package Reservation - Alberta Guesthouse Dundee*`,
      `📍 51 Forfar Rd, Dundee DD4 7BE`,
      `---------------------------------------`,
      `📦 *Base Package:* ${selectedBasePackage.title} (£${selectedBasePackage.discountedPrice})`,
      activeAddOnNames.length > 0
        ? `🎁 *Selected Add-Ons:* \n • ${activeAddOnNames.join('\n • ')}`
        : null,
      `💷 *Total Package Price:* £${customTotal}`,
      `---------------------------------------`,
      `Please let me know availability and confirm my reservation. Thank you!`
    ]
      .filter(Boolean)
      .join('\n');

    window.open(getWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-12 sm:py-16 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Banner Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-wider text-[#c59b27] uppercase">
            Curated Stays & Verified Deals
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Exclusive Offers & Packages
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed [text-wrap:balance]">
            Discover exceptional stays and exclusive offers designed to make your experience unforgettable. Enjoy guaranteed lowest rates, free parking at 51 Forfar Road, and genuine Scottish hospitality.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white rounded-xl border border-slate-200 max-w-2xl mx-auto shadow-2xs">
          {[
            { id: 'all', label: 'All Packages (6)' },
            { id: 'weekend', label: 'Weekend' },
            { id: 'extended', label: 'Extended Stay' },
            { id: 'romantic', label: 'Romantic' },
            { id: 'family', label: 'Family' },
            { id: 'business', label: 'Business' },
            { id: 'seasonal', label: 'Seasonal' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0f1c2e] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 6 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOffers.map((offer: SpecialOffer) => {
            const packageMsg = `Hello Alberta Guesthouse, I would like to book the "${offer.title}" package (£${offer.discountedPrice}) at 51 Forfar Rd, Dundee.`;

            return (
              <div
                key={offer.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#c59b27] text-slate-950 font-bold text-xs px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5" />
                      <span>SAVE {offer.discountPercentage}%</span>
                    </div>
                    <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                      {offer.categoryLabel}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    {/* Price and duration */}
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-slate-400 line-through mr-2 tabular-nums">
                          £{offer.originalPrice}
                        </span>
                        <span className="font-serif text-2xl font-bold text-slate-900 tabular-nums">
                          £{offer.discountedPrice}
                        </span>
                        <span className="text-xs text-slate-500 ml-1">package rate</span>
                      </div>
                      <div className="text-right text-[11px] font-medium text-slate-600 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#c59b27]" />
                        <span>{offer.minStay}</span>
                      </div>
                    </div>

                    <div>
                      <h2 className="font-serif text-xl font-bold text-slate-900 leading-snug">
                        {offer.title}
                      </h2>
                      <p className="text-xs text-slate-500 mt-1">{offer.subtitle}</p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {offer.description}
                    </p>

                    {/* Included Benefits */}
                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <span className="text-[11px] font-semibold text-slate-700 block uppercase tracking-wider">
                        Included In This Offer:
                      </span>
                      {offer.includedBenefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Conditions */}
                    <div className="pt-2 text-[11px] text-slate-700 flex items-start gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                      <span>{offer.validity}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectOffer(offer.id)}
                      className="flex-1 py-2.5 px-3 bg-[#0f1c2e] hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer text-center"
                    >
                      Book Package
                    </button>

                    <a
                      href={getWhatsAppUrl(packageMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl border border-emerald-200 transition-colors flex items-center justify-center shrink-0"
                      title="Direct WhatsApp Inquiry"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive "Customize Your Package" Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-semibold text-[#c59b27] uppercase tracking-wider flex items-center justify-center gap-1.5">
                <Gift className="w-4 h-4 text-[#c59b27]" />
                Bespoke Scottish Hospitality
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Customize Your Stay Package
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Enhance your reservation with hand-picked Scottish amenities and personalized arrival touches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-2">
                  1. Select Base Package
                </label>
                <div className="space-y-2">
                  {SPECIAL_OFFERS.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setCustomPackageId(pkg.id)}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition-all cursor-pointer flex items-center justify-between ${
                        customPackageId === pkg.id
                          ? 'border-[#0f1c2e] bg-slate-50 font-semibold text-slate-900 ring-1 ring-[#0f1c2e]'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <span>{pkg.title}</span>
                      <span className="font-serif font-bold tabular-nums">
                        £{pkg.discountedPrice}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-2">
                  2. Select Extra Inclusions
                </label>
                <div className="space-y-2">
                  {addOnOptions.map((opt) => {
                    const isSelected = addOns[opt.id];
                    return (
                      <button
                        key={opt.id}
                        onClick={() => toggleAddOn(opt.id)}
                        className={`w-full text-left p-3 rounded-xl border text-xs transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-medium'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                              isSelected
                                ? 'bg-emerald-600 border-emerald-600 text-white'
                                : 'border-slate-300'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                          <span>{opt.label}</span>
                        </div>
                        <span className="font-semibold text-slate-900 tabular-nums">
                          {opt.price === 0 ? 'Free' : `+£${opt.price}`}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Customizer Total & Send Button */}
            <div className="bg-[#0f1c2e] text-white rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#c59b27] uppercase font-semibold block">
                  Tailored Package Summary
                </span>
                <p className="text-sm font-medium">
                  {selectedBasePackage.title}
                  {addOnsTotal > 0 && ` + ${Object.values(addOns).filter(Boolean).length} Add-ons`}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Total Package</span>
                  <span className="font-serif text-2xl font-bold text-white tabular-nums">
                    £{customTotal}
                  </span>
                </div>

                <button
                  onClick={handleCustomWhatsAppOrder}
                  className="py-2.5 px-5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed FAQ Accordion */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#c59b27]" />
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                Special Offers Terms & Booking Questions
              </h3>
            </div>

            <div className="space-y-3">
              {FAQ_LIST.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200 overflow-hidden shadow-2xs"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full text-left p-4 flex items-center justify-between gap-4 text-sm font-semibold text-slate-900 hover:text-[#c59b27] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
