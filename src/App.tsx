import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { OffersPage } from './pages/OffersPage';
import { ContactPage } from './pages/ContactPage';
import { BookingModal } from './components/BookingModal';
import { ReviewModal } from './components/ReviewModal';
import { PromptModal } from './components/PromptModal';
import { HOTEL_INFO, getWhatsAppUrl } from './data/hotelData';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);
  const [selectedOfferId, setSelectedOfferId] = useState<string | undefined>(undefined);
  const [reviewModalOpen, setReviewModalOpen] = useState<boolean>(false);
  const [promptModalOpen, setPromptModalOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = () => {
    setSelectedRoomId(undefined);
    setSelectedOfferId(undefined);
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithRoom = (roomId: string) => {
    setSelectedRoomId(roomId);
    setSelectedOfferId(undefined);
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithOffer = (offerId: string) => {
    setSelectedOfferId(offerId);
    setSelectedRoomId(undefined);
    setBookingModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-slate-900 selection:bg-[#c59b27] selection:text-white">
      {/* Top Bar Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
        onOpenPromptModal={() => setPromptModalOpen(true)}
      />

      {/* Main Content Pages */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onOpenBooking={handleOpenBooking}
            onOpenBookingWithRoom={handleOpenBookingWithRoom}
            onOpenBookingWithOffer={handleOpenBookingWithOffer}
            onOpenReviewModal={() => setReviewModalOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'rooms' && (
          <RoomsPage
            onSelectRoom={handleOpenBookingWithRoom}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'offers' && (
          <OffersPage
            onSelectOffer={handleOpenBookingWithOffer}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPromptModal={() => setPromptModalOpen(true)}
      />

      {/* Floating Action Elements (WhatsApp & Scroll Top) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-slate-700 hover:text-slate-900 border border-slate-200 shadow-md flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Floating WhatsApp Quick Booking Button */}
        <a
          href={getWhatsAppUrl('Hello Alberta Guesthouse, I would like to book a stay directly.')}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
          title="Chat on WhatsApp (+447753429354)"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageCircle className="w-5 h-5 fill-white text-emerald-600 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-bold hidden sm:inline whitespace-nowrap">
            WhatsApp Booking
          </span>
        </a>
      </div>

      {/* Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialRoomId={selectedRoomId}
        initialPackageId={selectedOfferId}
      />

      <ReviewModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
      />

      <PromptModal
        isOpen={promptModalOpen}
        onClose={() => setPromptModalOpen(false)}
      />
    </div>
  );
}
