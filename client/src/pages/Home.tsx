import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Target, Users, BookOpen, Award, Building2, Timer, ChevronRight, Info, Presentation } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  const learningThemes = [
    {
      id: "week-1",
      title: "Week 1: Global Supply Chain Foundations & Systems Thinking",
      focus: "Understand how end-to-end supply chain decisions shape organisational performance.",
      topics: [
        "Supply chain flows and system boundaries",
        "Strategic fit and performance objectives",
        "Disruption, resilience and trade-offs"
      ],
      capstone: "Define one organisation or simulated case, its focal system and one bounded supply chain or operations challenge."
    },
    {
      id: "week-2",
      title: "Week 2: Inventory, Warehousing & Procurement Essentials",
      focus: "Diagnose how core supply chain functions support service, flow and operational control.",
      topics: [
        "Inventory and stock-control fundamentals",
        "Warehouse flow, accuracy and productivity",
        "Supplier evaluation, sourcing and risk"
      ],
      capstone: "Analyse the inventory, warehousing or sourcing issue most relevant to the chosen challenge."
    },
    {
      id: "week-3",
      title: "Week 3: Operations Management, Process Excellence & Lean Fundamentals",
      focus: "Improve operational performance through practical process analysis and Lean thinking.",
      topics: [
        "Operations strategy and performance",
        "Capacity, quality and process flow",
        "Lean and root-cause improvement"
      ],
      capstone: "Map a focal process, diagnose its main constraint or quality issue and propose realistic improvements."
    },
    {
      id: "week-4",
      title: "Week 4: Data Analytics for Operations & Supply Chain Performance",
      focus: "Use accessible analytics and KPIs to support better operational decisions.",
      topics: [
        "Excel analysis and introductory forecasting",
        "Operational and supply chain KPIs",
        "Charts and dashboards; optional Power BI"
      ],
      capstone: "Develop 3–5 relevant KPIs and create at least one appropriate Excel-based analytical output."
    },
    {
      id: "week-5",
      title: "Week 5: Sustainable & Green Supply Chains",
      focus: "Embed sustainability into practical supply chain and operational decisions.",
      topics: [
        "ESG, circularity and resource efficiency",
        "Green logistics and responsible sourcing",
        "Sustainability hotspots and trade-offs"
      ],
      capstone: "Identify material sustainability risks or opportunities and propose feasible interventions."
    },
    {
      id: "week-6",
      title: "Week 6: Professional Practice & Global Supply Chain Careers",
      focus: "Turn analysis into implementable recommendations and credible professional evidence.",
      topics: [
        "Implementation and benefits realisation",
        "Executive and stakeholder communication",
        "Supply chain, operations and sustainability careers"
      ],
      capstone: "Finalise the recommendations, implementation plan, executive summary and professional reflection."
    }
  ];

  return (
    <div className="max-w-[1160px] mx-auto px-5 md:px-6 pt-0 pb-8 space-y-10">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <a className="flex items-center gap-4 no-underline group" href="/" data-testid="link-home" aria-label="GICS home">
          <img
            src="/gics-crest.png"
            alt="GICS institutional crest"
            className="h-24 w-24 md:h-28 md:w-28 object-contain shrink-0"
          />
          <div>
            <strong className="block text-3xl md:text-4xl tracking-tight font-black text-foreground leading-none">GICS</strong>
            <span className="block mt-1 text-sm md:text-base tracking-tight font-bold text-foreground">
              Global Institute for Supply Chain & Sustainability
            </span>
            <p className="mt-2 text-sm text-muted-foreground italic">Advancing Professional Capability and Industry Outcomes Through Education.</p>
            <span className="block text-xs text-muted-foreground font-medium uppercase tracking-wider">Supply Chain • Operations • Sustainability</span>
          </div>
        </a>
        <nav className="flex gap-6 flex-wrap">
          {["Programmes", "Fees", "Corporate", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              data-testid={`nav-${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <div className="hero-grid">
        <div className="glass-panel space-y-6 flex flex-col self-start">
          <div className="space-y-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[hsl(var(--accent))]">
              Flagship programme: Global Certificate in Practical Supply Chain & Sustainable Operations (GC-PSSO)
            </p>
            <h1 className="text-4xl md:text-5xl font-black leading-tight text-foreground tracking-tight">
              UK-quality, practical training delivered globally.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              GICS builds practical workplace capability through applied simulations, industry-aligned tools and an integrated capstone—delivered by a UK-registered education and training company and led by Dr Frank Donkor, an experienced UK higher-education Programme Director and University of Exeter MBA Module Convenor.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-[hsl(var(--accent))] text-[hsl(var(--primary-foreground))] font-black border-none h-12 px-8 rounded-xl shadow-lg hover:brightness-110 hover:translate-y-[-2px] transition-all" data-testid="button-register">
              <a href="/register">Register for Sept 2026</a>
            </Button>
            <Button asChild variant="outline" className="h-12 px-8 rounded-xl bg-white/5 border-white/20 text-foreground font-bold hover:bg-white/10 hover:translate-y-[-2px] transition-all" data-testid="button-view-programmes">
              <a href="#programmes">View programmes</a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Asynchronous-first learning",
              "Optional Saturday practice labs",
              "Applied capstone projects",
              "Corporate training"
            ].map((text) => (
              <Badge key={text} variant="outline" className="px-4 py-1.5 bg-white/5 border-white/20 rounded-full font-bold text-xs uppercase tracking-wide text-foreground">
                {text}
              </Badge>
            ))}
          </div>

          <p className="text-xs text-muted-foreground/80 italic font-medium pt-4 border-t border-white/5">
            *Professional training and career readiness support. We do not offer job placement or visa sponsorship.
          </p>
        </div>

        {/* Hero Sidebar */}
        <div className="glass-panel h-full bg-[hsla(222,47%,16%,0.9)]">
          <section className="h-full flex flex-col">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-4">First cohort</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Start", value: "September 2026" },
                { label: "Duration", value: "6–8 weeks" },
                { label: "Asynchronous core", value: "Six sequential weekly learning themes" },
                { label: "Assessment", value: "Integrated capstone project" },
                { label: "Practice labs", value: "Optional Saturdays • schedule confirmed before payment" }
              ].map((item) => (
                <div key={item.label} className="p-2.5 bg-white/5 border border-white/10 rounded-xl">
                  <span className="block text-[10px] font-black uppercase text-muted-foreground mb-1">{item.label}</span>
                  <span className="text-xs font-bold leading-snug text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-4">
              <div className="p-3 bg-[hsl(var(--accent))]/5 border border-[hsl(var(--accent))]/20 rounded-xl">
                <span className="block text-[10px] font-black uppercase tracking-widest text-[hsl(var(--accent))] mb-1">Programme leadership</span>
                <p className="text-xs font-bold leading-relaxed text-foreground">Dr Frank Donkor • UK higher-education Programme Director • University of Exeter MBA Module Convenor • Fellow of the Higher Education Academy (UK)</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Programme Lead */}
      <section className="glass-panel">
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
          <div className="space-y-3">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">Programme Lead Profile</p>
            <div>
              <h2 className="text-2xl font-black text-foreground">Dr Frank Donkor</h2>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium mt-2">
                Lecturer in Operations and Supply Chain Management and a Programme Director at the University of Exeter Business School. Module Convenor on the University of Exeter MBA programme, Fellow of The Higher Education Academy (UK), and an EduExe Fellow.
              </p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed italic">
              UK executive-education foundations with direct relevance to emerging-market supply chains. GICS is an independent training provider. GC-PSSO is a GICS professional-development programme and is not a University of Exeter programme or award.
            </p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-3">Specialisms</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Supply chain sustainability & ESG",
                "Operations management & performance",
                "Leadership in global supply chains",
                "Pharmaceutical industry collaboration",
                "Professional skills development"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-muted-foreground font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Content & Structure */}
      <section id="programmes" className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-foreground uppercase tracking-tight">Flagship Programme Content & Structure</h2>
            <p className="text-muted-foreground font-medium mt-2">GC-PSSO 6-Week Detailed Curriculum</p>
          </div>
        </div>

        <Card className="bg-white/5 border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <CardHeader className="p-8 bg-white/5 border-b border-white/10">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="space-y-4 flex-1">
                <CardTitle className="text-2xl font-bold text-foreground leading-tight">
                  Global Certificate in Practical Supply Chain & Sustainable Operations (GC-PSSO)
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed max-w-3xl">
                  An asynchronous-first professional-development programme designed to build practical, workplace-ready capability through six sequential weekly learning themes, applied activities and an integrated capstone project.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <Badge className="bg-[hsl(var(--accent))] text-[hsl(var(--primary-foreground))] font-black px-4 py-2 text-sm justify-center">6–8 WEEKS</Badge>
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase text-muted-foreground">Capstone Output</p>
                  <p className="text-sm font-bold text-foreground">2,500–3,000 Word Report</p>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 space-y-8">
                <div className="space-y-4">
                  <h4 className="text-sm font-black uppercase tracking-widest text-foreground flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[hsl(var(--accent))]" /> Six Weekly Learning Themes
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Build practical capability across supply chain, operations, analytics and sustainability—then apply your learning to one integrated workplace project.
                  </p>
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {learningThemes.map((theme) => (
                      <AccordionItem key={theme.id} value={theme.id} className="border border-white/10 rounded-2xl bg-white/5 px-6 overflow-hidden">
                        <AccordionTrigger className="hover:no-underline py-5 group">
                          <span className="text-left font-bold text-foreground group-hover:text-[hsl(var(--accent))] transition-colors">
                            {theme.title}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-6 space-y-6">
                          <div className="space-y-2">
                            <p className="text-xs font-black uppercase text-muted-foreground tracking-widest">Focus</p>
                            <p className="text-sm text-foreground leading-relaxed">{theme.focus}</p>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <p className="text-xs font-black uppercase text-muted-foreground tracking-widest">Key Topics</p>
                              <ul className="space-y-2">
                                {theme.topics.map((topic, i) => (
                                  <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                    <div className="w-1 h-1 rounded-full bg-[hsl(var(--accent))] mt-1.5 shrink-0" />
                                    {topic}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="space-y-4">
                              <div className="p-4 bg-[hsl(var(--accent))]/5 border border-[hsl(var(--accent))]/20 rounded-xl space-y-2">
                                <p className="text-[10px] font-black uppercase text-[hsl(var(--accent))] tracking-widest">Applied Project Activity</p>
                                <p className="text-xs text-foreground font-medium leading-relaxed">{theme.capstone}</p>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  <p className="text-xs text-muted-foreground leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
                    Each week includes original GICS learning notes, practical templates, applied exercises and optional guided reading. No textbook purchase is required.
                  </p>
                </div>

                {/* Weeks 7-8 Extension */}
                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-4">
                  <div className="flex items-center gap-3">
                    <Presentation className="w-5 h-5 text-[hsl(var(--accent))]" />
                    <h4 className="text-lg font-bold text-foreground">Optional Weeks 7–8: Capstone Extension</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Participants may join an extended enrichment period to present and refine their projects, including peer learning, improvement coaching, and final CPD reflection.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-10">
                <div className="space-y-4">
                  <h4 className="text-sm font-black uppercase tracking-widest text-foreground flex items-center gap-2">
                    <Target className="w-4 h-4 text-[hsl(var(--accent))]" /> Design Philosophy
                  </h4>
                  <div className="space-y-4">
                    <p className="text-xs text-muted-foreground leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
                      The programme is structured around six sequential weekly learning themes delivered over 6–8 weeks. Each theme contains recorded teaching, original GICS learning notes, optional guided reading, an applied simulation activity and a focused capstone-building task. The themes introduce selected practical capabilities; they are not intended to be comprehensive academic modules.
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed italic bg-[hsl(var(--accent))]/5 p-4 rounded-xl border border-[hsl(var(--accent))]/20">
                      Weekly activities progressively build one coherent capstone project based on a single organisation and a single operational or supply chain challenge.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-black uppercase tracking-widest text-foreground flex items-center gap-2">
                    <Users className="w-4 h-4 text-[hsl(var(--accent))]" /> Who It's For
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Supply Chain, Logistics & Operations Professionals",
                      "Sustainability, ESG & Responsible Sourcing Professionals",
                      "NGO & Public-Sector Delivery Professionals",
                      "Early-Career Professionals & Graduates",
                      "Corporate Managers & Cross-Functional Teams"
                    ].map(item => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Delivery Options & Fees Section */}
      <section id="fees" className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-3xl font-black text-foreground uppercase tracking-tight">Indicative Launch Fees</h2>
            <p className="text-muted-foreground font-medium mt-2">The same asynchronous core, with a choice of independent or guided support.</p>
          </div>
          <Card className="flex-1 max-w-md p-5 bg-white/5 border border-white/10 rounded-2xl">
            <h4 className="text-xs font-black uppercase tracking-widest text-foreground mb-3 flex items-center gap-2">
              <Info className="w-4 h-4 text-[hsl(var(--accent))]" /> Selection Note
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed font-medium">
              Both pathways use the same asynchronous core and assessment standard. Choose Guided Cohort for optional Saturday practice labs, peer learning and live feedback, or Self-Paced for maximum flexibility.
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Option 1: Guided Cohort */}
          <Card className="bg-white/5 border-white/10 rounded-3xl overflow-hidden border-t-4 border-t-[hsl(var(--accent))] flex flex-col">
            <CardHeader className="p-8 pb-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <Badge className="bg-[hsl(var(--accent))] text-[hsl(var(--primary-foreground))] font-black px-3 py-1 mb-2">RECOMMENDED</Badge>
                  <CardTitle className="text-2xl font-bold">Option 1: Guided Cohort</CardTitle>
                </div>
              </div>
              <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-[10px] font-black uppercase text-muted-foreground mb-1 tracking-widest">Who it's for</p>
                <p className="text-sm text-foreground font-medium">Professionals wanting structured pacing, optional live practice and peer learning.</p>
              </div>
            </CardHeader>

            <CardContent className="p-8 pt-4 space-y-8 flex-1">
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-[hsl(var(--accent))] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> What's Included
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    "Complete asynchronous core",
                    "Optional Saturday Applied Practice Labs",
                    "Guided weekly reading",
                    "Applied weekly simulations",
                    "Facilitated peer discussion",
                    "Structured assignment feedback",
                    "CPD learning log guidance",
                    "GICS Certificate of Completion"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-[hsl(var(--accent))] mt-1.5 shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-6 p-5 bg-white/5 border border-white/10 rounded-2xl">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Time Commitment</p>
                  <p className="text-sm font-bold text-foreground">6–8 hours / week</p>
                  <p className="text-[10px] text-muted-foreground">Total: ~45–55 hours</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Fees (GBP)</p>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-foreground">Early Bird: £180</p>
                    <p className="text-sm font-bold text-foreground">Standard: £250</p>
                  </div>
                  <p className="text-[9px] text-muted-foreground mt-2 italic">Fees set by registration window.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Option 2: Self-Paced */}
          <Card className="bg-white/5 border-white/10 rounded-3xl overflow-hidden flex flex-col">
            <CardHeader className="p-8 pb-4">
              <div className="space-y-1">
                <Badge className="bg-white/10 text-foreground font-black px-3 py-1 mb-2">MAX FLEXIBILITY</Badge>
                <CardTitle className="text-2xl font-bold">Option 2: Self-Paced</CardTitle>
              </div>
              <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-[10px] font-black uppercase text-muted-foreground mb-1 tracking-widest">Who it's for</p>
                <p className="text-sm text-foreground font-medium">Participants needing maximum flexibility and independent study.</p>
              </div>
            </CardHeader>

            <CardContent className="p-8 pt-4 space-y-8 flex-1">
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-foreground flex items-center gap-2 opacity-60">
                  <CheckCircle2 className="w-4 h-4" /> What's Included
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    "Complete asynchronous core",
                    "Recorded lessons and learning notes",
                    "Independent simulation activities",
                    "Model case debriefs",
                    "Capstone report guidance",
                    "Certificate of Completion"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-white/30 mt-1.5 shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[10px] text-muted-foreground leading-relaxed italic border-l-2 border-white/10 pl-3 mt-4">
                  Emphasises flexibility. Saturday Applied Practice Labs are not included; equivalent independent activities and model debriefs are provided. Optional coaching is available separately.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 p-5 bg-white/5 border border-white/10 rounded-2xl">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Time Commitment</p>
                  <p className="text-sm font-bold text-foreground">4–6 hours / week</p>
                  <p className="text-[10px] text-muted-foreground">Total: ~30–40 hours</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Fees (GBP)</p>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-foreground">Standard: £150</p>
                    <p className="text-xs text-muted-foreground">Coaching Add-On (Optional): +£75</p>
                  </div>
                  <p className="text-[9px] text-muted-foreground mt-2 italic">Fees set by registration window.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Corporate Section */}
      <section aria-labelledby="registration-steps-title" className="glass-panel space-y-6">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">Simple, transparent admissions</p>
          <h2 id="registration-steps-title" className="text-2xl font-black text-foreground mt-2">What happens after registration?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            ["1", "Register free", "Tell us about your experience, goals and preferred learning option. There is no payment commitment."],
            ["2", "Receive a decision", "GICS reviews programme suitability and sends an offer or preparation guidance."],
            ["3", "Choose whether to enrol", "Review the confirmed fee, schedule, terms and cancellation rights before making any payment."]
          ].map(([number, title, description]) => (
            <div key={number} className="p-5 bg-white/5 border border-white/10 rounded-2xl">
              <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--primary-foreground))] text-sm font-black">{number}</span>
              <h3 className="font-bold text-foreground mt-4">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mt-2">{description}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">Successful participants receive a GICS Certificate of Completion. GC-PSSO is a non-credit professional-development programme delivered by Global Supply Chain & Sustainability Academy Ltd, a UK-registered education and training company. It is not a university award.</p>
      </section>

      <section id="corporate" className="space-y-6">
        <Card className="bg-white/5 border-white/10 rounded-3xl overflow-hidden p-10 border-dashed flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center md:text-left max-w-xl">
            <h3 className="text-sm font-black uppercase tracking-widest text-[hsl(var(--accent))]">Corporate & Team Training</h3>
            <p className="text-2xl font-bold text-foreground leading-tight">Customised delivery for organisations seeking structured team development.</p>
            <p className="text-sm text-muted-foreground">Bespoke pricing based on cohort size and requirements (typically £900 – £2,500).</p>
          </div>
          <Button asChild className="bg-foreground text-background font-black uppercase text-xs px-10 py-6 hover:brightness-110 shrink-0">
            <a href="/corporate-enquiry">Request Proposal</a>
          </Button>
        </Card>
      </section>

      {/* Why Choose GICS? */}
      <section id="about" className="space-y-6">
        <div>
          <h2 className="text-3xl font-black text-foreground uppercase tracking-tight">Why Choose GICS?</h2>
          <p className="text-muted-foreground font-medium mt-2">UK-quality design with a focus on real-world impact.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "UK-Quality Leadership",
              desc: "Programme design led by an experienced UK academic with extensive industry collaboration.",
              icon: <Award className="w-5 h-5" />
            },
            {
              title: "Practical Over Theory",
              desc: "Focus on workplace readiness, moving beyond traditional theory alone.",
              icon: <Target className="w-5 h-5" />
            },
            {
              title: "Integrated Capstone",
              desc: "Assessments based on professional standards to ensure real workplace competency.",
              icon: <CheckCircle2 className="w-5 h-5" />
            },
            {
              title: "Global Perspective",
              desc: "Sensitivity to both developed and emerging market contexts.",
              icon: <Users className="w-5 h-5" />
            },
            {
              title: "Flexible Learning",
              desc: "Delivery at your own pace with options to suit various professional needs.",
              icon: <Timer className="w-5 h-5" />
            }
          ].map((item, i) => (
            <Card key={i} className="bg-white/5 border-white/10 rounded-2xl p-6 space-y-4 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[hsl(var(--accent))]/10 flex items-center justify-center text-[hsl(var(--accent))]">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-8">
        <Card className="bg-white/5 border-white/10 rounded-3xl overflow-hidden">
          <CardContent className="p-8 md:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">Contact GICS</p>
              <h2 className="text-3xl font-black text-foreground">How can we help?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ask about the September 2026 programme, learner eligibility, payment and enrolment, or tailored training for your organisation.
              </p>
              <a
                href="mailto:gicsinstituteuk@gmail.com"
                className="inline-block text-sm font-bold text-foreground hover:text-[hsl(var(--accent))] transition-colors"
              >
                gicsinstituteuk@gmail.com
              </a>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Button asChild className="bg-[hsl(var(--accent))] text-[hsl(var(--primary-foreground))] font-black">
                <a href="/register">Student registration</a>
              </Button>
              <Button asChild variant="outline" className="bg-white/5 border-white/20 text-foreground font-bold hover:bg-white/10">
                <a href="/corporate-enquiry">Corporate enquiry</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="pt-8 pb-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-start gap-6 text-sm">
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-3">
            <img src="/gics-crest.png" alt="GICS crest" className="w-10 h-10 object-contain" />
            <p className="text-foreground font-bold text-lg">GICS</p>
          </div>
          <div className="space-y-1 text-muted-foreground font-medium text-xs leading-relaxed">
            <p>© 2026 Global Supply Chain & Sustainability Academy Ltd. All rights reserved.</p>
            <p>Registered in England and Wales. Company No. 16986058.</p>
            <p>Trading as Global Institute for Supply Chain & Sustainability (GICS).</p>
          </div>
        </div>
        <div className="flex gap-10 font-black uppercase tracking-widest text-[10px] text-muted-foreground pt-2">
          <a href="/privacy" className="hover:text-[hsl(var(--accent))] transition-colors" data-testid="link-privacy">Privacy</a>
          <a href="/terms-refunds" className="hover:text-[hsl(var(--accent))] transition-colors" data-testid="link-terms">Terms &amp; Refunds</a>
          <a href="mailto:gicsinstituteuk@gmail.com" className="hover:text-[hsl(var(--accent))] transition-colors" data-testid="link-contact">gicsinstituteuk@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}
