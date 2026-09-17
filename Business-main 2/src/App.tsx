
import { useEffect, useState, type ReactNode } from 'react';
import ventureLogo from '../bit-mesra-logo.jpg';
import ventureXLogo from '../image (2).png';
import unstopLogo from '../unstop-logo.png';
import {
  ArrowDownRight, ArrowRight, Award, BarChart3, CalendarDays, Check,
  ChevronDown, Clock3, ExternalLink, Facebook, Globe2, Instagram, Lightbulb,
  Linkedin, MapPin, Menu, MoveUpRight, Rocket, ShieldCheck, Sparkles,
  Target, Trophy, Users, X, Youtube,
} from 'lucide-react';

const event = {
  shortDates: '28 — 29 OCT 2026',
  time: '10:00 AM — 6:00 PM',
  registrationUrl: 'https://forms.gle/v95W2UdKuG1YYir98',
  mapUrl: 'https://maps.app.goo.gl/Jj2Lysqn5t9otbFu7',
};

const topics = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'PRODUCT & SERVICES',
    copy: 'Innovative solutions that improve production, efficiency, and sustainable operations.'
  },
  {
    number: '02',
    icon: BarChart3,
    title: 'Oil Conservation & Energy Sustainability',
    copy: 'Ideas focused on conserving energy, improving efficiency, and building a sustainable energy future.'
  },
  {
    number: '03',
    icon: Globe2,
    title: 'Water Conservation & Resources Sustainability',
    copy: 'Solutions for responsible water use, conservation, management, and sustainable resource development.'
  },
  {
    number: '04',
    icon: Lightbulb,
    title: 'Pollution Prevention',
    copy: 'Innovative approaches to reduce pollution, waste, and environmental impact.'
  },
  {
    number: '05',
    icon: BarChart3,
    title: 'AI Devices',
    copy: 'AI-powered devices and technologies designed to solve real-world sustainability challenges.'
  },
];
const timeline = [
  [
    '01',
    'WHO CAN PARTICIPATE?',
    'Students from B-Schools, engineering colleges, universities, higher education institutions and higher secondary schools from across India are invited to participate.'
  ],
  [
    '02',
    'HOW MANY MEMBERS CAN BE IN A TEAM?',
    'Each team can have up to 3 members.'
  ],
  [
    '03',
    'IS THERE A REGISTRATION FEE?',
    'Yes, the registration fee is ₹1,500 per team.'
  ],
  [
    '04',
    'WHAT DO I NEED TO SUBMIT FIRST?',
    'Start with a 300–500 word summary of your business idea at the submission stage.'
  ],
  [
    '05',
    'WHAT HAPPENS AFTER I SUBMIT MY IDEA?',
    'Promising ideas are shortlisted, then move to a Business Plan Presentation before the judging panel, followed by a Final Pitch for the top teams.'
  ],
  [
    '06',
    "WHAT IF MY IDEA DOESN'T FIT THE LISTED THEMES?",
    'Bring it anyway. VentureX welcomes any idea that solves a real problem and creates real impact, beyond the suggested tracks.'
  ],
  [
    '07',
    'WILL I RECEIVE A CERTIFICATE?',
    'Yes, every participant receives a certificate of participation.'
  ],
];
function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="section-label"><span />{children}</p>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [activeInfo, setActiveInfo] = useState<string | null>(null);

  useEffect(() => {
    const target = new Date('2026-10-28T10:00:00+05:30').getTime();
    const tick = () => {
      const difference = Math.max(target - Date.now(), 0);
      setTimeLeft({ days: Math.floor(difference / 86400000), hours: Math.floor((difference / 3600000) % 24), minutes: Math.floor((difference / 60000) % 60), seconds: Math.floor((difference / 1000) % 60) });
    };
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('main section:not(.hero)');
    sections.forEach((s) => s.setAttribute('data-reveal', ''));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Venture X 2026 home">
  <img
  src={ventureLogo}
  alt="BIT Mesra"
  className="brand-logo"
/>

  <span>
    <b>BIRLA INSTITUTE OF TECHNOLOGY MESRA</b>
    <small>Off Campus Noida · 2026</small>
  </span>
</a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
       <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
  <a href="#about" onClick={closeMenu}>About us</a>
  <a href="#challenge" onClick={closeMenu}>Challenge</a>
  <a href="#prizes" onClick={closeMenu}>Prizes</a>
  <a href="#timeline" onClick={closeMenu}>Timeline</a>
  <a href="#location" onClick={closeMenu}>Location</a>

 <a href="#sponsors" onClick={closeMenu}>Sponsors</a>

  <a href="#investor" onClick={closeMenu}>Investor</a>

  <a className="nav-cta" href={event.registrationUrl} onClick={closeMenu}>
    Register <MoveUpRight size={15} />
  </a>
</nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <div className="hero-copy reveal"><SectionLabel>National Level Sustainable Innovation and Startup Pitch Competition "VentureX 2026"</SectionLabel><h1>VENTURE<br /><em>X</em> <strong>2026</strong></h1><p className="hero-lede">Sustainability meets <span>tomorrow.</span></p><div className="hero-actions"><a className="button button-primary" href={event.registrationUrl}>Register now <MoveUpRight size={17} /></a><a className="button button-ghost" href="#about">Explore event <ArrowDownRight size={17} /></a></div><div className="hero-meta"><span><CalendarDays size={17} /> {event.shortDates}</span><span><Clock3 size={17} /> {event.time}</span></div></div>
          <div className="hero-art reveal delay-one" aria-hidden="true"><div className="art-ring ring-large" /><div className="art-ring ring-small" /><div className="lightbulb-art">
  <img
    src={ventureXLogo}
    alt="Venture X 2026"
    className="venture-x-hero-logo"
  />
</div><div className="chart-bars"><i /><i /><i /><i /><i /></div><Rocket className="rocket-art" size={46} strokeWidth={1.2} /><Globe2 className="globe-art" size={58} strokeWidth={1} /><div className="art-caption">CREATE<br /><b>YOUR</b><br />OPPORTUNITY</div></div>
          <div className="countdown-card"><div><span className="eyebrow">THE CLOCK IS RUNNING</span><b>Until the big idea day</b></div><div className="countdown"><strong>{String(timeLeft.days).padStart(3, '0')}<small>days</small></strong><i>:</i><strong>{String(timeLeft.hours).padStart(2, '0')}<small>hrs</small></strong><i>:</i><strong>{String(timeLeft.minutes).padStart(2, '0')}<small>min</small></strong><i>:</i><strong>{String(timeLeft.seconds).padStart(2, '0')}<small>sec</small></strong></div></div>
        </section>

       <section id="about" className="about section-pad section-light">

  <div className="section-intro">
    <SectionLabel>The opportunity</SectionLabel>

    <h2>
      A VENTURE X 2026 is<br />
      <span>just the beginning.</span>
    </h2>
  </div>


  <div className="about-copy">

    <p className="lead-copy">
      VentureX 2026 is a national-level sustainable innovation and
      startup pitch competition by the Entrepreneurship Club,
      BIT Mesra – Noida Campus.
    </p>

    <p>
      A platform for young innovators to pitch ideas, connect with
      industry experts, gain valuable feedback, and develop
      innovative solutions to real-world sustainability challenges.
    </p>

  </div>


  {/* ABOUT ORGANISATIONS */}

  <div className="about-info-grid">

    {/* BIT MESRA */}

    <article className="about-info-card">

      <div className="about-info-number">01</div>

      <span className="about-info-label">
        INSTITUTION
      </span>

      <h3>BIT Mesra</h3>

      <p>
        Learn about Birla Institute of Technology, its legacy,
        academic environment and role in innovation.
      </p>

      <button
        className="about-read-more"
        onClick={() => setActiveInfo('mesra')}
      >
        Read more
        <ArrowRight size={16} />
      </button>

    </article>


    {/* BIT NOIDA */}

    <article className="about-info-card">

      <div className="about-info-number">02</div>

      <span className="about-info-label">
        CAMPUS
      </span>

      <h3>BIT Noida</h3>

      <p>
        Discover BIT Mesra's Noida Campus and its academic,
        professional and innovation-focused environment.
      </p>

      <button
        className="about-read-more"
        onClick={() => setActiveInfo('noida')}
      >
        Read more
        <ArrowRight size={16} />
      </button>

    </article>


    {/* ENTREPRENEURSHIP CLUB */}

    <article className="about-info-card">

      <div className="about-info-number">03</div>

      <span className="about-info-label">
        STUDENT COMMUNITY
      </span>

      <h3>INSTITUTE INNOVATION CELL</h3>

      <p>
        The Institution's Innovation Council (IIC) at the BIT Noida Campus is established to build and strengthen a vibrant startup and innovation ecosystem for students and faculty.

      </p>

      <button
        className="about-read-more"
        onClick={() => setActiveInfo('club')}
      >
        Read more
        <ArrowRight size={16} />
      </button>

    </article>

  </div>


  {/* EXISTING STATS */}

  <div className="about-stats">

    <div>
      <b>01</b>
      <span>
        Big idea<br />
        to business
      </span>
    </div>

    <div>
      <b>03</b>
      <span>
        People<br />
        per team
      </span>
    </div>

    <div>
      <b>IN</b>
      <span>
        Across India<br />
        invited
      </span>
    </div>

  </div>


  {/* INFORMATION POPUP */}

  {activeInfo && (
    <div
      className="info-modal-backdrop"
      onClick={() => setActiveInfo(null)}
    >

      <div
        className="info-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="info-modal-close"
          onClick={() => setActiveInfo(null)}
          aria-label="Close"
        >
          <X size={22} />
        </button>


        {activeInfo === 'mesra' && (
          <>
            <span className="info-modal-label">
              INSTITUTION
            </span>

            <h3>BIT Mesra</h3>

            <div className="info-modal-content">
              <p>
                Birla Institute of Technology, Mesra (BIT Mesra), a Deemed to be University, is a premier technical and research institution in Ranchi, Jharkhand. Established in 1955 by B.M. Birla, it is renowned for excellence in engineering. technology, management, and applied sciences. The 780- acre campus offers state-of-the-art infrastructure and research rch facilities. BIT Mesra provides undergraduate, postgraduate, and doctoral programs in engineering, architecture, pharmacy, management, data science, and computer applications ications. Accredited by NBA and recognized by UGC, it fosters innovation, entrepreneurship, and industry collaboration. With a strong academic and research focus,

BIT Mesra continues to shape future leaders in technology and innovation.
              </p>

              
            </div>
          </>
        )}


        {activeInfo === 'noida' && (
          <>
            <span className="info-modal-label">
              CAMPUS
            </span>

            <h3>BIT Noida</h3>

            <div className="info-modal-content">
              <p>
               Birla Institute of Technology, Noida (BIT Noida), an off- campus centre of BIT Mesra, Ranchi, is a distinguished institution known for academic excellence and professional education in the National Capital Region. Established with the vision to extend BIT Mesra's legacy, BIT Noida offers high-quality undergraduate, postgraduate, and doctoral programs in computer a programs in computer applications, busines ess management, and related disciplines. The campus boasts modern infrastructure, industry-aligned curriculum, and experienced faculty committed to fostering innovation, critical thinking, and leadership. With strong industry linkages and a focus on research, entrepreneurship, and holistic development, BIT Noida stands as a hub for aspiring professionals to thrive in a competitive global environment.
              </p>
            </div>
          </>
        )}


        {activeInfo === 'club' && (
          <>
            <span className="info-modal-label">
              STUDENT COMMUNITY
            </span>

            <h3>INSTITUTE INNOVATION CELL</h3>

            <div className="info-modal-content">
              <p>
                The Institution's Innovation Council (IIC) at the BIT Noida Campus is established to build and strengthen a vibrant startup and innovation ecosystem for students and faculty.

It operates under the Ministry of Education's Innovation Cell (MIC) to foster a culture of innovation, entrepreneurship, and startup development among students and faculty. The council actively hosts hackathons, business plan competitions, and expert mentoring sessions to turn creative ideas into viable enterprises.
              </p>
            </div>
          </>
        )}

      </div>

    </div>
  )}

</section>


        {/* IMPORTANT DATES */}
<section className="important-dates section-pad">

  <div className="important-dates-heading">
    <SectionLabel>Mark your calendar</SectionLabel>

    <h2>
      Important
      <br />
      <span>dates.</span>
    </h2>

    <p>
      Keep track of the key deadlines for Venture X 2026.
      Plan your registration, submission and participation accordingly.
    </p>
  </div>


  <div className="important-dates-list">

    <div className="important-date-item">

      <div className="important-date-icon">
        <CalendarDays />
      </div>

      <div className="important-date-copy">
        <span>01 / REGISTRATION</span>
        <h3>Last Date of Registration</h3>
      </div>

      <div className="important-date-value">
        <strong>20</strong>

        <div>
          <b>October</b>
          <span>2026</span>
        </div>
      </div>

    </div>


    <div className="important-date-item">

      <div className="important-date-icon">
        <CalendarDays />
      </div>

      <div className="important-date-copy">
        <span>02 / SUBMISSION</span>
        <h3>Last Date for Submission of Ideas</h3>
      </div>

      <div className="important-date-value">
        <strong>25</strong>

        <div>
          <b>October</b>
          <span>2026</span>
        </div>
      </div>

    </div>


    <div className="important-date-item">

      <div className="important-date-icon">
        <CalendarDays />
      </div>

      <div className="important-date-copy">
        <span>03 / SELECTION</span>
        <h3>Notification of Acceptance</h3>
      </div>

      <div className="important-date-value">
        <strong>26</strong>

        <div>
          <b>October</b>
          <span>2026</span>
        </div>
      </div>

    </div>


    <div className="important-date-item event-date">

      <div className="important-date-icon">
        <CalendarDays />
      </div>

      <div className="important-date-copy">
        <span>04 / EVENT</span>
        <h3>Venture X 2026</h3>
      </div>

      <div className="important-date-value event-date-value">
        <strong>28—29</strong>

        <div>
          <b>October</b>
          <span>2026</span>
        </div>
      </div>

    </div>

  </div>

</section>


        {/* UNSTOP REGISTRATION BANNER */}
<section className="unstop-banner">
  <div className="unstop-banner-inner">

    <div className="unstop-logo-wrap">
      <img
        src={unstopLogo}
        alt="Unstop"
      />
    </div>

    <div className="unstop-content">
      <span className="unstop-label">
        WE'RE LIVE ON UNSTOP
      </span>

      <h3>
        Ready to pitch your sustainable venture?
      </h3>

      <p>
        Register directly through Unstop and compete for a
        prize pool of ₹63,000+.
      </p>

      <p className="unstop-subtext">
        <strong>Seamless Registration:</strong> Jump straight to our
        official Unstop listing to view the rulebook, timeline,
        and registration perks.
      </p>
    </div>

    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="unstop-button"
    >
      Register on Unstop
      <MoveUpRight size={16} />
    </a>

  </div>
</section>

{/* COMPETITION FLOW */}
<section id="flow" className="competition-flow section-pad">



        {/* COMPETITION FLOW */}
<section id="flow" className="competition-flow section-pad">
  <div className="flow-heading">
    <SectionLabel>Competition flow</SectionLabel>

    <h2>
      Your Venture X journey
    </h2>

    <p>
      Idea → Business Plan → Pitch → Impact. Here's how the five stages unfold.
    </p>
  </div>

  <div className="flow-timeline">

    <div className="flow-item">
      <div className="flow-number">01</div>
      <div className="flow-card">
        <h3>Idea Submission</h3>
        <p>
          Submit a 300–500 word summary of your business idea.
        </p>
      </div>
    </div>

    <div className="flow-item">
      <div className="flow-number">02</div>
      <div className="flow-card">
        <h3>Shortlisting</h3>
        <p>
          Promising ideas move on to the next stage.
        </p>
      </div>
    </div>

    <div className="flow-item">
      <div className="flow-number">03</div>
      <div className="flow-card">
        <h3>Business Plan Presentation</h3>
        <p>
          Present your detailed business plan before the judging panel.
        </p>
      </div>
    </div>

    <div className="flow-item">
      <div className="flow-number">04</div>
      <div className="flow-card">
        <h3>Final Pitch</h3>
        <p>
          Top teams take the stage and pitch their venture.
        </p>
      </div>
    </div>

    <div className="flow-item">
      <div className="flow-number">05</div>
      <div className="flow-card">
        <h3>Connect · Learn · Grow</h3>
        <p>
          Interact with entrepreneurs, investors and mentors, and explore opportunities.
        </p>
        <span className="flow-final">Final stage</span>
      </div>
    </div>

  </div>
</section>

        <section id="challenge" className="challenge section-pad"><div className="section-intro intro-row"><div><SectionLabel>The challenge</SectionLabel><h2>WHAT WILL YOU SOLVE.</h2></div><p>Three lanes. One opportunity to think bigger. Official challenge topics will be released to registered participants.</p></div><div className="topic-grid">{topics.map(({ number, icon: Icon, title, copy }) => <article className="topic-card" key={number}><span className="card-number">{number}</span><Icon size={29} strokeWidth={1.4} /><h3>{title}</h3><p>{copy}</p><span className="card-arrow"><MoveUpRight size={17} /></span></article>)}</div></section>

        <section className="participants section-pad section-dark"><div className="participant-visual"><div className="visual-grid" /><Users size={62} strokeWidth={1} /><div className="four-count">03</div><span>people in<br />each team</span></div><div className="participant-copy"><SectionLabel>Who should enter</SectionLabel><h2>Ideas are better<br /><span>when shared.</span></h2><p>We’re inviting teams from B-Schools, Engineering Colleges, Universities and Higher Education Institutions from across India.</p><div className="check-list"><span><Check size={16} /> Student-led teams</span><span><Check size={16} /> Four people per team</span><span><Check size={16} /> Institutions across India</span></div></div></section>

       <section id="prizes" className="prizes section-pad section-light">

  <div className="prize-heading">
    <SectionLabel>The reward</SectionLabel>

    <h2>
      Ideas worth<br />
      <span>investing in.</span>
    </h2>

    <p>
      Bring the plan. Earn the platform. Take your first step toward BIT-NISHAN.
    </p>

    <div className="total-prize-pool">
      <span>TOTAL PRIZE POOL</span>
      <strong>₹68,000+</strong>
    </div>
  </div>

  <div className="prize-list">

    <div className="prize-card special">
      <span className="prize-place">★ / SPECIAL PRIZE</span>
      <Trophy size={39} strokeWidth={1.2} />
      <b>₹31,000</b>
      <small>Grand Innovation Award</small>
      <small>On Judges Recommendation</small>
    </div>

    <div className="prize-card first">
      <span className="prize-place">01 / FIRST PRIZE</span>
      <Trophy size={39} strokeWidth={1.2} />
      <b>₹21,000</b>
      <small>For the boldest business plan</small>
    </div>

    <div className="prize-card second">
      <span className="prize-place">02 / SECOND PRIZE</span>
      <Award size={35} strokeWidth={1.2} />
      <b>₹11,000</b>
      <small>For a plan with momentum</small>
    </div>

    <div className="prize-card third">
      <span className="prize-place">03 / THIRD PRIZE</span>
      <Target size={32} strokeWidth={1.2} />
      <b>₹5,000</b>
      <small>For an idea with promise</small>
    </div>

  </div>

</section>

       <section className="people section-pad">
  <div className="section-intro intro-row">
    <div>
      <SectionLabel>The room</SectionLabel>
      <h2>
        Meet the minds<br />
        <span>behind .</span>
      </h2>
    </div>

    <p>
      <p>
  Meet the faculty and student leaders bringing Venture X 2026
  together at BIT Mesra – Noida Campus.
</p>
    </p>
  </div>

 <div className="committee-grid">

  {/* 01 — CHIEF PATRON */}
  <div className="committee-card">
    <div className="committee-number">01</div>

    <span className="committee-title">
      CHIEF PATRON
    </span>

    <h3>Prof. (Dr.) Indranil Manna</h3>

    <p>Vice Chancellor, BIT Mesra, Ranchi</p>
  </div>


  {/* 02 — PATRON */}
  <div className="committee-card">
    <div className="committee-number">02</div>

    <span className="committee-title">
      PATRON
    </span>

    <h3>Prof. (Dr.) Vikas Tripathi</h3>

    <p>Director, BIT Mesra, Noida Campus</p>
  </div>


  {/* 03 — FACULTY COORDINATOR */}
  <div className="committee-card">
    <div className="committee-number">03</div>

    <span className="committee-title">
      FACULTY COORDINATOR
    </span>

    <h3>DR. Umair Ujala</h3>

    <p>Faculty Coordinator, Entrepreneurship Club</p>
  </div>


  {/* 04 — STUDENT COORDINATORS */}
  <div className="committee-card">
    <div className="committee-number">04</div>

    <span className="committee-title">
      STUDENT COORDINATORS
    </span>

    <h3>
      Shristi Kashyap
      <br />
      Dhrubajyoti Paul
    </h3>

    <p>Venture X 2026</p>
  </div>


  {/* 05 — STUDENT ORGANIZING TEAM */}
  <div className="committee-card">
    <div className="committee-number">05</div>

    <span className="committee-title">
      STUDENT ORGANIZING TEAM
    </span>

    <h3 className="committee-team-names">
  RIDDHIMA KAUR • AMIR KHAN
  <br />
  PRATHAM JAIN • VIVEK KUMAR
  <br />
  ATHARVA SINHA • ANKUSH KUMAR
</h3>
    <p>Venture X 2026</p>
  </div>

</div>
</section>

       <section id="timeline" className="timeline section-pad section-dark">
  <div className="section-intro">
    <SectionLabel>Rules & guidelines</SectionLabel>
    <h2>
      Good to know<br />
      <span>before you register.</span>
    </h2>
  </div>

 <div className="timeline-list">
  {timeline.map(([number, title, answer], index) => {
    const isOpen = openFaq === index;

    return (
      <div
        className={`timeline-item ${isOpen ? 'is-open' : ''}`}
        key={number}
        onClick={() => setOpenFaq(isOpen ? null : index)}
      >
        <span>{number}</span>

        <div className="timeline-question">
          <h3>{title}</h3>

          {isOpen && (
            <p className="timeline-answer">
              {answer}
            </p>
          )}
        </div>

        <ArrowRight
          size={17}
          className={isOpen ? 'faq-arrow-open' : ''}
        />
      </div>
    );
  })}
</div>
</section>

        <section id="location" className="location section-pad section-light"><div className="location-map"><div className="map-lines" /><div className="map-pin"><MapPin size={28} fill="currentColor" /></div><span className="map-label">BIT MESRA - Noida Campus</span><div className="map-coord">23°24' N<br />85°26' E</div></div><div className="location-copy"><SectionLabel>Save the date</SectionLabel><h2>See you<br /><span>at BIT MESRA - NOIDA Campus.</span></h2><div className="date-block"><CalendarDays /><div><b>28th — 29th October 2026</b><span>10:00 AM — 6:00 PM</span></div></div><div className="date-block"><MapPin /><div><b>BIT Mesra - Noida Campus</b><span>A-7, Block A, Sector 1, Noida, Uttar Pradesh 201301</span></div></div><a className="text-link" href={event.mapUrl}>Open map <ExternalLink size={15} /></a></div></section>

        <section id="registration" className="register section-pad"><div className="register-stamp"><Rocket size={28} /><span>YOUR<br />MOMENT<br />IS NOW</span></div><div><SectionLabel>Take the first step</SectionLabel><h2>Don’t wait for<br /><span>opportunity.</span></h2><p>Opportunities don’t happen. You create them.</p></div><a className="button button-primary button-large" href={event.registrationUrl}>Register now <MoveUpRight size={18} /></a><p className="editable-note">Registration link will be updated here.</p></section>

        <section className="organizers section-pad">
  <div>
    <SectionLabel>In collaboration with</SectionLabel>
    <h2>
      Built by a community<br />
      that <span>believes.</span>
    </h2>
  </div>

  <div className="org-list">
    <div>
      <b>Institute Innovation Cell</b>
      <span>BIT Mesra - Noida Campus</span>
    </div>

    <div>
      <b>EDC</b>
      <span>Entrepreneurship Development Cell</span>
    </div>
  </div>
</section>
        <section id="contact" className="contact section-pad section-light"><div><SectionLabel>Stay connected</SectionLabel><h2>Let’s build<br /><span>what’s next.</span></h2></div><div className="contact-fields"><div><small>CONTACT PERSON</small><b>Shristi Kashyap</b>

<b>Dhrubajyoti Paul</b></div><div>
  <small>PHONE</small>

  <b style={{ display: 'block', marginTop: '8px' }}>
    +91 70018 50166
  </b>

  <b style={{ display: 'block', marginTop: '8px' }}>
    +91 9864270454
  </b>
</div><div>
  <small>EMAIL</small>

  <b style={{ display: 'block', marginTop: '8px' }}>
    shriiiistii@gmail.com
  </b>

  <b style={{ display: 'block', marginTop: '8px' }}>
    bcom45004.25@bitmesra.ac.in
  </b>
</div><div>
  <small>WEBSITE</small>
  <b>
    <a
      href="https://bitmesra.ac.in/Visit-Other-Department/10/301"
      target="_blank"
      rel="noopener noreferrer"
    >
      bitmesra.ac.in
    </a>
  </b>
</div></div></section>
      </main>



      <section id="investor" className="investor-section">
  <div className="investor-content">
    <span className="section-label">INVESTOR</span>

    <h2>
      INVESTMENT
      <br />
      <span>COMING SOON.</span>
    </h2>

    <p>
      Investment opportunities for Venture X 2026 will be announced soon.
      Stay tuned for more details.
    </p>

    <div className="investor-status">
      <span>01</span>
      <strong>DETAILS WILL BE ANNOUNCED SHORTLY</strong>
    </div>
  </div>
</section>

      <footer className="footer"><div className="footer-top"><a className="brand" href="#top"><span className="brand-mark"><Sparkles size={18} /></span><span><b>VENTURE X 2026</b><small>BIT MESRA - NOIDA Campus · 2026</small></span></a><p><br /><i></i></p><div className="socials"><a href="https://www.instagram.com/bitnoidacampus/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={18} /></a><a href="https://www.linkedin.com/company/bit-noida-campus/posts/?feedView=all" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a><a href="https://www.facebook.com/share/19EnUHWRmc/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Facebook size={18} /></a><a href="https://youtube.com/@bitmesranoidacampus?si=WRuPEwLyefx9cuVM" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
  <Youtube size={18} />
</a></div></div><div className="footer-bottom"><span>© 2026 Business Plan · BIT Mesra - NOIDA Campus</span><div><a href="#about">About</a><a href="#prizes">Prizes</a><a href="#registration">Register</a><a href="#contact">Contact</a></div><a href="#top">Back to top <ChevronDown size={15} className="rotate-180" /></a></div></footer>
    </div>
  );
}

export default App;
