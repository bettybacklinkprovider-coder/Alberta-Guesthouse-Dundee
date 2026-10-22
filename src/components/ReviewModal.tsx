import React, { useState } from 'react';
import { HOTEL_INFO, REVIEWS_OVERVIEW } from '../data/hotelData';
import { X, Star, ExternalLink, QrCode, CheckCircle2, Heart } from 'lucide-react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlatform?: 'Google' | 'Trustpilot' | 'direct';
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  initialPlatform = 'direct'
}) => {
  if (!isOpen) return null;

  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [reviewerName, setReviewerName] = useState<string>('');
  const [roomStayed, setRoomStayed] = useState<string>('Deluxe King Suite');
  const [feedback, setFeedback] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  // SVG representation of a clean QR Code leading to the Google Maps review page
  const reviewTargetUrl = HOTEL_INFO.googleMapsUrl;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#0f1c2e] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold tracking-wider text-[#c59b27] uppercase block">
              Guest Feedback & Ratings
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              Review Alberta Guesthouse
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              51 Forfar Rd, Dundee DD4 7BE · Thank you for sharing your experience
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Close"
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
              Thank You Very Much!
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Your feedback is deeply appreciated. As a Scottish family-run guesthouse, genuine guest words mean everything to us.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="py-2.5 px-6 text-xs font-semibold text-white bg-[#0f1c2e] hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 space-y-6">
            {/* Direct Platform Quick Links */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={REVIEWS_OVERVIEW.google.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl border border-slate-200 hover:border-slate-400 bg-slate-50 hover:bg-white text-xs font-semibold text-slate-800 transition-all shadow-xs"
              >
                <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center font-bold text-blue-600 shadow-xs text-xs">
                  G
                </span>
                <span>Review on Google</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={REVIEWS_OVERVIEW.trustpilot.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-xl border border-emerald-200 hover:border-emerald-400 bg-emerald-50/50 hover:bg-white text-xs font-semibold text-slate-800 transition-all shadow-xs"
              >
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <span>Review on Trustpilot</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* QR Code & Direct Scan Info */}
            <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/80 flex items-center gap-4">
              <div className="w-20 h-20 bg-white p-2 rounded-lg border border-amber-300 shadow-xs flex items-center justify-center shrink-0">
                {/* Clean SVG QR Code Representation */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900" fill="currentColor">
                  {/* Outer markers */}
                  <rect x="5" y="5" width="28" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="13" y="13" width="12" height="12" fill="currentColor" />
                  <rect x="67" y="5" width="28" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="75" y="13" width="12" height="12" fill="currentColor" />
                  <rect x="5" y="67" width="28" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="13" y="75" width="12" height="12" fill="currentColor" />
                  {/* Inner matrix patterns */}
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
              </div>
              <div className="text-xs text-slate-700">
                <p className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <QrCode className="w-3.5 h-3.5 text-[#c59b27]" />
                  Scan with Phone to Review
                </p>
                <p className="text-slate-600 mt-1 leading-relaxed">
                  Open your camera and point at this code to quickly leave a 5-star Google review for Alberta Guesthouse.
                </p>
                <a
                  href={reviewTargetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 text-[#c59b27] font-semibold hover:underline"
                >
                  Or click here to open review page directly →
                </a>
              </div>
            </div>

            {/* Direct Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-1">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Rate your stay at Alberta Guesthouse
                </label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 cursor-pointer focus:outline-hidden"
                      aria-label={`${star} star`}
                    >
                      <Star
                        className={`w-7 h-7 transition-colors ${
                          (hoverRating || rating) >= star
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-xs font-semibold text-slate-700">
                    {rating} out of 5 Stars
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Ross"
                    value={reviewerName}
                    onChange={(e) => setReviewerName(e.target.value)}
                    className="w-full text-sm border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#c59b27] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Room or Package Stayed
                  </label>
                  <select
                    value={roomStayed}
                    onChange={(e) => setRoomStayed(e.target.value)}
                    className="w-full text-sm border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#c59b27] focus:outline-hidden"
                  >
                    <option value="Deluxe King Suite">Deluxe King Suite</option>
                    <option value="Classic Double Room">Classic Double Room</option>
                    <option value="Superior Twin Room">Superior Twin Room</option>
                    <option value="Cozy Single Room">Cozy Single Room</option>
                    <option value="Scottish Family Suite">Scottish Family Suite</option>
                    <option value="Weekend Getaway Package">Weekend Getaway Package</option>
                    <option value="Romantic Stay Package">Romantic Stay Package</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Your Review
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Share details about the cleanliness, location on Forfar Road, Scottish breakfast, comfort of the bed..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full text-sm border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#c59b27] focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#0f1c2e] hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 text-[#c59b27]" />
                <span>Submit Guest Review</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
