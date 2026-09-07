import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  AtSign,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

const description =
  "Portfolio of Manthan Pruthy, an AI & Data Science student exploring technology, business, communication, and leadership.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manthan Pruthy — AI, Data & Leadership" },
      { name: "description", content: description },
      { property: "og:title", content: "Manthan Pruthy — AI, Data & Leadership" },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Manthan Pruthy",
          email: "mailto:pruthym@gmail.com",
          telephone: "+91 7676806233",
          address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
          alumniOf: { "@type": "CollegeOrUniversity", name: "REVA University" },
        }),
      },
    ],
  }),
  component: Portfolio,
});

const nav = [
  ["Home", "home"], ["About", "about"], ["Experience", "experience"],
  ["Leadership", "leadership"], ["Skills", "skills"], ["Learning", "learning"],
  ["Beyond", "beyond"], ["Contact", "contact"],
] as const;

const experience = [
  {
    company: "PAYTM", role: "PR Intern", time: "3 Months",
    copy: "Gained professional exposure to the public relations environment and developed an understanding of communication, coordination and working within a professional organisation.",
    skills: ["Communication", "Professional collaboration", "PR exposure", "Workplace adaptability"],
  },
  {
    company: "GIVA", role: "Finance Intern", time: "2 Months",
    copy: "Gained exposure to the finance function within a growing organisation and developed an understanding of how business operations connect with financial processes.",
    skills: ["Business exposure", "Financial understanding", "Attention to detail", "Professional work experience"],
  },
];

const leadership = [
  { year: "NOW", name: "Indian Data Club", role: "Managing Director · 2nd Year", copy: "Currently serving as Managing Director, contributing to the student community around data, technology and learning.", tags: "Leadership · Communication · Coordination · Teamwork" },
  { year: "2025–26", name: "OSCODE", role: "Event Management Team · 1st Year", copy: "Part of the event management team, gaining hands-on experience in organising and coordinating student activities and working collaboratively behind the scenes.", tags: "Organisation · Collaboration · Event management" },
];

const skillGroups = [
  { n: "01", title: "People & Leadership", skills: ["Communication", "Leadership", "Teamwork", "Event Management", "Collaboration"] },
  { n: "02", title: "Professional", skills: ["Project Management", "Time Management", "Adaptability", "Critical Thinking"] },
  { n: "03", title: "Interests", skills: ["Artificial Intelligence", "Data Science", "AI Tools", "Business", "Technology", "Learning New Domains"] },
];

function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>{children}</div>;
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <Reveal className="section-head"><p className="eyebrow"><span />{eyebrow}</p><h2>{title}</h2></Reveal>;
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
      let current = "home";
      for (const [, id] of nav) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= 180) current = id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const navigate = (id: string) => { setMenuOpen(false); goTo(id); };

  return (
    <div className="site-shell">
      <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} />
      <header className="site-nav">
        <a className="wordmark" href="#home" onClick={(e) => { e.preventDefault(); navigate("home"); }} aria-label="Manthan Pruthy, home">MP<span>.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([label, id]) => <a key={id} href={`#${id}`} className={active === id ? "active" : ""} onClick={(e) => { e.preventDefault(); navigate(id); }}>{label}</a>)}
        </nav>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        {nav.map(([label, id], i) => <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); navigate(id); }}><span>0{i + 1}</span>{label}</a>)}
      </div>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-grid" aria-hidden="true" />
          <div className="signal signal-a" aria-hidden="true" /><div className="signal signal-b" aria-hidden="true" />
          <div className="hero-content">
            <p className="availability"><span /> Bengaluru, India · REVA University</p>
            <h1>Building my path at the intersection of <em>technology, business</em> and people.</h1>
            <p className="hero-copy">I'm a second-year Artificial Intelligence & Data Science engineering student exploring technology, data, business and the human side of problem-solving.</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => goTo("experience")}>View My Journey <ArrowDown /></button>
              <button className="btn btn-secondary" onClick={() => goTo("contact")}>Let's Connect <ArrowUpRight /></button>
            </div>
          </div>
          <div className="hero-footer">
            <p>Curious. Versatile. Hands-on.<br />People-oriented. Technology-driven.</p>
            <div className="socials">
              <span className="icon-link disabled" title="LinkedIn link coming soon" aria-label="LinkedIn link coming soon"><Linkedin /></span>
              <span className="icon-link disabled" title="GitHub link coming soon" aria-label="GitHub link coming soon"><Github /></span>
              <a className="icon-link" href="mailto:pruthym@gmail.com" aria-label="Email Manthan"><Mail /></a>
            </div>
          </div>
        </section>

        <section id="about" className="section-pad about-section">
          <SectionHead eyebrow="About" title="A little about me." />
          <div className="about-layout">
            <Reveal className="about-copy">
              <p className="lead">I’m a second-year Artificial Intelligence & Data Science engineering student at REVA University, curious about how <strong>technology, data, business and people</strong> come together.</p>
              <div className="about-columns">
                <p>I enjoy exploring new areas, learning through hands-on experiences and taking on roles where I can communicate, organise, collaborate and solve problems.</p>
                <p>My experiences so far have taken me across PR, finance, event management, student leadership and AI-focused learning.</p>
                <p>I’m particularly interested in continuously expanding my skill set rather than limiting myself to one domain. I like learning about new tools, understanding how things work and turning ideas into meaningful experiences.</p>
              </div>
            </Reveal>
            <Reveal className="keyword-stack">
              {["AI", "DATA", "BUSINESS", "PEOPLE", "LEADERSHIP", "COMMUNICATION"].map((word, i) => <div key={word}><span>0{i + 1}</span>{word}<ArrowUpRight /></div>)}
            </Reveal>
          </div>
        </section>

        <section id="experience" className="section-pad experience-section">
          <SectionHead eyebrow="Experience" title="Where I've learned by doing." />
          <div className="timeline">
            {experience.map((item, i) => <Reveal className="timeline-row" key={item.company}>
              <div className="timeline-index">0{i + 1}<span /></div>
              <div className="company"><p>{item.company}</p><span>{item.time}</span></div>
              <div className="role-content"><h3>{item.role}</h3><p>{item.copy}</p><div className="tags">{item.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>
              <ArrowUpRight className="row-arrow" />
            </Reveal>)}
          </div>
        </section>

        <section id="leadership" className="section-pad leadership-section">
          <SectionHead eyebrow="Leadership & Campus" title="Beyond the classroom." />
          <div className="leadership-path">
            {leadership.map((item) => <Reveal className="leadership-item" key={item.name}>
              <div className="year">{item.year}</div><div className="path-dot" />
              <div><h3>{item.name}</h3><h4>{item.role}</h4><p>{item.copy}</p><small>{item.tags}</small></div>
            </Reveal>)}
            <Reveal className="earlier">
              <div className="year">EARLIER</div><div className="path-dot" />
              <div><h3>Earlier Leadership</h3><ul>
                <li>House Vice Captain <span>— Baldwin Boys’ High School</span></li>
                <li>Executive Member <span>— Science Forum, Christ Junior College</span></li>
                <li>Core Committee Member <span>— Eudaimonia annual school fest</span></li>
                <li>Involvement in Eudaimonia and Environment Day programmes</li>
                <li>Led and coordinated school and college-level events</li>
              </ul></div>
            </Reveal>
          </div>
        </section>

        <section id="skills" className="section-pad skills-section">
          <SectionHead eyebrow="Skills" title="How I think, work and grow." />
          <div className="skill-ecosystem">
            {skillGroups.map(group => <Reveal className="skill-group" key={group.title}>
              <div className="skill-title"><span>{group.n}</span><h3>{group.title}</h3></div>
              <div className="skill-cloud">{group.skills.map((skill, i) => <span key={skill} className={i === 0 ? "featured" : ""}>{skill}</span>)}</div>
            </Reveal>)}
          </div>
        </section>

        <section id="learning" className="section-pad learning-section">
          <SectionHead eyebrow="Learning & Development" title="Always learning." />
          <div className="learning-grid">
            <LearningCard icon={<Sparkles />} number="01" title="AI Tools Workshop">Participated in an AI Tools Workshop, expanding my understanding of how emerging AI tools can be used for learning, productivity and problem-solving.</LearningCard>
            <LearningCard icon={<GraduationCap />} number="02" title="CANsat Workshop">Attended a CANsat workshop as part of my earlier academic and co-curricular involvement.</LearningCard>
            <LearningCard icon={<Users />} number="03" title="Magnachrista" subtitle="Volunteer · 2023–25">Volunteered at events organised by Magnachrista, gaining additional experience in participation, coordination and community involvement.</LearningCard>
          </div>
        </section>

        <section id="beyond" className="beyond-section section-pad">
          <div className="motion-lines" aria-hidden="true"><i /><i /><i /></div>
          <SectionHead eyebrow="Beyond the classroom" title="Show up. Compete. Learn. Improve." />
          <div className="beyond-layout">
            <Reveal className="beyond-intro"><p>I believe that what you learn outside the classroom matters too.</p><p>Sports have been an important part of my journey, helping me develop discipline, consistency, competitiveness and teamwork.</p></Reveal>
            <div className="sport-list">
              {["Represented Baldwin Boys’ High School at the ICSE Swimming Meet — 2022–23", "Represented Christ Junior College at District Swimming Competitions", "Represented Christ Junior College at the District Football Tournament"].map((item, i) => <Reveal className="sport-row" key={item}><span>0{i + 1}</span><Trophy /><p>{item}</p></Reveal>)}
            </div>
          </div>
          <Reveal className="beyond-close">“Rather than defining my profile, these experiences represent another side of how I approach challenges: show up, compete, learn and keep improving.”</Reveal>
        </section>

        <section className="section-pad next-section">
          <SectionHead eyebrow="The next chapter" title="What's next?" />
          <Reveal><p className="next-lead">I’m currently interested in opportunities where I can learn, contribute and experiment across technology and business.</p></Reveal>
          <Reveal className="opportunity-cloud">{["AI & Data Science", "Technology", "Business", "Product", "Communications", "Analytics", "Student Leadership", "Internships"].map((item, i) => <span key={item} className={i === 0 || i === 7 ? "highlight" : ""}>{item}<ChevronRight /></span>)}</Reveal>
          <Reveal className="next-close"><p>I’m still early in my journey, and that’s exactly what excites me.</p><p>There’s a lot I want to learn — and I’m actively looking for opportunities that help me do it.</p></Reveal>
        </section>

        <section id="contact" className="contact-section section-pad">
          <Reveal>
            <p className="eyebrow"><span />Contact</p>
            <h2>Let's build something <em>interesting.</em></h2>
            <p className="contact-lead">Whether it's technology, business, data, an idea, or simply an interesting conversation — I'd love to connect.</p>
            <a className="email-display" href="mailto:pruthym@gmail.com">pruthym@gmail.com <ArrowUpRight /></a>
          </Reveal>
          <div className="contact-bottom">
            <div><strong>Manthan Pruthy</strong><p>AI & Data Science Engineering Student<br />REVA University · Bengaluru</p></div>
            <div className="contact-actions">
              <a className="btn btn-primary" href="mailto:pruthym@gmail.com"><Mail /> Email Me</a>
              <a className="btn btn-secondary" href="tel:+917676806233"><Phone /> Call</a>
              <span className="btn btn-disabled" title="Add LinkedIn URL later"><Linkedin /> LinkedIn</span>
              <span className="btn btn-disabled" title="Add GitHub URL later"><Github /> GitHub</span>
            </div>
          </div>
          <footer><span>© 2026 Manthan Pruthy</span><span>Built with curiosity in Bengaluru <MapPin /></span><button onClick={() => goTo("home")} aria-label="Back to top">Back to top <ArrowDown /></button></footer>
        </section>
      </main>
    </div>
  );
}

function LearningCard({ icon, number, title, subtitle, children }: { icon: ReactNode; number: string; title: string; subtitle?: string; children: ReactNode }) {
  return <Reveal className="learning-card"><div className="card-top"><span>{icon}</span><small>{number}</small></div><div><h3>{title}</h3>{subtitle && <h4>{subtitle}</h4>}<p>{children}</p></div><Check className="check" /></Reveal>;
}
