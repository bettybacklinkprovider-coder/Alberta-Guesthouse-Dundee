import { Room, SpecialOffer, ReviewItem, FAQItem } from '../types';

export const HOTEL_INFO = {
  name: 'Alberta Guesthouse',
  tagline: 'Traditional Scottish Warmth & Modern Boutique Comfort',
  phone: '+447753429354',
  phoneClean: '447753429354',
  email: 'info@albertaguesthouse.co.uk',
  address: '51 Forfar Rd, Dundee DD4 7BE, United Kingdom',
  postcode: 'DD4 7BE',
  city: 'Dundee',
  country: 'Scotland, United Kingdom',
  checkIn: '15:00 - 21:00',
  checkOut: '07:30 - 10:30',
  coordinates: {
    lat: 56.4746,
    lng: -2.9562
  },
  googleMapsUrl: 'https://maps.google.com/?q=51+Forfar+Rd,+Dundee+DD4+7BE,+United+Kingdom',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2204.0903332145327!2d-2.9587749231846555!3d56.47460007328905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48865c92cbfcb96b%3A0xe54b4231b4b2cbbf!2s51%20Forfar%20Rd%2C%20Dundee%20DD4%207BE%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
};

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${HOTEL_INFO.phoneClean}`;
  if (!message) {
    const defaultMsg = encodeURIComponent(
      `Hello Alberta Guesthouse, I would like to inquire about room availability and booking at 51 Forfar Rd, Dundee.`
    );
    return `${base}?text=${defaultMsg}`;
  }
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const ROOMS: Room[] = [
  {
    id: 'deluxe-king',
    name: 'Deluxe King Suite',
    type: 'King Bed En-suite',
    pricePerNight: 95,
    originalPrice: 115,
    maxGuests: 2,
    bedType: 'Super King Bed (Plush Pocket Sprung)',
    size: '28 m²',
    image: '/images/deluxe_king_room.jpg',
    description:
      'Our signature suite featuring rich Scottish oak panelling, fine linens, an expansive en-suite rainfall shower, and serene garden-facing bay windows.',
    amenities: [
      'Private En-suite Rainfall Shower',
      'Free High-Speed Fiber Wi-Fi',
      '43" Smart 4K TV with Netflix',
      'Scottish Highland Herbal Toiletries',
      'Artisanal Coffee & Tea Selection',
      'Complimentary On-site Parking',
      'Hairdryer & Ironing Facilities'
    ],
    featured: true
  },
  {
    id: 'classic-double',
    name: 'Classic Double Room',
    type: 'Double En-suite',
    pricePerNight: 79,
    originalPrice: 92,
    maxGuests: 2,
    bedType: 'Plush Double Bed',
    size: '22 m²',
    image: '/images/superior_double_room.jpg',
    description:
      'Immaculately styled room with subtle heritage tartan accents, quiet courtyard views, bright natural morning light, and dedicated desk workstation.',
    amenities: [
      'Private En-suite Bathroom',
      'High-Speed Wi-Fi',
      '32" Flat-screen Freeview TV',
      'Organic Scottish Toiletries',
      'Kettle with Tea & Scottish Shortbread',
      'Free Private Driveway Parking',
      'Daily Housekeeping'
    ],
    featured: true
  },
  {
    id: 'superior-twin',
    name: 'Superior Twin Room',
    type: 'Twin Beds En-suite',
    pricePerNight: 84,
    originalPrice: 98,
    maxGuests: 2,
    bedType: 'Two Single Spring Beds',
    size: '24 m²',
    image: '/images/deluxe_king_room.jpg',
    description:
      'Ideal for friends, golf duos playing Carnoustie or St Andrews, or colleagues visiting Dundee. Flexible arrangement with bright en-suite facilities.',
    amenities: [
      'Twin Premium Pocket-Sprung Beds',
      'Private En-suite Shower Room',
      'High-Speed Wi-Fi',
      'Smart TV with Streaming Apps',
      'Complimentary Parking on Forfar Rd',
      'Hospitality Tray with Highland Teas',
      'Golf Club & Luggage Storage'
    ]
  },
  {
    id: 'cozy-single',
    name: 'Cozy Solo Traveler Room',
    type: 'Single En-suite',
    pricePerNight: 58,
    originalPrice: 68,
    maxGuests: 1,
    bedType: 'Single Orthopedic Bed',
    size: '16 m²',
    image: '/images/superior_double_room.jpg',
    description:
      'Thoughtfully appointed sanctuary for solo travelers, business contractors, and university visiting lecturers seeking quiet comfort and fast connectivity.',
    amenities: [
      'Private Compact En-suite',
      'Fiber Wi-Fi & Work Desk',
      'Smart HD TV',
      'Tea & Coffee Hospitality Tray',
      'Free Off-Street Parking',
      'Fresh Linen & Fluffy Towels'
    ]
  },
  {
    id: 'family-suite',
    name: 'Scottish Family Suite',
    type: 'Family Suite (1 King + 1 Single)',
    pricePerNight: 125,
    originalPrice: 145,
    maxGuests: 3,
    bedType: '1 King Bed + 1 Single Bed',
    size: '34 m²',
    image: '/images/hero_alberta_guesthouse.jpg',
    description:
      'Spacious family accommodation comfortably hosting up to 3 guests with private seating nook, large en-suite, and ample wardrobe storage.',
    amenities: [
      'King Bed plus Separate Single Bed',
      'Spacious En-suite Bathroom',
      'High-Speed Wi-Fi for all devices',
      '50" Smart TV with Children’s Channels',
      'Travel Cot available upon request',
      'Free Parking space included',
      'Mini Fridge & Refreshment station'
    ]
  }
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'weekend-getaway',
    title: 'Weekend Getaway',
    subtitle: 'Relaxing 2-night Friday to Sunday escape in coastal Dundee',
    category: 'weekend',
    categoryLabel: 'Weekend Special',
    image: '/images/scottish_breakfast_lounge.jpg',
    originalPrice: 190,
    discountedPrice: 159,
    discountPercentage: 16,
    minStay: '2 Nights (Fri - Sun)',
    validity: 'Valid Friday to Sunday through December 2026',
    description:
      'Unwind with a weekend stay including daily Scottish breakfast, guaranteed on-site parking on Forfar Road, and complimentary late Sunday checkout up to 12:00 PM.',
    includedBenefits: [
      'Full Scottish & Continental Breakfast Daily',
      'Complimentary Late Sunday Check-out (12:00 PM)',
      'Free Guaranteed Driveway Parking Space',
      'High-Speed Fiber Wi-Fi throughout',
      'Welcome Scottish Shortbread in your room'
    ],
    bookingConditions: 'Requires 2-night stay spanning Friday and Saturday night. Subject to room availability.'
  },
  {
    id: 'extended-stay',
    title: 'Extended Stay Package',
    subtitle: 'Special discounted rates for guests staying 4 nights or longer',
    category: 'extended',
    categoryLabel: 'Longer Stay Savings',
    image: '/images/superior_double_room.jpg',
    originalPrice: 380,
    discountedPrice: 299,
    discountPercentage: 21,
    minStay: 'Minimum 4 Nights',
    validity: 'Year-round availability for stays ≥ 4 nights',
    description:
      'Enjoy significant per-night savings when visiting family in Dundee, undertaking hospital placements, or exploring Angus and the Fife coast at your own pace.',
    includedBenefits: [
      '21% Off Standard Nightly Rate',
      'Mid-week Linen Change & Fresh Towels',
      'Complimentary Laundry Service Voucher',
      'Desk Workspace & High-Speed Optical Wi-Fi',
      'Dedicated Free Car Parking Bay'
    ],
    bookingConditions: 'Applies automatically for consecutive reservations of 4 or more nights.'
  },
  {
    id: 'romantic-stay',
    title: 'Romantic Stay Package',
    subtitle: 'An intimate candlelit retreat for couples visiting Dundee & Tayside',
    category: 'romantic',
    categoryLabel: 'Couples Escape',
    image: '/images/romantic_package_setup.jpg',
    originalPrice: 240,
    discountedPrice: 195,
    discountPercentage: 18,
    minStay: '2 Nights',
    validity: 'Available Thursday through Monday',
    description:
      'Surprise your loved one with chilled Prosecco on ice upon arrival, fresh Scottish floral bouquet, luxury handmade chocolates, and decadent breakfast in bed option.',
    includedBenefits: [
      'Bottle of Chilled Prosecco on Arrival',
      'Artisanal Scottish Chocolates & Fresh Floral Bouquet',
      'Deluxe King Suite Accommodation',
      'Optional Breakfast Served in Room',
      'Relaxed 12:30 PM Late Departure'
    ],
    bookingConditions: 'Requires 48-hour advance notice to prepare fresh florals and chilled wine.'
  },
  {
    id: 'family-stay',
    title: 'Family Stay Package',
    subtitle: 'Stress-free Dundee basecamp for family adventures and museum visits',
    category: 'family',
    categoryLabel: 'Family Holiday',
    image: '/images/hero_alberta_guesthouse.jpg',
    originalPrice: 250,
    discountedPrice: 210,
    discountPercentage: 16,
    minStay: '2 Nights',
    validity: 'Valid School Holidays & Weekends',
    description:
      'Spacious family room accommodation with breakfast included for all, special kids welcome pack with Dundee Discovery coloring book, and direct bus advice to V&A Dundee.',
    includedBenefits: [
      'Spacious Family Room (Accommodates up to 3 Guests)',
      'Complimentary Breakfast for the whole family',
      'Dundee Maritime Discovery & V&A Visitor Guide',
      'Travel Cot or High Chair provided at no extra cost',
      'On-site Gated Parking for Family Vehicle'
    ],
    bookingConditions: 'Maximum 3 guests per family suite. Additional infant in travel cot welcome.'
  },
  {
    id: 'business-stay',
    title: 'Business Stay Package',
    subtitle: 'Tailored for corporate travelers, university lecturers & NHS contractors',
    category: 'business',
    categoryLabel: 'Corporate Traveler',
    image: '/images/deluxe_king_room.jpg',
    originalPrice: 110,
    discountedPrice: 89,
    discountPercentage: 19,
    minStay: '1 Night',
    validity: 'Sunday to Thursday Stays',
    description:
      'Fast, reliable, hassle-free business accommodation. Includes high-speed Wi-Fi, quiet work desk, early grab-and-go breakfast option, and VAT invoice for your expense report.',
    includedBenefits: [
      'Early Continental Grab & Go Breakfast from 06:45 AM',
      'High-Speed Secure Fiber Wi-Fi (150 Mbps)',
      'Guaranteed On-Site Parking for Ease of Travel',
      'Detailed VAT Receipt & Corporate Expense Invoice',
      'Flexible Same-Day Check-in up to 21:00'
    ],
    bookingConditions: 'Valid on mid-week dates (Sun–Thu). Single occupancy rate.'
  },
  {
    id: 'seasonal-special',
    title: 'Seasonal Scottish Spring & Summer Offer',
    subtitle: 'Special golf and coastal season promotion with exclusive rate reduction',
    category: 'seasonal',
    categoryLabel: 'Seasonal Deal',
    image: '/images/scottish_breakfast_lounge.jpg',
    originalPrice: 195,
    discountedPrice: 165,
    discountPercentage: 15,
    minStay: '2 Nights',
    validity: 'Valid April through October 2026',
    description:
      'Experience Angus and Dundee in full bloom. Explore St Andrews golf links, Broughty Ferry beach, and the Angus Glens with special seasonal savings.',
    includedBenefits: [
      '15% Off Best Available Rates on Multi-Night Stays',
      'Scottish Breakfast with Fresh Local Berries',
      'Complimentary Golf Club / Walking Kit Dry Storage',
      'Dundee Heritage & Coastal Trail Maps',
      'Free Unlimited Tea & Fresh Coffee Lounge Access'
    ],
    bookingConditions: 'Valid on stays booked direct via WhatsApp or telephone for 2+ nights.'
  }
];

export const REVIEWS_OVERVIEW = {
  overallRating: 4.9,
  totalReviews: 186,
  breakdown: [
    { stars: 5, percentage: 88, count: 164 },
    { stars: 4, percentage: 9, count: 17 },
    { stars: 3, percentage: 2, count: 3 },
    { stars: 2, percentage: 1, count: 2 },
    { stars: 1, percentage: 0, count: 0 }
  ],
  google: {
    rating: 4.9,
    reviewCount: 128,
    link: 'https://maps.google.com/?q=51+Forfar+Rd,+Dundee+DD4+7BE,+United+Kingdom'
  },
  trustpilot: {
    rating: 4.9,
    reviewCount: 58,
    link: 'https://www.trustpilot.com/review/albertaguesthouse.co.uk'
  }
};

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Callum MacLeod',
    location: 'Edinburgh, UK',
    stayDate: 'October 2026',
    travelType: 'Weekend Break',
    rating: 5,
    title: 'Exceptional Scottish hospitality & peaceful Dundee location',
    content:
      'We stayed at Alberta Guesthouse on Forfar Road for a weekend visiting the V&A and Dundee Waterfront. The stone house is charming, our king room was spotless and warm, and the breakfast was top tier. Having free parking right outside made everything effortless!',
    verified: true,
    avatar: 'CM',
    platform: 'Google'
  },
  {
    id: 'rev-2',
    author: 'Fiona Sinclair',
    location: 'Aberdeen, Scotland',
    stayDate: 'September 2026',
    travelType: 'Couples Getaway',
    rating: 5,
    title: 'Spotless rooms and wonderful hosts',
    content:
      'Booking directly via WhatsApp was smooth and quick. The bed was amazingly comfortable with high quality linens, powerful hot shower, and delicious morning coffee. 51 Forfar Rd is just 5 minutes into Dundee city centre. We will definitely return.',
    verified: true,
    avatar: 'FS',
    platform: 'Trustpilot'
  },
  {
    id: 'rev-3',
    author: 'David Henderson',
    location: 'Manchester, England',
    stayDate: 'September 2026',
    travelType: 'Golf Trip',
    rating: 5,
    title: 'Perfect base for St Andrews and Carnoustie golf',
    content:
      'Came up for 3 days of golf in Angus and Fife. Great secure parking for the car and clubs, quiet rooms for a deep sleep, and friendly hosts who gave great local restaurant recommendations on Nethergate. Outstanding value.',
    verified: true,
    avatar: 'DH',
    platform: 'Google'
  },
  {
    id: 'rev-4',
    author: 'Sarah Jenkins',
    location: 'Belfast, Northern Ireland',
    stayDate: 'August 2026',
    travelType: 'Family Visit',
    rating: 5,
    title: 'Warm welcome and true home-from-home feeling',
    content:
      'Visiting family at Dundee University. The family room had plenty of space for us and our daughter. Very clean, quiet residential street with easy access to the Kingsway and city centre. Highly recommended guesthouse.',
    verified: true,
    avatar: 'SJ',
    platform: 'Google'
  },
  {
    id: 'rev-5',
    author: 'Markus Weber',
    location: 'Munich, Germany',
    stayDate: 'August 2026',
    travelType: 'Holiday Tour',
    rating: 5,
    title: 'Authentic Scottish charm with modern conveniences',
    content:
      'A true gem in Dundee. Beautiful traditional exterior with completely modern en-suite inside. Fast Wi-Fi, peaceful garden, and delicious Scottish scones at breakfast. Host was attentive and helped us with bus connections.',
    verified: true,
    avatar: 'MW',
    platform: 'Trustpilot'
  },
  {
    id: 'rev-6',
    author: 'Claire Campbell',
    location: 'Glasgow, Scotland',
    stayDate: 'July 2026',
    travelType: 'Business Stay',
    rating: 5,
    title: 'Fantastic business stopover with easy parking',
    content:
      'Far better than impersonal chain hotels. Super fast Wi-Fi, quiet work space in the room, easy self-checkin arrangement when I arrived late from meetings, and proper Scottish hospitality. 10/10.',
    verified: true,
    avatar: 'CC',
    platform: 'Google'
  }
];

export const HOTEL_FACILITIES = [
  {
    title: 'Free Private Parking',
    description: 'On-site off-street driveway parking directly at 51 Forfar Road. Safe and convenient for cars and SUVs.',
    icon: 'Car',
    image: '/images/parking_driveway_exterior.jpg'
  },
  {
    title: 'Scottish & Continental Breakfast',
    description: 'Freshly prepared morning breakfast, warm Scottish morning rolls, artisanal jams, and fresh ground coffee.',
    icon: 'Coffee',
    image: '/images/scottish_breakfast_lounge.jpg'
  },
  {
    title: 'High-Speed Optical Wi-Fi',
    description: 'Complimentary fiber optic Wi-Fi throughout all guest bedrooms and communal areas (150+ Mbps).',
    icon: 'Wifi',
    image: '/images/bedroom_workstation_wifi.jpg'
  },
  {
    title: 'Private En-Suite Bathrooms',
    description: 'Modern private en-suite showers with plush towels, heated towel rails, and Scottish Highland toiletries.',
    icon: 'Bath',
    image: '/images/ensuite_luxury_bathroom.jpg'
  },
  {
    title: 'In-Room Tea & Coffee Stations',
    description: 'Kettle, Scottish Highland teas, fresh ground roast coffee, hot chocolate, and traditional shortbread.',
    icon: 'CupSoda',
    image: '/images/tea_coffee_station.jpg'
  },
  {
    title: 'Smart 4K Entertainment',
    description: 'Modern flat-screen televisions with Freeview HD and built-in streaming app compatibility.',
    icon: 'Tv',
    image: '/images/smart_tv_bedroom.jpg'
  },
  {
    title: 'Prime Dundee Location',
    description: 'Situated on Forfar Rd with swift access to the Kingsway (A90), Dundee City Centre, and V&A Museum.',
    icon: 'MapPin',
    image: '/images/hero_alberta_guesthouse.jpg'
  },
  {
    title: 'Daily Housekeeping',
    description: 'Immaculately maintained bedrooms and bathrooms sanitized and refreshed daily to luxury standards.',
    icon: 'Sparkles',
    image: '/images/deluxe_king_room.jpg'
  }
];

export const DUNDEE_ATTRACTIONS = [
  { name: 'V&A Dundee Museum of Design', time: '6 mins drive / 2.2 miles', type: 'Culture' },
  { name: 'RRS Discovery & Discovery Point', time: '7 mins drive / 2.4 miles', type: 'Heritage' },
  { name: 'Dundee Law Hill (Panoramas)', time: '5 mins drive / 1.5 miles', type: 'Scenic View' },
  { name: 'Broughty Ferry Beach & Castle', time: '9 mins drive / 3.8 miles', type: 'Coast' },
  { name: 'Dundee Train Station', time: '7 mins drive / 2.5 miles', type: 'Transport' },
  { name: 'St Andrews Old Course & Town', time: '25 mins drive / 14 miles', type: 'World Golf' }
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: 'How do I book a room or package at Alberta Guesthouse?',
    answer:
      'You can book directly by calling +447753429354 or clicking the WhatsApp Booking button. Direct booking guarantees you our lowest price without third-party commission fees.',
    category: 'booking'
  },
  {
    question: 'Where is Alberta Guesthouse located and is parking free?',
    answer:
      'We are located at 51 Forfar Rd, Dundee DD4 7BE, Scotland. Yes, we provide free private on-site driveway parking for our guests.',
    category: 'stay'
  },
  {
    question: 'What are the check-in and check-out times?',
    answer:
      'Standard check-in is between 15:00 and 21:00. Check-out is by 10:30. If you require early check-in or late checkout, please let us know in advance and we will gladly arrange it.',
    category: 'stay'
  },
  {
    question: 'What is included in the Special Offers & Packages?',
    answer:
      'Each package clearly lists all inclusions—such as daily Scottish breakfast, late checkout, champagne, floral arrangements, or extended stay discounts. There are no hidden fees.',
    category: 'offers'
  },
  {
    question: 'What is your cancellation and deposit policy?',
    answer:
      'We offer flexible cancellation terms: cancel up to 48 hours prior to your scheduled arrival date for a full refund. Same-day cancellations or no-shows are subject to the first night fee.',
    category: 'offers'
  },
  {
    question: 'Is breakfast included in the room price?',
    answer:
      'Our Special Offers and selected room rates include Scottish & continental breakfast. You can also add breakfast to any room reservation upon check-in or when booking via WhatsApp.',
    category: 'booking'
  }
];

export const COPIABLE_PROMPTS = {
  urduPrompt: `Alberta Guesthouse ke liye Complete Multi-Page Luxury Website:
Website Name: Alberta Guesthouse
Phone / WhatsApp: +447753429354
Address: 51 Forfar Rd, Dundee DD4 7BE, United Kingdom

Pages Architecture:
1. Home / Landing Page (6 Distinct Sections: Hero with WhatsApp & Call, Rooms Preview, Special Offers & Packages, Scottish Facilities & Experience, Customer Reviews & 5-Star Breakdown with QR Code Card, Dundee Location Map & Contact)
2. Rooms & Suites Page (Full Room Catalog, Live Price Calculator, Direct WhatsApp Booking)
3. Special Offers & Packages Page (Weekend Getaway, Extended Stay, Romantic Stay, Family Stay, Business Stay, Seasonal Offers, FAQ)
4. Contact & Location Page (Google Maps Embed, Dundee Travel Directions, Contact Form, Free Parking Guide)

Reviews Section:
Overall 4.9/5 rating, 5 to 1 star percentage bars, Google Reviews & Trustpilot cards, 'Review Us!' QR code card, verified guest cards.

Special Offers:
Exclusive Offers & Packages section with original/discounted prices, benefits checklist, WhatsApp inquiry button, and booking terms.`,

  englishPrompt: `Create a luxury 4-page boutique hotel website for Alberta Guesthouse located at 51 Forfar Rd, Dundee DD4 7BE, United Kingdom (Phone/WhatsApp: +447753429354).

Website Structure (4 Separate Pages):
- Page 1: Landing Page with 6 complete sections (Hero with quick-book bar, Rooms & Suites Preview, Exclusive Offers & Packages, Facilities & Scottish Hospitality, Customer Reviews & Ratings with 5-to-1 Star breakdown & QR Code card, Location & Google Maps).
- Page 2: Rooms & Suites (/rooms) with filterable rooms, night calculator, and direct WhatsApp reservation.
- Page 3: Special Offers & Packages (/offers) featuring Weekend Getaway, Extended Stay, Romantic Stay, Family Stay, Business Stay, and Seasonal deals.
- Page 4: Contact & Location (/contact) with interactive Google Maps embed, driving/train directions, free parking instructions, and contact inquiry form.

Design Theme:
Modern luxury Scottish boutique hotel aesthetic, navy and warm gold accents, responsive layout, working WhatsApp buttons, genuine Dundee location details.`
};
