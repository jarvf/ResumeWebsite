import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, BarChart3, Cog, ArrowRight, Mail, Linkedin, X } from 'lucide-react';


const BusinessAnalystPortfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modal, setModal] = useState(null); 

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('reveal-in');
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Requirements Elicitation (interviews, workshops, RICE/MoSCoW)', level: 95 },
    { name: 'Process Mapping (AS‑IS / TO‑BE, swimlanes/BPMN‑lite)', level: 92 },
    { name: 'Backlog & User Stories (INVEST, acceptance criteria)', level: 90 },
    { name: 'UAT Planning & Test Cases', level: 88 },
    { name: 'Stakeholder Communication & Change Mgmt', level: 93 }
  ];

  const kpis = [
    { label: 'Ticket submission time', value: '↓ 35%' },
    { label: 'Manual rework', value: '↓ 42%' },
    { label: 'Duplicate submissions', value: '↓ 58%' },
    { label: 'Adoption (drivers)', value: '↑ 84%' }
  ];

  const webMetrics = [
    { label: 'Lead form completions', value: '↑ 24%' },
    { label: 'Bounce rate', value: '↓ 18%' },
    { label: 'Time to first contact', value: '↓ 30%' },
    { label: 'LCP (load speed)', value: '↓ 42%' }
  ];

const projects = [
  {
    title: 'Trucker Ticketing App — Payroll Ticket Workflow (BA & Dev)',
    description:
      'Mapped AS-IS → TO-BE for driver payroll ticketing. Authored functional & non-functional requirements for photo capture, validation, SLA queues, and audit logs. Wrote user stories and UAT scripts, then developed the workflow end-to-end (submission → approval → payroll export).',
    impact: 'Fewer errors & faster payroll',
    tech: 'AS-IS/TO-BE mapping, user stories, NFRs (audit, availability), UAT cases, build & release notes',
    story: 'As a driver, I can submit a payroll ticket with required fields and up to 5 photos so payroll has complete information for approval.',
    ac: [
      'Required fields: job#, date, hours, location; optional notes',
      'Photo uploads: up to 5 JPG/PNG, 10MB each; preview + remove',
      'Validation: client + server; inline errors with helpful hints',
      'SLA routing to approver queue within 5 minutes; 24h overdue badge',
      'Audit trail on create/update/delete with user + timestamp'
    ]
  },
  {
    title: 'Raine Energy — Website Revamp & BA-led Discovery',
    description:
      'Facilitated discovery with owners/field stakeholders to define scope, success criteria, and a prioritized backlog for a multi-page redesign. Produced problem statements, sitemap, and user stories; aligned business goals to measurable UX/SEO outcomes.',
    impact: 'Clear scope & faster delivery',
    tech: 'Stakeholder interviews, story mapping, PRD, backlog/roadmap',
    story: 'As a prospect, I can land on a service page tailored to my intent so I immediately see benefits, proof, FAQs, and a clear contact path.',
    ac: [
      'Hero with one-liner value prop + primary CTA',
      'Benefits tied to customer pains (3–5 bullets)',
      'Structured FAQs; cross-links to related services',
      'Sticky contact CTA on mobile',
      'Analytics events for CTA clicks & scroll depth'
    ]
  },
  {
    title: 'Dedicated SEO Subpages — High-Intent Traffic',
    description:
      'Defined requirements & success metrics for service pages (Hydrovac, Sanitation/Rolloffs, Trucking, Roustabouts, Environmental, Rental Fleet). Standardized a reusable page template tied to query intent and local markets.',
    impact: 'Higher qualified leads',
    tech: 'Content model, reusable template, GA4/GSC plan, on-page SEO requirements',
    story: 'As a search user with “hydrovac services near me” intent, I can land on a page matching my city with benefits, proof, and contact in one scroll.',
    ac: [
      'Template sections: hero/benefits/proof/FAQs/CTA',
      'Local variants with city inject + internal linking',
      'Schema.org FAQ + Organization (non-breaking)',
      'UTM taxonomy for campaign/source/region',
      'Page performance budget: LCP < 2.5s on 4G'
    ]
  },
  {
    title: 'Lead Flow & Contact Experience — “All Positions Application”',
    description:
      'Mapped AS-IS → TO-BE for contact & hiring flows. Added a global All Positions Application entry point; fixed validation & error states; documented routing/triage rules.',
    impact: 'Cleaner pipeline',
    tech: 'Flowcharts, form requirements, validation rules, UAT checklists',
    story: 'As a candidate, I can submit a general application without hunting for a specific role, so recruiting can triage quickly.',
    ac: [
      'Single entry “All Positions Application” in global nav',
      'Field-level validation + clear error messaging',
      'Auto-routing rules by location/role category',
      'Acknowledgement email + SLA for response',
      'GA4 events for form start/submit/error'
    ]
  },
  {
    title: 'Service Hierarchy Redesign — Hydrovac as Flagship',
    description:
      'Reorganized IA to surface Hydrovac Services as the flagship. Defined TO-BE navigation, cross-links, and CTA placement; documented edge cases for rollout.',
    impact: 'Improved discoverability',
    tech: 'IA redesign, wireframes, CTA strategy, acceptance criteria',
    story: 'As a user, I can reach Hydrovac from the homepage in one click and understand its value quickly.',
    ac: [
      'Primary nav highlights Hydrovac',
      'Breadcrumbs on service pages',
      'Related services block after content',
      'Consistent CTA placement above the fold'
    ]
  },
  {
    title: 'Gallery & Modal UX — Reusable Component System',
    description:
      'Specified a shared media modal with scroll lock, blur, transitions, and mobile behavior; documented a11y + fallback states; iterated via UAT.',
    impact: 'Better content showcase',
    tech: 'Component spec, a11y checklist (focus trap/esc/aria), mobile QA, change log',
    story: 'As a visitor, I can open and navigate gallery media without losing scroll position or context.',
    ac: [
      'Body scroll lock when modal is open',
      'Close on ESC and overlay click; focus trapped inside',
      'Keyboard nav for next/prev; swipe on mobile',
      'Lazy-loaded images with aspect-ratio placeholders'
    ]
  },
  {
    title: 'Technical SEO & Performance Hardening',
    description:
      'Implemented performance/SEO guardrails to stabilize Core Web Vitals and crawlability.',
    impact: 'Faster site, better crawl/UX',
    tech: 'LCP/CLS budgets, preconnect/preload, image optimization, meta/robots hygiene',
    story: 'As a site owner, I need pages to render meaningful content fast, so users don’t bounce and Google can crawl efficiently.',
    ac: [
      'Preconnect CDNs; preload hero image & primary font',
      'Compress/responsive images (webp/avif fallback jpg)',
      'CLS controls (fixed dimensions; font-display: swap)',
      'Meta/robots canonicalization; noindex on thin pages'
    ]
  }
];


  const toolkit = [
    'Jira', 'Confluence', 'GA4', 'GSC', 'Miro', 'Figma', 'HTML/CSS/JS', 'React', 'WordPress', 'Contentful'
  ];

  const openModal = (p) => setModal({ title: p.title, story: p.story, ac: p.ac });
  const closeModal = () => setModal(null);

  const scrollToId = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* nav */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button onClick={() => scrollToId('#hero')} className="text-left text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Jarvis F.
            </button>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToId('#about')} className="hover:text-blue-400 transition-colors">About</button>
              <button onClick={() => scrollToId('#experience')} className="hover:text-blue-400 transition-colors">Experience</button>
              <button onClick={() => scrollToId('#projects')} className="hover:text-blue-400 transition-colors">Projects</button>
              <button onClick={() => scrollToId('#contact')} className="hover:text-blue-400 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* titlehero */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-30" />
        <div className="text-center z-10 max-w-4xl mx-auto px-6 reveal">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Business Analyst
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Who Speaks Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            I turn goals into clear requirements and shipped results — ticketing apps and SEO‑optimized websites at Raine Energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToId('#projects')} className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">See Raine case work</button>
            
<a
  href="https://calendly.com/faliajarvis/30min"
  target="_blank"
  rel="noreferrer"
  className="px-8 py-4 border border-slate-600 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 transform hover:scale-105"
>
  Book a quick intro
</a>

            <a
              href="/Jarvis_Falia_Resume_BA_Pivot_Final.pdf"
              download
              className="px-8 py-4 border border-slate-600 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 transform hover:scale-105"
            >
              Download résumé
            </a>
          </div>
        </div>
        <button
          onClick={() => scrollToId('#about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll to about"
        >
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </button>
      </section>

      {/* skillpage */}
      <section id="about" className="py-20 px-6 reveal">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">BA strength with a dev fluency</h2>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                I don’t just gather requirements — I de‑risk delivery. Discovery → AS‑IS/TO‑BE → user stories with acceptance criteria → UAT and stable releases.
              </p>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                At Raine, I led BA + dev work on the driver payroll ticketing workflow and restructured the public site to align IA, templates, and lead flow.
              </p>
              <div className="flex flex-wrap gap-3">
                {toolkit.map((t) => (
                  <span key={t} className="text-sm border border-slate-600/70 rounded-full px-3 py-1 bg-slate-800/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* exp */}
      <section id="experience" className="py-20 px-6 bg-slate-800/50 reveal">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Other Experience</h2>
          <div className="space-y-6">
            <ExperienceCard
              title="Business Analyst & Lead Web Developer — Raine Energy Services"
              meta="Remote · Mar 2023 – Present"
              bullets={[
                'Gathered/documented requirements (stories, flows, acceptance criteria).',
                'Created roadmaps and release notes to align technical and business teams.',
                'SEO/performance audits that improved lead conversions.',
                'Supported Agile workflows (sprint planning, backlog, UAT).',
              ]}
            />
            <ExperienceCard
              title="Business Analyst & IT Intern — United Federation of Teachers"
              meta="New York, NY · Jun 2021 – Sep 2021"
              bullets={[
                'Requirements for CMS updates and process improvements.',
                'Validated data; troubleshooting scripts for reporting workflows.',
                'Coordinated between staff and dev; documented resolutions.',
              ]}
            />
            <ExperienceCard
              title="Administrative Support & Web Assistant — Hunter College"
              meta="New York, NY · 2021 – Mar 2023"
              bullets={[
                'Analyzed student‑facing portals; documented workflows and improvements.',
                'Automated document handling; improved accessibility compliance.',
              ]}
            />
            <ExperienceCard
              title="Front‑End Intern — Google Mentorship Program"
              meta="Remote · 2020 – 2021"
              bullets={[
                'Built responsive front‑ends with guidance from Google engineers.',
                'Practiced accessibility‑first, component‑based development.',
              ]}
            />
          </div>
        </div>
      </section>

      {/* ticketing */}
      <section id="stats" className="py-12 px-6 bg-slate-800/40 reveal">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Trucker Ticketing App — Key KPIs</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {kpis.map((k) => (
              <div key={k.label} className="bg-slate-800/70 p-6 rounded-xl border border-slate-700/60 text-center">
                <div className="text-3xl font-bold text-white mb-1">{k.value}</div>
                <div className="text-slate-400 text-sm">{k.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* metrics */}
      <section id="website-metrics" className="py-12 px-6 reveal">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Raine Website Revamp — Outcome Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {webMetrics.map((m) => (
              <div key={m.label} className="bg-slate-800/70 p-6 rounded-xl border border-slate-700/60 text-center">
                <div className="text-3xl font-bold text-white mb-1">{m.value}</div>
                <div className="text-slate-400 text-sm">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* testimonial */}
      <section id="testimonials" className="py-20 px-6 bg-slate-800/30 reveal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What partners say</h2>
          <div className="bg-slate-800/80 p-8 rounded-xl border border-slate-700/50 relative">
            <div className="absolute top-4 left-8 text-6xl text-blue-400/20 font-serif">"</div>
            <div className="pt-8">
              <p className="text-slate-300 text-lg leading-relaxed mb-6 italic">
                "Jarvis led our website revamp and built a new driver payroll ticketing workflow as both the BA and the developer. He translated business needs into clear stories and acceptance criteria (photo uploads, validations, SLAs, audit logs) and delivered stable releases that met stakeholder goals."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  JP
                </div>
                <div>
                  <div className="font-semibold text-white">Jeffrey Pacifico</div>
                  <div className="text-slate-400">Raine Energy Services</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* projectsec */}
      <section id="projects" className="py-20 px-6 reveal">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Raine Energy case work</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 p-8 rounded-xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                    <div className="text-sm text-slate-400">
                      <span className="font-semibold">Artifacts & Methods:</span> {project.tech}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">{project.impact}</div>
                    <div className="text-slate-400">Impact achieved</div>
                    <button onClick={() => openModal(project)} className="mt-4 inline-flex items-center gap-2 px-4 py-2 border border-slate-600 rounded-lg hover:bg-slate-800 transition-colors">
                      View sample story
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Qwins */}
      <section id="quick-wins" className="py-20 px-6 bg-slate-800/30 reveal">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Quick wins I deliver</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Week 1: Stakeholder alignment</h3>
                  <p className="text-slate-300">I map current state, identify pain points, and get everyone on the same page about success criteria.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Week 2-3: Clear roadmap</h3>
                  <p className="text-slate-300">Prioritized backlog with user stories, acceptance criteria, and realistic timelines.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Month 1+: Measurable results</h3>
                  <p className="text-slate-300">Working features with KPI tracking so you can prove ROI to leadership.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/70 p-8 rounded-xl border border-slate-700/60">
              <h3 className="text-xl font-bold mb-4">Perfect for teams who need:</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-4 h-4 text-green-400 flex-shrink-0" />
                  Bridge between business and engineering
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-4 h-4 text-green-400 flex-shrink-0" />
                  Requirements that don't change mid-sprint
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-4 h-4 text-green-400 flex-shrink-0" />
                  UAT that actually catches issues
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="w-4 h-4 text-green-400 flex-shrink-0" />
                  Someone who can prototype and validate ideas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* contact */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50 reveal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let’s connect</h2>
          <p className="text-xl text-slate-300 mb-12">
            Want a BA who can talk requirements with stakeholders and speak code with devs? I’m your bridge.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a href="mailto:faliajarvis@gmail.com" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/jarvis-falia-a6bb19364/" target="_blank" rel="noreferrer" className="px-8 py-4 border border-slate-600 rounded-lg font-semibold hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Jarvis Falia
              </h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Business Analyst who bridges the gap between stakeholder vision and technical delivery. 
                Turning requirements into results at Raine Energy.
              </p>
              <div className="flex gap-4">
                <a href="mailto:faliajarvis@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/jarvis-falia-a6bb19364/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToId('#about')} className="block text-slate-400 hover:text-white transition-colors">About</button>
                <button onClick={() => scrollToId('#experience')} className="block text-slate-400 hover:text-white transition-colors">Experience</button>
                <button onClick={() => scrollToId('#projects')} className="block text-slate-400 hover:text-white transition-colors">Projects</button>
                <button onClick={() => scrollToId('#contact')} className="block text-slate-400 hover:text-white transition-colors">Contact</button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2">
                <a 
                  href="/Jarvis_Falia_Resume_BA_Pivot_Final.pdf" 
                  download 
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  Download Resume
                </a>
                <a 
                  href="https://calendly.com/faliajarvis/30min" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  Schedule Call
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2025 Jarvis Falia. Built with React & Tailwind.
            </p>
            <p className="text-slate-500 text-sm">
              Available for contract & full-time opportunities
            </p>
          </div>
        </div>
      </footer>
      {/* modalbts */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <h3 className="text-xl font-bold">{modal.title}</h3>
              <button onClick={closeModal} className="p-2 rounded hover:bg-slate-800" aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              {modal.story && (
                <div>
                  <div className="text-sm uppercase tracking-wide text-slate-400 mb-1">Sample User Story</div>
                  <p className="text-slate-200">{modal.story}</p>
                </div>
              )}
              {modal.ac && (
                <div>
                  <div className="text-sm uppercase tracking-wide text-slate-400 mb-1">Acceptance Criteria</div>
                  <ul className="list-disc list-inside text-slate-300 space-y-1">
                    {modal.ac.map((i, idx) => (<li key={idx}>{i}</li>))}
                  </ul>
                </div>
              )}
            </div>
            <div className="p-4 border-t border-slate-800 text-right">
              <button onClick={closeModal} className="px-4 py-2 border border-slate-600 rounded-lg hover:bg-slate-800">Close</button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        html { scroll-behavior: smooth; }
        .reveal { opacity: 0; transform: translateY(16px); transition: opacity .7s ease, transform .7s ease; }
        .reveal-in { opacity: 1; transform: translateY(0); }
      `}</style>
    </div>
  );
};

function ExperienceCard({ title, meta, bullets }) {
  return (
    <div className="bg-slate-800/70 p-6 rounded-xl border border-slate-700/60">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-slate-400 text-sm mb-2">{meta}</p>
      <ul className="list-disc list-inside text-slate-300 space-y-1">
        {bullets.map((b, i) => (<li key={i}>{b}</li>))}
      </ul>
    </div>
  );
}

export default BusinessAnalystPortfolio;
