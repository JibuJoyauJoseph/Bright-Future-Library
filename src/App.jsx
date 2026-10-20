import React, { useState } from "react";

const navigation = [
  ["home", "Home"],
  ["about-us", "About Us"],
  ["services", "Services"],
  ["contact-info", "Contacts"],
  ["events", "Events"],
  ["featured-books", "Featured books"],
  ["contact-us", "Contact Us"],
];

const books = [
  {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    isbn: "9780547928227",
    cover: "/books/hobbit.svg",
    genre: "Fantasy",
    description: "Join Bilbo Baggins on an unexpected adventure through a world of dragons, dwarves, and wonder.",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    isbn: "9780735211292",
    cover: "/books/atomic-habits.svg",
    genre: "Personal growth",
    description: "A practical guide to building better habits through small changes that add up over time.",
  },
  {
    title: "Educated",
    author: "Tara Westover",
    isbn: "9780399590504",
    cover: "/books/educated.svg",
    genre: "Memoir",
    description: "A moving memoir about family, self-invention, and the transformative power of education.",
  },
  {
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    isbn: "9780399226908",
    cover: "/books/hungry-caterpillar.svg",
    genre: "Children’s books",
    description: "A colorful, much-loved story that invites young readers to count, explore, and grow.",
  },
];

const services = [
  {
    
    title: "Borrow & return books",
    text: "Discover something new, borrow books for home, and return them at the front desk when you’re done.",
  },
  {
    
    title: "Internet & computers",
    text: "Use our computers and internet access for research, study, job searches, and everyday tasks.",
  },
  {
    
    title: "Quiet reading areas",
    text: "Settle into a welcoming space for quiet reading, independent study, or a little time to think.",
  },
  {
    
    title: "Learning workshops",
    text: "Join friendly educational workshops and activities designed to help learners of every age grow.",
  },
];

const events = [
  {
    date: "November 7, 2026",
    day: "07",
    month: "NOV",
    title: "Saturday Story Circle",
    text: "Bring the young readers in your life for a comfortable morning of stories, drawing, and new friends.",
    time: "10:00 AM – 11:30 AM",
    tag: "For families"
  },
  {
    date: "November 14, 2026",
    day: "14",
    month: "NOV",
    title: "Digital Skills Workshop",
    text: "A welcoming, hands-on introduction to using the internet safely and finding reliable information online.",
    time: "2:00 PM – 4:00 PM",
    tag: "Free workshop",
  },
  {
    date: "November 21, 2026",
    day: "21",
    month: "NOV",
    title: "Community Book Club",
    text: "Share a good read, hear a new perspective, and meet fellow book lovers from your neighborhood.",
    time: "11:00 AM – 12:30 PM",
    tag: "All readers welcome",
  },
];


function App() {
  const [submitted, setSubmitted] = useState(false);

  function handleContactSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Bright Future Library home">
          <span className="brand-icon" aria-hidden="true"></span>
          <span>Bright Future <small>LIBRARY</small></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}
        </nav>
        <a className="header-visit" href="#contact-info">Plan your visit <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow"><span className="eyebrow-dot" /> YOUR COMMUNITY. YOUR LIBRARY.</span>
            <h1>The hub of ideas<br />And <em>Transformative Understanding</em></h1>
            <p className="hero-text">
              A welcoming place to read, learn, and connect. There’s always
              something new waiting for you at Bright Future Library.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#featured-books">Explore the collection <span aria-hidden="true">→</span></a>
              <a className="button button-light" href="#about-us">Get to know us</a>
            </div>
            <div className="hero-note"><span aria-hidden="true"></span> A little curiosity goes a long way.</div>
          </div>
          <div className="hero-visual" role="img" aria-label="A warm, sunlit library reading room">
            <div className="sun-shape" />
            <div className="shelf shelf-back"><i /><i /><i /><i /><i /><i /></div>
            <div className="window-shape"><span /><span /><span /></div>
            <div className="plant-shape"><i /><i /><i /><b /></div>
            <div className="reading-chair"><span /></div>
            <div className="book-stack"><i /><i /><i /></div>
            <div className="visual-caption"><span>FIND YOUR NEXT CHAPTER</span><strong>There’s a seat<br />waiting for you.</strong></div>
          </div>
        </section>

        <section className="welcome-band">
          <div className="welcome-inner">
            <div><span className="eyebrow">A PLACE FOR EVERYONE</span><h2>Curiosity lives here.</h2></div>
            <p>From your first picture book to a new skill, we’re here to make learning feel at home.</p>
            <a className="inline-link" href="#services">See what you can do here <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="section about-section" id="about-us">
          <div className="section-heading">
            <span className="eyebrow">OUR STORY</span>
            <h2>A library that grows<br />with its community.</h2>
            <p>Bright Future Library began with a simple belief: everyone deserves a welcoming place to learn, discover, and imagine what comes next.</p>
          </div>
          <div className="about-story">
            <div className="story-art" aria-hidden="true">
              <span className="story-sun" />
              <span className="story-book">BFL</span>
              <span className="story-year">EST. 2020</span>
            </div>
            <div className="story-copy">
              <span className="eyebrow">ROOTED IN COMMUNITY</span>
              <h3>Small beginnings.<br />A brighter future.</h3>
              <p>Since opening our doors in 2020, we’ve grown from a neighborhood reading room into a shared space for books, technology, learning, and community events. Every new reader and every new idea has helped shape the library we are today.</p>
              <p>Our shelves and programs continue to grow because our community does. We’re proud to make room for readers of all ages and backgrounds.</p>
              <div className="mission-note"><span aria-hidden="true"></span><p><strong>Our mission</strong><br />To make knowledge, imagination, and opportunity accessible to everyone.</p></div>
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section section-inner">
            <div className="section-heading centered-heading">
              <span className="eyebrow">HERE FOR YOUR EVERY DAY</span>
              <h2>More than books.<br /><em>A place to belong.</em></h2>
              <p>Whether you’re here to study, explore, or simply find a quiet moment, there’s something here for you.</p>
            </div>
            <div className="services-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <span className={`service-icon service-icon-${index}`} aria-hidden="true">{service.icon}</span>
                  <span className="service-number">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section books-section" id="featured-books">
          <div className="books-heading">
            <div><span className="eyebrow">PICKED WITH CARE</span><h2>Stories worth<br />staying for.</h2></div>
            <p>A few favorites from our shelves. Come in and find the one that feels like it was waiting for you.</p>
          </div>
          <div className="books-grid">
            {books.map((book) => (
              <article className="book-card" key={book.isbn}>
                <div className="book-cover-wrap">
                  <img
                    src={book.cover}
                    alt={`Cover of ${book.title}`}
                  />
                  <span className="book-genre">{book.genre}</span>
                </div>
                <div className="book-details">
                  <h3>{book.title}</h3><p className="book-author">by {book.author}</p>
                  <p className="book-description">{book.description}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="books-note">Featured titles are examples. Book availability may vary; ask our team about the current collection.</p>
        </section>

        <section className="events-section" id="events">
          <div className="section events-inner">
            <div className="events-heading">
              <div><span className="eyebrow">SAVE A SEAT</span><h2>Good things<br />are happening.</h2></div>
              <p>Bring a friend, meet a neighbor, or come on your own. There’s a place for you at our next event.</p>
            </div>
            <div className="events-list">
              {events.map((event) => (
                <article className="event-card" key={event.title}>
                  <div className="event-date" aria-label={event.date}><span>{event.month}</span><strong>{event.day}</strong></div>
                  <div className="event-info"><span className="event-tag">{event.tag}</span><h3>{event.title}</h3><p>{event.text}</p></div>
                  <div className="event-time"><span>{event.date}</span><strong>{event.time}</strong><a href="#contact-us">Ask us about it <span aria-hidden="true">↗</span></a></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact-us">
          <div className="contact-intro">
            <span className="eyebrow">LET’S TALK</span>
            <h2>We’d love<br />to hear <em>from you.</em></h2>
            <p>Have a question, an idea for an event, or a book recommendation? Send us a note.</p>
            <div className="contact-mini"><span aria-hidden="true"></span><span>Every great story starts with a conversation.</span></div>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="form-heading"><h3>Drop us a line.</h3><p>We’ll get back to you as soon as we can.</p></div>
            <label htmlFor="full-name">Full name</label>
            <input id="full-name" name="fullName" type="text" autoComplete="name" placeholder="Your full name" minLength="2" required />
            <label htmlFor="email-address">Email address</label>
            <input id="email-address" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            <label htmlFor="message">Your message</label>
            <textarea id="message" name="message" rows="4" placeholder="What would you like us to know?" minLength="10" required></textarea>
            <button className="button button-dark form-button" type="submit">Send your message <span aria-hidden="true">↗</span></button>
            {submitted && <p className="form-success" role="status">Thanks for getting in touch! We'll get back to you shortly.</p>}
           
          </form>
        </section>

        <section className="contact-info-band" id="contact-info">
          <div className="contact-info-inner">
            <div className="contact-info-title"><span className="eyebrow">COME ON IN</span><h2>Your library<br />is just around the corner.</h2></div>
            <div className="contact-detail"><span className="detail-icon" aria-hidden="true">⌖</span><div><span>FIND US</span><address>123 Learning Lane<br />Kigali, Rwanda</address></div></div>
            <div className="contact-detail"><span className="detail-icon" aria-hidden="true">⌕</span><div><span>GIVE US A CALL</span><a href="tel:+256700123456">+250 700 123 456</a></div></div>
            <div className="contact-detail"><span className="detail-icon" aria-hidden="true">✉</span><div><span>SEND US A NOTE</span><a href="mailto:info@brightfuturelibrary.org">info@brightfuturelibrary.org</a></div></div>
          </div>
          <p className="sample-contact-note">Contact details.</p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="#home"><span className="brand-icon" aria-hidden="true"></span><span>Bright Future <small>LIBRARY</small></span></a>
          <p>Making room for curiosity, connection, and brighter futures.</p>
          <div className="footer-contact"><a href="tel:+256700123456">+250 700 123 456</a><a href="mailto:info@brightfuturelibrary.org">info@brightfuturelibrary.org</a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Bright Future Library</span><a href="#home">Back to top ↑</a><span>Open to everyone. Always.</span></div>
      </footer>
    </>
  );
}

export default App;
