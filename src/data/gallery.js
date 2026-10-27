const placeholderSvg = (title) => `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#1b1b1b"/>
      <stop offset="100%" stop-color="#403b2f"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="900" fill="url(#bg)"/>
  <rect x="80" y="80" width="1040" height="740" fill="none" stroke="#d9b87a" stroke-width="4" opacity="0.8"/>
  <circle cx="600" cy="340" r="180" fill="#d9b87a" opacity="0.2"/>
  <path d="M200 720C350 590 470 560 600 560C750 560 860 620 1000 720" fill="none" stroke="#f3eee5" stroke-width="8" opacity="0.8"/>
  <text x="600" y="440" text-anchor="middle" font-family="Arial, sans-serif" font-size="68" fill="#f4efe6" font-weight="600">${title}</text>
  <text x="600" y="520" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" fill="#d9b87a">Demo placeholder — replace with real Evans Photography Studio image</text>
</svg>
`)}`;

export const galleryImages = [
  {
    id: 1,
    title: 'Golden Hour Portrait',
    category: 'Portraits',
    description: 'Demo placeholder. Replace with a real portrait session image once uploaded.',
    src: placeholderSvg('Golden Hour Portrait'),
    alt: 'Demo portrait placeholder for Evans Photography Studio',
    featured: true,
    order: 1,
    date: 'Illustrative',
    collection: 'Demo Collection'
  },
  {
    id: 2,
    title: 'Wedding Storytelling',
    category: 'Weddings',
    description: 'Demo placeholder. Replace with actual wedding photography assets.',
    src: placeholderSvg('Wedding Storytelling'),
    alt: 'Demo wedding placeholder for Evans Photography Studio',
    featured: true,
    order: 2,
    date: 'Illustrative',
    collection: 'Demo Collection'
  },
  {
    id: 3,
    title: 'Family Session',
    category: 'Family Photography',
    description: 'Demo placeholder. Replace with a real family photography gallery image.',
    src: placeholderSvg('Family Session'),
    alt: 'Demo family photography placeholder for Evans Photography Studio',
    featured: false,
    order: 3,
    date: 'Illustrative',
    collection: 'Demo Collection'
  },
  {
    id: 4,
    title: 'Graduation Moments',
    category: 'Graduation',
    description: 'Demo placeholder. Replace with an authentic graduation image.',
    src: placeholderSvg('Graduation Moments'),
    alt: 'Demo graduation photography placeholder for Evans Photography Studio',
    featured: false,
    order: 4,
    date: 'Illustrative',
    collection: 'Demo Collection'
  },
  {
    id: 5,
    title: 'Event Energy',
    category: 'Events and Celebrations',
    description: 'Demo placeholder. Replace with a real event or celebration photograph.',
    src: placeholderSvg('Event Energy'),
    alt: 'Demo event photography placeholder for Evans Photography Studio',
    featured: false,
    order: 5,
    date: 'Illustrative',
    collection: 'Demo Collection'
  },
  {
    id: 6,
    title: 'Editorial Fashion',
    category: 'Fashion and Editorial',
    description: 'Demo placeholder. Replace with actual fashion and editorial photography.',
    src: placeholderSvg('Editorial Fashion'),
    alt: 'Demo fashion photography placeholder for Evans Photography Studio',
    featured: false,
    order: 6,
    date: 'Illustrative',
    collection: 'Demo Collection'
  },
  {
    id: 7,
    title: 'Brand Detail',
    category: 'Products and Commercial Photography',
    description: 'Demo placeholder. Replace with commercial or product shoot assets.',
    src: placeholderSvg('Brand Detail'),
    alt: 'Demo product photography placeholder for Evans Photography Studio',
    featured: false,
    order: 7,
    date: 'Illustrative',
    collection: 'Demo Collection'
  },
  {
    id: 8,
    title: 'Coastal Light',
    category: 'Nature and Outdoor Photography',
    description: 'Demo placeholder. Replace with a real outdoor or nature image.',
    src: placeholderSvg('Coastal Light'),
    alt: 'Demo nature photography placeholder for Evans Photography Studio',
    featured: false,
    order: 8,
    date: 'Illustrative',
    collection: 'Demo Collection'
  }
];

export const imageCategories = ['All', ...new Set(galleryImages.map((image) => image.category))];
