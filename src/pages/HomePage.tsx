import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { RoomsPreviewSection } from '../components/sections/RoomsPreviewSection';
import { SpecialOffersSection } from '../components/sections/SpecialOffersSection';
import { FacilitiesSection } from '../components/sections/FacilitiesSection';
import { CustomerReviewsSection } from '../components/sections/CustomerReviewsSection';
import { LocationMapSection } from '../components/sections/LocationMapSection';

interface HomePageProps {
  onOpenBooking: () => void;
  onOpenBookingWithRoom: (roomId: string) => void;
  onOpenBookingWithOffer: (offerId: string) => void;
  onOpenReviewModal: () => void;
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onOpenBookingWithRoom,
  onOpenBookingWithOffer,
  onOpenReviewModal,
  onNavigate
}) => {
  return (
    <div className="space-y-0">
      {/* Section 1: Hero Section */}
      <HeroSection
        onOpenBooking={onOpenBooking}
        onExploreRooms={() => onNavigate('rooms')}
        onExploreOffers={() => onNavigate('offers')}
      />

      {/* Section 2: Rooms & Accommodation Preview */}
      <RoomsPreviewSection
        onSelectRoom={(roomId) => onOpenBookingWithRoom(roomId)}
        onViewAllRooms={() => onNavigate('rooms')}
      />

      {/* Section 3: Special Offers & Packages */}
      <SpecialOffersSection
        onSelectOffer={(offerId) => onOpenBookingWithOffer(offerId)}
        onViewAllOffers={() => onNavigate('offers')}
      />

      {/* Section 4: Facilities & Scottish Guest Experience */}
      <FacilitiesSection />

      {/* Section 5: Customer Reviews & Ratings Section */}
      <CustomerReviewsSection
        onOpenReviewModal={onOpenReviewModal}
      />

      {/* Section 6: Location, Interactive Map & WhatsApp Direct Booking */}
      <LocationMapSection
        onOpenBooking={onOpenBooking}
      />
    </div>
  );
};
