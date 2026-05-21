import { useState } from "react";
import vamanPhoto from "@/assets/vaman.jpg";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code2,
  Database,
  Wrench,
  Globe,
  Sparkles,
  GraduationCap,
  Award,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

const SKILLS = [
  {
    icon: Code2,
    title: "Programming Languages",
    items: ["C", "C++", "Python", "JavaScript"],
  },
  {
    icon: Globe,
    title: "Web Technologies",
    items: ["HTML", "CSS", "React", "Node.js"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["SQL", "MongoDB", "Oracle SQL"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["GitHub", "VS Code", "Eclipse", "Ubuntu"],
  },
];

const PROJECTS = [
  {
    title: "Personal Portfolio Website",
    desc: "Responsive personal portfolio website built with HTML and CSS, focused on clean typography and layout.",
    tags: ["HTML", "CSS", "Responsive"],
    gradient: "from-indigo-500 via-violet-500 to-fuchsia-500",
    emoji: "🪐",
  },
  {
    title: "Photographer Website",
    desc: "Modern responsive photographer website featuring a sidebar layout and grid-based gallery.",
    tags: ["HTML", "CSS", "UI"],
    gradient: "from-cyan-400 via-sky-500 to-indigo-500",
    emoji: "📷",
  },
  {
    title: "Spotify Clone",
    desc: "Spotify-inspired responsive music interface built with Flexbox, recreating core layout patterns.",
    tags: ["HTML", "CSS", "Flexbox"],
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    emoji: "🎵",
  },
  {
    title: "Campus Chronicle",
    desc: "Web-based system for managing college events digitally — schedules, announcements, and registrations.",
    tags: ["Web App", "Database"],
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    emoji: "🎓",
  },
  {
    title: "RescueAI",
    desc: "AI-powered disaster response system combining AI agents, data analytics, and quantum computing concepts.",
    tags: ["AI", "Analytics", "Quantum"],
    gradient: "from-rose-500 via-pink-500 to-violet-500",
    emoji: "🛟",
  },
  {
    title: "StackCipher — AI Career Guidance",
    desc: "Full-stack web app delivering personalized career guidance based on user interests and skills, with planned AI chatbot integration.",
    tags: ["Full Stack", "AI", "JavaScript"],
    gradient: "from-violet-500 via-indigo-500 to-cyan-400",
    emoji: "🧭",
  },
];

const CERTIFICATES = [
  "IBM Data Fundamentals",
  "Data Science with Python",
  "Artificial Intelligence Fundamentals",
  "Oracle Java Fundamentals",
  "Cisco Python Essentials",
  "Deloitte Data Analytics Virtual Simulation",
  "Growth School Generative AI Workshop",
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) return;
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:vamanjyoti07@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 ai-bg" />
      <div className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-40" />
      <div className="pointer-events-none fixed -top-40 -right-40 -z-10 h-[40rem] w-[40rem] rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-40 -left-40 -z-10 h-[40rem] w-[40rem] rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-background/50 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 text-sm font-bold text-background">
              VJ
            </span>
            <span>Vaman Jyoti</span>
          </a>
          <ul className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm text-muted-foreground transition hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:shadow-indigo-500/50 md:inline-flex"
          >
            Hire Me
          </a>
          <button
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-white/5 bg-background/95 md:hidden">
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section id="home" className="grid min-h-[88vh] grid-cols-1 items-center gap-12 py-20 md:grid-cols-[1.1fr_1fr]">
          <div className="order-2 text-center md:order-1 md:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Available for internships & collaborations
            </div>
            <h1 className="text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
              Hi, I'm <span className="glow-text">Vaman Jyoti</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
              BCA Student · Web Developer · AI Enthusiast
            </p>
            <p className="mt-6 max-w-2xl text-balance text-base text-muted-foreground/90 sm:text-lg">
              Passionate BCA student with skills in web development, database management, and
              Generative AI. I love building responsive websites and exploring future technology
              solutions.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:shadow-indigo-500/50"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition hover:bg-white/10"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            </div>
            <div className="mt-10 flex items-center justify-center gap-5 text-muted-foreground md:justify-start">
            <a href="https://github.com/vamanjyoti" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-foreground">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/vamanjyoti" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-foreground">
              <Linkedin />
            </a>
            <a href="mailto:vamanjyoti07@gmail.com" aria-label="Email" className="transition hover:text-foreground">
              <Mail />
            </a>
            </div>
          </div>

          {/* Photo with orbit + conic ring */}
          <div className="order-1 flex items-center justify-center md:order-2">
            <div className="relative h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] md:h-[420px] md:w-[420px]">
              {/* conic glow ring */}
              <div className="absolute inset-0 rounded-full conic-ring animate-spin-slow opacity-70 blur-[2px]" />
              <div className="absolute inset-[6px] rounded-full bg-background" />
              {/* photo */}
              <img
                src={vamanPhoto}
                alt="Vaman Jyoti"
                className="absolute inset-[12px] h-[calc(100%-24px)] w-[calc(100%-24px)] rounded-full object-cover object-[center_10%] shadow-2xl shadow-indigo-500/30"
              />
              {/* orbiting dots */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee] animate-orbit" style={{ ['--r' as any]: '160px' }} />
                <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400 shadow-[0_0_18px_#a78bfa] animate-orbit" style={{ ['--r' as any]: '190px', animationDuration: '18s', animationDirection: 'reverse' }} />
                <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-300 shadow-[0_0_16px_#818cf8] animate-orbit" style={{ ['--r' as any]: '210px', animationDuration: '22s' }} />
              </div>
              {/* floating chips */}
              <div className="glass absolute -left-2 top-10 hidden rounded-xl px-3 py-2 text-xs animate-float sm:block">
                <span className="text-indigo-300">{`</>`}</span> React · AI
              </div>
              <div className="glass absolute -right-2 bottom-12 hidden rounded-xl px-3 py-2 text-xs animate-float sm:block" style={{ animationDelay: '1.5s' }}>
                🚀 Building the future
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <Section id="about" eyebrow="About" title="A bit about me">
          <div className="glass rounded-2xl p-8 sm:p-10">
            <div className="mb-6 flex items-center gap-3 text-indigo-300">
              <GraduationCap className="h-5 w-5" />
              <span className="text-sm">Bachelor of Computer Applications (BCA)</span>
            </div>
            <p className="text-balance text-lg leading-relaxed text-muted-foreground">
              I am currently pursuing my Bachelor of Computer Applications and have hands-on
              experience in <span className="text-foreground">HTML, CSS, JavaScript, Python, SQL, and React</span>.
              I enjoy creating modern web applications and AI-based solutions that solve real
              problems — from event management systems to AI-powered career guidance tools.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { k: "6+", v: "Projects Built" },
                { k: "7+", v: "Certificates" },
                { k: "10+", v: "Technologies" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
                  <div className="text-3xl font-bold glow-text">{s.k}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" eyebrow="Skills" title="Tech stack I work with">
          <div className="grid gap-5 sm:grid-cols-2">
            {SKILLS.map((s) => (
              <div
                key={s.title}
                className="group glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-indigo-400/40"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/30 to-cyan-400/20 text-indigo-300">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-muted-foreground transition group-hover:text-foreground"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" eyebrow="Projects" title="Things I've built">
          <div className="grid gap-5 sm:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <article
                key={p.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] transition hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                {/* thumbnail */}
                <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center text-6xl drop-shadow-lg transition duration-500 group-hover:scale-110">
                    {p.emoji}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
                </div>
                <div className="relative p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-mono text-indigo-300">
                      0{i + 1}
                    </span>
                    <Sparkles className="h-4 w-4 text-indigo-300 opacity-60" />
                  </div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs text-indigo-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Certificates */}
        <Section id="certificates" eyebrow="Certificates" title="Continuous learning">
          <ul className="grid gap-3 sm:grid-cols-2">
            {CERTIFICATES.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-indigo-400/40 hover:bg-white/[0.08]"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-indigo-500/30 to-violet-500/20 text-indigo-300">
                  <Award className="h-4 w-4" />
                </span>
                <span className="text-sm">{c}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Contact */}
        <Section id="contact" eyebrow="Contact" title="Let's build something together">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold">Reach out</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Open to internships, freelance work, and collaboration on web & AI projects.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <a className="flex items-center gap-3 text-muted-foreground transition hover:text-foreground" href="mailto:vamanjyoti07@gmail.com">
                    <Mail className="h-4 w-4 text-indigo-300" /> vamanjyoti07@gmail.com
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-3 text-muted-foreground transition hover:text-foreground" href="https://www.linkedin.com/in/vamanjyoti" target="_blank" rel="noreferrer">
                    <Linkedin className="h-4 w-4 text-indigo-300" /> linkedin.com/in/vamanjyoti
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-3 text-muted-foreground transition hover:text-foreground" href="https://github.com/vamanjyoti" target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4 text-indigo-300" /> github.com/vamanjyoti
                  </a>
                </li>
              </ul>
            </div>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
              <div className="space-y-4">
                <Field label="Your name" name="name" required maxLength={100} />
                <Field label="Email" name="email" type="email" required maxLength={255} />
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={1000}
                    required
                    className="w-full rounded-lg border border-white/10 bg-background/40 px-3 py-2 text-sm outline-none transition placeholder:text-muted-foreground/50 focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-500/30"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:shadow-indigo-500/50"
                >
                  Send Message <ArrowRight className="h-4 w-4" />
                </button>
                {sent && (
                  <p className="text-xs text-emerald-300">Opening your email client…</p>
                )}
              </div>
            </form>
          </div>
        </Section>

        <footer className="border-t border-white/5 py-10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vaman Jyoti · Built with React & TanStack Start
        </footer>
      </main>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-20">
      <div className="mb-10">
        <div className="text-xs font-mono uppercase tracking-widest text-indigo-300">
          / {eyebrow}
        </div>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={maxLength}
        className="w-full rounded-lg border border-white/10 bg-background/40 px-3 py-2 text-sm outline-none transition placeholder:text-muted-foreground/50 focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-500/30"
      />
    </div>
  );
}