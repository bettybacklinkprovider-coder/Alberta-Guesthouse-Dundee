import React, { useState } from 'react';
import { SPECIAL_OFFERS, getWhatsAppUrl } from '../../data/hotelData';
import { SpecialOffer } from '../../types';
import {
  Tag,
  CheckCircle2,
  Clock,
  Calendar,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface SpecialOffersSectionProps {
  onSelectOffer: (offerId: string) => void;
  onViewAllOffers: () => void;
}

export const SpecialOffersSection: React.FC<SpecialOffersSectionProps> = ({
  onSelectOffer,
  onViewAllOffers
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const offerFaqs = [
    {
      q: 'How do I book an exclusive offer or package?',
      a: 'Click any package button or the WhatsApp Inquiry button. You can also call us at +447753429354. We will confirm your preferred dates and guarantee the package price.'
    },
    {
      q: 'Are the package discounts genuine with no hidden extras?',
      a: 'Yes. All displayed package rates include VAT, free private driveway parking at 51 Forfar Road, fiber Wi-Fi, and listed inclusions such as Scottish breakfast or late checkout.'
    },
    {
      q: 'What is the cancellation policy on Special Offers?',
      a: 'Packages can be modified or cancelled up to 48 hours prior to your check-in date without penalty. Cancellations within 48 hours are subject to the first night charge.'
    },
    {
      q: 'Can packages be customized (e.g. dietary needs or flowers)?',
      a: 'Certainly! When booking via WhatsApp, simply message us your specific wishes and we will tailor the room setup, champagne selection, or breakfast timing to your preferences.'
    }
  ];

  return (
    <section id="offers-section" className="py-20 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Offer Banner at the Top */}
        <div className="mb-14 rounded-2xl bg-gradient-to-r from-[#0f1c2e] via-slate-900 to-[#1e293b] text-white p-6 sm:p-8 shadow-xl border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-amber-300 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-4 h-4 text-[#c59b27]" />
              <span>Direct Booking Advantage</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
              Best Rate Guarantee & Complimentary Parking on Forfar Road
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Book any package directly with Alberta Guesthouse to enjoy complimentary on-site parking, flexible check-in times, and up to 21% savings compared to online booking platforms.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={getWhatsAppUrl('Hello Alberta Guesthouse, I would like to inquire about your special offers and packages.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>
            <button
              onClick={onViewAllOffers}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-900 bg-[#c59b27] hover:bg-amber-400 rounded-xl transition-colors shadow-sm cursor-pointer"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Section Heading & Subtitle (Exact User Prompt Requirement) */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold tracking-wider text-[#c59b27] uppercase">
            Exclusive Packages
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Exclusive Offers & Packages
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed [text-wrap:balance]">
            Discover exceptional stays and exclusive offers designed to make your experience unforgettable.
          </p>
        </div>

        {/* 6 Offer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIAL_OFFERS.map((offer: SpecialOffer) => {
            const packageWhatsAppMsg = `Hello Alberta Guesthouse, I am interested in booking the "${offer.title}" package (£${offer.discountedPrice}) at 51 Forfar Rd, Dundee. Could you please confirm dates?`;

            return (
              <div
                key={offer.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image & Discount Badge */}
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Discount badge */}
                    <div className="absolute top-3 left-3 bg-[#c59b27] text-slate-950 font-bold text-xs px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5" />
                      <span>SAVE {offer.discountPercentage}%</span>
                    </div>
                    {/* Category Label */}
                    <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                      {offer.categoryLabel}
                    </div>
                  </div>

                  {/* Body Content */}
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
                        <span className="text-xs text-slate-500 ml-1">total package</span>
                      </div>
                      <div className="text-right text-[11px] font-medium text-slate-600 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#c59b27]" />
                        <span>{offer.minStay}</span>
                      </div>
                    </div>

                    {/* Title & subtitle */}
                    <div>
                      <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-[#c59b27] transition-colors leading-snug">
                        {offer.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {offer.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {offer.description}
                    </p>

                    {/* Included Benefits */}
                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <span className="text-[11px] font-semibold text-slate-700 block uppercase tracking-wider">
                        Included In Package:
                      </span>
                      {offer.includedBenefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Validity conditions */}
                    <div className="pt-2 text-[11px] text-slate-700 flex items-start gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                      <span>{offer.validity}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 space-y-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectOffer(offer.id)}
                      className="flex-1 py-2.5 px-3 bg-[#0f1c2e] hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer text-center"
                    >
                      Explore Offer
                    </button>

                    <a
                      href={getWhatsAppUrl(packageWhatsAppMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl border border-emerald-200 transition-colors flex items-center justify-center shrink-0"
                      title="WhatsApp Inquiry for this offer"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Area Covering Validity, Booking Conditions & Cancellations */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-5 h-5 text-[#c59b27]" />
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                Frequently Asked Questions About Packages & Booking
              </h3>
            </div>

            <div className="space-y-3">
              {offerFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-xs"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-4 flex items-center justify-between gap-4 text-sm font-semibold text-slate-900 hover:text-[#c59b27] transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
