export interface Room {
  id: string;
  name: string;
  type: string;
  pricePerNight: number;
  originalPrice?: number;
  maxGuests: number;
  bedType: string;
  size: string;
  image: string;
  description: string;
  amenities: string[];
  featured?: boolean;
}

export interface SpecialOffer {
  id: string;
  title: string;
  subtitle: string;
  category: 'weekend' | 'extended' | 'romantic' | 'family' | 'business' | 'seasonal';
  categoryLabel: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  minStay: string;
  validity: string;
  description: string;
  includedBenefits: string[];
  bookingConditions: string;
  badge?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  stayDate: string;
  travelType: string;
  rating: number;
  title: string;
  content: string;
  verified: boolean;
  avatar: string;
  platform: 'Google' | 'Trustpilot' | 'Direct';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'offers' | 'booking' | 'stay';
}

export interface BookingState {
  roomType: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  specialRequests: string;
  packageName?: string;
}
