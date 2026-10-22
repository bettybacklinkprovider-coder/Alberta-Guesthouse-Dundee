import React from 'react';
import { REVIEWS_OVERVIEW, REVIEWS_LIST, HOTEL_INFO } from '../../data/hotelData';
import {
  Star,
  ExternalLink,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  Quote,
  MessageSquarePlus,
  ArrowUpRight
} from 'lucide-react';

interface CustomerReviewsSectionProps {
  onOpenReviewModal: () => void;
}

export const CustomerReviewsSection: React.FC<CustomerReviewsSectionProps> = ({
  onOpenReviewModal
}) => {
  return (
    <section id="reviews-section" className="py-20 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold tracking-wider text-[#c59b27] uppercase">
            Guest Testimonials & Ratings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Customer Reviews & Ratings
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed [text-wrap:balance]">
            Real feedback on our commitment to traditional Scottish hospitality, immaculate comfort, and personal care at 51 Forfar Road, Dundee.
          </p>
        </div>

        {/* Top Analytics & Ratings Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Box 1: Overall Score & Star Breakdown (5 cols) */}
          <div className="lg:col-span-5 bg-[#faf8f5] rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="font-serif text-5xl sm:text-6xl font-bold text-slate-900 tabular-nums">
                    {REVIEWS_OVERVIEW.overallRating.toFixed(1)}
                  </span>
                  <span className="text-base text-slate-500 font-medium ml-1">/ 5.0</span>
                </div>
                <div className="text-right">
                  <div className="flex text-amber-400 justify-end mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-700">
                    Based on {REVIEWS_OVERVIEW.totalReviews} verified reviews
                  </span>
                </div>
              </div>

              {/* Progress Breakdown 5 Stars to 1 Star */}
              <div className="space-y-2.5 pt-2 border-t border-slate-200/80">
                {REVIEWS_OVERVIEW.breakdown.map((row) => (
                  <div key={row.stars} className="flex items-center gap-3 text-xs">
                    <span className="w-12 font-medium text-slate-700 tabular-nums flex items-center gap-1">
                      {row.stars} <Star className="w-3 h-3 fill-amber-400 text-amber-400 inline" />
                    </span>
                    <div className="flex-1 h-2.5 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#c59b27] rounded-full transition-all duration-500"
                        style={{ width: `${row.percentage}%` }}
                      />
                    </div>
                    <span className="w-10 text-right font-medium text-slate-600 tabular-nums">
                      {row.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                100% Verified Guest Stays
              </span>
              <button
                onClick={onOpenReviewModal}
                className="font-semibold text-[#0f1c2e] hover:text-[#c59b27] transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>Write Review</span>
                <MessageSquarePlus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Box 2: Google Reviews Card (2.5 cols) */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                {/* Google Icon/Logo */}
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center font-bold text-lg text-blue-600 shadow-2xs">
                  G
                </div>
                <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                  Google Reviews
                </span>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl font-bold text-slate-900 tabular-nums">
                    {REVIEWS_OVERVIEW.google.rating.toFixed(1)}
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  From {REVIEWS_OVERVIEW.google.reviewCount} local & international guests
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Ranked among the top boutique guesthouses in Dundee on Google Maps for cleanliness and host warmth.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <a
                href={REVIEWS_OVERVIEW.google.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>See Google Reviews</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Box 3: Trustpilot Card (2.5 cols) */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-emerald-100 shadow-xs hover:border-emerald-300 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                  <Star className="w-5 h-5 fill-white text-white" />
                </div>
                <span className="text-[11px] font-semibold tracking-wider text-emerald-800 uppercase">
                  Trustpilot
                </span>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl font-bold text-slate-900 tabular-nums">
                    {REVIEWS_OVERVIEW.trustpilot.rating.toFixed(1)}
                  </span>
                  <div className="flex text-emerald-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  {REVIEWS_OVERVIEW.trustpilot.reviewCount} Reviews · Excellent
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Verified traveler scores highlighting transparent pricing, Scottish breakfast, and secure parking.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <a
                href={REVIEWS_OVERVIEW.trustpilot.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <span>See Trustpilot Reviews</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Box 4: Stylish "Review Us!" QR Code Card (2 cols) */}
          <div className="lg:col-span-2 bg-[#0f1c2e] text-white rounded-2xl p-6 shadow-md flex flex-col justify-between text-center">
            <div className="space-y-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#c59b27] block">
                Instant Scan
              </span>
              <h3 className="font-serif text-lg font-bold">Review Us!</h3>

              {/* QR Code Container with functional link */}
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Scan or Click to Review Alberta Guesthouse"
                className="block mx-auto w-24 h-24 bg-white p-2 rounded-xl shadow-md transition-transform hover:scale-105"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900" fill="currentColor">
                  <rect x="5" y="5" width="28" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="13" y="13" width="12" height="12" fill="currentColor" />
                  <rect x="67" y="5" width="28" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="75" y="13" width="12" height="12" fill="currentColor" />
                  <rect x="5" y="67" width="28" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="13" y="75" width="12" height="12" fill="currentColor" />
                  <rect x="42" y="10" width="8" height="8" />
                  <rect x="40" y="24" width="6" height="6" />
                  <rect x="52" y="20" width="6" height="6" />
                  <rect x="10" y="42" width="6" height="6" />
                  <rect x="22" y="48" width="8" height="6" />
                  <rect x="40" y="40" width="20" height="20" rx="3" fill="#0f1c2e" />
                  <circle cx="50" cy="50" r="4" fill="#c59b27" />
                  <rect x="68" y="42" width="8" height="6" />
                  <rect x="80" y="48" width="10" height="6" />
                  <rect x="42" y="68" width="6" height="8" />
                  <rect x="52" y="74" width="8" height="6" />
                  <rect x="70" y="70" width="8" height="8" />
                  <rect x="84" y="80" width="8" height="8" />
                </svg>
              </a>

              <p className="text-[11px] text-slate-300 leading-snug">
                Scan with your phone to leave a review on Google
              </p>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenReviewModal}
                className="w-full py-2 px-3 text-[11px] font-semibold text-slate-900 bg-[#c59b27] hover:bg-amber-400 rounded-lg transition-colors cursor-pointer"
              >
                Scan or Open Review Form
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid (3 Columns on Desktop as requested) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS_LIST.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#c59b27]/60 transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Header: Stars & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Guest</span>
                  </span>
                </div>

                {/* Review Title & Content */}
                <div>
                  <h4 className="font-serif text-base font-bold text-slate-900 leading-snug">
                    "{review.title}"
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {review.content}
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-900 text-[#c59b27] font-bold text-xs flex items-center justify-center">
                    {review.avatar}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">
                      {review.author}
                    </h5>
                    <p className="text-[11px] text-slate-500">
                      {review.location} · {review.travelType}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] text-slate-600 font-medium">
                  {review.platform}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
