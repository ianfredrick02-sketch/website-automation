import { Link, NavLink, useLocation } from 'react-router-dom';
import { galleryImages, imageCategories } from './data/gallery';
import { studioConfig, services, packages, businessHighlights } from './data/siteConfig';

const whatsappLink = (service = '') => {
  const message = service
    ? `Hello Evans Photography Studio, I would like to enquire about ${service} and available booking dates.`
    : studioConfig.whatsappMessage;

  return `https://wa.me/${studioConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const formatKES = (amount) => `KES ${new Intl.NumberFormat('en-KE').format(amount)}`;

function Layout() {
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/services', label: 'Services' },
    { to: '/packages', label: 'Packages' },
    { to: '/about', label: 'About' },
    { to: '/booking', label: 'Booking' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <header className="site-header">
        <div className="container nav-shell">
          <Link className="brand" to="/">
            <span className="brand-mark">E</span>
            <div>
              <strong>{studioConfig.name}</strong>
              <small>{studioConfig.branchName}</small>
            </div>
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <a href={whatsappLink()} className="nav-button secondary" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <Link to="/booking" className="nav-button primary">
              Book a Session
            </Link>
          </div>
        </div>
      </header>

      <main className="page-shell">
        <Routes />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>{studioConfig.name}</h3>
            <p>{studioConfig.branchName}</p>
            <p>{studioConfig.location}</p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/packages">Packages</Link></li>
              <li><Link to="/booking">Booking</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`tel:${studioConfig.phone.replace(/\s+/g, '')}`}>{studioConfig.phone}</a></li>
              <li><a href={`mailto:${studioConfig.email}`}>{studioConfig.email}</a></li>
              <li><a href={whatsappLink()} target="_blank" rel="noreferrer">WhatsApp</a></li>
            </ul>
          </div>

          <div>
            <h4>Follow</h4>
            <ul>
              {Object.entries(studioConfig.social).map(([platform, link]) => (
                <li key={platform}><a href={link} target="_blank" rel="noreferrer">{platform}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container footer-meta">
          <span>© {new Date().getFullYear()} {studioConfig.name}</span>
          <Link to="/privacy">Privacy Notice</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        WhatsApp
      </a>
    </>
  );
}

function HomePage() {
  const featured = galleryImages.filter((image) => image.featured).slice(0, 3);

  return (
    <>
      <section className="hero section-gap">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Luxury storytelling photography</span>
            <h1>Every moment, beautifully captured.</h1>
            <p>
              Evans Photography Studio creates refined imagery for weddings, portraits, family stories, and unforgettable celebrations across Mombasa and the Kenyan coast.
            </p>
            <div className="button-row">
              <Link className="primary button" to="/portfolio">Explore Our Work</Link>
              <Link className="secondary button" to="/booking">Book a Session</Link>
            </div>
            <div className="hero-meta">
              <div><strong>{galleryImages.length}</strong><span>portfolio frames</span></div>
              <div><strong>Premium</strong><span>editorial style</span></div>
              <div><strong>Custom</strong><span>booking inquiries</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo-card hero-large">
              <img src={featured[0]?.src} alt={featured[0]?.alt || 'Featured photography'} />
            </div>
            <div className="hero-photo-card hero-small top">
              <img src={featured[1]?.src} alt={featured[1]?.alt || 'Secondary featured photography'} />
            </div>
            <div className="hero-photo-card hero-small bottom">
              <img src={featured[2]?.src} alt={featured[2]?.alt || 'Third featured photography'} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap muted-section">
        <div className="container intro-grid">
          <div>
            <span className="eyebrow">The studio</span>
            <h2>Thoughtful photography with a cinematic eye.</h2>
          </div>
          <p>
            We create elegant visual stories designed to feel personal, timeless, and rich with atmosphere. This website uses placeholder demo imagery until the studio uploads its final portfolio assets.
          </p>
        </div>
      </section>

      <section className="section-gap">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our focus</span>
            <h2>Services tailored to meaningful moments.</h2>
          </div>
          <div className="card-grid three-up">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <img src={service.image} alt={service.title} />
                <div className="card-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="meta-row">
                    <span>{service.price}</span>
                    <Link to="/booking">Book</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap accent-section">
        <div className="container collection-wrap">
          <div className="section-head left">
            <span className="eyebrow">Selected collection</span>
            <h2>Editorial imagery designed to last a lifetime.</h2>
          </div>
          <div className="portfolio-strip">
            {galleryImages.slice(0, 4).map((image) => (
              <div key={image.id} className="mini-portfolio-item">
                <img src={image.src} alt={image.alt} />
                <div>
                  <strong>{image.title}</strong>
                  <span>{image.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="container cta-panel">
          <div>
            <span className="eyebrow">Ready to create your story?</span>
            <h2>Start your booking enquiry today.</h2>
          </div>
          <div className="cta-actions">
            <Link className="primary button" to="/booking">Book a Session</Link>
            <a className="secondary button" href={whatsappLink()} target="_blank" rel="noreferrer">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}

function PortfolioPage() {
  const [category, setCategory] = React.useState('All');
  const [activeImage, setActiveImage] = React.useState(null);

  const filteredImages = category === 'All' ? galleryImages : galleryImages.filter((image) => image.category === category);

  const openLightbox = (image) => setActiveImage(image);
  const closeLightbox = () => setActiveImage(null);

  const currentIndex = activeImage ? filteredImages.findIndex((frame) => frame.id === activeImage.id) : -1;

  const showPrev = () => {
    if (currentIndex <= 0) return;
    setActiveImage(filteredImages[currentIndex - 1]);
  };

  const showNext = () => {
    if (currentIndex === -1 || currentIndex >= filteredImages.length - 1) return;
    setActiveImage(filteredImages[currentIndex + 1]);
  };

  return (
    <div className="container section-gap">
      <div className="section-head">
        <span className="eyebrow">Portfolio</span>
        <h1>Selected work & stories.</h1>
      </div>

      <div className="filter-bar" role="tablist" aria-label="Portfolio category filters">
        {imageCategories.map((item) => (
          <button
            key={item}
            type="button"
            className={item === category ? 'filter-button active' : 'filter-button'}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {filteredImages.length === 0 ? (
        <div className="empty-state">No photographs are available in this category yet. New gallery images can be added here once the studio uploads them.</div>
      ) : (
        <div className="portfolio-grid">
          {filteredImages.map((image) => (
            <article key={image.id} className="portfolio-card">
              <button type="button" className="portfolio-image-button" onClick={() => openLightbox(image)}>
                <img src={image.src} alt={image.alt} loading="lazy" />
              </button>
              <div className="portfolio-info">
                <div>
                  <span>{image.category}</span>
                  <h3>{image.title}</h3>
                </div>
                <p>{image.description}</p>
              </div>
            </article>
          ))}
        </div>
      )}

      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="close-lightbox" onClick={closeLightbox} aria-label="Close gallery view">
              ×
            </button>
            <img src={activeImage.src} alt={activeImage.alt} />
            <div className="lightbox-caption">
              <div>
                <span>{activeImage.category}</span>
                <h3>{activeImage.title}</h3>
              </div>
              <p>{activeImage.description}</p>
            </div>
            <div className="lightbox-nav">
              <button type="button" onClick={showPrev} disabled={currentIndex <= 0}>Previous</button>
              <button type="button" onClick={showNext} disabled={currentIndex >= filteredImages.length - 1}>Next</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="container section-gap">
      <div className="section-head">
        <span className="eyebrow">Services</span>
        <h1>Tailored photography experiences.</h1>
      </div>

      <div className="service-list">
        {services.map((service) => (
          <article key={service.id} className="service-detail-card">
            <img src={service.image} alt={service.title} />
            <div>
              <span className="eyebrow">{service.price}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul className="check-list">
                {service.inclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="button-row">
                <a className="primary button" href={whatsappLink(service.title)} target="_blank" rel="noreferrer">Enquire about this service</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function PackagesPage() {
  return (
    <div className="container section-gap">
      <div className="section-head">
        <span className="eyebrow">Packages</span>
        <h1>Demo package options.</h1>
      </div>

      <div className="card-grid three-up">
        {packages.map((pkg) => (
          <article key={pkg.id} className="package-card">
            <span className="eyebrow">{pkg.duration}</span>
            <h2>{pkg.name}</h2>
            <div className="price-tag">{formatKES(pkg.price)}</div>
            <p>{pkg.description}</p>
            <ul className="check-list">
              {pkg.inclusions.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="package-foot">
              <strong>Delivery</strong>
              <p>{pkg.delivery}</p>
            </div>
            <div className="package-foot">
              <strong>Add-ons</strong>
              <ul>
                {pkg.addOns.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <a className="primary button" href={whatsappLink(pkg.name)} target="_blank" rel="noreferrer">Book this package</a>
          </article>
        ))}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="container section-gap">
      <div className="section-head">
        <span className="eyebrow">About</span>
        <h1>Story-led photography with elegant intention.</h1>
      </div>

      <div className="about-layout">
        <div className="about-copy">
          <p>
            Evans Photography Studio is a boutique creative studio focused on storytelling, atmosphere, and the sincere details that make an occasion unforgettable.
          </p>
          <p>
            This copy is intentionally framed as placeholder narrative guidance until the studio confirms its final biography, photographer profile, and business history.
          </p>
          <div className="highlight-list">
            {businessHighlights.map((item) => (
              <span key={item} className="highlight-pill">{item}</span>
            ))}
          </div>
        </div>
        <div className="about-image">
          <img src="/images/about-portrait.svg" alt="Demo about photography placeholder" />
        </div>
      </div>
    </div>
  );
}

function BookingPage() {
  const [form, setForm] = React.useState({
    name: '',
    phone: '',
    email: '',
    service: 'Wedding Photography',
    date: '',
    time: '',
    location: '',
    notes: '',
    consent: false
  });
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);

  const handleInput = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = 'Your name is required.';
    if (!form.phone.trim()) nextErrors.phone = 'A phone number is required.';
    if (!form.service.trim()) nextErrors.service = 'Please choose a photography service.';
    if (!form.date) nextErrors.date = 'Preferred date is required.';
    if (!form.consent) nextErrors.consent = 'Please confirm you consent to us using your contact details.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    const key = `evans_booking_enquiry_${Date.now()}`;
    const payload = { ...form, createdAt: new Date().toISOString(), status: 'New' };
    const existing = JSON.parse(localStorage.getItem('evans_enquiries') || '[]');
    localStorage.setItem('evans_enquiries', JSON.stringify([...existing, { ...payload, id: key }]));

    const whatsappText = [
      `Hello Evans Photography Studio, I would like to enquire about ${form.service}.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : '',
      `Preferred date: ${form.date}`,
      form.time ? `Preferred time: ${form.time}` : '',
      form.location ? `Location: ${form.location}` : '',
      form.notes ? `Notes: ${form.notes}` : ''
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/${studioConfig.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
    setForm({
      name: '',
      phone: '',
      email: '',
      service: 'Wedding Photography',
      date: '',
      time: '',
      location: '',
      notes: '',
      consent: false
    });
  };

  return (
    <div className="container section-gap booking-shell">
      <div className="section-head">
        <span className="eyebrow">Booking</span>
        <h1>Enquire about your session.</h1>
      </div>

      <div className="booking-panel">
        <form className="booking-form" onSubmit={handleSubmit} noValidate>
          <div className="field-grid">
            <label>
              <span>Customer name</span>
              <input type="text" name="name" value={form.name} onChange={handleInput} />
              {errors.name && <small>{errors.name}</small>}
            </label>

            <label>
              <span>Phone number</span>
              <input type="tel" name="phone" value={form.phone} onChange={handleInput} />
              {errors.phone && <small>{errors.phone}</small>}
            </label>

            <label>
              <span>Email address</span>
              <input type="email" name="email" value={form.email} onChange={handleInput} />
            </label>

            <label>
              <span>Desired service</span>
              <select name="service" value={form.service} onChange={handleInput}>
                {services.map((service) => (
                  <option key={service.id} value={service.title}>{service.title}</option>
                ))}
              </select>
              {errors.service && <small>{errors.service}</small>}
            </label>

            <label>
              <span>Preferred date</span>
              <input type="date" name="date" value={form.date} onChange={handleInput} />
              {errors.date && <small>{errors.date}</small>}
            </label>

            <label>
              <span>Preferred time</span>
              <input type="time" name="time" value={form.time} onChange={handleInput} />
            </label>

            <label className="full-width">
              <span>Preferred location</span>
              <input type="text" name="location" value={form.location} onChange={handleInput} />
            </label>

            <label className="full-width">
              <span>Additional notes</span>
              <textarea name="notes" rows="5" value={form.notes} onChange={handleInput} />
            </label>
          </div>

          <label className="checkbox-row">
            <input type="checkbox" name="consent" checked={form.consent} onChange={handleInput} />
            <span>I consent to the studio using my contact details to respond to this enquiry.</span>
          </label>
          {errors.consent && <small className="error-text">{errors.consent}</small>}

          <div className="booking-note">
            No booking backend is currently configured, so this form prepares a WhatsApp enquiry message and stores the draft locally for review.
          </div>

          {submitted && (
            <div className="success-box">
              Your booking request has been prepared via WhatsApp. The studio will review the enquiry and respond to the contact details provided.
            </div>
          )}

          <button type="submit" className="primary button submit-button">Send Enquiry</button>
        </form>

        <aside className="booking-sidecard">
          <h3>Need faster support?</h3>
          <p>Reach the studio directly through WhatsApp for quick availability questions.</p>
          <a className="secondary button" href={whatsappLink()} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          <div className="contact-block">
            <strong>{studioConfig.phone}</strong>
            <span>{studioConfig.email}</span>
            <span>{studioConfig.location}</span>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="container section-gap">
      <div className="section-head">
        <span className="eyebrow">Contact</span>
        <h1>Let’s plan your session.</h1>
      </div>

      <div className="contact-layout">
        <div className="contact-panel">
          <div className="contact-card">
            <h3>Studio details</h3>
            <p>{studioConfig.name}</p>
            <p>{studioConfig.branchName}</p>
            <p>{studioConfig.location}</p>
            <a href={`tel:${studioConfig.phone.replace(/\s+/g, '')}`}>{studioConfig.phone}</a>
            <a href={`mailto:${studioConfig.email}`}>{studioConfig.email}</a>
          </div>

          <div className="contact-card">
            <h3>Opening hours</h3>
            {studioConfig.openingHours.map((slot) => (
              <p key={slot.day}><strong>{slot.day}</strong> — {slot.hours}</p>
            ))}
          </div>

          <div className="contact-card">
            <h3>Follow us</h3>
            <div className="social-links">
              {Object.entries(studioConfig.social).map(([platform, link]) => (
                <a key={platform} href={link} target="_blank" rel="noreferrer">{platform}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="map-panel">
          <iframe
            title="Map to Bamburi, Mombasa, Kenya"
            src="https://www.google.com/maps?q=Bamburi%20Mombasa%20Kenya&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="contact-form-box">
        <h2>Send a quick enquiry</h2>
        <a className="primary button" href={whatsappLink()} target="_blank" rel="noreferrer">Message on WhatsApp</a>
      </div>
    </div>
  );
}

function PrivacyPage() {
  return (
    <div className="container section-gap legal-shell">
      <div className="section-head">
        <span className="eyebrow">Privacy notice</span>
        <h1>How your information is handled.</h1>
      </div>
      <div className="legal-card">
        <p>
          Evans Photography Studio may collect your name, phone number, email address, preferred service, date, location details, and notes when you complete an enquiry form.
        </p>
        <p>
          This information is used solely to respond to your enquiry, coordinate bookings, and communicate relevant session details. It is not used for unrelated marketing without clear consent.
        </p>
        <p>
          The studio stores contact details securely and only retains the information necessary to manage a booking inquiry. Sensitive personal information beyond what is needed for session coordination is not requested.
        </p>
      </div>
    </div>
  );
}

function AdminLogin() {
  const [token, setToken] = React.useState('');
  const [error, setError] = React.useState('');
  const [authorized, setAuthorized] = React.useState(false);

  React.useEffect(() => {
    const stored = localStorage.getItem('evans_admin_token');
    const expected = import.meta.env.VITE_ADMIN_ACCESS_TOKEN || '';
    if (stored && stored === expected) {
      setAuthorized(true);
    }
  }, []);

  const submit = (event) => {
    event.preventDefault();
    const expected = import.meta.env.VITE_ADMIN_ACCESS_TOKEN || '';

    if (!expected) {
      setError('No admin token is configured. Add VITE_ADMIN_ACCESS_TOKEN to your environment before enabling the dashboard.');
      return;
    }

    if (token === expected) {
      localStorage.setItem('evans_admin_token', token);
      setAuthorized(true);
      setError('');
      return;
    }

    setError('Invalid admin token.');
  };

  if (authorized) {
    return <AdminDashboard />;
  }

  return (
    <div className="container section-gap admin-login-shell">
      <div className="admin-card">
        <h1>Admin access</h1>
        <p>Use the configured environment token to access the dashboard.</p>
        <form onSubmit={submit} className="admin-login-form">
          <label>
            <span>Access token</span>
            <input type="password" value={token} onChange={(event) => setToken(event.target.value)} />
          </label>
          {error && <small>{error}</small>}
          <button type="submit" className="primary button">Enter Dashboard</button>
        </form>
      </div>
    </div>
  );
}

function AdminDashboard() {
  const enquiries = JSON.parse(localStorage.getItem('evans_enquiries') || '[]');
  const inventory = galleryImages.length;
  const categories = new Set(galleryImages.map((image) => image.category));

  return (
    <div className="container section-gap">
      <div className="section-head">
        <span className="eyebrow">Admin dashboard</span>
        <h1>Studio administration</h1>
      </div>

      <div className="stats-grid">
        <div className="stat-box"><strong>{inventory}</strong><span>Total portfolio images</span></div>
        <div className="stat-box"><strong>{categories.size}</strong><span>Image categories</span></div>
        <div className="stat-box"><strong>{enquiries.length}</strong><span>New booking enquiries</span></div>
        <div className="stat-box"><strong>0</strong><span>Pending enquiries</span></div>
      </div>

      <div className="dashboard-grid">
        <section className="admin-panel">
          <h3>Gallery management</h3>
          <ul>
            <li>Upload portfolio images to the public assets directory.</li>
            <li>Update titles, captions, alt text, and categories in the gallery registry.</li>
            <li>Mark featured work and set display order in the configurable asset list.</li>
          </ul>
        </section>

        <section className="admin-panel">
          <h3>Services & packages</h3>
          <ul>
            <li>Add or disable services in the central config file.</li>
            <li>Manage package pricing in KES values in the site configuration.</li>
            <li>Keep booking actions linked to WhatsApp until a backend is set up.</li>
          </ul>
        </section>

        <section className="admin-panel">
          <h3>Booking enquiries</h3>
          <ul>
            {enquiries.length === 0 ? <li>No enquiries captured yet.</li> : enquiries.map((entry) => (
              <li key={entry.id}>{entry.name} — {entry.service} — {entry.date}</li>
            ))}
          </ul>
        </section>

        <section className="admin-panel">
          <h3>Website settings</h3>
          <ul>
            <li>Update contact details and opening hours in `src/data/siteConfig.js`.</li>
            <li>Review WhatsApp configuration in `.env` and `.env.example`.</li>
            <li>Replace placeholder artwork and demo copy with verified studio content.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

function Routes() {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/packages" element={<PackagesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default function App() {
  return <Layout />;
}
