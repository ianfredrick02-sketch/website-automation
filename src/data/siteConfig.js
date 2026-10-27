export const studioConfig = {
  name: 'Evans Photography Studio',
  branchName: 'Bamburi (Malindi Store)',
  location: 'Bamburi, Mombasa, Kenya',
  phone: '+254 702 481987',
  whatsappNumber: '254702481987',
  email: 'hello@evansphotographystudio.co.ke',
  social: {
    instagram: 'https://instagram.com/evansphotostudio',
    facebook: 'https://facebook.com/evansphotostudio',
    x: 'https://x.com/evansphotostudio',
    tiktok: 'https://www.tiktok.com/@evansphotostudio'
  },
  openingHours: [
    { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM – 4:00 PM' },
    { day: 'Sunday', hours: 'By appointment only' }
  ],
  adminTokenEnvKey: 'VITE_ADMIN_ACCESS_TOKEN',
  whatsappMessage: 'Hello Evans Photography Studio, I would like to enquire about your photography services and available booking dates.',
  bookingFallbackMessage: 'This enquiry is prepared as a WhatsApp message because no booking backend is currently configured.'
};

export const services = [
  {
    id: 'weddings',
    title: 'Wedding Photography',
    image: '/images/weddings.svg',
    description: 'Illustrative service entry. Update this description and images once the studio confirms its offerings.',
    inclusions: ['Candid coverage', 'Formal portraits', 'Personal highlight gallery', 'Pre- and post-event consultations'],
    price: 'Demo pricing available on request',
    enabled: true
  },
  {
    id: 'portraits',
    title: 'Portrait Sessions',
    image: '/images/portraits.svg',
    description: 'Illustrative service entry for modern portraits, branding, and personal storytelling.',
    inclusions: ['Creative direction', 'Location planning', 'Retouched final gallery', 'Delivery guidance'],
    price: 'Demo pricing available on request',
    enabled: true
  },
  {
    id: 'family',
    title: 'Family Photography',
    image: '/images/family.svg',
    description: 'Illustrative service entry for meaningful family sessions and relaxed lifestyle storytelling.',
    inclusions: ['Family styling advice', 'Natural documentary moments', 'Candid and posed frames', 'Online gallery'],
    price: 'Demo pricing available on request',
    enabled: true
  },
  {
    id: 'events',
    title: 'Events & Celebrations',
    image: '/images/events.svg',
    description: 'Illustrative service entry for parties, birthdays, corporate socials, and milestone gatherings.',
    inclusions: ['Coverage of key moments', 'Fast turnaround preview', 'Event timeline storytelling', 'High-resolution gallery'],
    price: 'Demo pricing available on request',
    enabled: true
  }
];

export const packages = [
  {
    id: 'signature',
    name: 'Signature Story',
    price: 25000,
    duration: '2 hours',
    description: 'Illustrative demo package for an elegant, story-driven photography session.',
    inclusions: ['1 location', '40 edited images', 'Pre-session planning call', 'Online gallery delivery'],
    delivery: 'Demo delivery window: 7–10 working days',
    addOns: ['Album add-on', 'Second shooter', 'Extra hour'],
    enabled: true
  },
  {
    id: 'legacy',
    name: 'Legacy Collection',
    price: 48000,
    duration: '4 hours',
    description: 'Illustrative premium package for portraits, storytelling, and elevated editorial coverage.',
    inclusions: ['2 locations', '80 edited images', 'Wardrobe guidance', 'Priority gallery delivery'],
    delivery: 'Demo delivery window: 10–14 working days',
    addOns: ['Print pack', 'Additional location', 'Retouching session'],
    enabled: true
  },
  {
    id: 'celebration',
    name: 'Celebration Cover',
    price: 68000,
    duration: 'Full-day event coverage',
    description: 'Illustrative demo package designed for events, ceremonies, and unforgettable moments.',
    inclusions: ['Full-day coverage', '200 edited images', 'Coverage planning', 'Event highlight sequence'],
    delivery: 'Demo delivery window: 10–15 working days',
    addOns: ['Video teaser', 'Guest photo booth', 'Same-day preview'],
    enabled: true
  }
];

export const businessHighlights = [
  'Luxury editorial aesthetic',
  'Client-focused storytelling',
  'Responsive booking support',
  'Flexible family, event, and portrait coverage'
];
